// Type definitions for Minecraft Bedrock Edition Script APIs
// Project: https://github.com/xKingDark/bedrock-metadata
// Definitions by: xKingDark <https://github.com/xKingDark>
/**
 * @beta
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-editor-bindings",
 *     "version": "0.1.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export enum AudioSettingsProperty {
    AreSoundsMuted = "AreSoundsMuted",
    IsMusicMuted   = "IsMusicMuted",
}

export enum Axis {
    None = 0,
    X    = 1,
    Y    = 2,
    Z    = 4,
}

export enum BlockMaskListType {
    Disabled = "Disabled",
    Mask     = "Mask",
    Replace  = "Replace",
}

export enum BlockPaletteItemType {
    Simple      = 0,
    Probability = 1,
}

export enum BrushDirectionalPlacementMode {
    IgnoreCamera    = 0,
    NormalCamera    = 1,
    OppositeCamera  = 2,
    CameraLeft      = 3,
    CameraRight     = 4,
    CameraFromAbove = 5,
    CameraFromBelow = 6,
    FrontFacePosX   = 7,
    FrontFaceNegX   = 8,
    FrontFacePosZ   = 9,
    FrontFaceNegZ   = 10,
    FrontFacePosY   = 11,
    FrontFaceNegY   = 12,
    Random2Axes     = 13,
    Random3Axes     = 14,
}

export enum BrushElevationMode {
    Raise = 0,
    Lower = 1,
}

export enum ContiguousSelectionType {
    SameBlock          = 0,
    SameBlockAndStates = 1,
    SolidBlocks        = 2,
    AllBlocks          = 3,
    Custom             = 4,
}

export enum CursorControlMode {
    Keyboard         = 0,
    Mouse            = 1,
    KeyboardAndMouse = 2,
    Fixed            = 3,
}

export enum CursorTargetMode {
    Block = 0,
    Face  = 1,
}

export enum DaylightCycle {
    Normal    = 0,
    AlwaysDay = 1,
    LockTime  = 2,
}

export enum EditorMode {
    Crosshair = "Crosshair",
    Tool      = "Tool",
}

export enum EntityOperationType {
    Create = 0,
    Delete = 1,
}

export enum ExportResult {
    ValidWorldExport            = 0,
    LevelFetchFailed            = 1,
    FileArchiverFetchFailed     = 2,
    ProjectConverterFetchFailed = 3,
    PlayerNotFound              = 4,
    WorldExportFailed           = 5,
    WorldExportBusy             = 6,
    EditorSystemFailure         = 7,
}

export enum FlattenMode {
    Both = 0,
    Down = 1,
    Up   = 2,
}

export enum GamePublishSetting {
    NoMultiPlay      = 0,
    InviteOnly       = 1,
    FriendsOnly      = 2,
    FriendsOfFriends = 3,
    Public           = 4,
}

export enum GraphicsSettingsProperty {
    DisableBlockEntityRendering = "DisableBlockEntityRendering",
    DisableEntityRendering      = "DisableEntityRendering",
    DisableParticleRendering    = "DisableParticleRendering",
    DisableTerrainRendering     = "DisableTerrainRendering",
    DisableWeatherRendering     = "DisableWeatherRendering",
    GraphicsMode                = "GraphicsMode",
    NightVision                 = "NightVision",
    ShowChunkBoundaries         = "ShowChunkBoundaries",
    ShowCompass                 = "ShowCompass",
    ShowInvisibleBlocks         = "ShowInvisibleBlocks",
    ShowToastNotifications      = "ShowToastNotifications",
}

export enum InputModifier {
    Unused  = 0,
    None    = 1,
    Alt     = 2,
    Control = 4,
    Shift   = 8,
    Any     = 15,
}

export enum LogChannel {
    Message = 1,
    Toast   = 2,
    All     = 3,
}

export enum MinimapMarkerType {
    Multiplayer = 0,
}

export enum MinimapViewType {
    BlockView = 0,
}

export enum MouseActionCategory {
    Button = 1,
    Wheel  = 2,
    Drag   = 3,
}

export enum PaintCompletionState {
    Success  = 0,
    Canceled = 1,
    Failed   = 2,
}

export enum PaintMode {
    BlockPaint     = 0,
    FreehandSelect = 1,
    Smooth         = 2,
    Roughen        = 3,
    Flatten        = 4,
    Elevation      = 5,
}

export enum Plane {
    None = 0,
    XY   = 1,
    XZ   = 2,
    YZ   = 4,
}

export enum PlaytestSessionResult {
    OK                   = 0,
    InvalidSessionHandle = 1,
    SessionInfoNotFound  = 2,
    TooManyPlayers       = 3,
    WorldExportFailed    = 4,
    WorldExportBusy      = 5,
    UnsupportedScenario  = 6,
    EditorSystemFailure  = 7,
    InvalidLevelId       = 8,
    PlayerNotFound       = 9,
    ResponseTimeout      = 10,
    UnspecifiedError     = 11,
}

export enum PrimitiveType {
    Text        = 0,
    Box         = 1,
    Line        = 2,
    Disc        = 4,
    AxialSphere = 5,
    Cylinder    = 7,
    Pyramid     = 8,
    Ellipsoid   = 9,
    Cuboid      = 10,
    Cone        = 11,
}

export enum ProjectExportType {
    PlayableWorld = 0,
    ProjectBackup = 1,
    WorldTemplate = 2,
}

export enum SelectionVolumeEventType {
    Set       = 1,
    Add       = 2,
    Remove    = 3,
    Translate = 4,
    Move      = 5,
    Clear     = 6,
}

export enum SpeedSettingsProperty {
    FlySpeedMultiplier = "FlySpeedMultiplier",
}

export enum SplineType {
    Line    = 0,
    Hermite = 1,
}

export enum StructureSource {
    BehaviorPack  = 0,
    EditorProject = 1,
    File          = 2,
    Level         = 3,
}

export enum ThemeSettingsColorKey {
    Caret                        = "Caret",
    Confirm1                     = "Confirm1",
    Confirm2                     = "Confirm2",
    Confirm3                     = "Confirm3",
    ConfirmFill                  = "ConfirmFill",
    ControlsGeneralFill          = "ControlsGeneralFill",
    ControlsGeneralHighlight     = "ControlsGeneralHighlight",
    Coordinate1                  = "Coordinate1",
    Coordinate2                  = "Coordinate2",
    Coordinate3                  = "Coordinate3",
    CoordinateControlX           = "CoordinateControlX",
    CoordinateControlY           = "CoordinateControlY",
    CoordinateControlZ           = "CoordinateControlZ",
    CursorVolumeBorder           = "CursorVolumeBorder",
    CursorVolumeFill             = "CursorVolumeFill",
    Destroy1                     = "Destroy1",
    Destroy2                     = "Destroy2",
    Destroy3                     = "Destroy3",
    DestroyFill                  = "DestroyFill",
    DisableBackground            = "DisableBackground",
    DisableFill                  = "DisableFill",
    DisableOutline               = "DisableOutline",
    DisableText                  = "DisableText",
    DropDown1                    = "DropDown1",
    DropDown2                    = "DropDown2",
    DropDown3                    = "DropDown3",
    ElementBorder                = "ElementBorder",
    Error                        = "Error",
    FocusErrorOutline            = "FocusErrorOutline",
    FocusOutline                 = "FocusOutline",
    HeaderBackground             = "HeaderBackground",
    HotbarOutline                = "HotbarOutline",
    Info1                        = "Info1",
    Info2                        = "Info2",
    Info3                        = "Info3",
    InfoFill                     = "InfoFill",
    PanelBackground              = "PanelBackground",
    PanelBorder                  = "PanelBorder",
    PlacementVolumeBorder        = "PlacementVolumeBorder",
    PlacementVolumeFill          = "PlacementVolumeFill",
    PrefillVolumeBorder          = "PrefillVolumeBorder",
    PrefillVolumeFill            = "PrefillVolumeFill",
    PrimaryActive                = "PrimaryActive",
    PrimaryBackground1           = "PrimaryBackground1",
    PrimaryBackground2           = "PrimaryBackground2",
    PrimaryBackground3           = "PrimaryBackground3",
    PrimaryBackground4           = "PrimaryBackground4",
    PrimaryDefault               = "PrimaryDefault",
    PrimaryDisable               = "PrimaryDisable",
    PrimaryMute                  = "PrimaryMute",
    ScrollBar                    = "ScrollBar",
    SecondaryActive              = "SecondaryActive",
    SecondaryBackground1         = "SecondaryBackground1",
    SecondaryBackground2         = "SecondaryBackground2",
    SecondaryBackground3         = "SecondaryBackground3",
    SecondaryDefault             = "SecondaryDefault",
    SecondaryDisable             = "SecondaryDisable",
    SecondaryMute                = "SecondaryMute",
    SelectionVolumeBorder        = "SelectionVolumeBorder",
    SelectionVolumeFill          = "SelectionVolumeFill",
    SelectionVolumeOutlineBorder = "SelectionVolumeOutlineBorder",
    SelectionVolumeOutlineFill   = "SelectionVolumeOutlineFill",
    TitleBarBackground           = "TitleBarBackground",
    ViewportOutline              = "ViewportOutline",
    Warning                      = "Warning",
}

export enum WidgetCollisionType {
    None   = 0,
    Radius = 1,
    Bounds = 2,
}

export enum WidgetComponentType {
    BoundingBox   = "BoundingBox",
    Clipboard     = "Clipboard",
    Entity        = "Entity",
    Gizmo         = "Gizmo",
    Grid          = "Grid",
    Guide         = "Guide",
    RenderPrim    = "RenderPrim",
    Spline        = "Spline",
    Text          = "Text",
    VolumeOutline = "VolumeOutline",
}

export enum WidgetGizmoEventType {
    CornerGrabbed     = "CornerGrabbed",
    CornerMoved       = "CornerMoved",
    CornerReleased    = "CornerReleased",
    OriginActivated   = "OriginActivated",
    OriginDeactivated = "OriginDeactivated",
    OriginGrabbed     = "OriginGrabbed",
    OriginMoved       = "OriginMoved",
    OriginReleased    = "OriginReleased",
}

export enum WidgetGroupSelectionMode {
    Multiple = "Multiple",
    None     = "None",
    Single   = "Single",
}

export enum WidgetMouseButtonActionType {
    Pressed  = 0,
    Released = 1,
    Drag     = 2,
}

export enum WorldGeneratorType {
    Flat      = "Flat",
    Nether    = "Nether",
    Overworld = "Overworld",
    TheEnd    = "TheEnd",
    Void      = "Void",
}

export class AudioSettings {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    get(property: AudioSettingsProperty): boolean | number | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getAll(): Record<string, boolean | number>;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    set(property: AudioSettingsProperty, value: boolean | number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setAll(properties: Record<string, boolean | number>): void;
}

export class BlockPalette {
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    getItem(index: number): IBlockPaletteItem;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    removeItemAt(index: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    removeItems(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    setItem(blockPaletteItem: IBlockPaletteItem, index: number): void;
}

export class BlockPaletteManager {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    addOrReplacePalette(paletteId: string, palette: BlockPalette): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getPalette(paletteId: string): BlockPalette | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getPaletteIdList(): string[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getPaletteItem(paletteId: string, index: number): IBlockPaletteItem;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getPrimaryPalette(): BlockPalette;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getSelectedBlockType(): minecraftserver.BlockType;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getSelectedItem(): IBlockPaletteItem;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removePalette(paletteId: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setPaletteItem(paletteId: string, index: number, item: IBlockPaletteItem): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setPrimaryPalette(paletteId: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setSelectedItem(item: IBlockPaletteItem): void;
}

export class BlockPaletteSelectedItemChangeAfterEvent {
    private constructor();
    readonly selectedPaletteItem: IBlockPaletteItem;
}

export class BlockPaletteSelectedItemChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: BlockPaletteSelectedItemChangeAfterEvent) => void,
    ): (arg0: BlockPaletteSelectedItemChangeAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: BlockPaletteSelectedItemChangeAfterEvent) => void): void;
}

export class BlockUtilities {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    fillVolume(
        volume: 
            | minecraftserver.BlockVolumeBase
            | minecraftserver.CompoundBlockVolume
            | RelativeVolumeListBlockVolume,
        block?: minecraftserver.BlockPermutation | minecraftserver.BlockType | string,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    findObscuredBlocksWithinVolume(
        volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
    ): RelativeVolumeListBlockVolume;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getContiguousSelection(properties?: ContiguousSelectionProperties): minecraftserver.CompoundBlockVolume;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getDimensionLocationBoundingBox(): minecraftserver.BlockBoundingBox;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getDimensionMaxLocation(): minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getDimensionMinLocation(): minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getFacePreviewSelection(properties?: QuickExtrudeProperties): minecraftserver.ListBlockVolume;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    isLocationInsideCurrentDimensionBounds(
        locationOrVolumeOrBounds: 
            | minecraftserver.BlockBoundingBox
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
    ): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    quickExtrude(properties?: QuickExtrudeProperties): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    shrinkWrapVolume(
        volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
    ): RelativeVolumeListBlockVolume;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    trimVolumeToFitContents(
        volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
        retainMarqueeAfterTrimming: boolean,
        ignoreLiquid: boolean,
        ignoreNoCollision: boolean,
        blockMask?: BlockMaskList,
    ): RelativeVolumeListBlockVolume;
}

export class BrushShapeManager {
    private constructor();
    readonly activeBrushVolume?: RelativeVolumeListBlockVolume;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    activateBrushTool(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    beginPainting(onComplete: (arg0: PaintCompletionState) => void): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    clearBlockStateOverrides(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    deactivateBrushTool(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    disableItemPlacement(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    enableItemPlacement(itemType: minecraftserver.ItemType, data?: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    endPainting(cancelled: boolean): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getBrushShapeOffset(): minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getDirectionalPlacementMode(): BrushDirectionalPlacementMode;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getInverseEraseMode(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    isBrushPaintBusy(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    pushBlockStateOverride(stateName: string, stateValue: boolean | number | string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setBlockFacePlacementBasedOnCamera(enabled: boolean): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setBrushMask(mask: BlockMaskList): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setBrushShape(shape: minecraftserver.Vector3[] | RelativeVolumeListBlockVolume): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setBrushShapeOffset(offset: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setBrushShapeVisible(visible: boolean): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setDirectionalPlacementMode(directionalPlacementMode: BrushDirectionalPlacementMode): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setElevationBrushRadius(elevationBrushRadius: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setElevationFalloff(elevationFalloff: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setElevationMode(elevationMode: BrushElevationMode): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setElevationSampleLayers(elevationSampleLayers: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setFlattenMode(flattenMode: FlattenMode): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setFlattenSmoothing(flattenSmoothing: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setFloorBlockOverride(floorBlockOverride: boolean): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setInverseEraseMode(inverseEraseMode: boolean): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setTerrainStrength(terrainStrength: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    singlePaint(onComplete: (arg0: PaintCompletionState) => void): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    switchBrushPaintMode(paintMode: PaintMode): void;
}

export class ClipboardChangeAfterEvent {
    private constructor();
    readonly isPrimary: boolean;
    readonly itemId: string;
}

export class ClipboardChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ClipboardChangeAfterEvent) => void): (arg0: ClipboardChangeAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ClipboardChangeAfterEvent) => void): void;
}

export class ClipboardItem {
    private constructor();
    readonly id: string;
    readonly isEmpty: boolean;
    readonly normalizedOrigin: minecraftserver.Vector3;
    readonly originalWorldLocation: minecraftserver.Vector3;
    readonly size: minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getPredictedWriteVolume(
        location: minecraftserver.Vector3,
        options?: ClipboardWriteOptions,
    ): RelativeVolumeListBlockVolume;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    readFromStructure(structure: EditorStructure): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    readFromWorld(source: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    writeToWorld(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): boolean;
}

export class ClipboardManager {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly clipboard: ClipboardItem;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    create(): ClipboardItem;
}

export class CurrentThemeChangeAfterEvent {
    private constructor();
    readonly id: string;
}

export class CurrentThemeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: CurrentThemeChangeAfterEvent) => void): (arg0: CurrentThemeChangeAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: CurrentThemeChangeAfterEvent) => void): void;
}

export class CurrentThemeColorChangeAfterEvent {
    private constructor();
    readonly color: minecraftserver.RGBA;
    readonly colorKey: string;
}

export class CurrentThemeColorChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: CurrentThemeColorChangeAfterEvent) => void,
    ): (arg0: CurrentThemeColorChangeAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: CurrentThemeColorChangeAfterEvent) => void): void;
}

export class Cursor {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly faceDirection: number;
    /**
     * @throws This property can throw errors.
     */
    readonly isVisible: boolean;
    /**
     * @throws This property can throw errors.
     */
    readonly maxViewBlockDistance: number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getDefaultProperties(): CursorProperties;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getPosition(): minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getProperties(): CursorProperties;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getRay(): CursorRay;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    hide(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    moveBy(offset: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    popPropertiesById(identifier: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    pushPropertiesById(properties: CursorProperties, identifier: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    resetToDefaultState(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setProperties(properties: CursorProperties): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    show(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updatePropertiesById(properties: CursorProperties, identifier?: string): void;
}

export class CursorPropertiesChangeAfterEvent {
    private constructor();
    readonly identifier?: string;
    readonly position?: CursorPosition;
    readonly properties: CursorProperties;
}

export class CursorPropertyChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(
        callback: (arg0: CursorPropertiesChangeAfterEvent) => void,
    ): (arg0: CursorPropertiesChangeAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: CursorPropertiesChangeAfterEvent) => void): void;
}

export class EditorConstants {
    private constructor();
    readonly maxBlockVolume: number;
    readonly maxDynamicSelectionSize: minecraftserver.Vector3;
    readonly maxSelectionSize: minecraftserver.Vector3;
    readonly maxStructureOffset: minecraftserver.Vector3;
    readonly minStructureOffset: minecraftserver.Vector3;
}

export class EditorStructure {
    private constructor();
    /**
     * @throws This property can throw errors.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly description: string;
    /**
     * @throws This property can throw errors.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly displayName: string;
    readonly id: string;
    readonly isValid: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly normalizedOrigin: minecraftserver.Vector3;
    /**
     * @throws This property can throw errors.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly notes: string;
    /**
     * @throws This property can throw errors.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly offset: minecraftserver.Vector3;
    /**
     * @throws This property can throw errors.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly originalWorldLocation: minecraftserver.Vector3;
    /**
     * @throws This property can throw errors.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly size: minecraftserver.Vector3;
    /**
     * @throws This property can throw errors.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly structureFullName: string;
    /**
     * @throws This property can throw errors.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly structureName: string;
    /**
     * @throws This property can throw errors.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly structureNamespace: string;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    getBlockPermutation(location: minecraftserver.Vector3): minecraftserver.BlockPermutation | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    getIsWaterlogged(location: minecraftserver.Vector3): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    getTags(): string[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    setBlockPermutation(
        location: minecraftserver.Vector3,
        blockPermutation: minecraftserver.BlockPermutation,
        waterlogged?: boolean,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    setTags(tags: string[]): void;
}

export class EditorStructureManager {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createEmpty(fullName: string, size: minecraftserver.Vector3): EditorStructure;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createFromClipboardItem(item: ClipboardItem, fullName: string): EditorStructure;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    deleteStructure(id: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getExistingTags(): string[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getStructure(id: string): EditorStructure;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    searchStructures(options?: EditorStructureSearchOptions): EditorStructure[];
}

export class ExportManager {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    beginExportProject(options: GameOptions): Promise<ExportResult>;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    canExportProject(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getGameOptions(useDefault?: boolean): GameOptions;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getGameVersion(): string;
}

export class Extension {
    private constructor();
    readonly defaultToolGroupId: string;
    readonly description: string;
    readonly name: string;
    readonly notes: string;
}

export class ExtensionContext {
    private constructor();
    readonly afterEvents: ExtensionContextAfterEvents;
    readonly blockPalette: BlockPaletteManager;
    readonly blockUtilities: BlockUtilities;
    readonly brushShapeManager: BrushShapeManager;
    readonly clipboardManager: ClipboardManager;
    readonly cursor: Cursor;
    readonly exportManager: ExportManager;
    readonly extensionInfo: Extension;
    readonly minimapManager: MinimapManager;
    readonly player: minecraftserver.Player;
    readonly playtest: PlaytestManager;
    readonly selectionManager: SelectionManager;
    readonly settings: SettingsManager;
    readonly structureManager: EditorStructureManager;
    readonly transactionManager: TransactionManager;
    readonly widgetManager: WidgetManager;
}

export class ExtensionContextAfterEvents {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly blockPaletteSelectedItemChange: BlockPaletteSelectedItemChangeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly clipboardChange: ClipboardChangeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly currentThemeChange: CurrentThemeChangeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly currentThemeColorChange: CurrentThemeColorChangeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly modeChange: ModeChangeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly SelectionChange: SelectionChangeAfterEventSignal;
}

export class GraphicsSettings {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    get(property: GraphicsSettingsProperty): boolean | number | string | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getAll(): Record<string, boolean | number | string>;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    set(property: GraphicsSettingsProperty, value: boolean | number | string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setAll(properties: Record<string, boolean | number | string>): void;
}

export class IBlockPaletteItem {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getBlock(): minecraftserver.BlockType | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getDisplayName(): string | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getType(): BlockPaletteItemType;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string): void;
}

export class Logger {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    debug(message: LocalizationEntry | string, properties?: LogProperties): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    error(message: LocalizationEntry | string, properties?: LogProperties): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    info(message: LocalizationEntry | string, properties?: LogProperties): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    warning(message: LocalizationEntry | string, properties?: LogProperties): void;
}

export class MinecraftEditor {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly afterEvents: ProjectAfterEvents;
    readonly constants: EditorConstants;
    /**
     * @throws This property can throw errors.
     */
    readonly log: Logger;
    readonly simulation: SimulationState;
    readonly worldGeneratorType?: WorldGeneratorType;
}

export class MinimapItem {
    private constructor();
    readonly id: string;
    readonly isActive: boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addMarker(markerType: MinimapMarkerType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getPlayerColor(playerId: string): minecraftserver.RGBA;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeMarker(markerType: MinimapMarkerType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setActive(active: boolean): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setSize(mapWidth: number, mapHeight: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setViewType(viewType: MinimapViewType): void;
}

export class MinimapManager {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createMinimap(viewType: MinimapViewType, mapWidth: number, mapHeight: number): MinimapItem;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    destroyMinimap(minimapId: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getAllMinimapIds(): string[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getMinimap(minimapId: string): MinimapItem;
}

export class ModeChangeAfterEvent {
    private constructor();
    readonly mode: EditorMode;
}

export class ModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: ModeChangeAfterEvent) => void): (arg0: ModeChangeAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: ModeChangeAfterEvent) => void): void;
}

export class PlaytestManager {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    beginPlaytest(options: GameOptions): Promise<PlaytestSessionResult>;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getPlaytestSessionAvailability(): PlaytestSessionResult;
}

// @ts-ignore
export class ProbabilityBlockPaletteItem extends IBlockPaletteItem {
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(displayName?: string);
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string, weight: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getBlocks(): WeightedBlock[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeBlockAt(index: number): void;
}

export class ProjectAfterEvents {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly simulationStateChange: SimulationStateChangeAfterEventSignal;
}

// @ts-ignore
export class RelativeVolumeListBlockVolume extends minecraftserver.BlockVolumeBase {
    readonly isEmpty: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    origin?: minecraftserver.Vector3;
    readonly volumeCount: number;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(origin?: minecraftserver.Vector3);
    /**
     * @remarks This function can't be called in read-only mode.
     */
    add(
        toAdd: 
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    clear(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getVolumeList(): minecraftserver.BlockVolume[];
    /**
     * @remarks This function can't be called in read-only mode.
     */
    hasAdjacent(location: minecraftserver.Vector3, normalizedOffset: minecraftserver.Vector3): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    moveTo(location: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    remove(
        toRemove: 
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    set(
        toSet: 
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    translate(offset: minecraftserver.Vector3): void;
}

export class SelectionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: SelectionEventAfterEvent) => void): (arg0: SelectionEventAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: SelectionEventAfterEvent) => void): void;
}

export class SelectionContainerBase {
    private constructor();
}

// @ts-ignore
export class SelectionContainerEntity extends SelectionContainerBase {
    private constructor();
}

// @ts-ignore
export class SelectionContainerVolume extends SelectionContainerBase {
    private constructor();
    readonly isEmpty: boolean;
    readonly volumeCount: number;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    add(
        volume: 
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    clear(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    get(): RelativeVolumeListBlockVolume;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getBoundingBox(): minecraftserver.BlockBoundingBox;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    moveTo(location: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    remove(
        volume: 
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    set(
        volume: 
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    translate(offset: minecraftserver.Vector3): void;
}

export class SelectionContainerVolumeEvent {
    private constructor();
    readonly "type": SelectionVolumeEventType;
}

export class SelectionEventAfterEvent {
    private constructor();
    readonly volumeEventData?: SelectionContainerVolumeEvent;
}

export class SelectionManager {
    private constructor();
    readonly entity: SelectionContainerEntity;
    readonly volume: SelectionContainerVolume;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    deselectBlocks(blockIdentifier: string): Promise<number>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    generateManifest(): Promise<SelectionManifestData>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getCurrentManifest(): SelectionManifestData | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    replaceBlocks(fromBlockIdentifier: string, toBlockIdentifier: string): Promise<number>;
}

export class SettingsManager {
    private constructor();
    readonly audio: AudioSettings;
    readonly graphics: GraphicsSettings;
    readonly speed: SpeedSettings;
    readonly theme: ThemeSettings;
}

// @ts-ignore
export class SimpleBlockPaletteItem extends IBlockPaletteItem {
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(displayName?: string);
}

export class SimulationState {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    isPaused(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setPaused(isPaused: boolean): void;
}

export class SimulationStateAfterEvent {
    private constructor();
    readonly paused: boolean;
}

export class SimulationStateChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: SimulationStateAfterEvent) => void): (arg0: SimulationStateAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: SimulationStateAfterEvent) => void): void;
}

export class SpeedSettings {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    get(property: SpeedSettingsProperty): number | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getAll(): Record<string, number>;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    set(property: SpeedSettingsProperty, value: number): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setAll(properties: Record<string, number>): void;
}

export class ThemeSettings {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addNewTheme(id: string, name?: string, sourceThemeId?: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    canThemeBeModified(id: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    deleteTheme(id: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getCurrentTheme(): string;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getThemeColors(id: string): Record<string, minecraftserver.RGBA> | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getThemeIdList(): string[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getThemeName(id: string): string;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    resolveColorKey(key: ThemeSettingsColorKey): minecraftserver.RGBA;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setCurrentTheme(id: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setThemeName(id: string, name: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateThemeColor(id: string, key: ThemeSettingsColorKey, newColor: minecraftserver.RGBA): void;
}

export class TransactionManager {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addEntityOperation(entity: minecraftserver.Entity, type: EntityOperationType): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addUserDefinedOperation(
        transactionHandlerId: UserDefinedTransactionHandlerId,
        operationData: string,
        operationName?: string,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    commitOpenTransaction(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    commitTrackedChanges(): number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createUserDefinedTransactionHandler(
        undoClosure: (arg0: string) => void,
        redoClosure: (arg0: string) => void,
    ): UserDefinedTransactionHandlerId;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    discardOpenTransaction(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    discardTrackedChanges(): number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    isBusy(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    openTransaction(name: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    redo(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    redoSize(): number;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    trackBlockChangeArea(from: minecraftserver.Vector3, to: minecraftserver.Vector3): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    trackBlockChangeList(locations: minecraftserver.Vector3[]): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    trackBlockChangeVolume(blockVolume: minecraftserver.BlockVolumeBase): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    undo(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    undoSize(): number;
}

export class UserDefinedTransactionHandlerId {
    private constructor();
}

export class Widget {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    bindPositionToBlockCursor: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    collisionOffset: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    collisionRadius: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    collisionType: WidgetCollisionType;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    dimensionId?: string;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    readonly group: WidgetGroup;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    ignoreEditorModeVisibilityOverride: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    location: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    lockPositionToSurface: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    readonly selectable: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    selected: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    showBoundingBox: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    showCollisionRadius: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    snapToBlockLocation: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    visible: boolean;
    readonly widgetName: string;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addBoundingBox(
        componentName: string,
        size: minecraftserver.Vector3,
        options?: WidgetComponentBoundingBoxOptions,
    ): WidgetComponentBoundingBox;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addClipboardComponent(
        componentName: string,
        clipboardItem?: ClipboardItem | EditorStructure,
        options?: WidgetComponentClipboardOptions,
    ): WidgetComponentClipboard;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addEntityComponent(
        componentName: string,
        actorNameId: string,
        options?: WidgetComponentEntityOptions,
    ): WidgetComponentEntity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addGizmoComponent(componentName: string, options?: WidgetComponentGizmoOptions): WidgetComponentGizmo;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addGridComponent(componentName: string, options?: WidgetComponentGridOptions): WidgetComponentGrid;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addGuideComponent(componentName: string, options?: WidgetComponentGuideOptions): WidgetComponentGuide;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addRenderPrimitiveComponent(
        componentName: string,
        primitiveType: 
            | WidgetComponentRenderPrimitiveTypeAxialSphere
            | WidgetComponentRenderPrimitiveTypeBox
            | WidgetComponentRenderPrimitiveTypeCone
            | WidgetComponentRenderPrimitiveTypeCuboid
            | WidgetComponentRenderPrimitiveTypeCylinder
            | WidgetComponentRenderPrimitiveTypeDisc
            | WidgetComponentRenderPrimitiveTypeEllipsoid
            | WidgetComponentRenderPrimitiveTypeLine
            | WidgetComponentRenderPrimitiveTypePyramid,
        options?: WidgetComponentRenderPrimitiveOptions,
    ): WidgetComponentRenderPrimitive;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addSplineComponent(componentName: string, options?: WidgetComponentSplineOptions): WidgetComponentSpline;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addTextComponent(componentName: string, label: string, options?: WidgetComponentTextOptions): WidgetComponentText;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    addVolumeOutline(
        componentName: string,
        volume?: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
        options?: WidgetComponentVolumeOutlineOptions,
    ): WidgetComponentVolumeOutline;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    delete(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    deleteComponent(componentOrName: string | WidgetComponentBase): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getComponent(componentName: string): WidgetComponentBase;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    getComponents(): WidgetComponentBase[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    setStateChangeEvent(eventFunction?: (arg0: WidgetStateChangeEventData) => void): void;
}

export class WidgetComponentBase {
    private constructor();
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly componentType: WidgetComponentType;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly location: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    lockToSurface: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly name: string;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    offset: minecraftserver.Vector3;
    readonly valid: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    visible: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly widget: Widget;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    delete(): void;
}

// @ts-ignore
export class WidgetComponentBoundingBox extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    boundsOffset: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    enableResizeHandles: Axis;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    hullColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    mirror: minecraftserver.StructureMirrorAxis;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    normalizedOrigin: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    outlineColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    rotation: minecraftserver.StructureRotation;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    showWorldIntersections: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    size: minecraftserver.Vector3;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly transformedWorldVolume: minecraftserver.BlockVolume;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    visibleHull: boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    deactivateHandles(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setStateChangeEvent(eventFunction?: (arg0: WidgetComponentBoundingBoxStateChangeEventParameters) => void): void;
}

export class WidgetComponentBoundingBoxStateChangeEventParameters {
    private constructor();
    readonly boundsOffset?: minecraftserver.Vector3;
    readonly boundsSize?: minecraftserver.Vector3;
    readonly component: WidgetComponentBoundingBox;
    readonly eventType: WidgetGizmoEventType;
    readonly widget: Widget;
}

// @ts-ignore
export class WidgetComponentClipboard extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    clipboardOffset: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    highlightHullColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    highlightOutlineColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    hullColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    mirror: minecraftserver.StructureMirrorAxis;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    normalizedOrigin: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    outlineColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    rotation: minecraftserver.StructureRotation;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    showOutline: boolean;
}

// @ts-ignore
export class WidgetComponentEntity extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    clickable: boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    playAnimation(animationName: string): void;
}

// @ts-ignore
export class WidgetComponentGizmo extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    activated: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    enabledAxes: Axis;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    normalizedOffsetOverride?: minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setStateChangeEvent(eventFunction?: (arg0: WidgetComponentGizmoStateChangeEventParameters) => void): void;
}

export class WidgetComponentGizmoStateChangeEventParameters {
    private constructor();
    readonly component: WidgetComponentGizmo;
    readonly eventType?: WidgetGizmoEventType;
    readonly widget: Widget;
}

// @ts-ignore
export class WidgetComponentGrid extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    gridColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    gridCount: minecraftserver.Vector2;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    gridSize: minecraftserver.Vector2;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    plane: Plane;
}

// @ts-ignore
export class WidgetComponentGuide extends WidgetComponentBase {
    private constructor();
}

// @ts-ignore
export class WidgetComponentRenderPrimitive extends WidgetComponentBase {
    private constructor();
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    readonly primitiveType: PrimitiveType;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    setPrimitive(
        primitive: 
            | WidgetComponentRenderPrimitiveTypeAxialSphere
            | WidgetComponentRenderPrimitiveTypeBox
            | WidgetComponentRenderPrimitiveTypeCone
            | WidgetComponentRenderPrimitiveTypeCuboid
            | WidgetComponentRenderPrimitiveTypeCylinder
            | WidgetComponentRenderPrimitiveTypeDisc
            | WidgetComponentRenderPrimitiveTypeEllipsoid
            | WidgetComponentRenderPrimitiveTypeLine
            | WidgetComponentRenderPrimitiveTypePyramid,
    ): void;
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeAxialSphere extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    color?: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    radius: number;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(center: minecraftserver.Vector3, radius: number, color?: minecraftserver.RGBA);
}

export class WidgetComponentRenderPrimitiveTypeBase {
    private constructor();
    readonly primitiveType: PrimitiveType;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    renderPriority: number;
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeBox extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    size?: minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(center: minecraftserver.Vector3, color: minecraftserver.RGBA, size?: minecraftserver.Vector3);
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeCone extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    alpha?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    height: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    numSegments?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    radiusX: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    radiusZ: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    rotation?: minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(
        center: minecraftserver.Vector3,
        radiusX: number,
        radiusZ: number,
        height: number,
        color: minecraftserver.RGBA,
        numSegments?: number,
        rotation?: minecraftserver.Vector3,
        alpha?: number,
    );
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeCuboid extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    alpha?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    lengthX: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    lengthY: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    lengthZ: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    rotation?: minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(
        center: minecraftserver.Vector3,
        lengthX: number,
        lengthY: number,
        lengthZ: number,
        color: minecraftserver.RGBA,
        rotation?: minecraftserver.Vector3,
        alpha?: number,
    );
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeCylinder extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    alpha?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    height: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    radiusX: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    radiusZ: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    rotation?: minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(
        center: minecraftserver.Vector3,
        radiusX: number,
        radiusZ: number,
        height: number,
        color: minecraftserver.RGBA,
        rotation?: minecraftserver.Vector3,
        alpha?: number,
    );
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeDisc extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    radius: number;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(center: minecraftserver.Vector3, radius: number, color: minecraftserver.RGBA);
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeEllipsoid extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    alpha?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    radii: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    rotation?: minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(
        center: minecraftserver.Vector3,
        radii: minecraftserver.Vector3,
        color: minecraftserver.RGBA,
        rotation?: minecraftserver.Vector3,
        alpha?: number,
    );
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeLine extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    end: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    start: minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(start: minecraftserver.Vector3, end: minecraftserver.Vector3, color: minecraftserver.RGBA);
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypePyramid extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    alpha?: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    height: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    rotation?: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    widthX: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    widthZ?: number;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    constructor(
        center: minecraftserver.Vector3,
        widthX: number,
        height: number,
        color: minecraftserver.RGBA,
        widthZ?: number,
        rotation?: minecraftserver.Vector3,
        alpha?: number,
    );
}

// @ts-ignore
export class WidgetComponentSpline extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    splineType: SplineType;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    getControlPoints(): Widget[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getInterpolatedPoints(maxPointsPerControlSegment?: number): minecraftserver.Vector3[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    setControlPoints(widgetList: Widget[]): void;
}

// @ts-ignore
export class WidgetComponentText extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    label: string;
}

// @ts-ignore
export class WidgetComponentVolumeOutline extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    highlightHullColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    highlightOutlineColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    hullColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    mirror: minecraftserver.StructureMirrorAxis;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    normalizedOrigin: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    outlineColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    rotation: minecraftserver.StructureRotation;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    showHighlightOutline: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    showOutline: boolean;
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly transformedWorldVolume: minecraftserver.BlockVolume;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    volumeOffset: minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    getVolume(): RelativeVolumeListBlockVolume | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    setVolume(
        volumeToSet?: 
            | minecraftserver.Vector3[]
            | minecraftserver.BlockVolume
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
    ): void;
}

export class WidgetGroup {
    private constructor();
    /**
     * @throws This property can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    readonly selectedWidgetCount: number;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    visible: boolean;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    visibleBounds: boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createWidget(location: minecraftserver.Vector3, options?: WidgetCreateOptions): Widget;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    delete(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    deleteWidget(widgetToDelete: Widget): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    deselectAllWidgets(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    selectAllWidgets(): void;
}

export class WidgetManager {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createGroup(options?: WidgetGroupCreateOptions): WidgetGroup;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    deleteGroup(groupToDelete: WidgetGroup): void;
}

export class WidgetMouseButtonEventData {
    private constructor();
    readonly action: WidgetMouseButtonActionType;
    readonly altPressed: boolean;
    readonly controlPressed: boolean;
    readonly shiftPressed: boolean;
}

export class WidgetStateChangeEventData {
    private constructor();
    readonly group: WidgetGroup;
    readonly location?: minecraftserver.Vector3;
    readonly mouseEvent?: WidgetMouseButtonEventData;
    readonly selected?: boolean;
    readonly visible?: boolean;
    readonly widget: Widget;
}

export interface BlockMaskList {
    blockList: (minecraftserver.BlockPermutation | minecraftserver.BlockType | string)[];
    maskType: BlockMaskListType;
}

export interface ClipboardWriteOptions {
    mirror?: minecraftserver.StructureMirrorAxis;
    normalizedOrigin?: minecraftserver.Vector3;
    offset?: minecraftserver.Vector3;
    rotation?: minecraftserver.StructureRotation;
}

export interface ContiguousSelectionProperties {
    checkForAdjacentFace?: boolean;
    contiguousSelectionBlockList?: string[];
    contiguousSelectionType?: ContiguousSelectionType;
    fullSelectionToleranceLevel?: number;
    isFace?: boolean;
    selectionDirection?: number;
    size?: number;
    startingLocation?: minecraftserver.Vector3;
}

export interface CursorPosition {
    FaceDirection: number;
    Position: minecraftserver.Vector3;
}

export interface CursorProperties {
    controlMode?: CursorControlMode;
    fillColor?: minecraftserver.RGBA;
    fixedModeDistance?: number;
    outlineColor?: minecraftserver.RGBA;
    projectThroughLiquid?: boolean;
    targetMode?: CursorTargetMode;
    visible?: boolean;
}

export interface CursorRay {
    end: minecraftserver.Vector3;
    hit: boolean;
    start: minecraftserver.Vector3;
}

export interface EditorStructureSearchOptions {
    displayName?: string;
    id?: string;
    sources?: StructureSource[];
    structureName?: string;
    structureNamespace?: string;
    tags?: string[];
}

export interface ExtensionOptionalParameters {
    description?: string;
    notes?: string;
    toolGroupId?: string;
}

export interface GameOptions {
    bedsWork?: boolean;
    bonusChest?: boolean;
    cheats?: boolean;
    commandBlockEnabled?: boolean;
    commandBlockOutput?: boolean;
    daylightCycle?: DaylightCycle;
    difficulty?: minecraftserver.Difficulty;
    dimensionId?: string;
    disableWeather?: boolean;
    drowningDamage?: boolean;
    educationEdition?: boolean;
    entitiesDropLoot?: boolean;
    exportType?: ProjectExportType;
    fallDamage?: boolean;
    fireDamage?: boolean;
    fireSpreads?: boolean;
    freezeDamage?: boolean;
    friendlyFire?: boolean;
    functionCommandLimit?: number;
    gameMode?: minecraftserver.GameMode;
    hardcore?: boolean;
    immediateRespawn?: boolean;
    insomnia?: boolean;
    keepInventory?: boolean;
    keepPlayerData?: boolean;
    lanVisibility?: boolean;
    limitedCrafting?: boolean;
    locatorBar?: boolean;
    maxCommandChainLength?: number;
    mobGriefing?: boolean;
    mobLoot?: boolean;
    mobSpawning?: boolean;
    multiplayerGame?: boolean;
    naturalRegeneration?: boolean;
    playerAccess?: GamePublishSetting;
    playerPermissions?: minecraftserver.PlayerPermissionLevel;
    randomTickSpeed?: number;
    recipeUnlocking?: boolean;
    respawnBlocksExplode?: boolean;
    respawnRadius?: number;
    sendCommandFeedback?: boolean;
    showBorderEffect?: boolean;
    showCoordinates?: boolean;
    showDaysPlayed?: boolean;
    showDeathMessage?: boolean;
    showItemTags?: boolean;
    simulationDistance?: number;
    sleepSkipPercent?: number;
    spawnPosition?: minecraftserver.Vector3;
    startingMap?: boolean;
    tileDrops?: boolean;
    timeOfDay?: number;
    tntExplodes?: boolean;
    weather?: number;
    worldName?: string;
}

export interface LocalizationEntry {
    id: string;
    props?: string[];
}

export interface LogProperties {
    channelMask?: LogChannel;
    player?: minecraftserver.Player;
    subMessage?: LocalizationEntry | string;
    tags?: string[];
}

export interface ProjectExportOptions {
    alwaysDay?: boolean;
    difficulty?: minecraftserver.Difficulty;
    disableWeather?: boolean;
    exportName?: string;
    exportType: ProjectExportType;
    gameMode?: minecraftserver.GameMode;
    initialTimOfDay?: number;
}

export interface QuickExtrudeProperties {
    checkForAdjacentFace?: boolean;
    contiguousSelectionBlockList?: string[];
    contiguousSelectionType?: ContiguousSelectionType;
    isShrink?: boolean;
    layerCount?: number;
    selectionDirection?: number;
    size?: number;
    startingLocation?: minecraftserver.Vector3;
}

export interface SelectionManifestData {
    entries: SelectionManifestEntry[];
    generationId: number;
    inProgress: boolean;
    processedBlocks: number;
    progress: number;
    totalBlocks: number;
}

export interface SelectionManifestEntry {
    blockIdentifier: string;
    count: number;
}

export interface WeightedBlock {
    block: minecraftserver.BlockType;
    weight: number;
}

export interface WidgetComponentBaseOptions {
    lockToSurface?: boolean;
    offset?: minecraftserver.Vector3;
    visible?: boolean;
}

export interface WidgetComponentBoundingBoxLimit {
    max: minecraftserver.Vector3;
    maxBlockVolume?: number;
    min: minecraftserver.Vector3;
}

// @ts-ignore
export interface WidgetComponentBoundingBoxOptions extends WidgetComponentBaseOptions {
    boundsOffset?: minecraftserver.Vector3;
    enableResizeHandles?: Axis;
    hullColor?: minecraftserver.RGBA;
    limit?: WidgetComponentBoundingBoxLimit;
    mirror?: minecraftserver.StructureMirrorAxis;
    normalizedOrigin?: minecraftserver.Vector3;
    outlineColor?: minecraftserver.RGBA;
    rotation?: minecraftserver.StructureRotation;
    showWorldIntersections?: boolean;
    stateChangeEvent?: (arg0: WidgetComponentBoundingBoxStateChangeEventParameters) => void;
    visibleHull?: boolean;
}

// @ts-ignore
export interface WidgetComponentClipboardOptions extends WidgetComponentBaseOptions {
    clipboardOffset?: minecraftserver.Vector3;
    highlightHullColor?: minecraftserver.RGBA;
    highlightOutlineColor?: minecraftserver.RGBA;
    hullColor?: minecraftserver.RGBA;
    mirror?: minecraftserver.StructureMirrorAxis;
    normalizedOrigin?: minecraftserver.Vector3;
    outlineColor?: minecraftserver.RGBA;
    rotation?: minecraftserver.StructureRotation;
    showOutline?: boolean;
}

// @ts-ignore
export interface WidgetComponentEntityOptions extends WidgetComponentBaseOptions {
    deselectedAnimation?: string;
    isClickable?: boolean;
    selectedAnimation?: string;
}

// @ts-ignore
export interface WidgetComponentGizmoOptions extends WidgetComponentBaseOptions {
    axes?: Axis;
    enablePlanes?: boolean;
    normalizedAutoOffset?: minecraftserver.Vector3;
    stateChangeEvent?: (arg0: WidgetComponentGizmoStateChangeEventParameters) => void;
}

// @ts-ignore
export interface WidgetComponentGridOptions extends WidgetComponentBaseOptions {
    color?: minecraftserver.RGBA;
    gridCount?: minecraftserver.Vector2;
    gridSize?: minecraftserver.Vector2;
    plane?: Plane;
}

// @ts-ignore
export interface WidgetComponentGuideOptions extends WidgetComponentBaseOptions {
}

// @ts-ignore
export interface WidgetComponentRenderPrimitiveOptions extends WidgetComponentBaseOptions {
}

// @ts-ignore
export interface WidgetComponentSplineOptions extends WidgetComponentBaseOptions {
    controlPoints: Widget[];
    splineType?: SplineType;
}

// @ts-ignore
export interface WidgetComponentTextOptions extends WidgetComponentBaseOptions {
    color?: minecraftserver.RGBA;
}

// @ts-ignore
export interface WidgetComponentVolumeOutlineOptions extends WidgetComponentBaseOptions {
    highlightHullColor?: minecraftserver.RGBA;
    highlightOutlineColor?: minecraftserver.RGBA;
    hullColor?: minecraftserver.RGBA;
    mirror?: minecraftserver.StructureMirrorAxis;
    normalizedOrigin?: minecraftserver.Vector3;
    outlineColor?: minecraftserver.RGBA;
    rotation?: minecraftserver.StructureRotation;
    showHighlightOutline?: boolean;
    showOutline?: boolean;
    volumeOffset?: minecraftserver.Vector3;
}

export interface WidgetCreateOptions {
    bindPositionToBlockCursor?: boolean;
    collisionOffset?: minecraftserver.Vector3;
    collisionRadius?: number;
    collisionType?: WidgetCollisionType;
    dimensionId?: string;
    ignoreEditorModeVisibilityOverride?: boolean;
    lockToSurface?: boolean;
    selectable?: boolean;
    snapToBlockLocation?: boolean;
    stateChangeEvent?: (arg0: WidgetStateChangeEventData) => void;
    visible?: boolean;
    widgetName?: string;
    worldBoundsMax?: minecraftserver.Vector3;
    worldBoundsMin?: minecraftserver.Vector3;
}

export interface WidgetGroupCreateOptions {
    groupSelectionMode?: WidgetGroupSelectionMode;
    showBounds?: boolean;
    visible?: boolean;
}

// @ts-ignore
export class InvalidWidgetComponentError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidWidgetError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidWidgetGroupError extends Error {
    private constructor();
}

export const editor: MinecraftEditor;
