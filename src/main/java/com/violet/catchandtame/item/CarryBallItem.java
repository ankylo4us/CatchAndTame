package com.violet.catchandtame.item;

import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;

public class CarryBallItem extends BaseCaptureBallItem {
    public CarryBallItem(Properties properties) {
        super(properties);
    }
    
    @Override
    protected void modifyCapturedData(CompoundTag data, Player player, LivingEntity entity) {
        // Carry Ball does not modify the entity's data
    }
}
