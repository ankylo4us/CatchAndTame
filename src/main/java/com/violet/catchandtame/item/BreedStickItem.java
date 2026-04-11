package com.violet.catchandtame.item;

import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.chat.Component;
import net.minecraft.world.InteractionHand;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.TooltipFlag;
import net.minecraft.world.level.Level;
import org.jetbrains.annotations.Nullable;
import java.util.List;
import com.violet.catchandtame.entity.EntityInit;
import com.violet.catchandtame.entity.MutantEntity;

public class BreedStickItem extends Item {
    
    public BreedStickItem(Properties properties) {
        super(properties.stacksTo(1));
    }

    @Override
    public InteractionResult interactLivingEntity(ItemStack stack, Player player, LivingEntity interactionTarget, InteractionHand usedHand) {
        if (interactionTarget instanceof Player) return InteractionResult.PASS;
        if (player.level().isClientSide) return InteractionResult.SUCCESS;

        CompoundTag stackTag = stack.getOrCreateTag();
        
        if (!stackTag.contains("ParentA_Captured")) {
            // Pick up parent A
            CompoundTag dataA = new CompoundTag();
            if (interactionTarget.save(dataA)) {
                stackTag.put("ParentA_Captured", dataA);
                interactionTarget.discard();
                player.displayClientMessage(Component.literal("Stored Gene A! Ready for Gene B."), true);
                return InteractionResult.SUCCESS;
            }
        } else {
            // Pick up parent B and SPAWN MUTANT
            CompoundTag dataB = new CompoundTag();
            if (interactionTarget.save(dataB)) {
                interactionTarget.discard();
                
                CompoundTag dataA = stackTag.getCompound("ParentA_Captured");
                
                MutantEntity mutant = EntityInit.MUTANT.get().create(player.level());
                if (mutant != null) {
                    mutant.setPos(interactionTarget.getX(), interactionTarget.getY(), interactionTarget.getZ());
                    mutant.setParents(dataA, dataB);
                    player.level().addFreshEntity(mutant);
                    
                    // Reset stick
                    stack.removeTagKey("ParentA_Captured");
                    player.displayClientMessage(Component.literal("CRITICAL MUTATION ACHIEVED!"), true);
                }
                return InteractionResult.SUCCESS;
            }
        }
        
        return InteractionResult.PASS;
    }

    @Override
    public void appendHoverText(ItemStack stack, @Nullable Level level, List<Component> tooltip, TooltipFlag flag) {
        if (stack.hasTag() && stack.getTag().contains("ParentA_Captured")) {
            tooltip.add(Component.literal("Contains 1 Gene Base"));
        } else {
            tooltip.add(Component.literal("Empty Genetic Syringe"));
        }
    }
}
