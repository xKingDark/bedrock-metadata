// Type definitions for Minecraft Bedrock Edition Script APIs
// Project: https://github.com/xKingDark/bedrock-metadata
// Definitions by: xKingDark <https://github.com/xKingDark>
/**
 * @beta
 * @packageDocumentation
 * Manifest Details
 * ```json
 * { "module_name": "@minecraft/server-editor", "version": "0.1.0-beta" }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export declare enum ActionTypes {
    NoArgsAction       = "NoArgsAction",
    MouseRayCastAction = "MouseRayCastAction",
    StatefulAction     = "StatefulAction",
    ContinuousAction   = "ContinuousAction",
}

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

export declare enum BlockTableOperationType {
    Deselect = "deselect",
    Replace  = "replace",
}

export declare enum BoolPropertyItemVariant {
    Checkbox     = 0,
    ToggleSwitch = 1,
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

export declare enum ButtonVariant {
    Primary      = 0,
    Secondary    = 1,
    Confirmation = 2,
    Destructive  = 3,
}

export declare enum CollectionTreeEntryItemType {
    String   = 0,
    Number   = 1,
    Dropdown = 2,
}

export declare enum CollectionTreeSortType {
    AtoZ = 0,
    ZtoA = 1,
}

export declare enum ColorPickerPropertyItemVariant {
    Default  = 0,
    Inline   = 1,
    Expanded = 2,
}

export declare enum ComboBoxPropertyItemDataType {
    Custom = 0,
    Block  = 1,
    Entity = 2,
}

export enum ContiguousSelectionType {
    SameBlock          = 0,
    SameBlockAndStates = 1,
    SolidBlocks        = 2,
    AllBlocks          = 3,
    Custom             = 4,
}

export declare enum ContinuousActionState {
    Begin  = 0,
    Repeat = 1,
    End    = 2,
}

export declare enum CoreActionBarItemType {
    Undo     = "editor:actionBarItem:undo",
    Redo     = "editor:actionBarItem:redo",
    Export   = "editor:actionBarItem:export",
    Locate   = "editor:actionBarItem:locate",
    Playtest = "editor:actionBarItem:playtest",
    Settings = "editor:actionBarItem:settings",
    Realms   = "editor:actionBarItem:realms",
    Fill     = "editor:actionBarItem:fill",
}

export declare enum CoreBrushShapeType {
    SingleBlock = "editor:brushShape:singleBlock",
    Cuboid      = "editor:brushShape:cuboid",
    Ellipsoid   = "editor:brushShape:ellipsoid",
    Cone        = "editor:brushShape:cone",
    Cylinder    = "editor:brushShape:cylinder",
    Pyramid     = "editor:brushShape:pyramid",
    Star        = "editor:brushShape:star",
}

export declare enum CoreMenuType {
    File         = "editor:menu:file",
    Edit         = "editor:menu:edit",
    Extensions   = "editor:menu:extensions",
    View         = "editor:menu:view",
    WorldOptions = "editor:menu:worldOptions",
    Experimental = "editor:menu:experimental",
    Help         = "editor:menu:help",
}

export declare enum CoreModalDialogType {
    DataPicker = 0,
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

export declare enum DataPickerModalDialogVariant {
    Block = 0,
}

export enum DaylightCycle {
    Normal    = 0,
    AlwaysDay = 1,
    LockTime  = 2,
}

export declare enum EditorInputContext {
    GlobalEditor   = "global.editor",
    GlobalToolMode = "global.toolMode",
    Viewport       = "local.toolMode.viewport",
}

export enum EditorMode {
    Crosshair = "Crosshair",
    Tool      = "Tool",
}

export declare enum EditorServerEventType {
    ServerActionEvents = "Editor::ServerActionEvents",
    ServerUXEvents     = "Editor::ServerUXEvents",
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

export declare enum ImageResourceType {
    Default   = 0,
    Block     = 1,
    Icon      = 2,
    Structure = 3,
}

export enum InputModifier {
    Unused  = 0,
    None    = 1,
    Alt     = 2,
    Control = 4,
    Shift   = 8,
    Any     = 15,
}

export declare enum KeyboardKey {
    UNDEFINED        = 0,
    BACKSPACE        = 8,
    TAB              = 9,
    ENTER            = 13,
    SHIFT            = 16,
    CTRL             = 17,
    ALT              = 18,
    CAPS_LOCK        = 20,
    ESCAPE           = 27,
    SPACE            = 32,
    PAGE_UP          = 33,
    PAGE_DOWN        = 34,
    END              = 35,
    HOME             = 36,
    LEFT             = 37,
    UP               = 38,
    RIGHT            = 39,
    DOWN             = 40,
    PRINT_SCREEN     = 44,
    INSERT           = 45,
    DELETE           = 46,
    KEY_0            = 48,
    KEY_1            = 49,
    KEY_2            = 50,
    KEY_3            = 51,
    KEY_4            = 52,
    KEY_5            = 53,
    KEY_6            = 54,
    KEY_7            = 55,
    KEY_8            = 56,
    KEY_9            = 57,
    KEY_A            = 65,
    KEY_B            = 66,
    KEY_C            = 67,
    KEY_D            = 68,
    KEY_E            = 69,
    KEY_F            = 70,
    KEY_G            = 71,
    KEY_H            = 72,
    KEY_I            = 73,
    KEY_J            = 74,
    KEY_K            = 75,
    KEY_L            = 76,
    KEY_M            = 77,
    KEY_N            = 78,
    KEY_O            = 79,
    KEY_P            = 80,
    KEY_Q            = 81,
    KEY_R            = 82,
    KEY_S            = 83,
    KEY_T            = 84,
    KEY_U            = 85,
    KEY_V            = 86,
    KEY_W            = 87,
    KEY_X            = 88,
    KEY_Y            = 89,
    KEY_Z            = 90,
    NUMPAD_0         = 96,
    NUMPAD_1         = 97,
    NUMPAD_2         = 98,
    NUMPAD_3         = 99,
    NUMPAD_4         = 100,
    NUMPAD_5         = 101,
    NUMPAD_6         = 102,
    NUMPAD_7         = 103,
    NUMPAD_8         = 104,
    NUMPAD_9         = 105,
    NUMPAD_MULTIPLY  = 106,
    NUMPAD_ADD       = 107,
    NUMPAD_SEPARATOR = 108,
    NUMPAD_SUBTRACT  = 109,
    NUMPAD_DECIMAL   = 110,
    NUMPAD_DIVIDE    = 111,
    F1               = 112,
    F2               = 113,
    F3               = 114,
    F4               = 115,
    F5               = 116,
    F6               = 117,
    F7               = 118,
    F8               = 119,
    F9               = 120,
    F10              = 121,
    F11              = 122,
    F12              = 123,
    SEMICOLON        = 186,
    COMMA            = 188,
    PERIOD           = 190,
    SLASH            = 191,
    BACK_QUOTE       = 192,
    BRACKET_OPEN     = 219,
    BACK_SLASH       = 220,
    BRACKET_CLOSE    = 221,
    QUOTE            = 222,
}

export declare enum KeyProcessingState {
    Consume     = 0,
    Passthrough = 1,
    Disabled    = 2,
}

export declare enum LayoutAlignment {
    Start  = 0,
    Center = 1,
    End    = 2,
}

export declare enum LayoutFlex {
    Shrink = "Shrink",
    Grow   = "Grow",
}

export declare enum LayoutSizeType {
    Default    = 0,
    Percentage = 1,
}

export declare enum ListPaneEntryType {
    Button = 0,
    Bool   = 1,
    Image  = 2,
    Text   = 3,
}

export declare enum ListPaneSlotVariant {
    Primary   = 0,
    Secondary = 1,
    Muted     = 2,
}

export declare enum ListPaneViewSortType {
    Default = 0,
    AtoZ    = 1,
    ZtoA    = 2,
}

export declare enum ListViewControlFilterFlags {
    None = 0,
    Name = 1,
    Tag  = 2,
    All  = 3,
}

export enum LogChannel {
    Message = 1,
    Toast   = 2,
    All     = 3,
}

export enum MinimapMarkerType {
    Multiplayer = 0,
    Location    = 1,
    Custom      = 2,
}

export enum MinimapTrackingMode {
    FollowPlayer = 0,
    FreeCenter   = 1,
}

export enum MinimapViewType {
    BlockView       = 0,
    CustomBiomeView = 1,
}

export declare enum ModalDialogResponseType {
    Confirm = "confirm",
    Dismiss = "dismiss",
    Error   = "error",
}

export declare enum ModalDialogType {
    DataPicker = 0,
    Custom     = 1,
}

export enum MouseActionCategory {
    Button = 1,
    Wheel  = 2,
    Drag   = 3,
}

export declare enum MouseActionType {
    LeftButton   = 1,
    MiddleButton = 2,
    RightButton  = 3,
    Wheel        = 4,
}

export enum MouseCursorIconType {
    Crosshair  = "Crosshair",
    Default    = "Default",
    Move       = "Move",
    NotAllowed = "NotAllowed",
    Wait       = "Wait",
}

export declare enum MouseInputType {
    ButtonDown = 1,
    ButtonUp   = 2,
    WheelIn    = 3,
    WheelOut   = 4,
    DragStart  = 5,
    Drag       = 6,
    DragEnd    = 7,
}

export declare enum NumberPropertyItemVariant {
    InputField          = 0,
    InputFieldAndSlider = 1,
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

export declare enum PaneLayoutType {
    Vertical   = 0,
    Horizontal = 1,
    Wrapping   = 2,
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
    Text          = 0,
    Box           = 1,
    Line          = 2,
    Disc          = 4,
    AxialSphere   = 5,
    Cylinder      = 7,
    Pyramid       = 8,
    Ellipsoid     = 9,
    Cuboid        = 10,
    Cone          = 11,
    WireframeMesh = 12,
}

export declare enum ProgressIndicatorPropertyItemVariant {
    Spinner     = 0,
    ProgressBar = 1,
}

export enum ProjectExportType {
    PlayableWorld  = 0,
    ProjectBackup  = 1,
    WorldTemplate  = 2,
    ShareableWorld = 3,
}

export declare enum PropertyItemType {
    BlockList         = "editorUI:BlockList",
    BlockTable        = "editorUI:BlockTable",
    Boolean           = "editorUI:Boolean",
    Button            = "editorUI:Button",
    ButtonPane        = "editorUI:ButtonPane",
    CollectionTree    = "editorUI:CollectionTree",
    ColorPicker       = "editorUI:ColorPicker",
    ComboBox          = "editorUI:ComboBox",
    DataTable         = "editorUI:DataTable",
    Divider           = "editorUI:Divider",
    Dropdown          = "editorUI:Dropdown",
    Image             = "editorUI:Image",
    Link              = "editorUI:Link",
    ListPane          = "editorUI:ListPane",
    Menu              = "editorUI:Menu",
    Number            = "editorUI:Number",
    ProgressIndicator = "editorUI:ProgressIndicator",
    String            = "editorUI:String",
    ProxyPane         = "editorUI:ProxyPane",
    SubPane           = "editorUI:SubPane",
    Text              = "editorUI:Text",
    ToggleGroup       = "editorUI:ToggleGroup",
    Vector2           = "editorUI:Vector2",
    Vector3           = "editorUI:Vector3",
    ColorTimeline     = "editorUI:ColorTimeline",
    NumberTimeline    = "editorUI:NumberTimeline",
    Vector3Timeline   = "editorUI:Vector3Timeline",
    Minimap           = "editorUI:Minimap",
    TagContainer      = "editorUI:TagContainer",
}

export enum RenderPlaneGridResolution {
    EightBlocks   = "EightBlocks",
    FourBlocks    = "FourBlocks",
    None          = "None",
    OneBlock      = "OneBlock",
    SixteenBlocks = "SixteenBlocks",
}

export declare enum RootPaneLocation {
    Drawer   = 0,
    Viewport = 1,
    Bottom   = 2,
}

export enum SelectionVolumeEventType {
    Set       = 1,
    Add       = 2,
    Remove    = 3,
    Translate = 4,
    Move      = 5,
    Clear     = 6,
}

export declare enum ServerUXEventType {
    UpdatePropertyPane             = 1,
    DestroyPropertyPane            = 2,
    UpdateMenu                     = 3,
    DestroyMenu                    = 4,
    UpdateStatusBarItem            = 5,
    DestroyStatusBarItem           = 6,
    UpdateModalToolOption          = 7,
    DestroyModalToolOption         = 8,
    BindActionToControl            = 11,
    RemoveActionBindingFromControl = 12,
    UpdatePropertyItem             = 13,
    DestroyPropertyItem            = 14,
    OnNavigateFromEditor           = 15,
    UpdateClientPanelVisibility    = 18,
    ActivateTutorial               = 19,
    ModalDialogActivation          = 20,
    ModalDialogDeactivation        = 21,
}

export enum SpeedSettingsProperty {
    FlySpeedMultiplier = "FlySpeedMultiplier",
}

export enum SplineType {
    Line    = 0,
    Hermite = 1,
}

export declare enum StatusBarAlignment {
    Right = 0,
    Left  = 1,
}

export enum StructureSource {
    BehaviorPack  = 0,
    EditorProject = 1,
    File          = 2,
    Level         = 3,
}

export declare enum TagContainerActionType {
    TagAdded   = 0,
    TagRemoved = 1,
}

export declare enum TagContainerVariant {
    Primary  = 0,
    Inverted = 1,
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
    PrimaryAttention             = "PrimaryAttention",
    PrimaryBackground1           = "PrimaryBackground1",
    PrimaryBackground2           = "PrimaryBackground2",
    PrimaryBackground3           = "PrimaryBackground3",
    PrimaryBackground4           = "PrimaryBackground4",
    PrimaryDefault               = "PrimaryDefault",
    PrimaryDisable               = "PrimaryDisable",
    PrimaryMute                  = "PrimaryMute",
    ScrollBar                    = "ScrollBar",
    SecondaryActive              = "SecondaryActive",
    SecondaryAttention           = "SecondaryAttention",
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
    RenderPlane   = "RenderPlane",
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
    get(property: AudioSettingsProperty): boolean | number | undefined;
    getAll(): Record<string, boolean | number>;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    set(property: AudioSettingsProperty, value: boolean | number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setAll(properties: Record<string, boolean | number>): void;
}

export class BlockPalette {
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    getItem(index: number): IBlockPaletteItem;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    removeItemAt(index: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    removeItems(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     */
    addOrReplacePalette(paletteId: string, palette: BlockPalette): void;
    getPalette(paletteId: string): BlockPalette | undefined;
    getPaletteIdList(): string[];
    /**
     * @throws This function can throw errors.
     */
    getPaletteItem(paletteId: string, index: number): IBlockPaletteItem;
    getPrimaryPalette(): BlockPalette;
    /**
     * @throws This function can throw errors.
     */
    getSelectedBlockType(): minecraftserver.BlockType;
    getSelectedItem(): IBlockPaletteItem;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    removePalette(paletteId: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setPaletteItem(paletteId: string, index: number, item: IBlockPaletteItem): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setPrimaryPalette(paletteId: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: BlockPaletteSelectedItemChangeAfterEvent) => void,
    ): (arg0: BlockPaletteSelectedItemChangeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: BlockPaletteSelectedItemChangeAfterEvent) => void): void;
}

