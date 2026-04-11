package com.violet.catchandtame;

import com.violet.catchandtame.item.ItemInit;
import com.violet.catchandtame.item.TabInit;
import com.violet.catchandtame.event.ModEvents;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;

@Mod("catchandtame")
public class CatchAndTame {
    public CatchAndTame() {
        IEventBus bus = FMLJavaModLoadingContext.get().getModEventBus();
        ItemInit.ITEMS.register(bus);
        TabInit.TABS.register(bus);
        
        MinecraftForge.EVENT_BUS.register(ModEvents.class);
    }
}
