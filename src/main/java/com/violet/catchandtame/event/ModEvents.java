package com.violet.catchandtame.event;

import com.violet.catchandtame.goal.CustomFollowOwnerGoal;
import com.violet.catchandtame.goal.CustomOwnerHurtTargetGoal;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.world.entity.Mob;
import net.minecraft.world.entity.ai.goal.MeleeAttackGoal;
import net.minecraft.world.entity.ai.goal.Goal;
import net.minecraftforge.event.entity.EntityJoinLevelEvent;
import net.minecraftforge.event.entity.player.PlayerInteractEvent;
import net.minecraftforge.eventbus.api.SubscribeEvent;

import java.util.UUID;

public class ModEvents {

    @SubscribeEvent
    public static void onEntityJoin(EntityJoinLevelEvent event) {
        if (event.getEntity() instanceof Mob mob && !mob.level().isClientSide) {
            CompoundTag persistentData = mob.getPersistentData();
            if (persistentData.contains("ForceTamedOwner")) {
                UUID ownerId = persistentData.getUUID("ForceTamedOwner");

                // Inject our custom goals (Priority 1 and 2 to override default wandering)
                mob.goalSelector.addGoal(1, new CustomFollowOwnerGoal(mob, ownerId, 1.2D, 10.0F, 2.0F));
                
                // Keep them in place if STAY is selected
                mob.goalSelector.addGoal(0, new Goal() {
                    @Override
                    public boolean canUse() {
                        return "STAY".equals(mob.getPersistentData().getString("CatchAndTameState"));
                    }
                    @Override
                    public void tick() {
                        mob.getNavigation().stop();
                    }
                });
                
                // Add Melee capability so non-hostiles can attack
                if (mob instanceof net.minecraft.world.entity.PathfinderMob pMob) {
                    mob.goalSelector.addGoal(2, new MeleeAttackGoal(pMob, 1.2D, true));
                }
                
                // Inject custom targeting
                mob.targetSelector.addGoal(1, new CustomOwnerHurtTargetGoal(mob, ownerId));
            }
        }
    }

    @SubscribeEvent
    public static void onEntityInteract(PlayerInteractEvent.EntityInteract event) {
        if (!event.getLevel().isClientSide && event.getTarget() instanceof Mob mob) {
            if (event.getHand() != net.minecraft.world.InteractionHand.MAIN_HAND) return;

            CompoundTag data = mob.getPersistentData();
            if (data.contains("ForceTamedOwner")) {
                UUID ownerId = data.getUUID("ForceTamedOwner");
                
                // Only the owner can toggle the state
                if (event.getEntity().getUUID().equals(ownerId)) {
                    // Holding shift or empty hand toggles the state
                    if (event.getEntity().getMainHandItem().isEmpty() || event.getEntity().isShiftKeyDown()) {
                        
                        String currentState = data.getString("CatchAndTameState");
                        String newState = switch (currentState) {
                            case "FOLLOW" -> "WANDER";
                            case "WANDER" -> "STAY";
                            default -> "FOLLOW";
                        };
                        
                        data.putString("CatchAndTameState", newState);
                        event.getEntity().sendSystemMessage(net.minecraft.network.chat.Component.literal("Pet state set to: " + newState).withStyle(net.minecraft.ChatFormatting.GREEN));
                        
                        // Stop movement immediately if set to STAY so they don't wander off
                        if ("STAY".equals(newState)) mob.getNavigation().stop();
                        
                        event.setCanceled(true);
                        event.setCancellationResult(net.minecraft.world.InteractionResult.SUCCESS);
                    }
                } else {
                    event.getEntity().sendSystemMessage(net.minecraft.network.chat.Component.literal("This isn't your pet!"));
                    event.setCanceled(true);
                    event.setCancellationResult(net.minecraft.world.InteractionResult.SUCCESS);
                }
            }
        }
    }

    @SubscribeEvent
    public static void onPlayerChangedDimension(net.minecraftforge.event.entity.player.PlayerEvent.PlayerChangedDimensionEvent event) {
        net.minecraft.world.entity.player.Player player = event.getEntity();
        if (player.level().isClientSide) return;
        
        java.util.UUID ownerId = player.getUUID();
        net.minecraft.server.MinecraftServer server = player.getServer();
        if (server == null) return;
        
        net.minecraft.server.level.ServerLevel oldLevel = server.getLevel(event.getFrom());
        if (oldLevel == null) return;
        
        for (net.minecraft.world.entity.Entity entity : oldLevel.getAllEntities()) {
            if (entity instanceof net.minecraft.world.entity.Mob mob) {
                net.minecraft.nbt.CompoundTag data = mob.getPersistentData();
                if (data.contains("ForceTamedOwner") && ownerId.equals(data.getUUID("ForceTamedOwner"))) {
                    if ("FOLLOW".equals(data.getString("CatchAndTameState"))) {
                        mob.changeDimension((net.minecraft.server.level.ServerLevel) player.level(), new net.minecraftforge.common.util.ITeleporter() {
                            @Override
                            public net.minecraft.world.entity.Entity placeEntity(net.minecraft.world.entity.Entity entity, net.minecraft.server.level.ServerLevel currentWorld, net.minecraft.server.level.ServerLevel destWorld, float yaw, java.util.function.Function<Boolean, net.minecraft.world.entity.Entity> repositionEntity) {
                                entity = repositionEntity.apply(false);
                                entity.teleportTo(player.getX(), player.getY(), player.getZ());
                                return entity;
                            }
                        });
                    }
                }
            }
        }
    }

    @SubscribeEvent
    public static void onPlayerTeleport(net.minecraftforge.event.entity.EntityTeleportEvent event) {
        if (event.getEntity() instanceof net.minecraft.world.entity.player.Player player && !player.level().isClientSide) {
            java.util.UUID ownerId = player.getUUID();
            net.minecraft.server.level.ServerLevel level = (net.minecraft.server.level.ServerLevel) player.level();
            
            double destX = event.getTargetX();
            double destY = event.getTargetY();
            double destZ = event.getTargetZ();
            
            for (net.minecraft.world.entity.Entity entity : level.getAllEntities()) {
                if (entity instanceof net.minecraft.world.entity.Mob mob) {
                    net.minecraft.nbt.CompoundTag data = mob.getPersistentData();
                    if (data.contains("ForceTamedOwner") && ownerId.equals(data.getUUID("ForceTamedOwner"))) {
                        if ("FOLLOW".equals(data.getString("CatchAndTameState"))) {
                            mob.teleportTo(destX, destY, destZ);
                        }
                    }
                }
            }
        }
    }
}
