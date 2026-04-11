package com.violet.catchandtame.entity;

import com.violet.catchandtame.CatchAndTame;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.MobCategory;
import net.minecraftforge.registries.DeferredRegister;
import net.minecraftforge.registries.ForgeRegistries;
import net.minecraftforge.registries.RegistryObject;

public class EntityInit {
    public static final DeferredRegister<EntityType<?>> ENTITIES = DeferredRegister.create(ForgeRegistries.ENTITY_TYPES, CatchAndTame.MODID);

    public static final RegistryObject<EntityType<MutantEntity>> MUTANT = ENTITIES.register("mutant",
            () -> EntityType.Builder.of(MutantEntity::new, MobCategory.CREATURE)
                    .sized(1.5f, 1.5f)
                    .build("mutant"));
}
