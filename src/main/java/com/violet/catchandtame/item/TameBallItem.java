package com.violet.catchandtame.item;

import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.player.Player;

public class TameBallItem extends BaseCaptureBallItem {
    public TameBallItem(Properties properties) {
        super(properties);
    }

    @Override
    protected void modifyCapturedData(CompoundTag data, Player player, LivingEntity entity) {
        // Add our custom NBT tags to force taming
        CompoundTag persistentData = data.getCompound("ForgeData");
        
        // Mark as ForceTamed and store Owner UUID
        persistentData.putUUID("ForceTamedOwner", player.getUUID());
        
        // Default state is FOLLOW
        persistentData.putString("CatchAndTameState", "FOLLOW");
        
        data.put("ForgeData", persistentData);

        // Add a visually visible Name Tag when spawned!
        String nameJson = "{\"text\":\"" + player.getScoreboardName() + "'s Pet\",\"color\":\"green\"}";
        data.putString("CustomName", nameJson);
        data.putBoolean("CustomNameVisible", true);
    }
}
