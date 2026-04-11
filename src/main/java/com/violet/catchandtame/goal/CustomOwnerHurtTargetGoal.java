package com.violet.catchandtame.goal;

import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.Mob;
import net.minecraft.world.entity.ai.goal.target.TargetGoal;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.entity.ai.targeting.TargetingConditions;

import java.util.UUID;

public class CustomOwnerHurtTargetGoal extends TargetGoal {
    private final Mob tamable;
    private final UUID ownerUUID;
    private LivingEntity ownerLastHurt;
    private int timestamp;

    public CustomOwnerHurtTargetGoal(Mob tamable, UUID ownerUUID) {
        super(tamable, false);
        this.tamable = tamable;
        this.ownerUUID = ownerUUID;
    }

    @Override
    public boolean canUse() {
        String state = tamable.getPersistentData().getString("CatchAndTameState");
        // Only attack if we are actively following or wandering (not STAY)
        if ("STAY".equals(state)) {
            return false;
        }

        Player player = tamable.level().getPlayerByUUID(ownerUUID);
        if (player == null) {
            return false;
        } else {
            this.ownerLastHurt = player.getLastHurtMob();
            int i = player.getLastHurtMobTimestamp();
            return i != this.timestamp && this.canAttack(this.ownerLastHurt, TargetingConditions.DEFAULT) && this.ownerLastHurt != tamable;
        }
    }

    @Override
    public void start() {
        this.mob.setTarget(this.ownerLastHurt);
        Player player = tamable.level().getPlayerByUUID(ownerUUID);
        if (player != null) {
            this.timestamp = player.getLastHurtMobTimestamp();
        }
        super.start();
    }
}
