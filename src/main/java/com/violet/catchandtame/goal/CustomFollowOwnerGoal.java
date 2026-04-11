package com.violet.catchandtame.goal;

import net.minecraft.world.entity.Mob;
import net.minecraft.world.entity.ai.goal.Goal;
import net.minecraft.world.entity.player.Player;

import java.util.EnumSet;
import java.util.UUID;

public class CustomFollowOwnerGoal extends Goal {
    private final Mob tamable;
    private final UUID ownerUUID;
    private Player owner;
    private final double speedModifier;
    private final float stopDistance;
    private final float startDistance;

    public CustomFollowOwnerGoal(Mob tamable, UUID ownerUUID, double speed, float startDist, float stopDist) {
        this.tamable = tamable;
        this.ownerUUID = ownerUUID;
        this.speedModifier = speed;
        this.startDistance = startDist;
        this.stopDistance = stopDist;
        this.setFlags(EnumSet.of(Goal.Flag.MOVE, Goal.Flag.LOOK));
    }

    @Override
    public boolean canUse() {
        String state = tamable.getPersistentData().getString("CatchAndTameState");
        if (!"FOLLOW".equals(state)) {
            return false;
        }

        Player player = tamable.level().getPlayerByUUID(ownerUUID);
        if (player == null || player.isSpectator()) {
            return false;
        }
        if (tamable.distanceToSqr(player) < (startDistance * startDistance)) {
            return false;
        }
        this.owner = player;
        return true;
    }

    @Override
    public boolean canContinueToUse() {
        if (this.tamable.getNavigation().isDone()) {
            return false;
        }
        String state = tamable.getPersistentData().getString("CatchAndTameState");
        if (!"FOLLOW".equals(state)) {
            return false;
        }
        return tamable.distanceToSqr(this.owner) > (stopDistance * stopDistance);
    }

    @Override
    public void stop() {
        this.owner = null;
        this.tamable.getNavigation().stop();
    }

    @Override
    public void tick() {
        this.tamable.getLookControl().setLookAt(this.owner, 10.0F, (float)this.tamable.getMaxHeadXRot());
        
        // If distance is greater than 144 blocks squared (12 blocks), attempt to teleport
        if (this.tamable.distanceToSqr(this.owner) >= 144.0D) {
            this.teleportToOwner();
        } else {
            this.tamable.getNavigation().moveTo(this.owner, this.speedModifier);
        }
    }

    private void teleportToOwner() {
        net.minecraft.core.BlockPos blockpos = this.owner.blockPosition();
        for (int i = 0; i < 10; ++i) {
            int j = this.randomIntInclusive(-3, 3);
            int k = this.randomIntInclusive(-1, 1);
            int l = this.randomIntInclusive(-3, 3);
            
            net.minecraft.core.BlockPos targetPos = new net.minecraft.core.BlockPos(blockpos.getX() + j, blockpos.getY() + k, blockpos.getZ() + l);
            
            // Check if the block below isn't air, and the spaces we take up don't have collision
            if (!this.tamable.level().getBlockState(targetPos.below()).isAir()
                && this.tamable.level().getBlockState(targetPos).getCollisionShape(this.tamable.level(), targetPos).isEmpty()
                && this.tamable.level().getBlockState(targetPos.above()).getCollisionShape(this.tamable.level(), targetPos.above()).isEmpty()) {
                
                this.tamable.moveTo((double)targetPos.getX() + 0.5D, (double)targetPos.getY(), (double)targetPos.getZ() + 0.5D, this.tamable.getYRot(), this.tamable.getXRot());
                this.tamable.getNavigation().stop();
                return;
            }
        }
    }
    
    private int randomIntInclusive(int min, int max) {
        return this.tamable.getRandom().nextInt(max - min + 1) + min;
    }
}
