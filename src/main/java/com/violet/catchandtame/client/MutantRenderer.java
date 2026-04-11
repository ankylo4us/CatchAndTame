package com.violet.catchandtame.client;

import com.mojang.blaze3d.vertex.PoseStack;
import com.violet.catchandtame.entity.MutantEntity;
import net.minecraft.client.Minecraft;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.entity.EntityRenderer;
import net.minecraft.client.renderer.entity.EntityRendererProvider;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.Mob;
import java.lang.reflect.Field;
import net.minecraft.client.model.geom.ModelPart;
import net.minecraft.client.renderer.entity.LivingEntityRenderer;
import java.util.Random;

public class MutantRenderer extends EntityRenderer<MutantEntity> {

    public MutantRenderer(EntityRendererProvider.Context context) {
        super(context);
    }

    @Override
    public void render(MutantEntity entity, float entityYaw, float partialTicks, PoseStack poseStack, MultiBufferSource buffer, int packedLight) {
        super.render(entity, entityYaw, partialTicks, poseStack, buffer, packedLight);

        Mob parentA = entity.getParentA();
        Mob parentB = entity.getParentB();

        if (parentA != null) {
            renderParent(parentA, entityYaw, partialTicks, poseStack, buffer, packedLight, 1337);
        }
        if (parentB != null) {
            renderParent(parentB, entityYaw, partialTicks, poseStack, buffer, packedLight, 7331);
        }
    }

    private void renderParent(Mob parent, float entityYaw, float partialTicks, PoseStack poseStack, MultiBufferSource buffer, int packedLight, long seed) {
        EntityRenderer<? super Mob> renderer = Minecraft.getInstance().getEntityRenderDispatcher().getRenderer(parent);
        
        if (renderer instanceof LivingEntityRenderer) {
            LivingEntityRenderer livingRenderer = (LivingEntityRenderer) renderer;
            Object model = livingRenderer.getModel();
            
            // Mathematically hide limbs using structural reflection
            Random rand = new Random(parent.getType().toString().hashCode() + seed);
            
            Class<?> clazz = model.getClass();
            while (clazz != null && clazz != Object.class) {
                for (Field field : clazz.getDeclaredFields()) {
                    try {
                        field.setAccessible(true);
                        Object val = field.get(model);
                        if (val instanceof ModelPart) {
                            ModelPart part = (ModelPart) val;
                            if (rand.nextBoolean()) {
                                part.visible = false;
                            }
                        }
                    } catch (Exception e) {}
                }
                clazz = clazz.getSuperclass();
            }
        }

        try {
            renderer.render(parent, entityYaw, partialTicks, poseStack, buffer, packedLight);
        } catch (Exception e) {}
        
        // Restore visibility to prevent ruining normal entities
        if (renderer instanceof LivingEntityRenderer) {
            LivingEntityRenderer livingRenderer = (LivingEntityRenderer) renderer;
            Object model = livingRenderer.getModel();
            Class<?> clazz = model.getClass();
            while (clazz != null && clazz != Object.class) {
                for (Field field : clazz.getDeclaredFields()) {
                    try {
                        field.setAccessible(true);
                        Object val = field.get(model);
                        if (val instanceof ModelPart) {
                            ((ModelPart) val).visible = true;
                        }
                    } catch (Exception e) {}
                }
                clazz = clazz.getSuperclass();
            }
        }
    }

    @Override
    public ResourceLocation getTextureLocation(MutantEntity entity) {
        return new ResourceLocation("minecraft", "textures/entity/pig/pig.png");
    }
}
