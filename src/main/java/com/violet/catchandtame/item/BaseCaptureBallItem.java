package com.violet.catchandtame.item;

import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.item.context.UseOnContext;
import net.minecraft.world.level.Level;
import net.minecraft.core.BlockPos;

import org.jetbrains.annotations.Nullable;

import java.util.List;

public abstract class BaseCaptureBallItem extends Item {

    public BaseCaptureBallItem(Properties properties) {
        super(properties.stacksTo(1));
    }

    @Override
    public InteractionResult interactLivingEntity(ItemStack stack, Player player, LivingEntity interactionTarget, InteractionHand usedHand) {
        if (hasCaughtEntity(stack)) return InteractionResult.PASS;
        if (interactionTarget instanceof Player) return InteractionResult.PASS;

        // Check ownership
        net.minecraft.nbt.CompoundTag persistentData = interactionTarget.getPersistentData();
        if (persistentData.contains("ForceTamedOwner")) {
            java.util.UUID ownerId = persistentData.getUUID("ForceTamedOwner");
            if (!player.getUUID().equals(ownerId)) {
                if (!player.level().isClientSide) {
                    player.displayClientMessage(net.minecraft.network.chat.Component.literal("This pet belongs to someone else!").withStyle(net.minecraft.ChatFormatting.RED), true);
                }
                return InteractionResult.FAIL;
            }
        } else if (interactionTarget instanceof net.minecraft.world.entity.TamableAnimal tamable) {
            if (tamable.isTame() && !tamable.isOwnedBy(player)) {
                if (!player.level().isClientSide) {
                    player.displayClientMessage(net.minecraft.network.chat.Component.literal("This animal belongs to someone else!").withStyle(net.minecraft.ChatFormatting.RED), true);
                }
                return InteractionResult.FAIL;
            }
        } else if (interactionTarget instanceof net.minecraft.world.entity.animal.horse.AbstractHorse horse) {
            if (horse.isTamed() && horse.getOwnerUUID() != null && !player.getUUID().equals(horse.getOwnerUUID())) {
                if (!player.level().isClientSide) {
                    player.displayClientMessage(net.minecraft.network.chat.Component.literal("This mount belongs to someone else!").withStyle(net.minecraft.ChatFormatting.RED), true);
                }
                return InteractionResult.FAIL;
            }
        }

        CompoundTag entityData = new CompoundTag();
        if (interactionTarget.save(entityData)) { // Use 'save' instead of 'saveAsPassenger' for full detail and reliability
            
            modifyCapturedData(entityData, player, interactionTarget);

            CompoundTag itemTag = stack.getOrCreateTag();
            itemTag.put("CapturedEntity", entityData);
            
            // Explicitly sync the player's updated item stack
            player.setItemInHand(usedHand, stack);

            // Removing the entity should reliably happen on both client and server!
            interactionTarget.discard();
            
            return InteractionResult.SUCCESS;
        }
        
        return InteractionResult.PASS;
    }

    @Override
    public InteractionResult useOn(UseOnContext context) {
        Level level = context.getLevel();
        if (level.isClientSide) return InteractionResult.SUCCESS;

        ItemStack stack = context.getItemInHand();
        if (hasCaughtEntity(stack)) {
            CompoundTag itemTag = stack.getTag();
            CompoundTag entityData = itemTag.getCompound("CapturedEntity");

            BlockPos pos = context.getClickedPos().relative(context.getClickedFace());

            Entity entity = EntityType.loadEntityRecursive(entityData, level, (e) -> {
                e.moveTo(pos.getX() + 0.5, pos.getY(), pos.getZ() + 0.5, e.getYRot(), e.getXRot());
                return e;
            });

            if (entity != null) {
                level.addFreshEntity(entity);
                stack.removeTagKey("CapturedEntity");
                return InteractionResult.SUCCESS;
            }
        }
        return InteractionResult.PASS;
    }

    public boolean hasCaughtEntity(ItemStack stack) {
        return stack.hasTag() && stack.getTag().contains("CapturedEntity");
    }

    protected abstract void modifyCapturedData(CompoundTag data, Player player, LivingEntity entity);

    @Override
    public void appendHoverText(ItemStack stack, @Nullable Level level, List<Component> tooltip, TooltipFlag flag) {
        if (hasCaughtEntity(stack)) {
            CompoundTag entityData = stack.getTag().getCompound("CapturedEntity");
            if (entityData.contains("id")) {
                tooltip.add(Component.literal("Contains: " + entityData.getString("id")));
            }
        } else {
            tooltip.add(Component.literal("Empty"));
        }
    }
}
