package com.violet.catchandtame.entity;

import net.minecraft.nbt.CompoundTag;
import net.minecraft.network.syncher.EntityDataAccessor;
import net.minecraft.network.syncher.EntityDataSerializers;
import net.minecraft.network.syncher.SynchedEntityData;
import net.minecraft.world.entity.EntityType;
import net.minecraft.world.entity.Mob;
import net.minecraft.world.entity.PathfinderMob;
import net.minecraft.world.level.Level;
import net.minecraft.world.entity.ai.attributes.AttributeSupplier;
import net.minecraft.world.entity.ai.attributes.Attributes;
import org.jetbrains.annotations.Nullable;

public class MutantEntity extends PathfinderMob {

    private static final EntityDataAccessor<CompoundTag> PARENT_A_DATA = SynchedEntityData.defineId(MutantEntity.class, EntityDataSerializers.COMPOUND_TAG);
    private static final EntityDataAccessor<CompoundTag> PARENT_B_DATA = SynchedEntityData.defineId(MutantEntity.class, EntityDataSerializers.COMPOUND_TAG);

    private Mob cachedParentA;
    private Mob cachedParentB;

    public MutantEntity(EntityType<? extends PathfinderMob> type, Level level) {
        super(type, level);
    }

    public static AttributeSupplier.Builder createAttributes() {
        return Mob.createMobAttributes()
                .add(Attributes.MAX_HEALTH, 30.0D)
                .add(Attributes.MOVEMENT_SPEED, 0.25D)
                .add(Attributes.ATTACK_DAMAGE, 5.0D);
    }

    @Override
    protected void defineSynchedData() {
        super.defineSynchedData();
        this.entityData.define(PARENT_A_DATA, new CompoundTag());
        this.entityData.define(PARENT_B_DATA, new CompoundTag());
    }

    public void setParents(CompoundTag a, CompoundTag b) {
        this.entityData.set(PARENT_A_DATA, a);
        this.entityData.set(PARENT_B_DATA, b);
        updateCachedParents();
    }

    public CompoundTag getParentAData() { return this.entityData.get(PARENT_A_DATA); }
    public CompoundTag getParentBData() { return this.entityData.get(PARENT_B_DATA); }

    @Override
    public void onSyncedDataUpdated(EntityDataAccessor<?> key) {
        super.onSyncedDataUpdated(key);
        if (PARENT_A_DATA.equals(key) || PARENT_B_DATA.equals(key)) {
            updateCachedParents();
        }
    }

    private void updateCachedParents() {
        CompoundTag dataA = getParentAData();
        CompoundTag dataB = getParentBData();
        
        if (!dataA.isEmpty()) {
            net.minecraft.world.entity.Entity a = EntityType.loadEntityRecursive(dataA, this.level(), (e) -> e);
            if (a instanceof Mob) cachedParentA = (Mob) a;
        }
        if (!dataB.isEmpty()) {
            net.minecraft.world.entity.Entity b = EntityType.loadEntityRecursive(dataB, this.level(), (e) -> e);
            if (b instanceof Mob) cachedParentB = (Mob) b;
        }
    }

    @Nullable
    public Mob getParentA() { return cachedParentA; }
    @Nullable
    public Mob getParentB() { return cachedParentB; }

    @Override
    public void tick() {
        super.tick();
        if (cachedParentA != null) {
            syncTo(cachedParentA);
            cachedParentA.tickCount = this.tickCount;
        }
        if (cachedParentB != null) {
            syncTo(cachedParentB);
            cachedParentB.tickCount = this.tickCount;
        }
    }

    private void syncTo(Mob parent) {
        parent.setPos(this.getX(), this.getY(), this.getZ());
        parent.setYRot(this.getYRot());
        parent.setXRot(this.getXRot());
        parent.yHeadRot = this.yHeadRot;
        parent.yBodyRot = this.yBodyRot;
        parent.yHeadRotO = this.yHeadRotO;
        parent.yBodyRotO = this.yBodyRotO;
        parent.xo = this.xo;
        parent.yo = this.yo;
        parent.zo = this.zo;
        parent.xOld = this.xOld;
        parent.yOld = this.yOld;
        parent.zOld = this.zOld;
        
        // Sync animations manually via limb tracking
        parent.walkAnimation.setSpeed(this.walkAnimation.speed());
        // For Minecraft 1.20 WalkAnimation state synchronization:
        try {
            parent.walkAnimation.update(this.walkAnimation.position(), this.walkAnimation.speed());
        } catch(Exception e) {}
    }

    @Override
    public void addAdditionalSaveData(CompoundTag tag) {
        super.addAdditionalSaveData(tag);
        tag.put("ParentA", getParentAData());
        tag.put("ParentB", getParentBData());
    }

    @Override
    public void readAdditionalSaveData(CompoundTag tag) {
        super.readAdditionalSaveData(tag);
        if (tag.contains("ParentA")) this.entityData.set(PARENT_A_DATA, tag.getCompound("ParentA"));
        if (tag.contains("ParentB")) this.entityData.set(PARENT_B_DATA, tag.getCompound("ParentB"));
        updateCachedParents();
    }
}
