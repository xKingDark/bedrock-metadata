// Type definitions for Minecraft Bedrock Edition Script APIs
// Project: https://github.com/xKingDark/bedrock-metadata
// Definitions by: xKingDark <https://github.com/xKingDark>
/**
 * @beta
 * @packageDocumentation
 * Manifest Details
 * ```json
 * { "module_name": "@minecraft/debug-utilities", "version": "1.0.0-beta" }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export enum DiagnosticsChartDisplayType {
    LineChart        = 0,
    StackedLineChart = 1,
    StackedBarChart  = 2,
}

export enum DiagnosticsErrorReason {
    AlreadyRegistered = "AlreadyRegistered",
    InvalidData       = "InvalidData",
    InvalidName       = "InvalidName",
}

export enum DiagnosticsTableDisplayType {
    Table            = 0,
    MultiColumnTable = 1,
}

// @ts-ignore
export class DebugArrow extends DebugLine {
    headLength: number;
    headRadius: number;
    headSegments: number;
    constructor(
        location: minecraftserver.DimensionLocation | minecraftserver.Vector3,
        endLocation: minecraftserver.Vector3,
    );
}

// @ts-ignore
export class DebugBox extends DebugShape {
    bound: minecraftserver.Vector3;
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3);
}

// @ts-ignore
export class DebugCircle extends DebugShape {
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3);
}

// @ts-ignore
export class DebugCone extends DebugShape {
    height: number;
    numSegments: number;
    radii: minecraftserver.Vector2;
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3);
}

// @ts-ignore
export class DebugCylinder extends DebugShape {
    height: number;
    numSegments: number;
    radii: minecraftserver.Vector2;
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3);
}

export class DebugDrawer {
    private constructor();
    addShape(shape: DebugShape, dimension?: minecraftserver.Dimension): void;
    removeAll(): void;
    removeShape(shape: DebugShape): void;
}

// @ts-ignore
export class DebugEllipsoid extends DebugShape {
    radii: minecraftserver.Vector3;
    segmentsPerAxis: number;
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3);
}

// @ts-ignore
export class DebugLine extends DebugShape {
    endLocation: minecraftserver.Vector3;
    constructor(
        location: minecraftserver.DimensionLocation | minecraftserver.Vector3,
        endLocation: minecraftserver.Vector3,
    );
}

// @ts-ignore
export class DebugPyramid extends DebugShape {
    depth?: number;
    height: number;
    width: number;
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3);
}

export class DebugShape {
    private constructor();
    attachedTo?: minecraftserver.Entity;
    color: minecraftserver.RGBA;
    readonly dimension: minecraftserver.Dimension;
    readonly hasDuration: boolean;
    readonly location: minecraftserver.Vector3;
    maximumRenderDistance?: number;
    rotation: minecraftserver.Vector3;
    scale: number;
    timeLeft?: number;
    readonly totalTimeLeft?: number;
    visibleTo: minecraftserver.Player[];
    remove(): void;
    setLocation(location: minecraftserver.DimensionLocation | minecraftserver.Vector3): void;
}

// @ts-ignore
export class DebugSphere extends DebugShape {
    constructor(location: minecraftserver.DimensionLocation | minecraftserver.Vector3);
}

// @ts-ignore
export class DebugText extends DebugShape {
    backfaceVisible: boolean;
    backgroundColorOverride?: minecraftserver.RGBA;
    depthTest: boolean;
    lineGapHeight: number;
    readonly text: minecraftserver.RawMessage | string;
    textBackfaceVisible: boolean;
    useRotation: boolean;
    constructor(
        location: minecraftserver.DimensionLocation | minecraftserver.Vector3,
        text: minecraftserver.RawMessage | string,
    );
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftserver.RawMessageError}
     */
    setText(text: minecraftserver.RawMessage | string): void;
}

export class DiagnosticsManager {
    private constructor();
    readonly tabs: DiagnosticsTab[];
    addTab(tab: DiagnosticsTab): void;
    containsTab(tab: DiagnosticsTab): boolean;
    containsView(view: DiagnosticsView): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link DiagnosticsError}
     */
    createTab(tabName: string): DiagnosticsTab;
    /**
     * @throws This function can throw errors.
     *
     * {@link DiagnosticsError}
     */
    createView(statName: string, options?: DiagnosticsChartViewOptions | DiagnosticsTableViewOptions): DiagnosticsView;
    removeTab(tab: DiagnosticsTab): void;
}

export class DiagnosticsTab {
    private constructor();
    readonly tabName: string;
    readonly views: DiagnosticsView[];
    addView(view: DiagnosticsView): void;
    containsView(view: DiagnosticsView): boolean;
    removeView(view: DiagnosticsView): void;
}

export class DiagnosticsView {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link DiagnosticsError}
     */
    pushStats(stats: DiagnosticsStat[]): void;
}

export interface DiagnosticsChartViewOptions {
    chartType: DiagnosticsChartDisplayType;
    targetValue?: number;
    tickRange?: number;
    yAxisLabel?: string;
}

export interface DiagnosticsStat {
    name: string;
    values?: (number | string)[];
}

export interface DiagnosticsTableViewOptions {
    keyLabel?: string;
    tableType: DiagnosticsTableDisplayType;
    valueLabels?: string[];
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

// @ts-ignore
export class DiagnosticsError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: DiagnosticsErrorReason;
}

export function collectPluginStats(): PluginStats;

export function collectRuntimeStats(): RuntimeStats;

/**
 * @throws This function can throw errors.
 */
export function disableWatchdogTimingWarnings(disable: boolean): void;

export const debugDrawer: DebugDrawer;
export const diagnosticsManager: DiagnosticsManager;
