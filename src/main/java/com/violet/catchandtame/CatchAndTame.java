package com.violet.catchandtame;

import com.violet.catchandtame.item.ItemInit;
import com.violet.catchandtame.item.TabInit;
import com.violet.catchandtame.event.ModEvents;
import net.minecraftforge.common.MinecraftForge;
import net.minecraftforge.eventbus.api.IEventBus;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.javafmlmod.FMLJavaModLoadingContext;

import com.violet.catchandtame.entity.EntityInit;
import net.minecraftforge.eventbus.api.SubscribeEvent;

@Mod("catchandtame")
public class CatchAndTame {
    public static final String MODID = "catchandtame";

    public CatchAndTame() {
        IEventBus bus = FMLJavaModLoadingContext.get().getModEventBus();
        ItemInit.ITEMS.register(bus);
        TabInit.TABS.register(bus);
        EntityInit.ENTITIES.register(bus);
        
        MinecraftForge.EVENT_BUS.register(ModEvents.class);
    }

    @Mod.EventBusSubscriber(modid = MODID, bus = Mod.EventBusSubscriber.Bus.MOD, value = net.minecraftforge.api.distmarker.Dist.CLIENT)
    public static class ClientModEvents {
        @SubscribeEvent
        public static void onClientSetup(net.minecraftforge.client.event.EntityRenderersEvent.RegisterRenderers event) {
            event.registerEntityRenderer(EntityInit.MUTANT.get(), com.violet.catchandtame.client.MutantRenderer::new);
        }
    }
}