export class BlockUtilities {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     */
    findObscuredBlocksWithinVolume(
        volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
    ): RelativeVolumeListBlockVolume;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getContiguousSelection(properties?: ContiguousSelectionProperties): minecraftserver.CompoundBlockVolume;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getDimensionLocationBoundingBox(): minecraftserver.BlockBoundingBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getDimensionMaxLocation(): minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getDimensionMinLocation(): minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getFacePreviewSelection(properties?: QuickExtrudeProperties): minecraftserver.ListBlockVolume;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    isLocationInsideCurrentDimensionBounds(
        locationOrVolumeOrBounds: 
            | minecraftserver.BlockBoundingBox
            | minecraftserver.BlockVolumeBase
            | RelativeVolumeListBlockVolume
            | minecraftserver.Vector3,
    ): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    quickExtrude(properties?: QuickExtrudeProperties): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    shrinkWrapVolume(
        volume: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
    ): RelativeVolumeListBlockVolume;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     */
    activateBrushTool(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    beginPainting(onComplete: (arg0: PaintCompletionState) => void): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    clearBlockStateOverrides(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    deactivateBrushTool(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    disableItemPlacement(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    enableItemPlacement(itemType: minecraftserver.ItemType, data?: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    endPainting(cancelled: boolean): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getBrushShapeOffset(): minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getDirectionalPlacementMode(): BrushDirectionalPlacementMode;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getInverseEraseMode(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    isBrushPaintBusy(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    pushBlockStateOverride(stateName: string, stateValue: boolean | number | string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setBlockFacePlacementBasedOnCamera(enabled: boolean): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setBrushMask(mask: BlockMaskList): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setBrushShape(shape: minecraftserver.Vector3[] | RelativeVolumeListBlockVolume): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setBrushShapeOffset(offset: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setBrushShapeVisible(visible: boolean): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setDirectionalPlacementMode(directionalPlacementMode: BrushDirectionalPlacementMode): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setElevationBrushRadius(elevationBrushRadius: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setElevationFalloff(elevationFalloff: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setElevationMode(elevationMode: BrushElevationMode): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setElevationSampleLayers(elevationSampleLayers: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setFlattenMode(flattenMode: FlattenMode): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setFlattenSmoothing(flattenSmoothing: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setFloorBlockOverride(floorBlockOverride: boolean): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setInverseEraseMode(inverseEraseMode: boolean): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setTerrainStrength(terrainStrength: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    singlePaint(onComplete: (arg0: PaintCompletionState) => void): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ClipboardChangeAfterEvent) => void): (arg0: ClipboardChangeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    clear(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getPredictedWriteVolume(
        location: minecraftserver.Vector3,
        options?: ClipboardWriteOptions,
    ): RelativeVolumeListBlockVolume;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    readFromStructure(structure: EditorStructure): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    readFromWorld(source: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    writeToWorld(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): boolean;
}

export class ClipboardManager {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly clipboard: ClipboardItem;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: CurrentThemeChangeAfterEvent) => void): (arg0: CurrentThemeChangeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: CurrentThemeColorChangeAfterEvent) => void,
    ): (arg0: CurrentThemeColorChangeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: CurrentThemeColorChangeAfterEvent) => void): void;
}

export class Cursor {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly faceDirection: number;
    /**
     * @throws This property can throw when used.
     */
    readonly isVisible: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly maxViewBlockDistance: number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getDefaultProperties(): CursorProperties;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getPosition(): minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getProperties(): CursorProperties;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getRay(): CursorRay;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    hide(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    moveBy(offset: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    popPropertiesById(identifier: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    pushPropertiesById(properties: CursorProperties, identifier: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    resetToDefaultState(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setProperties(properties: CursorProperties): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    show(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: CursorPropertiesChangeAfterEvent) => void,
    ): (arg0: CursorPropertiesChangeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
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
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly description: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly displayName: string;
    readonly id: string;
    readonly isValid: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly normalizedOrigin: minecraftserver.Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly notes: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly offset: minecraftserver.Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly originalWorldLocation: minecraftserver.Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly size: minecraftserver.Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly structureFullName: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly structureName: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    readonly structureNamespace: string;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    getBlockPermutation(location: minecraftserver.Vector3): minecraftserver.BlockPermutation | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    getIsWaterlogged(location: minecraftserver.Vector3): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidStructureError}
     */
    getTags(): string[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    createEmpty(fullName: string, size: minecraftserver.Vector3): EditorStructure;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    createFromClipboardItem(item: ClipboardItem, fullName: string): EditorStructure;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    deleteStructure(id: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getExistingTags(): string[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getStructure(id: string): EditorStructure;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    searchStructures(options?: EditorStructureSearchOptions): EditorStructure[];
}

export class ExportManager {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    beginExportProject(options: GameOptions): Promise<ExportResult>;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    canExportProject(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getGameOptions(useDefault?: boolean): GameOptions;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
    readonly guidePlaneManager: GuidePlaneManager;
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
    get(property: GraphicsSettingsProperty): boolean | number | string | undefined;
    getAll(): Record<string, boolean | number | string>;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    set(property: GraphicsSettingsProperty, value: boolean | number | string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setAll(properties: Record<string, boolean | number | string>): void;
}

export class GuidePlaneManager {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    allPlanesVisible: boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addPlane(
        origin: minecraftserver.Vector3,
        normal: minecraftserver.Vector3,
        visible: boolean,
        outlineColor: minecraftserver.RGBA,
        fillColor: minecraftserver.RGBA,
    ): string;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getPlane(planeId: string): GuidePlane | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getPlanes(): GuidePlane[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    removePlane(planeId: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setPlaneColors(planeId: string, outlineColor: minecraftserver.RGBA, fillColor: minecraftserver.RGBA): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setPlaneNormal(planeId: string, normal: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setPlaneOrigin(planeId: string, origin: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setPlaneVisibility(planeId: string, visible: boolean): void;
}

export class IBlockPaletteItem {
    private constructor();
    getBlock(): minecraftserver.BlockType | undefined;
    getDisplayName(): string | undefined;
    getType(): BlockPaletteItemType;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string): void;
}

export class Logger {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    debug(message: LocalizationEntry | string, properties?: LogProperties): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    error(message: LocalizationEntry | string, properties?: LogProperties): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    info(message: LocalizationEntry | string, properties?: LogProperties): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @throws This property can throw when used.
     */
    readonly log: Logger;
    readonly simulation: SimulationState;
    readonly worldGeneratorType?: WorldGeneratorType;
}

export class MinimapItem {
    private constructor();
    readonly freeCenter: minecraftserver.VectorXZ;
    readonly id: string;
    readonly isActive: boolean;
    readonly yLevel: number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addCustomMarker(iconIdentifier: string, data: MinimapMarkerData[], dimensionId: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addLocationMarker(data: MinimapMarkerData[], dimensionId: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addMultiplayerMarker(): void;
    getMarkerTypes(): MinimapMarkerType[];
    /**
     * @throws This function can throw errors.
     */
    getPlayerColor(playerId: string): minecraftserver.RGBA;
    hasCustomGroup(iconIdentifier: string): boolean;
    hasMarkerOfType(type: MinimapMarkerType): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    removeAllCustomMarkers(dimensionId: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    removeCustomMarker(iconIdentifier: string, dimensionId: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    removeLocationMarker(dimensionId: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    removeMultiplayerMarker(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setActive(active: boolean): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setFreeCenter(center: minecraftserver.VectorXZ): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setSize(mapWidth: number, mapHeight: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setTrackingMode(mode: MinimapTrackingMode): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setViewType(viewType: MinimapViewType): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setYLevel(yLevel: number): void;
}

export class MinimapManager {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    createMinimap(
        viewType: MinimapViewType,
        mapWidth: number,
        mapHeight: number,
        options?: MinimapCreateOptions,
    ): MinimapItem;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    destroyMinimap(minimapId: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getAllMinimapIds(): string[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getMinimap(minimapId: string): MinimapItem;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setVanillaBiomeColorMap(colorMap: Record<string, minecraftserver.RGB>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    updateVanillaColorMap(biomeType: minecraftserver.BiomeType, color: minecraftserver.RGB): void;
}

export class ModeChangeAfterEvent {
    private constructor();
    readonly mode: EditorMode;
}

export class ModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ModeChangeAfterEvent) => void): (arg0: ModeChangeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ModeChangeAfterEvent) => void): void;
}

export class PlaytestManager {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    beginPlaytest(options: GameOptions): Promise<PlaytestSessionResult>;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getPlaytestSessionAvailability(): PlaytestSessionResult;
}

// @ts-ignore
export class ProbabilityBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string, weight: number): void;
    getBlocks(): WeightedBlock[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This property can't be edited in restricted-execution mode.
     */
    origin?: minecraftserver.Vector3;
    readonly volumeCount: number;
    constructor(origin?: minecraftserver.Vector3);
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     */
    clear(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getVolumeList(): minecraftserver.BlockVolume[];
    hasAdjacent(location: minecraftserver.Vector3, normalizedOffset: minecraftserver.Vector3): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    moveTo(location: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     */
    translate(offset: minecraftserver.Vector3): void;
}

export class SelectionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: SelectionEventAfterEvent) => void): (arg0: SelectionEventAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     */
    clear(): void;
    get(): RelativeVolumeListBlockVolume;
    /**
     * @throws This function can throw errors.
     */
    getBoundingBox(): minecraftserver.BlockBoundingBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    moveTo(location: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     */
    deselectBlocks(blockIdentifier: string): Promise<number>;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    generateManifest(): Promise<SelectionManifestData>;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getCurrentManifest(): SelectionManifestData | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
    constructor(displayName?: string);
}

export class SimulationState {
    private constructor();
    isPaused(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: SimulationStateAfterEvent) => void): (arg0: SimulationStateAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: SimulationStateAfterEvent) => void): void;
}

export class SpeedSettings {
    private constructor();
    get(property: SpeedSettingsProperty): number | undefined;
    getAll(): Record<string, number>;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    set(property: SpeedSettingsProperty, value: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setAll(properties: Record<string, number>): void;
}

export class ThemeSettings {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addNewTheme(id: string, name?: string, sourceThemeId?: string): void;
    canThemeBeModified(id: string): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    deleteTheme(id: string): void;
    getCurrentTheme(): string;
    getThemeColors(id: string): Record<string, minecraftserver.RGBA> | undefined;
    getThemeIdList(): string[];
    /**
     * @throws This function can throw errors.
     */
    getThemeName(id: string): string;
    resolveColorKey(key: ThemeSettingsColorKey): minecraftserver.RGBA;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setCurrentTheme(id: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setThemeName(id: string, name: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    updateThemeColor(id: string, key: ThemeSettingsColorKey, newColor: minecraftserver.RGBA): void;
}

export class TransactionManager {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addEntityOperation(entity: minecraftserver.Entity, type: EntityOperationType): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addUserDefinedOperation(
        transactionHandlerId: UserDefinedTransactionHandlerId,
        operationData: string,
        operationName?: string,
    ): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    commitOpenTransaction(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    commitTrackedChanges(): number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    createUserDefinedTransactionHandler(
        undoClosure: (arg0: string) => void,
        redoClosure: (arg0: string) => void,
    ): UserDefinedTransactionHandlerId;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    discardOpenTransaction(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    discardTrackedChanges(): number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    isBusy(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    openTransaction(name: string): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    redo(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    redoSize(): number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    trackBlockChangeArea(from: minecraftserver.Vector3, to: minecraftserver.Vector3): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    trackBlockChangeList(locations: minecraftserver.Vector3[]): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    trackBlockChangeVolume(blockVolume: minecraftserver.BlockVolumeBase): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    undo(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This property can't be edited in restricted-execution mode.
     */
    bindPositionToBlockCursor: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    collisionOffset: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    collisionRadius: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    collisionType: WidgetCollisionType;
    dimensionId?: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetError}
     */
    readonly group: WidgetGroup;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    ignoreEditorModeVisibilityOverride: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    location: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    lockPositionToSurface: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetError}
     */
    readonly selectable: boolean;
    selected: boolean;
    showBoundingBox: boolean;
    showCollisionRadius: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    snapToBlockLocation: boolean;
    visible: boolean;
    readonly widgetName: string;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addBoundingBox(
        componentName: string,
        size: minecraftserver.Vector3,
        options?: WidgetComponentBoundingBoxOptions,
    ): WidgetComponentBoundingBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addClipboardComponent(
        componentName: string,
        clipboardItem?: ClipboardItem | EditorStructure,
        options?: WidgetComponentClipboardOptions,
    ): WidgetComponentClipboard;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addEntityComponent(
        componentName: string,
        actorNameId: string,
        options?: WidgetComponentEntityOptions,
    ): WidgetComponentEntity;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addGizmoComponent(componentName: string, options?: WidgetComponentGizmoOptions): WidgetComponentGizmo;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addGridComponent(componentName: string, options?: WidgetComponentGridOptions): WidgetComponentGrid;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addGuideComponent(componentName: string, options?: WidgetComponentGuideOptions): WidgetComponentGuide;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addRenderPlaneComponent(
        componentName: string,
        options?: WidgetComponentRenderPlaneOptions,
    ): WidgetComponentRenderPlane;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
            | WidgetComponentRenderPrimitiveTypePyramid
            | WidgetComponentRenderPrimitiveTypeWireframeMesh,
        options?: WidgetComponentRenderPrimitiveOptions,
    ): WidgetComponentRenderPrimitive;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addSplineComponent(componentName: string, options?: WidgetComponentSplineOptions): WidgetComponentSpline;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addTextComponent(componentName: string, label: string, options?: WidgetComponentTextOptions): WidgetComponentText;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addVolumeOutline(
        componentName: string,
        volume?: minecraftserver.BlockVolumeBase | RelativeVolumeListBlockVolume,
        options?: WidgetComponentVolumeOutlineOptions,
    ): WidgetComponentVolumeOutline;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    delete(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    deleteComponent(componentOrName: string | WidgetComponentBase): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getComponent(componentName: string): WidgetComponentBase;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetError}
     */
    getComponents(): WidgetComponentBase[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly componentType: WidgetComponentType;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly location: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    lockToSurface: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly name: string;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    offset: minecraftserver.Vector3;
    readonly valid: boolean;
    visible: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly widget: Widget;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This property can't be edited in restricted-execution mode.
     */
    boundsOffset: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    enableResizeHandles: Axis;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    hullColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    mirror: minecraftserver.StructureMirrorAxis;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    normalizedOrigin: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    outlineColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    rotation: minecraftserver.StructureRotation;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    showWorldIntersections: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    size: minecraftserver.Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly transformedWorldVolume: minecraftserver.BlockVolume;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    visibleHull: boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    deactivateHandles(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This property can't be edited in restricted-execution mode.
     */
    clipboardOffset: minecraftserver.Vector3;
    highlightHullColor: minecraftserver.RGBA;
    highlightOutlineColor: minecraftserver.RGBA;
    hullColor: minecraftserver.RGBA;
    mirror: minecraftserver.StructureMirrorAxis;
    normalizedOrigin: minecraftserver.Vector3;
    outlineColor: minecraftserver.RGBA;
    rotation: minecraftserver.StructureRotation;
    showOutline: boolean;
}

// @ts-ignore
export class WidgetComponentEntity extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    clickable: boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
    activated: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    enabledAxes: Axis;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    normalizedOffsetOverride?: minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This property can't be edited in restricted-execution mode.
     */
    gridColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    gridCount: minecraftserver.Vector2;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    gridSize: minecraftserver.Vector2;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    plane: Plane;
}

// @ts-ignore
export class WidgetComponentGuide extends WidgetComponentBase {
    private constructor();
}

// @ts-ignore
export class WidgetComponentRenderPlane extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    fillColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    gridResolution: RenderPlaneGridResolution;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    maxSizeChunks: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    normal: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    outlineColor: minecraftserver.RGBA;
}

// @ts-ignore
export class WidgetComponentRenderPrimitive extends WidgetComponentBase {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     *
     * {@link InvalidWidgetError}
     */
    readonly primitiveType: PrimitiveType;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
            | WidgetComponentRenderPrimitiveTypePyramid
            | WidgetComponentRenderPrimitiveTypeWireframeMesh,
    ): void;
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeAxialSphere extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    color?: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    radius: number;
    constructor(center: minecraftserver.Vector3, radius: number, color?: minecraftserver.RGBA);
}

export class WidgetComponentRenderPrimitiveTypeBase {
    private constructor();
    readonly primitiveType: PrimitiveType;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    renderPriority: number;
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeBox extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    size?: minecraftserver.Vector3;
    constructor(center: minecraftserver.Vector3, color: minecraftserver.RGBA, size?: minecraftserver.Vector3);
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeCone extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    alpha?: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    height: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    numSegments?: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    radiusX: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    radiusZ: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    rotation?: minecraftserver.Vector3;
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
     * @remarks This property can't be edited in restricted-execution mode.
     */
    alpha?: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    lengthX: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    lengthY: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    lengthZ: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    rotation?: minecraftserver.Vector3;
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
     * @remarks This property can't be edited in restricted-execution mode.
     */
    alpha?: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    height: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    radiusX: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    radiusZ: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    rotation?: minecraftserver.Vector3;
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
     * @remarks This property can't be edited in restricted-execution mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    radius: number;
    constructor(center: minecraftserver.Vector3, radius: number, color: minecraftserver.RGBA);
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypeEllipsoid extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    alpha?: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    radii: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    rotation?: minecraftserver.Vector3;
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
     * @remarks This property can't be edited in restricted-execution mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    end: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    start: minecraftserver.Vector3;
    constructor(start: minecraftserver.Vector3, end: minecraftserver.Vector3, color: minecraftserver.RGBA);
}

// @ts-ignore
export class WidgetComponentRenderPrimitiveTypePyramid extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    alpha?: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    height: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    rotation?: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    widthX: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    widthZ?: number;
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
export class WidgetComponentRenderPrimitiveTypeWireframeMesh extends WidgetComponentRenderPrimitiveTypeBase {
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    alpha?: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    center: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    meshId: string;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    rotation?: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    scale?: minecraftserver.Vector3;
    constructor(
        center: minecraftserver.Vector3,
        meshId: string,
        color: minecraftserver.RGBA,
        options?: WireframeMeshOptions,
    );
}

// @ts-ignore
export class WidgetComponentSpline extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    splineType: SplineType;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getInterpolatedPoints(maxPointsPerControlSegment?: number): minecraftserver.Vector3[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This property can't be edited in restricted-execution mode.
     */
    color: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    label: string;
}

// @ts-ignore
export class WidgetComponentVolumeOutline extends WidgetComponentBase {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    highlightHullColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    highlightOutlineColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    hullColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    mirror: minecraftserver.StructureMirrorAxis;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    normalizedOrigin: minecraftserver.Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    outlineColor: minecraftserver.RGBA;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    rotation: minecraftserver.StructureRotation;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    showHighlightOutline: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    showOutline: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetComponentError}
     */
    readonly transformedWorldVolume: minecraftserver.BlockVolume;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    volumeOffset: minecraftserver.Vector3;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetComponentError}
     */
    getVolume(): RelativeVolumeListBlockVolume | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @throws This property can throw when used.
     *
     * {@link InvalidWidgetGroupError}
     */
    readonly selectedWidgetCount: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    visible: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    visibleBounds: boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    createWidget(location: minecraftserver.Vector3, options?: WidgetCreateOptions): Widget;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    delete(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    deleteWidget(widgetToDelete: Widget): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWidgetGroupError}
     */
    deselectAllWidgets(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    createGroup(options?: WidgetGroupCreateOptions): WidgetGroup;
    /**
     * @remarks This function can't be called in restricted-execution mode.
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
    excludeAirBlocks?: boolean;
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
    maxCommandChainLength?: number;
    mobGriefing?: boolean;
    mobLoot?: boolean;
    mobSpawning?: boolean;
    multiplayerGame?: boolean;
    naturalRegeneration?: boolean;
    playerAccess?: GamePublishSetting;
    playerPermissions?: minecraftserver.PlayerPermissionLevel;
    playerWaypoints?: minecraftserver.PlayerWaypointsMode;
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

export interface GuidePlane {
    fillColor: minecraftserver.RGBA;
    normal: minecraftserver.Vector3;
    origin: minecraftserver.Vector3;
    outlineColor: minecraftserver.RGBA;
    planeId: string;
    visible: boolean;
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

export interface MinimapCreateOptions {
    dataId?: string;
    freeCenter?: minecraftserver.VectorXZ;
    trackingMode?: MinimapTrackingMode;
    yLevel?: number;
}

export interface MinimapMarkerData {
    clickable: boolean;
    color: minecraftserver.RGBA;
    label: string;
    position: minecraftserver.Vector3;
    rotation: number;
    tooltip: string;
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
export interface WidgetComponentGuideOptions extends WidgetComponentBaseOptions {}

// @ts-ignore
export interface WidgetComponentRenderPlaneOptions extends WidgetComponentBaseOptions {
    fillColor?: minecraftserver.RGBA;
    gridResolution?: RenderPlaneGridResolution;
    maxSizeChunks?: number;
    normal?: minecraftserver.Vector3;
    outlineColor?: minecraftserver.RGBA;
}

// @ts-ignore
export interface WidgetComponentRenderPrimitiveOptions extends WidgetComponentBaseOptions {}

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

export interface WireframeMeshOptions {
    alpha?: number;
    rotation?: minecraftserver.Vector3;
    scale?: minecraftserver.Vector3;
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

// @ts-ignore
export class TransactionManagerNoChangesError extends Error {
    private constructor();
}

export const editor: MinecraftEditor;
