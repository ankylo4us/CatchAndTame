package com.violet.catchandtame.item;

import net.minecraft.world.item.Item;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;

public class ItemInit {
    public static final DeferredRegister<Item> ITEMS = DeferredRegister.create(ForgeRegistries.ITEMS, "catchandtame");

    public static final RegistryObject<Item> CARRY_BALL = ITEMS.register("carry_ball", 
            () -> new CarryBallItem(new Item.Properties()));

    public static final RegistryObject<Item> TAME_BALL = ITEMS.register("tame_ball", 
            () -> new TameBallItem(new Item.Properties()));
}
