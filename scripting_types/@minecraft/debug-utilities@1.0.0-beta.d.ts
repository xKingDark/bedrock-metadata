// Type definitions for Minecraft Bedrock Edition Script APIs
// Project: https://github.com/xKingDark/bedrock-metadata
// Definitions by: xKingDark <https://github.com/xKingDark>
/**
 * @beta
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/debug-utilities",
 *     "version": "1.0.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
// @ts-ignore
export class DebugArrow extends DebugLine {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    headLength: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    headRadius: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    headSegments: number;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(
        location: minecraftserver.DimensionLocation | minecraftserver.Vector3,
        endLocation: minecraftserver.Vector3,
    );
}

// @ts-ignore
export class DebugBox extends DebugShape {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    bound: minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3);
}

// @ts-ignore
export class DebugCircle extends DebugShape {
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3);
}

export class DebugDrawer {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    addShape(shape: DebugShape, dimension?: minecraftserver.Dimension): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    removeAll(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    removeShape(shape: DebugShape): void;
}

// @ts-ignore
export class DebugLine extends DebugShape {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    endLocation: minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(
        location: minecraftserver.DimensionLocation | minecraftserver.Vector3,
        endLocation: minecraftserver.Vector3,
    );
}

export class DebugShape {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    attachedTo?: minecraftserver.Entity;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    color: minecraftserver.RGB;
    readonly dimension: minecraftserver.Dimension;
    readonly hasDuration: boolean;
    readonly location: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    rotation: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    scale: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    timeLeft?: number;
    readonly totalTimeLeft?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    visibleTo: minecraftserver.Player[];
    /**
     * @remarks This function can't be called in read-only mode.
     */
    remove(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setLocation(location: minecraftserver.DimensionLocation | minecraftserver.Vector3): void;
}

// @ts-ignore
export class DebugSphere extends DebugShape {
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3);
}

// @ts-ignore
export class DebugText extends DebugShape {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    text: string;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3, text: string);
}

export interface HandleCounts {
    handleCounts: Record<string, number>;
    name: string;
    packId: string;
    scriptModuleUUID: string;
}

export interface PluginStats {
    plugins: HandleCounts[];
}

export interface RuntimeStats {
    arrayCount: number;
    atomCount: number;
    atomSize: number;
    fastArrayCount: number;
    fastArrayElementCount: number;
    functionCodeSize: number;
    functionCount: number;
    functionLineCount: number;
    functionSize: number;
    memoryAllocatedCount: number;
    memoryAllocatedLimit: number;
    memoryAllocatedSize: number;
    memoryUsedCount: number;
    memoryUsedSize: number;
    objectCount: number;
    objectSize: number;
    propertyCount: number;
    propertySize: number;
    stringCount: number;
    stringSize: number;
}

/**
 * @remarks This function can't be called in read-only mode.
 */
export function collectPluginStats(): PluginStats;

/**
 * @remarks This function can't be called in read-only mode.
 */
export function collectRuntimeStats(): RuntimeStats;

/**
 * @remarks This function can't be called in read-only mode.
 *
 * @throws This function can throw errors.
 */
export function disableWatchdogTimingWarnings(disable: boolean): void;

export const debugDrawer: DebugDrawer;
