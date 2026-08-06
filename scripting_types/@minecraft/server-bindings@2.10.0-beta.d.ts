// Type definitions for Minecraft Bedrock Edition Script APIs
// Project: https://github.com/xKingDark/bedrock-metadata
// Definitions by: xKingDark <https://github.com/xKingDark>
/**
 * @beta
 * @packageDocumentation
 * Manifest Details
 * ```json
 * { "module_name": "@minecraft/server-bindings", "version": "2.10.0-beta" }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
export enum AimAssistTargetMode {
    Angle    = "Angle",
    Distance = "Distance",
}

export enum BlockComponentTypes {
    DynamicProperties         = "minecraft:dynamic_properties",
    FluidContainer            = "minecraft:fluid_container",
    Instrument                = "minecraft:instrument_sound",
    Inventory                 = "minecraft:inventory",
    MapColor                  = "minecraft:map_color",
    Movable                   = "minecraft:movable",
    Piston                    = "minecraft:piston",
    PrecipitationInteractions = "minecraft:precipitation_interactions",
    RecordPlayer              = "minecraft:record_player",
    RedstoneProducer          = "minecraft:redstone_producer",
    Sign                      = "minecraft:sign",
}

export enum BlockPistonState {
    Expanded   = "Expanded",
    Expanding  = "Expanding",
    Retracted  = "Retracted",
    Retracting = "Retracting",
}

export enum BlockVolumeIntersection {
    Disjoint   = 0,
    Contains   = 1,
    Intersects = 2,
}

export enum BookErrorReason {
    ExceedsMaxPageLength = "ExceedsMaxPageLength",
    ExceedsMaxPages      = "ExceedsMaxPages",
    ExceedsTitleLength   = "ExceedsTitleLength",
}

export enum ButtonState {
    Pressed  = "Pressed",
    Released = "Released",
}

export enum CameraShakeType {
    Positional = "Positional",
    Rotational = "Rotational",
}

export enum CloneMode {
    Copy      = 0,
    ForceCopy = 1,
    Move      = 2,
}

export enum CommandPermissionLevel {
    Any           = 0,
    GameDirectors = 1,
    Admin         = 2,
    Host          = 3,
    Owner         = 4,
}

export enum CompoundBlockVolumeAction {
    Add      = 0,
    Subtract = 1,
}

export enum CompoundBlockVolumePositionRelativity {
    Relative = 0,
    Absolute = 1,
}

export enum ContainerRulesErrorReason {
    BannedItem        = "BannedItem",
    NestedStorageItem = "NestedStorageItem",
    NotAllowedItem    = "NotAllowedItem",
    OverWeightLimit   = "OverWeightLimit",
    ZeroWeightItem    = "ZeroWeightItem",
}

export enum ControlScheme {
    CameraRelative             = "CameraRelative",
    CameraRelativeStrafe       = "CameraRelativeStrafe",
    LockedPlayerRelativeStrafe = "LockedPlayerRelativeStrafe",
    PlayerRelative             = "PlayerRelative",
    PlayerRelativeStrafe       = "PlayerRelativeStrafe",
}

export enum CustomCommandErrorReason {
    AlreadyRegistered     = "AlreadyRegistered",
    EnumDependencyMissing = "EnumDependencyMissing",
    NamespaceMismatch     = "NamespaceMismatch",
    ParameterLimit        = "ParameterLimit",
    RegistryInvalid       = "RegistryInvalid",
    RegistryReadOnly      = "RegistryReadOnly",
    UnexpectedEnumName    = "UnexpectedEnumName",
}

export enum CustomCommandParamType {
    BlockType      = "BlockType",
    Boolean        = "Boolean",
    EntitySelector = "EntitySelector",
    EntityType     = "EntityType",
    Enum           = "Enum",
    Float          = "Float",
    Integer        = "Integer",
    ItemType       = "ItemType",
    Location       = "Location",
    PlayerSelector = "PlayerSelector",
    String         = "String",
}

export enum CustomCommandSource {
    Block       = "Block",
    Entity      = "Entity",
    NPCDialogue = "NPCDialogue",
    Server      = "Server",
}

export enum CustomCommandStatus {
    Success = 0,
    Failure = 1,
}

export enum CustomComponentNameErrorReason {
    NoNamespace         = 1,
    DisallowedNamespace = 2,
}

export enum Difficulty {
    Easy     = "Easy",
    Hard     = "Hard",
    Normal   = "Normal",
    Peaceful = "Peaceful",
}

export enum Direction {
    Down  = "Down",
    East  = "East",
    North = "North",
    South = "South",
    Up    = "Up",
    West  = "West",
}

export enum DisplaySlotId {
    BelowName = "BelowName",
    List      = "List",
    Sidebar   = "Sidebar",
}

export enum DyeColor {
    Black     = "Black",
    Blue      = "Blue",
    Brown     = "Brown",
    Cyan      = "Cyan",
    Gray      = "Gray",
    Green     = "Green",
    LightBlue = "LightBlue",
    Lime      = "Lime",
    Magenta   = "Magenta",
    Orange    = "Orange",
    Pink      = "Pink",
    Purple    = "Purple",
    Red       = "Red",
    Silver    = "Silver",
    White     = "White",
    Yellow    = "Yellow",
}

export enum EasingType {
    InBack       = "InBack",
    InBounce     = "InBounce",
    InCirc       = "InCirc",
    InCubic      = "InCubic",
    InElastic    = "InElastic",
    InExpo       = "InExpo",
    InOutBack    = "InOutBack",
    InOutBounce  = "InOutBounce",
    InOutCirc    = "InOutCirc",
    InOutCubic   = "InOutCubic",
    InOutElastic = "InOutElastic",
    InOutExpo    = "InOutExpo",
    InOutQuad    = "InOutQuad",
    InOutQuart   = "InOutQuart",
    InOutQuint   = "InOutQuint",
    InOutSine    = "InOutSine",
    InQuad       = "InQuad",
    InQuart      = "InQuart",
    InQuint      = "InQuint",
    InSine       = "InSine",
    Linear       = "Linear",
    OutBack      = "OutBack",
    OutBounce    = "OutBounce",
    OutCirc      = "OutCirc",
    OutCubic     = "OutCubic",
    OutElastic   = "OutElastic",
    OutExpo      = "OutExpo",
    OutQuad      = "OutQuad",
    OutQuart     = "OutQuart",
    OutQuint     = "OutQuint",
    OutSine      = "OutSine",
    Spring       = "Spring",
}

export enum EnchantmentSlot {
    ArmorFeet    = "ArmorFeet",
    ArmorHead    = "ArmorHead",
    ArmorLegs    = "ArmorLegs",
    ArmorTorso   = "ArmorTorso",
    Axe          = "Axe",
    Bow          = "Bow",
    CarrotStick  = "CarrotStick",
    CosmeticHead = "CosmeticHead",
    Crossbow     = "Crossbow",
    Elytra       = "Elytra",
    FishingRod   = "FishingRod",
    Flintsteel   = "Flintsteel",
    Hoe          = "Hoe",
    MeleeSpear   = "MeleeSpear",
    Pickaxe      = "Pickaxe",
    Shears       = "Shears",
    Shield       = "Shield",
    Shovel       = "Shovel",
    Spear        = "Spear",
    Sword        = "Sword",
}

export enum EntityAttachPoint {
    Body              = "Body",
    BreathingPoint    = "BreathingPoint",
    DropAttachPoint   = "DropAttachPoint",
    ExplosionPoint    = "ExplosionPoint",
    Eyes              = "Eyes",
    Feet              = "Feet",
    Head              = "Head",
    Mouth             = "Mouth",
    WeaponAttachPoint = "WeaponAttachPoint",
}

export enum EntityComponentTypes {
    AddRider              = "minecraft:addrider",
    Ageable               = "minecraft:ageable",
    Breathable            = "minecraft:breathable",
    CanClimb              = "minecraft:can_climb",
    CanFly                = "minecraft:can_fly",
    CanPowerJump          = "minecraft:can_power_jump",
    Color                 = "minecraft:color",
    Color2                = "minecraft:color2",
    CursorInventory       = "minecraft:cursor_inventory",
    EnderInventory        = "minecraft:ender_inventory",
    Equippable            = "minecraft:equippable",
    Exhaustion            = "minecraft:player.exhaustion",
    FireImmune            = "minecraft:fire_immune",
    FloatsInLiquid        = "minecraft:floats_in_liquid",
    FlyingSpeed           = "minecraft:flying_speed",
    FrictionModifier      = "minecraft:friction_modifier",
    Healable              = "minecraft:healable",
    Health                = "minecraft:health",
    Hunger                = "minecraft:player.hunger",
    Inventory             = "minecraft:inventory",
    IsBaby                = "minecraft:is_baby",
    IsCharged             = "minecraft:is_charged",
    IsChested             = "minecraft:is_chested",
    IsDyeable             = "minecraft:is_dyeable",
    IsHiddenWhenInvisible = "minecraft:is_hidden_when_invisible",
    IsIgnited             = "minecraft:is_ignited",
    IsIllagerCaptain      = "minecraft:is_illager_captain",
    IsSaddled             = "minecraft:is_saddled",
    IsShaking             = "minecraft:is_shaking",
    IsSheared             = "minecraft:is_sheared",
    IsStackable           = "minecraft:is_stackable",
    IsStunned             = "minecraft:is_stunned",
    IsTamed               = "minecraft:is_tamed",
    Item                  = "minecraft:item",
    LavaMovement          = "minecraft:lava_movement",
    Leashable             = "minecraft:leashable",
    MarkVariant           = "minecraft:mark_variant",
    Movement              = "minecraft:movement",
    MovementAmphibious    = "minecraft:movement.amphibious",
    MovementBasic         = "minecraft:movement.basic",
    MovementFly           = "minecraft:movement.fly",
    MovementGeneric       = "minecraft:movement.generic",
    MovementGlide         = "minecraft:movement.glide",
    MovementHover         = "minecraft:movement.hover",
    MovementJump          = "minecraft:movement.jump",
    MovementSkip          = "minecraft:movement.skip",
    MovementSway          = "minecraft:movement.sway",
    NavigationClimb       = "minecraft:navigation.climb",
    NavigationFloat       = "minecraft:navigation.float",
    NavigationFly         = "minecraft:navigation.fly",
    NavigationGeneric     = "minecraft:navigation.generic",
    NavigationHover       = "minecraft:navigation.hover",
    NavigationWalk        = "minecraft:navigation.walk",
    Npc                   = "minecraft:npc",
    OnFire                = "minecraft:onfire",
    Projectile            = "minecraft:projectile",
    PushThrough           = "minecraft:push_through",
    Rideable              = "minecraft:rideable",
    Riding                = "minecraft:riding",
    Saturation            = "minecraft:player.saturation",
    Scale                 = "minecraft:scale",
    SkinId                = "minecraft:skin_id",
    Strength              = "minecraft:strength",
    Tameable              = "minecraft:tameable",
    TameMount             = "minecraft:tamemount",
    TypeFamily            = "minecraft:type_family",
    UnderwaterMovement    = "minecraft:underwater_movement",
    Variant               = "minecraft:variant",
    WantsJockey           = "minecraft:wants_jockey",
}

export enum EntityDamageCause {
    anvil           = "anvil",
    blockExplosion  = "blockExplosion",
    campfire        = "campfire",
    charging        = "charging",
    contact         = "contact",
    drowning        = "drowning",
    entityAttack    = "entityAttack",
    entityExplosion = "entityExplosion",
    fall            = "fall",
    fallingBlock    = "fallingBlock",
    fire            = "fire",
    fireTick        = "fireTick",
    fireworks       = "fireworks",
    flyIntoWall     = "flyIntoWall",
    freezing        = "freezing",
    lava            = "lava",
    lightning       = "lightning",
    maceSmash       = "maceSmash",
    magic           = "magic",
    magma           = "magma",
    none            = "none",
    override        = "override",
    piston          = "piston",
    projectile      = "projectile",
    ramAttack       = "ramAttack",
    selfDestruct    = "selfDestruct",
    sonicBoom       = "sonicBoom",
    soulCampfire    = "soulCampfire",
    stalactite      = "stalactite",
    stalagmite      = "stalagmite",
    starve          = "starve",
    suffocation     = "suffocation",
    temperature     = "temperature",
    thorns          = "thorns",
    void            = "void",
    wither          = "wither",
}

export enum EntityHealCause {
    Heal           = "Heal",
    Regeneration   = "Regeneration",
    SelfHeal       = "SelfHeal",
    TotemOfUndying = "TotemOfUndying",
}

export enum EntityInitializationCause {
    Born        = "Born",
    Event       = "Event",
    Loaded      = "Loaded",
    Spawned     = "Spawned",
    Transformed = "Transformed",
}

export enum EntitySwingSource {
    Attack    = "Attack",
    Build     = "Build",
    DropItem  = "DropItem",
    Event     = "Event",
    Interact  = "Interact",
    Mine      = "Mine",
    None      = "None",
    ThrowItem = "ThrowItem",
    UseItem   = "UseItem",
}

export enum EquipmentSlot {
    Body     = "Body",
    Chest    = "Chest",
    Feet     = "Feet",
    Head     = "Head",
    Legs     = "Legs",
    Mainhand = "Mainhand",
    Offhand  = "Offhand",
}

export enum FluidType {
    Lava       = "Lava",
    Potion     = "Potion",
    PowderSnow = "PowderSnow",
    Water      = "Water",
}

export enum GameMode {
    Adventure = "Adventure",
    Creative  = "Creative",
    Spectator = "Spectator",
    Survival  = "Survival",
}

export enum GameRule {
    CommandBlockOutput        = "commandBlockOutput",
    CommandBlocksEnabled      = "commandBlocksEnabled",
    DoDayLightCycle           = "doDayLightCycle",
    DoEntityDrops             = "doEntityDrops",
    DoFireTick                = "doFireTick",
    DoImmediateRespawn        = "doImmediateRespawn",
    DoInsomnia                = "doInsomnia",
    DoLimitedCrafting         = "doLimitedCrafting",
    DoMobLoot                 = "doMobLoot",
    DoMobSpawning             = "doMobSpawning",
    DoTileDrops               = "doTileDrops",
    DoWeatherCycle            = "doWeatherCycle",
    DrowningDamage            = "drowningDamage",
    FallDamage                = "fallDamage",
    FireDamage                = "fireDamage",
    FreezeDamage              = "freezeDamage",
    FunctionCommandLimit      = "functionCommandLimit",
    KeepInventory             = "keepInventory",
    MaxCommandChainLength     = "maxCommandChainLength",
    MobGriefing               = "mobGriefing",
    NaturalRegeneration       = "naturalRegeneration",
    PlayersSleepingPercentage = "playersSleepingPercentage",
    PlayerWaypoints           = "playerWaypoints",
    ProjectilesCanBreakBlocks = "projectilesCanBreakBlocks",
    Pvp                       = "pvp",
    RandomTickSpeed           = "randomTickSpeed",
    RecipesUnlock             = "recipesUnlock",
    RespawnBlocksExplode      = "respawnBlocksExplode",
    SendCommandFeedback       = "sendCommandFeedback",
    ShowBorderEffect          = "showBorderEffect",
    ShowCoordinates           = "showCoordinates",
    ShowDaysPlayed            = "showDaysPlayed",
    ShowDeathMessages         = "showDeathMessages",
    ShowRecipeMessages        = "showRecipeMessages",
    ShowTags                  = "showTags",
    SpawnRadius               = "spawnRadius",
    TntExplodes               = "tntExplodes",
    TntExplosionDropDecay     = "tntExplosionDropDecay",
}

export enum GraphicsMode {
    Deferred  = "Deferred",
    Fancy     = "Fancy",
    RayTraced = "RayTraced",
    Simple    = "Simple",
}

export enum HeldItemOption {
    AnyItem = "AnyItem",
    NoItem  = "NoItem",
}

export enum HudElement {
    PaperDoll     = 0,
    Armor         = 1,
    ToolTips      = 2,
    TouchControls = 3,
    Crosshair     = 4,
    Hotbar        = 5,
    Health        = 6,
    ProgressBar   = 7,
    Hunger        = 8,
    AirBubbles    = 9,
    HorseHealth   = 10,
    StatusEffects = 11,
    ItemText      = 12,
}

export enum HudVisibility {
    Hide  = 0,
    Reset = 1,
}

export enum InputButton {
    Jump  = "Jump",
    Sneak = "Sneak",
}

export enum InputMode {
    Gamepad          = "Gamepad",
    KeyboardAndMouse = "KeyboardAndMouse",
    MotionController = "MotionController",
    Touch            = "Touch",
}

export enum InputPermissionCategory {
    Camera          = 1,
    Movement        = 2,
    LateralMovement = 4,
    Sneak           = 5,
    Jump            = 6,
    Mount           = 7,
    Dismount        = 8,
    MoveForward     = 9,
    MoveBackward    = 10,
    MoveLeft        = 11,
    MoveRight       = 12,
}

export enum ItemComponentTypes {
    BlockDynamicProperties = "minecraft:block_actor_dynamic_properties",
    Book                   = "minecraft:book",
    Compostable            = "minecraft:compostable",
    Cooldown               = "minecraft:cooldown",
    Durability             = "minecraft:durability",
    Dyeable                = "minecraft:dyeable",
    Enchantable            = "minecraft:enchantable",
    Food                   = "minecraft:food",
    Inventory              = "minecraft:inventory",
    Potion                 = "minecraft:potion",
}

export enum ItemLockMode {
    inventory = "inventory",
    none      = "none",
    slot      = "slot",
}

export enum LiquidSettings {
    ApplyWaterlogging  = "ApplyWaterlogging",
    IgnoreWaterlogging = "IgnoreWaterlogging",
}

export enum LiquidType {
    Water = "Water",
}

export enum LocatorBarErrorReason {
    WaypointAlreadyExists = "WaypointAlreadyExists",
    WaypointLimitExceeded = "WaypointLimitExceeded",
    WaypointNotFound      = "WaypointNotFound",
}

export enum MemoryTier {
    SuperLow  = 0,
    Low       = 1,
    Mid       = 2,
    High      = 3,
    SuperHigh = 4,
}

export enum MoonPhase {
    FullMoon       = 0,
    WaningGibbous  = 1,
    FirstQuarter   = 2,
    WaningCrescent = 3,
    NewMoon        = 4,
    WaxingCrescent = 5,
    LastQuarter    = 6,
    WaxingGibbous  = 7,
}

export enum MovementType {
    Immovable = "Immovable",
    Popped    = "Popped",
    Push      = "Push",
    PushPull  = "PushPull",
}

export enum NamespaceNameErrorReason {
    DisallowedNamespace = "DisallowedNamespace",
    NoNamespace         = "NoNamespace",
}

export enum ObjectiveSortOrder {
    Ascending  = 0,
    Descending = 1,
}

export enum PaletteColor {
    White     = 0,
    Orange    = 1,
    Magenta   = 2,
    LightBlue = 3,
    Yellow    = 4,
    Lime      = 5,
    Pink      = 6,
    Gray      = 7,
    Silver    = 8,
    Cyan      = 9,
    Purple    = 10,
    Blue      = 11,
    Brown     = 12,
    Green     = 13,
    Red       = 14,
    Black     = 15,
}

export enum PlatformType {
    Console = "Console",
    Desktop = "Desktop",
    Mobile  = "Mobile",
}

export enum PlayerInventoryType {
    Hotbar    = "Hotbar",
    Inventory = "Inventory",
}

export enum PlayerPermissionLevel {
    Visitor  = 0,
    Member   = 1,
    Operator = 2,
    Custom   = 3,
}

export enum PlayerSplitScreenSlot {
    First  = "First",
    Fourth = "Fourth",
    Second = "Second",
    Third  = "Third",
}

export enum PlayerWaypointsMode {
    Everyone = "Everyone",
    Off      = "Off",
}

export enum ScoreboardIdentityType {
    Entity     = "Entity",
    FakePlayer = "FakePlayer",
    Player     = "Player",
}

export enum ScriptEventSource {
    Block       = "Block",
    Entity      = "Entity",
    NPCDialogue = "NPCDialogue",
    Server      = "Server",
}

export enum SignSide {
    Back  = "Back",
    Front = "Front",
}

export enum StickyType {
    None = "None",
    Same = "Same",
}

export enum StructureAnimationMode {
    Blocks = "Blocks",
    Layers = "Layers",
    None   = "None",
}

export enum StructureMirrorAxis {
    None = "None",
    X    = "X",
    XZ   = "XZ",
    Z    = "Z",
}

export enum StructureRotation {
    None      = "None",
    Rotate180 = "Rotate180",
    Rotate270 = "Rotate270",
    Rotate90  = "Rotate90",
}

export enum StructureSaveMode {
    Memory = "Memory",
    World  = "World",
}

export enum TickingAreaErrorReason {
    IdentifierAlreadyExists = "IdentifierAlreadyExists",
    OverChunkLimit          = "OverChunkLimit",
    SideLengthExceeded      = "SideLengthExceeded",
    UnknownIdentifier       = "UnknownIdentifier",
}

export enum TimeOfDay {
    Day      = 1000,
    Noon     = 6000,
    Sunset   = 12000,
    Night    = 13000,
    Midnight = 18000,
    Sunrise  = 23000,
}

export enum TintMethod {
    BirchFoliage     = "BirchFoliage",
    DefaultFoliage   = "DefaultFoliage",
    DryFoliage       = "DryFoliage",
    EvergreenFoliage = "EvergreenFoliage",
    Grass            = "Grass",
    None             = "None",
    Water            = "Water",
}

export enum WatchdogTerminateReason {
    Hang          = "Hang",
    StackOverflow = "StackOverflow",
}

export enum WaypointTexture {
    Circle      = "minecraft:circle",
    SmallSquare = "minecraft:small_square",
    SmallStar   = "minecraft:small_star",
    Square      = "minecraft:square",
}

export enum WeatherType {
    Clear   = "Clear",
    Rain    = "Rain",
    Thunder = "Thunder",
}

export type BlockComponentReturnType<T extends string> =
    T extends keyof BlockComponentTypeMap
        ? BlockComponentTypeMap[T]
        : BlockComponent;

export type BlockComponentTypeMap = {
    dynamic_properties: BlockDynamicPropertiesComponent;
    fluid_container: BlockFluidContainerComponent;
    instrument_sound: BlockInstrumentComponent;
    inventory: BlockInventoryComponent;
    map_color: BlockMapColorComponent;
    movable: BlockMovableComponent;
    piston: BlockPistonComponent;
    precipitation_interactions: BlockPrecipitationInteractionsComponent;
    record_player: BlockRecordPlayerComponent;
    redstone_producer: BlockRedstoneProducerComponent;
    sign: BlockSignComponent;
    "minecraft:dynamic_properties": BlockDynamicPropertiesComponent;
    "minecraft:fluid_container": BlockFluidContainerComponent;
    "minecraft:instrument_sound": BlockInstrumentComponent;
    "minecraft:inventory": BlockInventoryComponent;
    "minecraft:map_color": BlockMapColorComponent;
    "minecraft:movable": BlockMovableComponent;
    "minecraft:piston": BlockPistonComponent;
    "minecraft:precipitation_interactions": BlockPrecipitationInteractionsComponent;
    "minecraft:record_player": BlockRecordPlayerComponent;
    "minecraft:redstone_producer": BlockRedstoneProducerComponent;
    "minecraft:sign": BlockSignComponent;
}

export type EntityComponentReturnType<T extends string> =
    T extends keyof EntityComponentTypeMap
        ? EntityComponentTypeMap[T]
        : EntityComponent;

export type EntityComponentTypeMap = {
    addrider: EntityAddRiderComponent;
    ageable: EntityAgeableComponent;
    breathable: EntityBreathableComponent;
    can_climb: EntityCanClimbComponent;
    can_fly: EntityCanFlyComponent;
    can_power_jump: EntityCanPowerJumpComponent;
    color: EntityColorComponent;
    color2: EntityColor2Component;
    cursor_inventory: PlayerCursorInventoryComponent;
    ender_inventory: EntityEnderInventoryComponent;
    equippable: EntityEquippableComponent;
    fire_immune: EntityFireImmuneComponent;
    floats_in_liquid: EntityFloatsInLiquidComponent;
    flying_speed: EntityFlyingSpeedComponent;
    friction_modifier: EntityFrictionModifierComponent;
    healable: EntityHealableComponent;
    health: EntityHealthComponent;
    inventory: EntityInventoryComponent;
    is_baby: EntityIsBabyComponent;
    is_charged: EntityIsChargedComponent;
    is_chested: EntityIsChestedComponent;
    is_dyeable: EntityIsDyeableComponent;
    is_hidden_when_invisible: EntityIsHiddenWhenInvisibleComponent;
    is_ignited: EntityIsIgnitedComponent;
    is_illager_captain: EntityIsIllagerCaptainComponent;
    is_saddled: EntityIsSaddledComponent;
    is_shaking: EntityIsShakingComponent;
    is_sheared: EntityIsShearedComponent;
    is_stackable: EntityIsStackableComponent;
    is_stunned: EntityIsStunnedComponent;
    is_tamed: EntityIsTamedComponent;
    item: EntityItemComponent;
    lava_movement: EntityLavaMovementComponent;
    leashable: EntityLeashableComponent;
    mark_variant: EntityMarkVariantComponent;
    movement: EntityMovementComponent;
    "movement.amphibious": EntityMovementAmphibiousComponent;
    "movement.basic": EntityMovementBasicComponent;
    "movement.fly": EntityMovementFlyComponent;
    "movement.generic": EntityMovementGenericComponent;
    "movement.glide": EntityMovementGlideComponent;
    "movement.hover": EntityMovementHoverComponent;
    "movement.jump": EntityMovementJumpComponent;
    "movement.skip": EntityMovementSkipComponent;
    "movement.sway": EntityMovementSwayComponent;
    "navigation.climb": EntityNavigationClimbComponent;
    "navigation.float": EntityNavigationFloatComponent;
    "navigation.fly": EntityNavigationFlyComponent;
    "navigation.generic": EntityNavigationGenericComponent;
    "navigation.hover": EntityNavigationHoverComponent;
    "navigation.walk": EntityNavigationWalkComponent;
    npc: EntityNpcComponent;
    onfire: EntityOnFireComponent;
    "player.exhaustion": EntityExhaustionComponent;
    "player.hunger": EntityHungerComponent;
    "player.saturation": EntitySaturationComponent;
    projectile: EntityProjectileComponent;
    push_through: EntityPushThroughComponent;
    rideable: EntityRideableComponent;
    riding: EntityRidingComponent;
    scale: EntityScaleComponent;
    skin_id: EntitySkinIdComponent;
    strength: EntityStrengthComponent;
    tameable: EntityTameableComponent;
    tamemount: EntityTameMountComponent;
    type_family: EntityTypeFamilyComponent;
    underwater_movement: EntityUnderwaterMovementComponent;
    variant: EntityVariantComponent;
    wants_jockey: EntityWantsJockeyComponent;
    "minecraft:addrider": EntityAddRiderComponent;
    "minecraft:ageable": EntityAgeableComponent;
    "minecraft:breathable": EntityBreathableComponent;
    "minecraft:can_climb": EntityCanClimbComponent;
    "minecraft:can_fly": EntityCanFlyComponent;
    "minecraft:can_power_jump": EntityCanPowerJumpComponent;
    "minecraft:color": EntityColorComponent;
    "minecraft:color2": EntityColor2Component;
    "minecraft:cursor_inventory": PlayerCursorInventoryComponent;
    "minecraft:ender_inventory": EntityEnderInventoryComponent;
    "minecraft:equippable": EntityEquippableComponent;
    "minecraft:fire_immune": EntityFireImmuneComponent;
    "minecraft:floats_in_liquid": EntityFloatsInLiquidComponent;
    "minecraft:flying_speed": EntityFlyingSpeedComponent;
    "minecraft:friction_modifier": EntityFrictionModifierComponent;
    "minecraft:healable": EntityHealableComponent;
    "minecraft:health": EntityHealthComponent;
    "minecraft:inventory": EntityInventoryComponent;
    "minecraft:is_baby": EntityIsBabyComponent;
    "minecraft:is_charged": EntityIsChargedComponent;
    "minecraft:is_chested": EntityIsChestedComponent;
    "minecraft:is_dyeable": EntityIsDyeableComponent;
    "minecraft:is_hidden_when_invisible": EntityIsHiddenWhenInvisibleComponent;
    "minecraft:is_ignited": EntityIsIgnitedComponent;
    "minecraft:is_illager_captain": EntityIsIllagerCaptainComponent;
    "minecraft:is_saddled": EntityIsSaddledComponent;
    "minecraft:is_shaking": EntityIsShakingComponent;
    "minecraft:is_sheared": EntityIsShearedComponent;
    "minecraft:is_stackable": EntityIsStackableComponent;
    "minecraft:is_stunned": EntityIsStunnedComponent;
    "minecraft:is_tamed": EntityIsTamedComponent;
    "minecraft:item": EntityItemComponent;
    "minecraft:lava_movement": EntityLavaMovementComponent;
    "minecraft:leashable": EntityLeashableComponent;
    "minecraft:mark_variant": EntityMarkVariantComponent;
    "minecraft:movement": EntityMovementComponent;
    "minecraft:movement.amphibious": EntityMovementAmphibiousComponent;
    "minecraft:movement.basic": EntityMovementBasicComponent;
    "minecraft:movement.fly": EntityMovementFlyComponent;
    "minecraft:movement.generic": EntityMovementGenericComponent;
    "minecraft:movement.glide": EntityMovementGlideComponent;
    "minecraft:movement.hover": EntityMovementHoverComponent;
    "minecraft:movement.jump": EntityMovementJumpComponent;
    "minecraft:movement.skip": EntityMovementSkipComponent;
    "minecraft:movement.sway": EntityMovementSwayComponent;
    "minecraft:navigation.climb": EntityNavigationClimbComponent;
    "minecraft:navigation.float": EntityNavigationFloatComponent;
    "minecraft:navigation.fly": EntityNavigationFlyComponent;
    "minecraft:navigation.generic": EntityNavigationGenericComponent;
    "minecraft:navigation.hover": EntityNavigationHoverComponent;
    "minecraft:navigation.walk": EntityNavigationWalkComponent;
    "minecraft:npc": EntityNpcComponent;
    "minecraft:onfire": EntityOnFireComponent;
    "minecraft:player.exhaustion": EntityExhaustionComponent;
    "minecraft:player.hunger": EntityHungerComponent;
    "minecraft:player.saturation": EntitySaturationComponent;
    "minecraft:projectile": EntityProjectileComponent;
    "minecraft:push_through": EntityPushThroughComponent;
    "minecraft:rideable": EntityRideableComponent;
    "minecraft:riding": EntityRidingComponent;
    "minecraft:scale": EntityScaleComponent;
    "minecraft:skin_id": EntitySkinIdComponent;
    "minecraft:strength": EntityStrengthComponent;
    "minecraft:tameable": EntityTameableComponent;
    "minecraft:tamemount": EntityTameMountComponent;
    "minecraft:type_family": EntityTypeFamilyComponent;
    "minecraft:underwater_movement": EntityUnderwaterMovementComponent;
    "minecraft:variant": EntityVariantComponent;
    "minecraft:wants_jockey": EntityWantsJockeyComponent;
}

export type ItemComponentReturnType<T extends string> =
    T extends keyof ItemComponentTypeMap
        ? ItemComponentTypeMap[T]
        : ItemComponent;

export type ItemComponentTypeMap = {
    block_actor_dynamic_properties: ItemBlockDynamicPropertiesComponent;
    book: ItemBookComponent;
    compostable: ItemCompostableComponent;
    cooldown: ItemCooldownComponent;
    durability: ItemDurabilityComponent;
    dyeable: ItemDyeableComponent;
    enchantable: ItemEnchantableComponent;
    food: ItemFoodComponent;
    inventory: ItemInventoryComponent;
    potion: ItemPotionComponent;
    "minecraft:block_actor_dynamic_properties": ItemBlockDynamicPropertiesComponent;
    "minecraft:book": ItemBookComponent;
    "minecraft:compostable": ItemCompostableComponent;
    "minecraft:cooldown": ItemCooldownComponent;
    "minecraft:durability": ItemDurabilityComponent;
    "minecraft:dyeable": ItemDyeableComponent;
    "minecraft:enchantable": ItemEnchantableComponent;
    "minecraft:food": ItemFoodComponent;
    "minecraft:inventory": ItemInventoryComponent;
    "minecraft:potion": ItemPotionComponent;
}

export class AimAssistCategory {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly defaultBlockPriority: number;
    /**
     * @throws This property can throw when used.
     */
    readonly defaultEntityPriority: number;
    readonly identifier: string;
    /**
     * @throws This function can throw errors.
     */
    getBlockPriorities(): Record<string, number>;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    getBlockTagPriorities(): Record<string, number>;
    /**
     * @throws This function can throw errors.
     */
    getEntityPriorities(): Record<string, number>;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    getEntityTypeFamilyPriorities(): Record<string, number>;
}

export class AimAssistCategorySettings {
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    defaultBlockPriority: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    defaultEntityPriority: number;
    readonly identifier: string;
    constructor(identifier: string);
    getBlockPriorities(): Record<string, number>;
    getBlockTagPriorities(): Record<string, number>;
    getEntityPriorities(): Record<string, number>;
    getEntityTypeFamilyPriorities(): Record<string, number>;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setBlockPriorities(blockPriorities: Record<string, number>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setBlockTagPriorities(blockTagPriorities: Record<string, number>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setEntityPriorities(entityPriorities: Record<string, number>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setEntityTypeFamilyPriorities(entityTypeFamilyPriorities: Record<string, number>): void;
}

export class AimAssistPreset {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly defaultItemSettings?: string;
    /**
     * @throws This property can throw when used.
     */
    readonly handSettings?: string;
    readonly identifier: string;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    getExcludedBlockTagTargets(): string[];
    /**
     * @throws This function can throw errors.
     */
    getExcludedBlockTargets(): string[];
    /**
     * @throws This function can throw errors.
     */
    getExcludedEntityTargets(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    getExcludedEntityTypeFamilyTargets(): string[];
    /**
     * @throws This function can throw errors.
     */
    getItemSettings(): Record<string, string>;
    /**
     * @throws This function can throw errors.
     */
    getLiquidTargetingItems(): string[];
}

export class AimAssistPresetSettings {
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    defaultItemSettings?: string;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    handSettings?: string;
    readonly identifier: string;
    constructor(identifier: string);
    getExcludedBlockTagTargets(): string[] | undefined;
    getExcludedBlockTargets(): string[] | undefined;
    getExcludedEntityTargets(): string[] | undefined;
    getExcludedEntityTypeFamilyTargets(): string[] | undefined;
    getItemSettings(): Record<string, string>;
    getLiquidTargetingItems(): string[] | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setExcludedBlockTagTargets(blockTagTargets?: string[]): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setExcludedBlockTargets(blockTargets?: string[]): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setExcludedEntityTargets(entityTargets?: string[]): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setExcludedEntityTypeFamilyTargets(entityTypeFamilyTargets?: string[]): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setItemSettings(itemSettings: Record<string, string>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setLiquidTargetingItems(items?: string[]): void;
}

export class AimAssistRegistry {
    private constructor();
    static readonly DefaultCategoryId = "minecraft:default";
    static readonly DefaultPresetId = "minecraft:aim_assist_default";
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    addCategory(category: AimAssistCategorySettings): AimAssistCategory;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    addPreset(preset: AimAssistPresetSettings): AimAssistPreset;
    getCategories(): AimAssistCategory[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getCategory(categoryId: string): AimAssistCategory | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getPreset(presetId: string): AimAssistPreset | undefined;
    getPresets(): AimAssistPreset[];
}

export class BannerPattern {
    private constructor();
    readonly color: string;
    readonly pattern: string;
}

export class BiomeType {
    private constructor();
    readonly id: string;
    getTags(): string[];
    hasTags(tags: string[]): boolean;
}

export class BiomeTypes {
    private constructor();
    static get(typeName: string): BiomeType | undefined;
    static getAll(): BiomeType[];
}

export class Block {
    private constructor();
    readonly dimension: Dimension;
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isAir: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isLiquid: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isSolid: boolean;
    readonly isValid: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly isWaterlogged: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly localizationKey: string;
    /**
     * @throws This property can throw when used.
     */
    readonly location: Vector3;
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly permutation: BlockPermutation;
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly "type": BlockType;
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly typeId: string;
    readonly x: number;
    readonly y: number;
    readonly z: number;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    above(steps?: number): Block | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    below(steps?: number): Block | undefined;
    bottomCenter(): Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canContainLiquid(liquidType: LiquidType): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    canPlace(blockToPlace: BlockPermutation | BlockType | string, faceToPlaceOn?: Direction): boolean;
    center(): Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    east(steps?: number): Block | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getComponent<T extends string>(componentId: T): BlockComponentReturnType<T> | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getComponents(): BlockComponent[];
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getItemStack(amount?: number, withData?: boolean): ItemStack | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getLightLevel(): number;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getMapColor(): RGBA;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getParts(): Block[] | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getRedstonePower(): number | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getSkyLightLevel(): number;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getTags(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    hasComponent(componentId: string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    hasTag(tag: string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    isLiquidBlocking(liquidType: LiquidType): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    liquidCanFlowFromDirection(liquidType: LiquidType, flowDirection: Direction): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    north(steps?: number): Block | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    offset(offset: Vector3): Block | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setPermutation(permutation: BlockPermutation): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setType(blockType: BlockType | string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setWaterlogged(isWaterlogged: boolean): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    south(steps?: number): Block | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    trySetPermutation(permutation: BlockPermutation): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    west(steps?: number): Block | undefined;
}

export class BlockBoundingBoxUtils {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    static createValid(min: Vector3, max: Vector3): BlockBoundingBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    static dilate(box: BlockBoundingBox, size: Vector3): BlockBoundingBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    static equals(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    static expand(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    static getCenter(box: BlockBoundingBox): Vector3;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    static getIntersection(box: BlockBoundingBox, other: BlockBoundingBox): BlockBoundingBox | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    static getSpan(box: BlockBoundingBox): Vector3;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    static intersects(box: BlockBoundingBox, other: BlockBoundingBox): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    static isInside(box: BlockBoundingBox, pos: Vector3): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    static isValid(box: BlockBoundingBox): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    static translate(box: BlockBoundingBox, delta: Vector3): BlockBoundingBox;
}

// @ts-ignore
export class BlockComponent extends Component {
    private constructor();
    readonly block: Block;
}

// @ts-ignore
export class BlockComponentBlockBreakEvent extends BlockEvent {
    private constructor();
    readonly blockDestructionSource?: Block;
    readonly brokenBlockPermutation: BlockPermutation;
    readonly entitySource?: Entity;
}

// @ts-ignore
export class BlockComponentBlockStateChangeEvent extends BlockEvent {
    private constructor();
    readonly previousPermutation: BlockPermutation;
}

// @ts-ignore
export class BlockComponentEntityEvent extends BlockEvent {
    private constructor();
    readonly blockPermutation: BlockPermutation;
    readonly entitySource: Entity;
    readonly name: string;
}

// @ts-ignore
export class BlockComponentEntityFallOnEvent extends BlockEvent {
    private constructor();
    readonly entity?: Entity;
    readonly fallDistance: number;
}

// @ts-ignore
export class BlockComponentOnPlaceEvent extends BlockEvent {
    private constructor();
    readonly previousBlock: BlockPermutation;
}

// @ts-ignore
export class BlockComponentPlayerBreakEvent extends BlockEvent {
    private constructor();
    readonly brokenBlockPermutation: BlockPermutation;
    readonly player?: Player;
}

// @ts-ignore
export class BlockComponentPlayerInteractEvent extends BlockEvent {
    private constructor();
    readonly face: Direction;
    readonly faceLocation?: Vector3;
    readonly player?: Player;
}

// @ts-ignore
export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
    private constructor();
    cancel: boolean;
    readonly face: Direction;
    permutationToPlace: BlockPermutation;
    readonly player?: Player;
}

// @ts-ignore
export class BlockComponentRandomTickEvent extends BlockEvent {
    private constructor();
}

// @ts-ignore
export class BlockComponentRedstoneUpdateEvent extends BlockEvent {
    private constructor();
    readonly firstUpdate: boolean;
    readonly powerLevel: number;
    readonly previousPowerLevel: number;
}

export class BlockComponentRegistry {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link BlockCustomComponentAlreadyRegisteredError}
     *
     * {@link BlockCustomComponentReloadNewComponentError}
     *
     * {@link BlockCustomComponentReloadNewEventError}
     *
     * {@link BlockCustomComponentReloadVersionError}
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}

// @ts-ignore
export class BlockComponentStepOffEvent extends BlockEvent {
    private constructor();
    readonly entity?: Entity;
}

// @ts-ignore
export class BlockComponentStepOnEvent extends BlockEvent {
    private constructor();
    readonly entity?: Entity;
}

// @ts-ignore
export class BlockComponentTickEvent extends BlockEvent {
    private constructor();
}

// @ts-ignore
export class BlockContainerClosedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    closeSource: ContainerAccessSource;
}

export class BlockContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: BlockContainerClosedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerClosedAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: BlockContainerClosedAfterEvent) => void): void;
}

// @ts-ignore
export class BlockContainerOpenedAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    openSource: ContainerAccessSource;
}

export class BlockContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: BlockContainerOpenedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerOpenedAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: BlockContainerOpenedAfterEvent) => void): void;
}

// @ts-ignore
export class BlockCustomComponentInstance extends BlockComponent {
    private constructor();
    readonly customComponentParameters: CustomComponentParameters;
}

// @ts-ignore
export class BlockDynamicPropertiesComponent extends BlockComponent {
    private constructor();
    static readonly componentId = "minecraft:dynamic_properties";
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    get(key: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    set(key: string, value?: boolean | number | string | Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidBlockComponentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    totalByteCount(): number;
}

export class BlockEvent {
    private constructor();
    readonly block: Block;
    readonly dimension: Dimension;
}

// @ts-ignore
export class BlockExplodeAfterEvent extends BlockEvent {
    private constructor();
    readonly explodedBlockPermutation: BlockPermutation;
    readonly source?: Entity;
}

export class BlockExplodeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: BlockExplodeAfterEvent) => void): (arg0: BlockExplodeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: BlockExplodeAfterEvent) => void): void;
}

// @ts-ignore
export class BlockFluidContainerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    fillLevel: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    fluidColor: RGBA;
    static readonly componentId = "minecraft:fluid_container";
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addDye(dye: ItemType): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getFluidType(): FluidType;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setFluidType(fluidType: FluidType): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setPotion(itemStack: ItemStack): void;
}

// @ts-ignore
export class BlockInstrumentComponent extends BlockComponent {
    private constructor();
    static readonly componentId = "minecraft:instrument_sound";
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getInstrumentName(face: Direction): string;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    playInstrumentSound(face: Direction, soundOptions?: WorldSoundOptions): void;
}

// @ts-ignore
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly container?: Container;
    static readonly componentId = "minecraft:inventory";
}

export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    [Symbol.iterator](): Iterator<Vector3>;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    isValid(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    next(): IteratorResult<Vector3>;
}

// @ts-ignore
export class BlockMapColorComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly color: RGBA;
    readonly tintedColor: RGBA;
    /**
     * @throws This property can throw when used.
     */
    readonly tintMethod: TintMethod;
    static readonly componentId = "minecraft:map_color";
}

// @ts-ignore
export class BlockMovableComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly movementType: MovementType;
    /**
     * @throws This property can throw when used.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    readonly stickyType: StickyType;
    static readonly componentId = "minecraft:movable";
}

export class BlockPermutation {
    private constructor();
    readonly localizationKey: string;
    readonly "type": BlockType;
    /**
     * @throws This function can throw errors.
     */
    canBeDestroyedByLiquidSpread(liquidType: LiquidType): boolean;
    /**
     * @throws This function can throw errors.
     */
    canContainLiquid(liquidType: LiquidType): boolean;
    getAllStates(): Record<string, boolean | number | string>;
    getItemStack(amount?: number): ItemStack | undefined;
    getState(stateName: string): boolean | number | string | undefined;
    getTags(): string[];
    hasTag(tag: string): boolean;
    /**
     * @throws This function can throw errors.
     */
    isLiquidBlocking(liquidType: LiquidType): boolean;
    /**
     * @throws This function can throw errors.
     */
    liquidSpreadCausesSpawn(liquidType: LiquidType): boolean;
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @throws This function can throw errors.
     */
    withState(name: string, value: boolean | number | string): BlockPermutation;
    /**
     * @throws This function can throw errors.
     */
    static resolve(blockName: string, states?: Record<string, boolean | number | string>): BlockPermutation;
}

// @ts-ignore
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly isMoving: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly state: BlockPistonState;
    static readonly componentId = "minecraft:piston";
    /**
     * @throws This function can throw errors.
     */
    getAttachedBlocks(): Block[];
    /**
     * @throws This function can throw errors.
     */
    getAttachedBlocksLocations(): Vector3[];
}

// @ts-ignore
export class BlockPrecipitationInteractionsComponent extends BlockComponent {
    private constructor();
    static readonly componentId = "minecraft:precipitation_interactions";
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    accumulatesSnow(): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    isSnowLoggable(): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    obstructsRain(): boolean;
}

// @ts-ignore
export class BlockRecordPlayerComponent extends BlockComponent {
    private constructor();
    static readonly componentId = "minecraft:record_player";
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    ejectRecord(): void;
    /**
     * @throws This function can throw errors.
     */
    getRecord(): ItemStack | undefined;
    /**
     * @throws This function can throw errors.
     */
    isPlaying(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    pauseRecord(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    playRecord(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void;
}

// @ts-ignore
export class BlockRedstoneProducerComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidBlockComponentError}
     */
    readonly power: number;
    static readonly componentId = "minecraft:redstone_producer";
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidBlockComponentError}
     */
    getConnectedFaces(): Direction[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidBlockComponentError}
     */
    getStronglyPoweredFace(): Direction | undefined;
}

// @ts-ignore
export class BlockSignComponent extends BlockComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly isWaxed: boolean;
    static readonly componentId = "minecraft:sign";
    /**
     * @throws This function can throw errors.
     */
    getRawText(side?: SignSide): RawText | undefined;
    /**
     * @throws This function can throw errors.
     */
    getText(side?: SignSide): string | undefined;
    /**
     * @throws This function can throw errors.
     */
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setText(message: RawMessage | string, side?: SignSide): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setWaxed(waxed: boolean): void;
}

export class BlockStates {
    private constructor();
    static get(stateName: string): BlockStateType | undefined;
    static getAll(): BlockStateType[];
}

export class BlockStateType {
    private constructor();
    readonly id: string;
    readonly validValues: (boolean | number | string)[];
}

export class BlockType {
    private constructor();
    readonly id: string;
    readonly localizationKey: string;
}

export class BlockTypes {
    private constructor();
    static get(typeName: string): BlockType | undefined;
    static getAll(): BlockType[];
}

// @ts-ignore
export class BlockVolume extends BlockVolumeBase {
    "from": Vector3;
    to: Vector3;
    constructor(from: Vector3, to: Vector3);
    doesLocationTouchFaces(pos: Vector3): boolean;
    doesVolumeTouchFaces(other: BlockVolume): boolean;
    intersects(other: BlockVolume): BlockVolumeIntersection;
}

export class BlockVolumeBase {
    private constructor();
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @throws This function can throw errors.
     */
    getBoundingBox(): BlockBoundingBox;
    getCapacity(): number;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    getClosest(count: number, location: Vector3): Vector3[];
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    getFarthest(count: number, location: Vector3): Vector3[];
    /**
     * @throws This function can throw errors.
     */
    getMax(): Vector3;
    /**
     * @throws This function can throw errors.
     */
    getMin(): Vector3;
    getSpan(): Vector3;
    isInside(location: Vector3): boolean;
    translate(delta: Vector3): void;
}

// @ts-ignore
export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    readonly source: Entity;
}

export class ButtonPushAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ButtonPushAfterEvent) => void): (arg0: ButtonPushAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ButtonPushAfterEvent) => void): void;
}

export class Camera {
    private constructor();
    readonly isValid: boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    addShake(shakeCameraOptions: CameraShakeOptions): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    attachToEntity(attachCameraOptions?: CameraAttachOptions): void;
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
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    playAnimation(splineType: CatmullRomSpline | LinearSpline, cameraAnimationOptions: AnimationOptions): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setCamera(
        cameraPreset: string,
        setOptions?: 
            | CameraFixedBoomOptions
            | CameraSetFacingOptions
            | CameraSetLocationOptions
            | CameraSetPosOptions
            | CameraSetRotOptions
            | CameraTargetOptions,
    ): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setCameraWithEase(cameraPreset: string, easeOptions: EaseOptions): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setDefaultCamera(cameraPreset: string, easeOptions?: EaseOptions): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setFov(fovCameraOptions?: CameraFovOptions): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    stopShaking(): void;
}

// @ts-ignore
export class CarryOverBlockEntityDataFunction extends LootItemFunction {
    private constructor();
    readonly dynamicProperties: boolean;
}

export class CatmullRomSpline {
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    controlPoints: Vector3[];
}

export class ChatSendAfterEvent {
    private constructor();
    readonly message: string;
    readonly sender: Player;
    readonly targets?: Player[];
}

export class ChatSendAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ChatSendAfterEvent) => void): (arg0: ChatSendAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ChatSendAfterEvent) => void): void;
}

export class ChatSendBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly message: string;
    readonly sender: Player;
    readonly targets?: Player[];
}

export class ChatSendBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}

// @ts-ignore
export class ClientSystemInfo extends SystemInfo {
    private constructor();
    readonly locale: string;
    readonly maxRenderDistance: number;
    readonly platformType: PlatformType;
}

export class CommandResult {
    private constructor();
    readonly successCount: number;
}

export class Component {
    private constructor();
    readonly isValid: boolean;
    readonly typeId: string;
}

export class CompoundBlockVolume {
    readonly capacity: number;
    readonly items: CompoundBlockVolumeItem[];
    readonly itemsAbsolute: CompoundBlockVolumeItem[];
    readonly volumeCount: number;
    constructor(origin?: Vector3);
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    clear(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getBoundingBox(): BlockBoundingBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getMax(): Vector3;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getMin(): Vector3;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getOrigin(): Vector3;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    isEmpty(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    isInside(worldLocation: Vector3): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    popVolume(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    pushVolume(item: CompoundBlockVolumeItem): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;
}

export class Container {
    private constructor();
    readonly containerRules?: ContainerRules;
    /**
     * @throws This property can throw when used.
     */
    readonly emptySlotsCount: number;
    readonly isValid: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly size: number;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidContainerError}
     */
    readonly weight: number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    clearAll(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    contains(itemStack: ItemStack): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    find(itemStack: ItemStack): number | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    findLast(itemStack: ItemStack): number | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    firstEmptySlot(): number | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerError}
     */
    firstItem(): number | undefined;
    /**
     * @throws This function can throw errors.
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * @throws This function can throw errors.
     */
    getSlot(slot: number): ContainerSlot;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     */
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}

export class ContainerSlot {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    amount: number;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidContainerSlotError}
     */
    readonly isStackable: boolean;
    readonly isValid: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    keepOnDeath: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    lockMode: ItemLockMode;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidContainerSlotError}
     */
    readonly maxAmount: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    nameTag?: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidContainerSlotError}
     */
    readonly "type": ItemType;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidContainerSlotError}
     */
    readonly typeId: string;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    clearDynamicProperties(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getCanDestroy(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getCanPlaceOn(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyIds(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getItem(): ItemStack | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getLore(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getRawLore(): RawMessage[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    getTags(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    hasItem(): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    hasTag(tag: string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidContainerSlotError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidContainerSlotError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link ContainerRulesError}
     *
     * {@link InvalidContainerSlotError}
     */
    setItem(itemStack?: ItemStack): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     */
    setLore(loreList?: (RawMessage | string)[]): void;
}

export class CustomCommandOrigin {
    private constructor();
    readonly initiator?: Entity;
    readonly sourceBlock?: Block;
    readonly sourceEntity?: Entity;
    readonly sourceType: CustomCommandSource;
}

export class CustomCommandRegistry {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link CustomCommandError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCommand(
        customCommand: CustomCommand,
        callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined,
    ): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link CustomCommandError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerEnum(name: string, values: string[]): void;
}

export class CustomComponentParameters {
    private constructor();
    readonly params: unknown;
}

// @ts-ignore
export class DamagedByEntityCondition extends LootItemCondition {
    private constructor();
    readonly entityType: string;
}

export class DataDrivenEntityTriggerAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly eventId: string;
    getModifiers(): DefinitionModifier[];
}

export class DataDrivenEntityTriggerAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: DataDrivenEntityTriggerAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void): void;
}

export class Dimension {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly heightRange: minecraftcommon.NumberRange;
    readonly id: string;
    readonly localizationKey: string;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    calculateClosestBiomeFromSeed(
        pos: Vector3,
        biomeToFind: BiomeType | string,
        options?: BiomeSearchOptions,
    ): Vector3 | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    cloneBlocks(
        beginLocation: Vector3,
        endLocation: Vector3,
        destination: Vector3,
        cloneMode: CloneMode,
        filter?: BlockFilter,
    ): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     *
     * {@link UnloadedChunksError}
     */
    containsBiomes(volume: BlockVolumeBase, biomeFilter: BiomeFilter, isSuperset: boolean): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link UnloadedChunksError}
     */
    fillBlocks(
        volume: BlockVolumeBase,
        block: BlockPermutation | BlockType | string,
        options?: BlockFillOptions,
    ): ListBlockVolume;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBiome(location: Vector3): BiomeType;
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBlock(location: Vector3): Block | undefined;
    /**
     * @throws This function can throw errors.
     */
    getBlockAbove(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @throws This function can throw errors.
     */
    getBlockBelow(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @throws This function can throw errors.
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link UnloadedChunksError}
     */
    getBlocks(volume: BlockVolumeBase, options: BlockQueryOptions, allowUnloadedChunks?: boolean): ListBlockVolume;
    /**
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getEntities(options?: EntityQueryOptions): Entity[];
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    getGeneratedStructures(location: Vector3): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getLightLevel(location: Vector3): number;
    /**
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    getSkyLightLevel(location: Vector3): number;
    /**
     * @throws This function can throw errors.
     */
    getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;
    getWeather(): WeatherType;
    isChunkLoaded(location: Vector3): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeature(featureName: string, location: Vector3, shouldThrow?: boolean): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link LocationInUnloadedChunkError}
     */
    placeFeatureRule(featureRuleName: string, location: Vector3): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): SoundInstance;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockType(location: Vector3, blockType: BlockType | string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setWeather(weatherType: WeatherType, duration?: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link EntitySpawnError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnEntity(identifier: EntityType | string, location: Vector3, options?: SpawnEntityOptions): Entity;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnXp(location: Vector3, amount: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    stopAllSounds(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    stopSound(soundId: string): void;
}

export class DimensionRegistry {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link CustomDimensionAlreadyRegisteredError}
     *
     * {@link CustomDimensionInvalidRegistryError}
     *
     * {@link CustomDimensionNameError}
     *
     * {@link CustomDimensionReloadNewDimensionError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomDimension(typeId: string): void;
}

export class DimensionType {
    private constructor();
    readonly typeId: string;
}

export class DimensionTypes {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    static getAll(): DimensionType[];
}

export class Effect {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly amplifier: number;
    /**
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * @throws This property can throw when used.
     */
    readonly duration: number;
    readonly isValid: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly typeId: string;
}

export class EffectAddAfterEvent {
    private constructor();
    readonly effect: Effect;
    readonly entity: Entity;
}

export class EffectAddAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EffectAddAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EffectAddAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EffectAddAfterEvent) => void): void;
}

export class EffectAddBeforeEvent {
    private constructor();
    cancel: boolean;
    duration: number;
    readonly effectType: string;
    readonly entity: Entity;
}

export class EffectAddBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: EffectAddBeforeEvent) => void): (arg0: EffectAddBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EffectAddBeforeEvent) => void): void;
}

export class EffectType {
    private constructor();
    getName(): string;
}

export class EffectTypes {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    static get(identifier: string): EffectType | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    static getAll(): EffectType[];
}

// @ts-ignore
export class EmptyLootItem extends LootPoolEntry {
    private constructor();
}

export class EnchantInfo {
    private constructor();
    readonly enchantment: string;
    readonly range: minecraftcommon.NumberRange;
}

export class EnchantmentType {
    readonly id: string;
    readonly maxLevel: number;
    /**
     * @throws This function can throw errors.
     */
    constructor(enchantmentType: string);
}

export class EnchantmentTypes {
    private constructor();
    static get(enchantmentId: string): EnchantmentType | undefined;
    static getAll(): EnchantmentType[];
}

// @ts-ignore
export class EnchantRandomEquipmentFunction extends LootItemFunction {
    private constructor();
    readonly chance: number;
}

// @ts-ignore
export class EnchantRandomlyFunction extends LootItemFunction {
    private constructor();
    readonly treasure: boolean;
}

// @ts-ignore
export class EnchantWithLevelsFunction extends LootItemFunction {
    private constructor();
    readonly levels: minecraftcommon.NumberRange;
    readonly treasure: boolean;
}

export class Entity {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly dimension: Dimension;
    readonly id: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isClimbing: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isFalling: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isInWater: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isOnGround: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isSleeping: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    isSneaking: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isSprinting: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly isSwimming: boolean;
    readonly isValid: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly localizationKey: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly location: Vector3;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    nameplateDepthTested: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    nameplateRenderDistance: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    nameTag: string;
    readonly scoreboardIdentity?: ScoreboardIdentity;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly target?: Entity;
    readonly typeId: string;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): Effect | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link ContainerRulesError}
     *
     * {@link Error}
     *
     * {@link InvalidEntityComponentError}
     *
     * {@link InvalidEntityError}
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    addTag(tag: string): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    applyImpulse(vector: Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    applyKnockback(horizontalForce: VectorXZ, verticalStrength: number): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    clearDynamicProperties(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    clearVelocity(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    extinguishFire(useEffects?: boolean): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getAABB(): AABB;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getAllBlocksStandingOn(options?: GetBlocksStandingOnOptions): Block[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getBlockStandingOn(options?: GetBlocksStandingOnOptions): Block | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getComponent<T extends string>(componentId: T): EntityComponentReturnType<T> | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getComponents(): EntityComponent[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getDynamicPropertyIds(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getEffects(): Effect[];
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getHeadLocation(): Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getRotation(): Vector2;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getTags(): string[];
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getVelocity(): Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getViewDirection(): Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    hasComponent(componentId: string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    kill(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    lookAt(targetLocation: Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    matches(options: EntityQueryOptions): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    remove(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    removeEffect(effectType: EffectType | string): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link InvalidEntityError}
     */
    resetProperty(identifier: string): boolean | number | string;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link InvalidEntityError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    setProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    setRotation(rotation: Vector2): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    triggerEvent(eventName: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}

// @ts-ignore
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly entityType: string;
    /**
     * @throws This property can throw when used.
     */
    readonly spawnEvent: string;
    static readonly componentId = "minecraft:addrider";
}

// @ts-ignore
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * @throws This property can throw when used.
     */
    readonly growUp: Trigger;
    /**
     * @throws This property can throw when used.
     */
    readonly transformToItem: string;
    static readonly componentId = "minecraft:ageable";
    /**
     * @throws This function can throw errors.
     */
    getDropItems(): string[];
    /**
     * @throws This function can throw errors.
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}

// @ts-ignore
export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly currentValue: number;
    /**
     * @throws This property can throw when used.
     */
    readonly defaultValue: number;
    /**
     * @throws This property can throw when used.
     */
    readonly effectiveMax: number;
    /**
     * @throws This property can throw when used.
     */
    readonly effectiveMin: number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    resetToDefaultValue(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    resetToMaxValue(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    resetToMinValue(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     */
    setCurrentValue(value: number): boolean;
}

// @ts-ignore
export class EntityBaseMovementComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly maxTurn: number;
}

// @ts-ignore
export class EntityBreathableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    airSupply: number;
    /**
     * @throws This property can throw when used.
     */
    readonly breathesAir: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly breathesLava: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly breathesSolids: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly breathesWater: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly canBreathe: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly generatesBubbles: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly inhaleTime: number;
    /**
     * @throws This property can throw when used.
     */
    readonly suffocateTime: number;
    /**
     * @throws This property can throw when used.
     */
    readonly totalSupply: number;
    static readonly componentId = "minecraft:breathable";
    /**
     * @throws This function can throw errors.
     */
    getBreatheBlocks(): BlockPermutation[];
    /**
     * @throws This function can throw errors.
     */
    getNonBreatheBlocks(): BlockPermutation[];
}

// @ts-ignore
export class EntityCanClimbComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:can_climb";
}

// @ts-ignore
export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:can_fly";
}

// @ts-ignore
export class EntityCanPowerJumpComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:can_power_jump";
}

// @ts-ignore
export class EntityColor2Component extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: PaletteColor;
    static readonly componentId = "minecraft:color2";
}

// @ts-ignore
export class EntityColorComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    value: number;
    static readonly componentId = "minecraft:color";
}

// @ts-ignore
export class EntityComponent extends Component {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly entity: Entity;
}

export class EntityContainerClosedAfterEvent {
    private constructor();
    readonly closeSource: ContainerAccessSource;
    readonly entity: Entity;
}

export class EntityContainerClosedAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityContainerClosedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerClosedAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityContainerClosedAfterEvent) => void): void;
}

export class EntityContainerOpenedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly openSource: ContainerAccessSource;
}

export class EntityContainerOpenedAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityContainerOpenedAfterEvent) => void,
        options?: EntityContainerAccessEventOptions,
    ): (arg0: EntityContainerOpenedAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityContainerOpenedAfterEvent) => void): void;
}

export class EntityDefinitionFeedItem {
    private constructor();
    readonly growth: number;
    readonly item: string;
    readonly resultItem?: string;
}

export class EntityDieAfterEvent {
    private constructor();
    readonly damageSource: EntityDamageSource;
    readonly deadEntity: Entity;
}

export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityDieAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityDieAfterEvent) => void): void;
}

// @ts-ignore
export class EntityEnderInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    static readonly componentId = "minecraft:ender_inventory";
}

// @ts-ignore
export class EntityEquippableComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly totalArmor: number;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly totalToughness: number;
    static readonly componentId = "minecraft:equippable";
    /**
     * @throws This function can throw errors.
     */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /**
     * @throws This function can throw errors.
     */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}

// @ts-ignore
export class EntityExhaustionComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:player.exhaustion";
}

// @ts-ignore
export class EntityFireImmuneComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:fire_immune";
}

// @ts-ignore
export class EntityFloatsInLiquidComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:floats_in_liquid";
}

// @ts-ignore
export class EntityFlyingSpeedComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    value: number;
    static readonly componentId = "minecraft:flying_speed";
}

// @ts-ignore
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = "minecraft:friction_modifier";
}

// @ts-ignore
export class EntityHasMarkVariantCondition extends LootItemCondition {
    private constructor();
    readonly value: number;
}

// @ts-ignore
export class EntityHasVariantCondition extends LootItemCondition {
    private constructor();
    readonly value: number;
}

// @ts-ignore
export class EntityHealableComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly forceUse: boolean;
    static readonly componentId = "minecraft:healable";
    /**
     * @throws This function can throw errors.
     */
    getFeedItems(): FeedItem[];
}

export class EntityHealAfterEvent {
    private constructor();
    readonly healedEntity: Entity;
    readonly healing: number;
    readonly healSource: EntityHealSource;
}

export class EntityHealAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityHealAfterEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityHealAfterEvent) => void): void;
}

export class EntityHealBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly healedEntity: Entity;
    healing: number;
    readonly healSource: EntityHealSource;
}

export class EntityHealBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityHealBeforeEvent) => void,
        options?: EntityHealEventOptions,
    ): (arg0: EntityHealBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityHealBeforeEvent) => void): void;
}

export class EntityHealSource {
    private constructor();
    readonly cause: EntityHealCause;
}

export class EntityHealthChangedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly newValue: number;
    readonly oldValue: number;
}

export class EntityHealthChangedAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityHealthChangedAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHealthChangedAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityHealthChangedAfterEvent) => void): void;
}

// @ts-ignore
export class EntityHealthComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:health";
}

export class EntityHitBlockAfterEvent {
    private constructor();
    readonly blockFace: Direction;
    readonly damagingEntity: Entity;
    readonly hitBlock: Block;
    readonly hitBlockPermutation: BlockPermutation;
}

export class EntityHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityHitBlockAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitBlockAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityHitBlockAfterEvent) => void): void;
}

export class EntityHitEntityAfterEvent {
    private constructor();
    readonly damagingEntity: Entity;
    readonly hitEntity: Entity;
}

export class EntityHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityHitEntityAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityHitEntityAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityHitEntityAfterEvent) => void): void;
}

// @ts-ignore
export class EntityHungerComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:player.hunger";
}

export class EntityHurtAfterEvent {
    private constructor();
    readonly damage: number;
    readonly damageSource: EntityDamageSource;
    readonly hurtEntity: Entity;
}

export class EntityHurtAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityHurtAfterEvent) => void,
        options?: EntityHurtAfterEventOptions,
    ): (arg0: EntityHurtAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityHurtAfterEvent) => void): void;
}

export class EntityHurtBeforeEvent {
    private constructor();
    cancel: boolean;
    damage: number;
    readonly damageSource: EntityDamageSource;
    readonly hurtEntity: Entity;
}

export class EntityHurtBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityHurtBeforeEvent) => void,
        options?: EntityHurtBeforeEventOptions,
    ): (arg0: EntityHurtBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityHurtBeforeEvent) => void): void;
}

// @ts-ignore
export class EntityInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly additionalSlotsPerStrength: number;
    /**
     * @throws This property can throw when used.
     */
    readonly canBeSiphonedFrom: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly container: Container;
    /**
     * @throws This property can throw when used.
     */
    readonly containerType: string;
    /**
     * @throws This property can throw when used.
     */
    readonly inventorySize: number;
    /**
     * @throws This property can throw when used.
     */
    readonly "private": boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly restrictToOwner: boolean;
    static readonly componentId = "minecraft:inventory";
}

// @ts-ignore
export class EntityIsBabyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_baby";
}

// @ts-ignore
export class EntityIsChargedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_charged";
}

// @ts-ignore
export class EntityIsChestedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_chested";
}

// @ts-ignore
export class EntityIsDyeableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_dyeable";
}

// @ts-ignore
export class EntityIsHiddenWhenInvisibleComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_hidden_when_invisible";
}

// @ts-ignore
export class EntityIsIgnitedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_ignited";
}

// @ts-ignore
export class EntityIsIllagerCaptainComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_illager_captain";
}

// @ts-ignore
export class EntityIsSaddledComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_saddled";
}

// @ts-ignore
export class EntityIsShakingComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_shaking";
}

// @ts-ignore
export class EntityIsShearedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_sheared";
}

// @ts-ignore
export class EntityIsStackableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_stackable";
}

// @ts-ignore
export class EntityIsStunnedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_stunned";
}

// @ts-ignore
export class EntityIsTamedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:is_tamed";
}

// @ts-ignore
export class EntityItemComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly itemStack: ItemStack;
    static readonly componentId = "minecraft:item";
}

export class EntityItemDropAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly items: Entity[];
}

export class EntityItemDropAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityItemDropAfterEvent) => void,
        options?: EntityItemDropEventOptions,
    ): (arg0: EntityItemDropAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityItemDropAfterEvent) => void): void;
}

export class EntityItemPickupAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly items: ItemStack[];
}

export class EntityItemPickupAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityItemPickupAfterEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityItemPickupAfterEvent) => void): void;
}

export class EntityItemPickupBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly entity: Entity;
    readonly item: Entity;
}

export class EntityItemPickupBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityItemPickupBeforeEvent) => void,
        options?: EntityItemPickupEventOptions,
    ): (arg0: EntityItemPickupBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityItemPickupBeforeEvent) => void): void;
}

// @ts-ignore
export class EntityKilledCondition extends LootItemCondition {
    private constructor();
    readonly entityType: string;
}

// @ts-ignore
export class EntityLavaMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:lava_movement";
}

// @ts-ignore
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly canBeStolen: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly hardDistance: number;
    /**
     * @throws This property can throw when used.
     */
    readonly isLeashed: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly leashHolder?: Entity;
    /**
     * @throws This property can throw when used.
     */
    readonly leashHolderEntityId?: string;
    /**
     * @throws This property can throw when used.
     */
    readonly maxDistance: number;
    /**
     * @throws This property can throw when used.
     */
    readonly softDistance: number;
    static readonly componentId = "minecraft:leashable";
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    leashTo(leashHolder: Entity): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    unleash(): void;
}

export class EntityLoadAfterEvent {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    entity: Entity;
}

export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: EntityLoadAfterEvent) => void): (arg0: EntityLoadAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityLoadAfterEvent) => void): void;
}

// @ts-ignore
export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = "minecraft:mark_variant";
}

// @ts-ignore
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.amphibious";
}

// @ts-ignore
export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.basic";
}

// @ts-ignore
export class EntityMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:movement";
}

// @ts-ignore
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.fly";
}

// @ts-ignore
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.generic";
}

// @ts-ignore
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly speedWhenTurning: number;
    /**
     * @throws This property can throw when used.
     */
    readonly startSpeed: number;
    static readonly componentId = "minecraft:movement.glide";
}

// @ts-ignore
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.hover";
}

// @ts-ignore
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.jump";
}

// @ts-ignore
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = "minecraft:movement.skip";
}

// @ts-ignore
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly swayAmplitude: number;
    /**
     * @throws This property can throw when used.
     */
    readonly swayFrequency: number;
    static readonly componentId = "minecraft:movement.sway";
}

// @ts-ignore
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.climb";
}

// @ts-ignore
export class EntityNavigationComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly avoidPortals: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly avoidSun: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly avoidWater: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly canBreach: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly canBreakDoors: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly canFloat: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly canJump: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly canOpenDoors: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly canOpenIronDoors: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly canPassDoors: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly canPathFromAir: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly canPathOverLava: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly canPathOverWater: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly canSink: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly canSwim: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly canWalk: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly canWalkInLava: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly isAmphibious: boolean;
}

// @ts-ignore
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.float";
}

// @ts-ignore
export class EntityNavigationFlyComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.fly";
}

// @ts-ignore
export class EntityNavigationGenericComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.generic";
}

// @ts-ignore
export class EntityNavigationHoverComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.hover";
}

// @ts-ignore
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = "minecraft:navigation.walk";
}

// @ts-ignore
export class EntityNpcComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    defaultScene: string;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    name: string;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    skinIndex: number;
    static readonly componentId = "minecraft:npc";
}

// @ts-ignore
export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    readonly onFireTicksRemaining: number;
    static readonly componentId = "minecraft:onfire";
}

// @ts-ignore
export class EntityProjectileComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    airInertia: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    catchFireOnHurt: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    critParticlesOnProjectileHurt: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    destroyOnProjectileHurt: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    gravity: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    hitEntitySound?: string;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    hitGroundSound?: string;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    hitParticle?: string;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    lightningStrikeOnHit: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    liquidInertia: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    onFireTime: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    owner?: Entity;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    shouldBounceOnHit: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    stopOnHit: boolean;
    static readonly componentId = "minecraft:projectile";
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    shoot(velocity: Vector3, options?: ProjectileShootOptions): void;
}

// @ts-ignore
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = "minecraft:push_through";
}

export class EntityRemoveAfterEvent {
    private constructor();
    readonly removedEntityId: string;
    readonly typeId: string;
}

export class EntityRemoveAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg0: EntityRemoveAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityRemoveAfterEvent) => void): void;
}

export class EntityRemoveBeforeEvent {
    private constructor();
    readonly removedEntity: Entity;
}

export class EntityRemoveBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): (arg0: EntityRemoveBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityRemoveBeforeEvent) => void): void;
}

// @ts-ignore
export class EntityRideableComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly controllingSeat: number;
    /**
     * @throws This property can throw when used.
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly interactText: string;
    /**
     * @throws This property can throw when used.
     */
    readonly passengerMaxWidth: number;
    /**
     * @throws This property can throw when used.
     */
    readonly pullInEntities: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly riderCanInteract: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly seatCount: number;
    static readonly componentId = "minecraft:rideable";
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    ejectRiders(): void;
    /**
     * @throws This function can throw errors.
     */
    getFamilyTypes(): string[];
    /**
     * @throws This function can throw errors.
     */
    getRiders(): Entity[];
    /**
     * @throws This function can throw errors.
     */
    getSeats(): Seat[];
}

// @ts-ignore
export class EntityRidingComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly entityRidingOn: Entity;
    static readonly componentId = "minecraft:riding";
}

// @ts-ignore
export class EntitySaturationComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:player.saturation";
}

// @ts-ignore
export class EntityScaleComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = "minecraft:scale";
}

// @ts-ignore
export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = "minecraft:skin_id";
}

export class EntitySpawnAfterEvent {
    private constructor();
    readonly cause: EntityInitializationCause;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    entity: Entity;
}

export class EntitySpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: EntitySpawnAfterEvent) => void): (arg0: EntitySpawnAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntitySpawnAfterEvent) => void): void;
}

export class EntityStartSneakingAfterEvent {
    private constructor();
    readonly entity: Entity;
}

export class EntityStartSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityStartSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStartSneakingAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityStartSneakingAfterEvent) => void): void;
}

export class EntityStopSneakingAfterEvent {
    private constructor();
    readonly entity: Entity;
}

export class EntityStopSneakingAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityStopSneakingAfterEvent) => void,
        options?: EntitySneakingChangedEventOptions,
    ): (arg0: EntityStopSneakingAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityStopSneakingAfterEvent) => void): void;
}

// @ts-ignore
export class EntityStrengthComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly max: number;
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = "minecraft:strength";
}

// @ts-ignore
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly getTameItems: ItemStack[];
    /**
     * @throws This property can throw when used.
     */
    readonly isTamed: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly probability: number;
    /**
     * @throws This property can throw when used.
     */
    readonly tamedToPlayer?: Player;
    /**
     * @throws This property can throw when used.
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = "minecraft:tameable";
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    tame(player: Player): boolean;
}

export class EntityTamedAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly tamingEntity: Entity;
}

export class EntityTamedAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityTamedAfterEvent) => void,
        options?: EntityTamedEventFilter,
    ): (arg0: EntityTamedAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityTamedAfterEvent) => void): void;
}

export class EntityTamedBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly entity: Entity;
    readonly tamingEntity: Entity;
}

export class EntityTamedBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityTamedBeforeEvent) => void,
        options?: EntityTamedEventFilter,
    ): (arg0: EntityTamedBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityTamedBeforeEvent) => void): void;
}

// @ts-ignore
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly isTamed: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly isTamedToPlayer: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly tamedToPlayer?: Player;
    /**
     * @throws This property can throw when used.
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = "minecraft:tamemount";
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    tame(showParticles: boolean): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}

export class EntityType {
    private constructor();
    readonly id: string;
    readonly localizationKey: string;
}

// @ts-ignore
export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:type_family";
    /**
     * @throws This function can throw errors.
     */
    getTypeFamilies(): string[];
    /**
     * @throws This function can throw errors.
     */
    hasTypeFamily(typeFamily: string): boolean;
}

export class EntityTypes {
    private constructor();
    static get(identifier: string): EntityType | undefined;
    static getAll(): EntityType[];
}

// @ts-ignore
export class EntityUnderwaterMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = "minecraft:underwater_movement";
}

export class EntityUpgradeAfterEvent {
    private constructor();
    readonly entity: Entity;
    readonly upgradeId: string;
    getModifiers(): DefinitionModifier[];
}

export class EntityUpgradeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: EntityUpgradeAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg0: EntityUpgradeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: EntityUpgradeAfterEvent) => void): void;
}

// @ts-ignore
export class EntityVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly value: number;
    static readonly componentId = "minecraft:variant";
}

// @ts-ignore
export class EntityWantsJockeyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = "minecraft:wants_jockey";
}

// @ts-ignore
export class EntityWaypoint extends Waypoint {
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly entity: Entity;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly entityRules: EntityVisibilityRules;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(
        entity: Entity,
        textureSelector: WaypointTextureSelector,
        entityRules: EntityVisibilityRules,
        color?: RGB,
    );
}

// @ts-ignore
export class ExplorationMapFunction extends LootItemFunction {
    private constructor();
    readonly destination: string;
}

export class ExplosionAfterEvent {
    private constructor();
    readonly dimension: Dimension;
    readonly source?: Entity;
    getImpactedBlocks(): Block[];
}

export class ExplosionAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ExplosionAfterEvent) => void): (arg0: ExplosionAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ExplosionAfterEvent) => void): void;
}

// @ts-ignore
export class ExplosionBeforeEvent extends ExplosionAfterEvent {
    private constructor();
    cancel: boolean;
    setImpactedBlocks(blocks: Block[]): void;
}

export class ExplosionBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ExplosionBeforeEvent) => void): (arg0: ExplosionBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ExplosionBeforeEvent) => void): void;
}

// @ts-ignore
export class ExplosionDecayFunction extends LootItemFunction {
    private constructor();
}

export class FeedItem {
    private constructor();
    readonly healAmount: number;
    readonly item: string;
    readonly resultItem?: string;
    getEffects(): FeedItemEffect[];
}

export class FeedItemEffect {
    private constructor();
    readonly amplifier: number;
    readonly chance: number;
    readonly duration: number;
    readonly name: string;
}

// @ts-ignore
export class FillContainerFunction extends LootItemFunction {
    private constructor();
    readonly lootTable: string;
}

export class FluidContainer {
    private constructor();
    static readonly maxFillLevel = 6;
    static readonly minFillLevel = 0;
}

export class FogSettings {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getStack(): string[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getTags(): string[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    pop(tag?: string): string | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    push(fogId: string, tag?: string): number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    remove(tag?: string): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link FogSettingsError}
     *
     * {@link InvalidEntityError}
     */
    setStack(fogIds: string[], tag?: string): void;
}

export class GameRuleChangeAfterEvent {
    private constructor();
    readonly rule: GameRule;
    readonly value: boolean | number;
}

export class GameRuleChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): (arg0: GameRuleChangeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): void;
}

export class GameRules {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    commandBlockOutput: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    commandBlocksEnabled: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    doDayLightCycle: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    doEntityDrops: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    doFireTick: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    doImmediateRespawn: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    doInsomnia: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    doLimitedCrafting: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    doMobLoot: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    doMobSpawning: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    doTileDrops: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    doWeatherCycle: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    drowningDamage: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    fallDamage: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    fireDamage: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    freezeDamage: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    functionCommandLimit: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    keepInventory: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    maxCommandChainLength: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    mobGriefing: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    naturalRegeneration: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    playersSleepingPercentage: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    playerWaypoints: PlayerWaypointsMode;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    projectilesCanBreakBlocks: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    pvp: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    randomTickSpeed: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    recipesUnlock: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    respawnBlocksExplode: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    sendCommandFeedback: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    showBorderEffect: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    showCoordinates: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    showDaysPlayed: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    showDeathMessages: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    showRecipeMessages: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    showTags: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    spawnRadius: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    tntExplodes: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    tntExplosionDropDecay: boolean;
}

export class InputInfo {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly lastInputModeUsed: InputMode;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly touchOnlyAffectsHotbar: boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    getButtonState(button: InputButton): ButtonState;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getMovementVector(): Vector2;
}

// @ts-ignore
export class IsBabyCondition extends LootItemCondition {
    private constructor();
}

export class ISerializable {
    private constructor();
}

// @ts-ignore
export class ItemBlockDynamicPropertiesComponent extends ItemComponent {
    private constructor();
    static readonly componentId = "minecraft:block_actor_dynamic_properties";
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     */
    get(key: string): boolean | number | string | Vector3 | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link InvalidItemStackError}
     */
    set(key: string, value?: boolean | number | string | Vector3): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidItemStackError}
     */
    totalByteCount(): number;
}

// @ts-ignore
export class ItemBookComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly author?: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly contents: (string | undefined)[];
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly isSigned: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly pageCount: number;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly rawContents: (RawMessage | undefined)[];
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidItemStackError}
     */
    readonly title?: string;
    static readonly componentId = "minecraft:book";
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidItemStackError}
     */
    getPageContent(pageIndex: number): string | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidItemStackError}
     */
    getRawPageContent(pageIndex: number): RawMessage | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    insertPage(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidItemStackError}
     */
    removePage(pageIndex: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    setContents(contents: ((RawMessage | string)[] | RawMessage | string)[]): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link BookError}
     *
     * {@link BookPageContentError}
     *
     * {@link InvalidItemStackError}
     */
    setPageContent(pageIndex: number, content: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link BookError}
     *
     * {@link InvalidEntityError}
     *
     * {@link InvalidItemStackError}
     */
    signBook(title: string, author: string): void;
}

export class ItemCompleteUseAfterEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemCompleteUseAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): (arg0: ItemCompleteUseAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ItemCompleteUseAfterEvent) => void): void;
}

export class ItemCompleteUseEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
}

// @ts-ignore
export class ItemComponent extends Component {
    private constructor();
}

export class ItemComponentBeforeDurabilityDamageEvent {
    private constructor();
    readonly attackingEntity: Entity;
    durabilityDamage: number;
    readonly hitEntity: Entity;
    itemStack?: ItemStack;
}

// @ts-ignore
export class ItemComponentCompleteUseEvent extends ItemCompleteUseEvent {
    private constructor();
}

export class ItemComponentConsumeEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Entity;
}

export class ItemComponentHitEntityEvent {
    private constructor();
    readonly attackingEntity: Entity;
    readonly hadEffect: boolean;
    readonly hitEntity: Entity;
    readonly itemStack?: ItemStack;
}

export class ItemComponentMineBlockEvent {
    private constructor();
    readonly block: Block;
    readonly itemStack?: ItemStack;
    readonly minedBlockPermutation: BlockPermutation;
    readonly source: Entity;
}

export class ItemComponentRegistry {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link CustomComponentInvalidRegistryError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link ItemCustomComponentAlreadyRegisteredError}
     *
     * {@link ItemCustomComponentReloadNewComponentError}
     *
     * {@link ItemCustomComponentReloadNewEventError}
     *
     * {@link ItemCustomComponentReloadVersionError}
     *
     * {@link NamespaceNameError}
     */
    registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void;
}

export class ItemComponentUseEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
}

// @ts-ignore
export class ItemComponentUseOnEvent extends ItemUseOnEvent {
    private constructor();
    readonly source: Entity;
    readonly usedOnBlockPermutation: BlockPermutation;
}

// @ts-ignore
export class ItemCompostableComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly compostingChance: number;
    static readonly componentId = "minecraft:compostable";
}

// @ts-ignore
export class ItemCooldownComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly cooldownCategory: string;
    /**
     * @throws This property can throw when used.
     */
    readonly cooldownTicks: number;
    static readonly componentId = "minecraft:cooldown";
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getCooldownTicksRemaining(player: Player): number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    isCooldownCategory(cooldownCategory: string): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    startCooldown(player: Player): void;
}

// @ts-ignore
export class ItemCustomComponentInstance extends ItemComponent {
    private constructor();
    readonly customComponentParameters: CustomComponentParameters;
}

// @ts-ignore
export class ItemDurabilityComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    damage: number;
    /**
     * @throws This property can throw when used.
     */
    readonly maxDurability: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    unbreakable: boolean;
    static readonly componentId = "minecraft:durability";
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getDamageChance(unbreakingEnchantmentLevel?: number): number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    getDamageChanceRange(): minecraftcommon.NumberRange;
}

// @ts-ignore
export class ItemDyeableComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    color?: RGB;
    /**
     * @throws This property can throw when used.
     */
    readonly defaultColor?: RGB;
    static readonly componentId = "minecraft:dyeable";
}

// @ts-ignore
export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly slots: EnchantmentSlot[];
    static readonly componentId = "minecraft:enchantable";
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantment(enchantment: Enchantment): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantments(enchantments: Enchantment[]): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /**
     * @throws This function can throw errors.
     */
    getEnchantments(): Enchantment[];
    /**
     * @throws This function can throw errors.
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    removeAllEnchantments(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}

// @ts-ignore
export class ItemFoodComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly canAlwaysEat: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly nutrition: number;
    /**
     * @throws This property can throw when used.
     */
    readonly saturationModifier: number;
    /**
     * @throws This property can throw when used.
     */
    readonly usingConvertsTo: string;
    static readonly componentId = "minecraft:food";
}

// @ts-ignore
export class ItemInventoryComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidContainerError}
     */
    readonly container: Container;
    static readonly componentId = "minecraft:inventory";
}

// @ts-ignore
export class ItemPotionComponent extends ItemComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    readonly potionDeliveryType: PotionDeliveryType;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    readonly potionEffectType: PotionEffectType;
    static readonly componentId = "minecraft:potion";
}

export class ItemReleaseUseAfterEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): (arg0: ItemReleaseUseAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): void;
}

export class ItemStack {
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    amount: number;
    readonly isStackable: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    keepOnDeath: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftcommon.EngineError}
     */
    readonly localizationKey: string;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    lockMode: ItemLockMode;
    readonly maxAmount: number;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    nameTag?: string;
    readonly "type": ItemType;
    readonly typeId: string;
    readonly weight: number;
    /**
     * @throws This function can throw errors.
     */
    constructor(itemType: ItemType | string, amount?: number);
    clearDynamicProperties(): void;
    clone(): ItemStack;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getCanDestroy(): string[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getCanPlaceOn(): string[];
    getComponent<T extends string>(componentId: T): ItemComponentReturnType<T> | undefined;
    getComponents(): ItemComponent[];
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    getDynamicPropertyIds(): string[];
    getDynamicPropertyTotalByteCount(): number;
    getLore(): string[];
    getRawLore(): RawMessage[];
    getTags(): string[];
    hasComponent(componentId: string): boolean;
    hasTag(tag: string): boolean;
    isStackableWith(itemStack: ItemStack): boolean;
    matches(itemName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.UnsupportedFunctionalityError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     */
    setLore(loreList?: (RawMessage | string)[]): void;
}

export class ItemStartUseAfterEvent {
    private constructor();
    readonly itemStack: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStartUseAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ItemStartUseAfterEvent) => void): (arg0: ItemStartUseAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ItemStartUseAfterEvent) => void): void;
}

export class ItemStartUseOnAfterEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    readonly itemStack?: ItemStack;
    readonly source: Player;
}

export class ItemStartUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): (arg0: ItemStartUseOnAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): void;
}

export class ItemStopUseAfterEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly source: Player;
    readonly useDuration: number;
}

export class ItemStopUseAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ItemStopUseAfterEvent) => void): (arg0: ItemStopUseAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ItemStopUseAfterEvent) => void): void;
}

export class ItemStopUseOnAfterEvent {
    private constructor();
    readonly block: Block;
    readonly itemStack?: ItemStack;
    readonly source: Player;
}

export class ItemStopUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): (arg0: ItemStopUseOnAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ItemStopUseOnAfterEvent) => void): void;
}

export class ItemType {
    private constructor();
    readonly id: string;
    readonly localizationKey: string;
}

export class ItemTypes {
    private constructor();
    static get(itemId: string): ItemType | undefined;
    static getAll(): ItemType[];
}

export class ItemUseAfterEvent {
    private constructor();
    itemStack: ItemStack;
    readonly source: Player;
}

export class ItemUseAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ItemUseAfterEvent) => void): (arg0: ItemUseAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ItemUseAfterEvent) => void): void;
}

// @ts-ignore
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    cancel: boolean;
}

export class ItemUseBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ItemUseBeforeEvent) => void): (arg0: ItemUseBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ItemUseBeforeEvent) => void): void;
}

export class ItemUseOnEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    readonly faceLocation: Vector3;
    readonly itemStack: ItemStack;
}

// @ts-ignore
export class KilledByEntityCondition extends LootItemCondition {
    private constructor();
    readonly entityType: string;
}

// @ts-ignore
export class KilledByPlayerCondition extends LootItemCondition {
    private constructor();
}

// @ts-ignore
export class KilledByPlayerOrPetsCondition extends LootItemCondition {
    private constructor();
}

// @ts-ignore
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    readonly isPowered: boolean;
    readonly player: Player;
}

export class LeverActionAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: LeverActionAfterEvent) => void): (arg0: LeverActionAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: LeverActionAfterEvent) => void): void;
}

export class LinearSpline {
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    controlPoints: Vector3[];
}

// @ts-ignore
export class ListBlockVolume extends BlockVolumeBase {
    constructor(locations: Vector3[]);
    add(locations: Vector3[]): void;
    remove(locations: Vector3[]): void;
}

// @ts-ignore
export class LocationWaypoint extends Waypoint {
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(dimensionLocation: DimensionLocation, textureSelector: WaypointTextureSelector, color?: RGB);
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setDimensionLocation(dimensionLocation: DimensionLocation): void;
}

export class LocatorBar {
    private constructor();
    readonly count: number;
    readonly maxCount: number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidWaypointError}
     *
     * {@link LocatorBarError}
     */
    addWaypoint(waypoint: Waypoint): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getAllWaypoints(): Waypoint[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    hasWaypoint(waypoint: Waypoint): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    removeAllWaypoints(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link LocatorBarError}
     */
    removeWaypoint(waypoint: Waypoint): void;
}

// @ts-ignore
export class LootingEnchantFunction extends LootItemFunction {
    private constructor();
    readonly count: minecraftcommon.NumberRange;
}

// @ts-ignore
export class LootItem extends LootPoolEntry {
    private constructor();
    readonly conditions: LootItemCondition[];
    readonly functions: LootItemFunction[];
    readonly name?: ItemType;
}

export class LootItemCondition {
    private constructor();
}

export class LootItemFunction {
    private constructor();
    readonly conditions: LootItemCondition[];
}

export class LootPool {
    private constructor();
    readonly bonusRolls: minecraftcommon.NumberRange;
    readonly conditions: LootItemCondition[];
    readonly entries: LootPoolEntry[];
    readonly rolls: minecraftcommon.NumberRange;
    readonly tiers?: LootPoolTiers;
}

export class LootPoolEntry {
    private constructor();
    readonly quality: number;
    readonly subTable?: LootPoolEntry;
    readonly weight: number;
}

export class LootPoolTiers {
    private constructor();
    readonly bonusChance: number;
    readonly bonusRolls: number;
    readonly initialRange: number;
}

export class LootTable {
    private constructor();
    readonly path: string;
    readonly pools: LootPool[];
}

// @ts-ignore
export class LootTableEntry extends LootPoolEntry {
    private constructor();
    readonly lootTable: LootTable;
}

export class LootTableManager {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     *
     * {@link UnloadedChunksError}
     */
    generateLootFromBlock(block: Block, tool?: ItemStack): ItemStack[] | undefined;
    generateLootFromBlockPermutation(blockPermutation: BlockPermutation, tool?: ItemStack): ItemStack[] | undefined;
    generateLootFromBlockType(scriptBlockType: BlockType, tool?: ItemStack): ItemStack[] | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    generateLootFromEntity(entity: Entity, tool?: ItemStack): ItemStack[] | undefined;
    generateLootFromEntityType(entityType: EntityType, tool?: ItemStack): ItemStack[] | undefined;
    generateLootFromTable(lootTable: LootTable, tool?: ItemStack): ItemStack[] | undefined;
    getLootTable(path: string): LootTable | undefined;
}

// @ts-ignore
export class LootTableReference extends LootPoolEntry {
    private constructor();
    readonly path: string;
}

// @ts-ignore
export class MatchToolCondition extends LootItemCondition {
    private constructor();
    readonly count: minecraftcommon.NumberRange;
    readonly durability: minecraftcommon.NumberRange;
    readonly enchantments: EnchantInfo[];
    readonly itemName: string;
    readonly itemTagsAll: string[];
    readonly itemTagsAny: string[];
    readonly itemTagsNone: string[];
}

export class MessageReceiveAfterEvent {
    private constructor();
    readonly id: string;
    readonly message: string;
    readonly player: Player;
}

export class MolangVariableMap {
    /**
     * @throws This function can throw errors.
     */
    setColorRGB(variableName: string, color: RGB): void;
    /**
     * @throws This function can throw errors.
     */
    setColorRGBA(variableName: string, color: RGBA): void;
    /**
     * @throws This function can throw errors.
     */
    setFloat(variableName: string, number: number): void;
    /**
     * @throws This function can throw errors.
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void;
    /**
     * @throws This function can throw errors.
     */
    setVector3(variableName: string, vector: Vector3): void;
}

export class PackSettingChangeAfterEvent {
    private constructor();
    readonly settingName: string;
    readonly settingValue: boolean | number | string;
}

export class PackSettingChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): (arg0: PackSettingChangeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): void;
}

// @ts-ignore
export class PassengerOfEntityCondition extends LootItemCondition {
    private constructor();
    readonly entityType: string;
}

// @ts-ignore
export class PistonActivateAfterEvent extends BlockEvent {
    private constructor();
    readonly isExpanding: boolean;
    readonly piston: BlockPistonComponent;
}

export class PistonActivateAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: PistonActivateAfterEvent) => void): (arg0: PistonActivateAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PistonActivateAfterEvent) => void): void;
}

// @ts-ignore
export class Player extends Entity {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly camera: Camera;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly chatDisplayName: string;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    chatMessagePrefix?: string;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    chatNamePrefix?: string;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    chatNameSuffix?: string;
    /**
     * @throws This property can throw when used.
     */
    readonly clientSystemInfo: ClientSystemInfo;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    commandPermissionLevel: CommandPermissionLevel;
    readonly fogSettings: FogSettings;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly graphicsMode: GraphicsMode;
    readonly inputInfo: InputInfo;
    readonly inputPermissions: PlayerInputPermissions;
    /**
     * @throws This property can throw when used.
     */
    readonly isEmoting: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly isFlying: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly isGliding: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly isJumping: boolean;
    /**
     * @throws This property can throw when used.
     */
    readonly level: number;
    readonly locatorBar: LocatorBar;
    /**
     * @throws This property can throw when used.
     */
    readonly name: string;
    /**
     * @throws This property can throw when used.
     */
    readonly onScreenDisplay: ScreenDisplay;
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    readonly persistentId: string;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidEntityError}
     */
    readonly playerPermissionLevel: PlayerPermissionLevel;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    selectedSlotIndex: number;
    /**
     * @throws This property can throw when used.
     */
    readonly totalXpNeededForNextLevel: number;
    /**
     * @throws This property can throw when used.
     */
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addExperience(amount: number): number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addLevels(amount: number): number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    clearPropertyOverridesForEntity(targetEntity: Entity | string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    eatItem(itemStack: ItemStack): void;
    getAimAssist(): PlayerAimAssist;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getControlScheme(): ControlScheme;
    /**
     * @throws This function can throw errors.
     */
    getGameMode(): GameMode;
    /**
     * @throws This function can throw errors.
     */
    getItemCooldown(cooldownCategory: string): number;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    getPing(): number;
    /**
     * @throws This function can throw errors.
     */
    getSpawnPoint(): DimensionLocation | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidEntityError}
     */
    getSplitScreenSlot(): PlayerSplitScreenSlot | undefined;
    /**
     * @throws This function can throw errors.
     */
    getTotalXp(): number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    playSound(soundId: SoundDefinition | string, soundOptions?: PlayerSoundOptions): SoundInstance;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    postClientMessage(id: string, value: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    removePropertyOverrideForEntity(targetEntity: Entity, identifier: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    resetLevel(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     */
    setControlScheme(controlScheme?: ControlScheme): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setGameMode(gameMode?: GameMode): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setPropertyOverrideForEntity(targetEntity: Entity, identifier: string, value: boolean | number | string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    stopAllSounds(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    stopMusic(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    stopSound(soundId: string): void;
}

export class PlayerAimAssist {
    private constructor();
    readonly settings?: PlayerAimAssistSettings;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidEntityError}
     *
     * {@link NamespaceNameError}
     */
    set(settings?: PlayerAimAssistSettings): void;
}

// @ts-ignore
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    readonly brokenBlockPermutation: BlockPermutation;
    readonly itemStackAfterBreak?: ItemStack;
    readonly itemStackBeforeBreak?: ItemStack;
    readonly player: Player;
}

export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockAfterEvent) => void): void;
}

// @ts-ignore
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    private constructor();
    cancel: boolean;
    itemStack?: ItemStack;
    readonly player: Player;
}

export class PlayerBreakBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerBreakBlockBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerBreakBlockBeforeEvent) => void): void;
}

export class PlayerButtonInputAfterEvent {
    private constructor();
    readonly button: InputButton;
    readonly newButtonState: ButtonState;
    readonly player: Player;
}

export class PlayerButtonInputAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerButtonInputAfterEvent) => void,
        options?: InputEventOptions,
    ): (arg0: PlayerButtonInputAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerButtonInputAfterEvent) => void): void;
}

// @ts-ignore
export class PlayerCancelBreakingBlockAfterEvent extends BlockEvent {
    private constructor();
    readonly blockPermutation: BlockPermutation;
    readonly breakProgress: number;
    readonly face: Direction;
    readonly heldItemStack?: ItemStack;
    readonly player: Player;
}

export class PlayerCancelBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerCancelBreakingBlockAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerCancelBreakingBlockAfterEvent) => void): void;
}

// @ts-ignore
export class PlayerCursorInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly item?: ItemStack;
    static readonly componentId = "minecraft:cursor_inventory";
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    clear(): void;
}

export class PlayerDimensionChangeAfterEvent {
    private constructor();
    readonly fromDimension: Dimension;
    readonly fromLocation: Vector3;
    readonly player: Player;
    readonly toDimension: Dimension;
    readonly toLocation: Vector3;
}

export class PlayerDimensionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerDimensionChangeAfterEvent) => void,
    ): (arg0: PlayerDimensionChangeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerDimensionChangeAfterEvent) => void): void;
}

export class PlayerEmoteAfterEvent {
    private constructor();
    readonly personaPieceId: string;
    readonly player: Player;
}

export class PlayerEmoteAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): (arg0: PlayerEmoteAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerEmoteAfterEvent) => void): void;
}

export class PlayerGameModeChangeAfterEvent {
    private constructor();
    readonly fromGameMode: GameMode;
    readonly player: Player;
    readonly toGameMode: GameMode;
}

export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): (arg0: PlayerGameModeChangeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeAfterEvent) => void): void;
}

export class PlayerGameModeChangeBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly fromGameMode: GameMode;
    readonly player: Player;
    toGameMode: GameMode;
}

export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerGameModeChangeBeforeEvent) => void,
    ): (arg0: PlayerGameModeChangeBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerGameModeChangeBeforeEvent) => void): void;
}

export class PlayerHotbarSelectedSlotChangeAfterEvent {
    private constructor();
    readonly itemStack?: ItemStack;
    readonly newSlotSelected: number;
    readonly player: Player;
    readonly previousSlotSelected: number;
}

export class PlayerHotbarSelectedSlotChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void,
        options?: HotbarEventOptions,
    ): (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerHotbarSelectedSlotChangeAfterEvent) => void): void;
}

export class PlayerInputModeChangeAfterEvent {
    private constructor();
    readonly newInputModeUsed: InputMode;
    readonly player: Player;
    readonly previousInputModeUsed: InputMode;
}

export class PlayerInputModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerInputModeChangeAfterEvent) => void,
    ): (arg0: PlayerInputModeChangeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerInputModeChangeAfterEvent) => void): void;
}

export class PlayerInputPermissionCategoryChangeAfterEvent {
    private constructor();
    readonly category: InputPermissionCategory;
    readonly enabled: boolean;
    readonly player: Player;
}

export class PlayerInputPermissionCategoryChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void,
    ): (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerInputPermissionCategoryChangeAfterEvent) => void): void;
}

export class PlayerInputPermissions {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    isPermissionCategoryEnabled(permissionCategory: InputPermissionCategory): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setPermissionCategory(permissionCategory: InputPermissionCategory, isEnabled: boolean): void;
}

export class PlayerInteractWithBlockAfterEvent {
    private constructor();
    readonly beforeItemStack?: ItemStack;
    readonly block: Block;
    readonly blockFace: Direction;
    readonly faceLocation: Vector3;
    readonly isFirstEvent: boolean;
    readonly itemStack?: ItemStack;
    readonly player: Player;
}

export class PlayerInteractWithBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerInteractWithBlockAfterEvent) => void,
    ): (arg0: PlayerInteractWithBlockAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockAfterEvent) => void): void;
}

export class PlayerInteractWithBlockBeforeEvent {
    private constructor();
    readonly block: Block;
    readonly blockFace: Direction;
    cancel: boolean;
    readonly faceLocation: Vector3;
    readonly isFirstEvent: boolean;
    readonly itemStack?: ItemStack;
    readonly player: Player;
}

export class PlayerInteractWithBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void,
    ): (arg0: PlayerInteractWithBlockBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerInteractWithBlockBeforeEvent) => void): void;
}

export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    readonly beforeItemStack?: ItemStack;
    readonly itemStack?: ItemStack;
    readonly player: Player;
    readonly target: Entity;
}

export class PlayerInteractWithEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerInteractWithEntityAfterEvent) => void,
    ): (arg0: PlayerInteractWithEntityAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): void;
}

export class PlayerInteractWithEntityBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly itemStack?: ItemStack;
    readonly player: Player;
    readonly target: Entity;
}

export class PlayerInteractWithEntityBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void,
    ): (arg0: PlayerInteractWithEntityBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void): void;
}

export class PlayerInventoryItemChangeAfterEvent {
    private constructor();
    readonly beforeItemStack?: ItemStack;
    readonly inventoryType: PlayerInventoryType;
    readonly itemStack?: ItemStack;
    readonly player: Player;
    readonly slot: number;
}

export class PlayerInventoryItemChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void,
        options?: InventoryItemEventOptions,
    ): (arg0: PlayerInventoryItemChangeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerInventoryItemChangeAfterEvent) => void): void;
}

export class PlayerJoinAfterEvent {
    private constructor();
    readonly playerId: string;
    readonly playerName: string;
}

export class PlayerJoinAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: PlayerJoinAfterEvent) => void): (arg0: PlayerJoinAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerJoinAfterEvent) => void): void;
}

export class PlayerLeaveAfterEvent {
    private constructor();
    readonly playerId: string;
    readonly playerName: string;
}

export class PlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): (arg0: PlayerLeaveAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerLeaveAfterEvent) => void): void;
}

export class PlayerLeaveBeforeEvent {
    private constructor();
    readonly player: Player;
}

export class PlayerLeaveBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): (arg0: PlayerLeaveBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerLeaveBeforeEvent) => void): void;
}

// @ts-ignore
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    private constructor();
    readonly player: Player;
}

export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockAfterEvent) => void): void;
}

// @ts-ignore
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    private constructor();
    cancel: boolean;
    readonly face: Direction;
    readonly faceLocation: Vector3;
    readonly permutationToPlace: BlockPermutation;
    readonly player: Player;
}

export class PlayerPlaceBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerPlaceBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg0: PlayerPlaceBlockBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerPlaceBlockBeforeEvent) => void): void;
}

export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    initialSpawn: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    player: Player;
}

export class PlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): (arg0: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerSpawnAfterEvent) => void): void;
}

// @ts-ignore
export class PlayerStartBreakingBlockAfterEvent extends BlockEvent {
    private constructor();
    readonly blockPermutation: BlockPermutation;
    readonly face: Direction;
    readonly heldItemStack?: ItemStack;
    readonly player: Player;
}

export class PlayerStartBreakingBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void,
        options?: PlayerBreakingBlockEventOptions,
    ): (arg0: PlayerStartBreakingBlockAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerStartBreakingBlockAfterEvent) => void): void;
}

export class PlayerSwingStartAfterEvent {
    private constructor();
    readonly heldItemStack?: ItemStack;
    readonly player: Player;
    readonly swingSource: EntitySwingSource;
}

export class PlayerSwingStartAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: PlayerSwingStartAfterEvent) => void,
        options?: PlayerSwingEventOptions,
    ): (arg0: PlayerSwingStartAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerSwingStartAfterEvent) => void): void;
}

export class PlayerUseNameTagAfterEvent {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    entityNamed: Entity;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    newName: string;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    player: Player;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    previousName?: string;
}

export class PlayerUseNameTagAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): (arg0: PlayerUseNameTagAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PlayerUseNameTagAfterEvent) => void): void;
}

// @ts-ignore
export class PlayerWaypoint extends EntityWaypoint {
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    readonly playerRules: PlayerVisibilityRules;
    /**
     * @throws This function can throw errors.
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    constructor(
        player: Player,
        textureSelector: WaypointTextureSelector,
        playerRules: PlayerVisibilityRules,
        color?: RGB,
    );
}

export class PotionDeliveryType {
    private constructor();
    readonly id: string;
}

export class PotionEffectType {
    private constructor();
    /**
     * @throws This property can throw when used.
     *
     * {@link minecraftcommon.EngineError}
     */
    readonly durationTicks?: number;
    readonly id: string;
}

export class Potions {
    private constructor();
    static getAllDeliveryTypes(): PotionDeliveryType[];
    static getAllEffectTypes(): PotionEffectType[];
    static getDeliveryType(potionDeliveryId: string): PotionDeliveryType | undefined;
    static getEffectType(potionEffectId: string): PotionEffectType | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidPotionDeliveryTypeError}
     *
     * {@link InvalidPotionEffectTypeError}
     */
    static resolve(
        potionEffectType: PotionEffectType | string,
        potionDeliveryType: PotionDeliveryType | string,
    ): ItemStack;
}

// @ts-ignore
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
}

export class PressurePlatePopAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): (arg0: PressurePlatePopAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PressurePlatePopAfterEvent) => void): void;
}

// @ts-ignore
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
    readonly source: Entity;
}

export class PressurePlatePushAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): (arg0: PressurePlatePushAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: PressurePlatePushAfterEvent) => void): void;
}

export class PrimitiveShape {
    private constructor();
    attachedTo?: Entity;
    color: RGBA;
    readonly dimension: Dimension;
    readonly hasDuration: boolean;
    readonly location: Vector3;
    maximumRenderDistance?: number;
    rotation: Vector3;
    scale: number;
    timeLeft?: number;
    readonly totalTimeLeft?: number;
    visibleTo: Player[];
    remove(): void;
    setLocation(location: DimensionLocation | Vector3): void;
}

export class PrimitiveShapesManager {
    private constructor();
    readonly maxShapes: number;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link PrimitiveShapeError}
     */
    addText(text: TextPrimitive, dimension?: Dimension): void;
    getShapes(options?: PrimitiveShapeQueryOptions): PrimitiveShape[];
    removeAll(): void;
    removeText(text: TextPrimitive): void;
}

export class ProjectileHitBlockAfterEvent {
    private constructor();
    readonly dimension: Dimension;
    readonly hitVector: Vector3;
    readonly location: Vector3;
    readonly projectile: Entity;
    readonly source?: Entity;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getBlockHit(): BlockHitInformation;
}

export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): (arg0: ProjectileHitBlockAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ProjectileHitBlockAfterEvent) => void): void;
}

export class ProjectileHitEntityAfterEvent {
    private constructor();
    readonly dimension: Dimension;
    readonly hitVector: Vector3;
    readonly location: Vector3;
    readonly projectile: Entity;
    readonly source?: Entity;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getEntityHit(): EntityHitInformation;
}

export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): (arg0: ProjectileHitEntityAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ProjectileHitEntityAfterEvent) => void): void;
}

// @ts-ignore
export class RandomAuxValueFunction extends LootItemFunction {
    private constructor();
    readonly values: minecraftcommon.NumberRange;
}

// @ts-ignore
export class RandomBlockStateFunction extends LootItemFunction {
    private constructor();
    readonly blockState: string;
    readonly values: minecraftcommon.NumberRange;
}

// @ts-ignore
export class RandomChanceCondition extends LootItemCondition {
    private constructor();
    readonly chance: number;
}

// @ts-ignore
export class RandomChanceWithLootingCondition extends LootItemCondition {
    private constructor();
    readonly chance: number;
    readonly lootingMultiplier: number;
}

// @ts-ignore
export class RandomDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    readonly chances: number[];
}

// @ts-ignore
export class RandomDyeFunction extends LootItemFunction {
    private constructor();
}

// @ts-ignore
export class RandomRegionalDifficultyChanceCondition extends LootItemCondition {
    private constructor();
    readonly maxChance: number;
}

export class Scoreboard {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addObjective(objectiveId: string, displayName?: string): ScoreboardObjective;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined;
    getObjective(objectiveId: string): ScoreboardObjective | undefined;
    getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined;
    getObjectives(): ScoreboardObjective[];
    getParticipants(): ScoreboardIdentity[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    removeObjective(objectiveId: ScoreboardObjective | string): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setObjectiveAtDisplaySlot(
        displaySlotId: DisplaySlotId,
        objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,
    ): ScoreboardObjective | undefined;
}

export class ScoreboardIdentity {
    private constructor();
    readonly displayName: string;
    readonly id: number;
    readonly isValid: boolean;
    readonly "type": ScoreboardIdentityType;
    /**
     * @throws This function can throw errors.
     */
    getEntity(): Entity | undefined;
}

export class ScoreboardObjective {
    private constructor();
    /**
     * @throws This property can throw when used.
     */
    readonly displayName: string;
    /**
     * @throws This property can throw when used.
     */
    readonly id: string;
    readonly isValid: boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    /**
     * @throws This function can throw errors.
     */
    getParticipants(): ScoreboardIdentity[];
    /**
     * @throws This function can throw errors.
     */
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    /**
     * @throws This function can throw errors.
     */
    getScores(): ScoreboardScoreInfo[];
    /**
     * @throws This function can throw errors.
     */
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}

export class ScoreboardScoreInfo {
    private constructor();
    readonly participant: ScoreboardIdentity;
    readonly score: number;
}

export class ScreenDisplay {
    private constructor();
    readonly isValid: boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    getHiddenHudElements(): HudElement[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    isForcedHidden(hudElement: HudElement): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    resetHudElementsVisibility(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     */
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidEntityError}
     *
     * {@link RawMessageError}
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}

export class ScriptEventCommandMessageAfterEvent {
    private constructor();
    readonly id: string;
    readonly initiator?: Entity;
    readonly message: string;
    readonly sourceBlock?: Block;
    readonly sourceEntity?: Entity;
    readonly sourceType: ScriptEventSource;
}

export class ScriptEventCommandMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(
        callback: (arg0: ScriptEventCommandMessageAfterEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg0: ScriptEventCommandMessageAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ScriptEventCommandMessageAfterEvent) => void): void;
}

export class Seat {
    private constructor();
    readonly lockRiderRotation: number;
    readonly maxRiderCount: number;
    readonly minRiderCount: number;
    readonly position: Vector3;
    readonly seatRotation: number;
}

export class ServerMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: MessageReceiveAfterEvent) => void): (arg0: MessageReceiveAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: MessageReceiveAfterEvent) => void): void;
}

// @ts-ignore
export class SetArmorTrimFunction extends LootItemFunction {
    private constructor();
    readonly material: string;
    readonly pattern: string;
}

// @ts-ignore
export class SetBannerDetailsFunction extends LootItemFunction {
    private constructor();
    readonly baseColor: string;
    readonly patterns: BannerPattern[];
    readonly "type": number;
}

// @ts-ignore
export class SetBookContentsFunction extends LootItemFunction {
    private constructor();
    readonly author: string;
    readonly pages: string[];
    readonly title: string;
}

// @ts-ignore
export class SetDataFromColorIndexFunction extends LootItemFunction {
    private constructor();
}

// @ts-ignore
export class SetItemCountFunction extends LootItemFunction {
    private constructor();
    readonly count: minecraftcommon.NumberRange;
}

// @ts-ignore
export class SetItemDamageFunction extends LootItemFunction {
    private constructor();
    readonly damage: minecraftcommon.NumberRange;
}

// @ts-ignore
export class SetItemDataFunction extends LootItemFunction {
    private constructor();
    readonly data: minecraftcommon.NumberRange;
}

// @ts-ignore
export class SetItemLoreFunction extends LootItemFunction {
    private constructor();
    readonly lore: string[];
}

// @ts-ignore
export class SetItemNameFunction extends LootItemFunction {
    private constructor();
    readonly name: string;
}

// @ts-ignore
export class SetOminousBottleFunction extends LootItemFunction {
    private constructor();
    readonly amplifier: minecraftcommon.NumberRange;
}

// @ts-ignore
export class SetPotionFunction extends LootItemFunction {
    private constructor();
    readonly id: string;
}

// @ts-ignore
export class SetSpawnEggFunction extends LootItemFunction {
    private constructor();
    readonly id: string;
}

// @ts-ignore
export class SetStewEffectFunction extends LootItemFunction {
    private constructor();
    readonly effects: number[];
}

export class ShutdownBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: ShutdownEvent) => void): (arg0: ShutdownEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: ShutdownEvent) => void): void;
}

export class ShutdownEvent {
    private constructor();
}

// @ts-ignore
export class SmeltItemFunction extends LootItemFunction {
    private constructor();
}

export class SoundCompletedAfterEvent {
    private constructor();
    readonly soundInstanceId: string;
}

export class SoundCompletedAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: SoundCompletedAfterEvent) => void): (arg0: SoundCompletedAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: SoundCompletedAfterEvent) => void): void;
}

export class SoundDefinition {
    private constructor();
    readonly durationInfo?: SoundDefinitionDurationInfo;
    readonly musicInfo?: SoundDefinitionMusicInfo;
    readonly soundEventId: string;
    readonly tags?: Record<string, string[]>;
}

export class SoundDefinitionRegistry {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getDefinitions(filter?: SoundDefinitionFilter): SoundDefinition[];
}

export class SoundDurationInfo {
    private constructor();
    readonly duration: number;
    readonly isActive: boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getPlaybackPosition(): number;
}

export class SoundInstance {
    private constructor();
    readonly durationInfo?: SoundDurationInfo;
    readonly id: string;
    readonly recipient?: Player;
    readonly soundEventId: string;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    fade(duration: number, targetVolume: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    pause(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    resume(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    seekTo(seconds: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setPitch(pitch: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setVolume(volume: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    stop(): void;
}

// @ts-ignore
export class SpecificEnchantFunction extends LootItemFunction {
    private constructor();
    readonly enchantments: EnchantInfo[];
}

export class StartupBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: StartupEvent) => void): (arg0: StartupEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: StartupEvent) => void): void;
}

export class StartupEvent {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly blockComponentRegistry: BlockComponentRegistry;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly customCommandRegistry: CustomCommandRegistry;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly dimensionRegistry: DimensionRegistry;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemComponentRegistry: ItemComponentRegistry;
}

// @ts-ignore
export class Structure extends ISerializable {
    private constructor();
    readonly id: string;
    readonly isValid: boolean;
    /**
     * @throws This property can throw when used.
     *
     * {@link InvalidStructureError}
     */
    readonly size: Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getIsWaterlogged(location: Vector3): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    saveAs(identifier: string, saveMode?: StructureSaveMode): Structure;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidStructureError}
     */
    saveToWorld(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation, waterlogged?: boolean): void;
}

export class StructureManager {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createFromWorld(
        identifier: string,
        dimension: Dimension,
        from: Vector3,
        to: Vector3,
        options?: StructureCreateOptions,
    ): Structure;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    delete(structure: string | Structure): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    get(identifier: string): Structure | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getPackStructureIds(): string[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getWorldStructureIds(): string[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    place(
        structure: string | Structure,
        dimension: Dimension,
        location: Vector3,
        options?: StructurePlaceOptions,
    ): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link PlaceJigsawError}
     */
    placeJigsaw(
        pool: string,
        targetJigsaw: string,
        maxDepth: number,
        dimension: Dimension,
        location: Vector3,
        options?: JigsawPlaceOptions,
    ): BlockBoundingBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link PlaceJigsawError}
     */
    placeJigsawStructure(
        identifier: string,
        dimension: Dimension,
        location: Vector3,
        options?: JigsawStructurePlaceOptions,
    ): BlockBoundingBox;
}

export class System {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly afterEvents: SystemAfterEvents;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly beforeEvents: SystemBeforeEvents;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly currentTick: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly isEditorWorld: boolean;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly serverSystemInfo: SystemInfo;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    clearJob(jobId: number): void;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    clearRun(runId: number): void;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    run(callback: () => void): number;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    runJob(generator: Generator<void, void, void>): number;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link NamespaceNameError}
     */
    sendScriptEvent(id: string, message: string): void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    waitTicks(ticks: number): Promise<void>;
}

export class SystemAfterEvents {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}

export class SystemBeforeEvents {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly shutdown: ShutdownBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly startup: StartupBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal;
}

export class SystemInfo {
    private constructor();
    readonly memoryTier: MemoryTier;
}

// @ts-ignore
export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    readonly hitVector: Vector3;
    readonly previousRedstonePower: number;
    readonly redstonePower: number;
    readonly source: Entity;
}

export class TargetBlockHitAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): (arg0: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: TargetBlockHitAfterEvent) => void): void;
}

// @ts-ignore
export class TextPrimitive extends PrimitiveShape {
    backfaceVisible: boolean;
    backgroundColorOverride?: RGBA;
    depthTest: boolean;
    readonly text: RawMessage | string;
    textBackfaceVisible: boolean;
    useRotation: boolean;
    constructor(location: DimensionLocation | Vector3, text: RawMessage | string);
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link RawMessageError}
     */
    setText(text: RawMessage | string): void;
}

export class TickingAreaManager {
    private constructor();
    readonly chunkCount: number;
    readonly maxChunkCount: number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link TickingAreaError}
     */
    createTickingArea(identifier: string, options: TickingAreaOptions): Promise<void>;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    getAllTickingAreas(): TickingArea[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    getTickingArea(identifier: string | TickingArea): TickingArea | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    hasCapacity(options: TickingAreaOptions): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    hasTickingArea(identifier: string): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    removeAllTickingAreas(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link TickingAreaError}
     */
    removeTickingArea(identifier: string | TickingArea): void;
}

export class Trigger {
    eventName: string;
    constructor(eventName: string);
}

// @ts-ignore
export class TripWireTripAfterEvent extends BlockEvent {
    private constructor();
    readonly isPowered: boolean;
    readonly sources: Entity[];
}

export class TripWireTripAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: TripWireTripAfterEvent) => void): (arg0: TripWireTripAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: TripWireTripAfterEvent) => void): void;
}

export class WatchdogTerminateBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly terminateReason: WatchdogTerminateReason;
}

export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void;
}

export class Waypoint {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    color?: RGB;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    isEnabled: boolean;
    readonly isValid: boolean;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    textureSelector: WaypointTextureSelector;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidWaypointError}
     *
     * {@link InvalidWaypointTextureSelectorError}
     */
    getDimensionLocation(): DimensionLocation;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    remove(): void;
}

export class WeatherChangeAfterEvent {
    private constructor();
    readonly dimension: string;
    readonly newWeather: WeatherType;
    readonly previousWeather: WeatherType;
}

export class WeatherChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: WeatherChangeAfterEvent) => void): (arg0: WeatherChangeAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: WeatherChangeAfterEvent) => void): void;
}

export class WeatherChangeBeforeEvent {
    private constructor();
    cancel: boolean;
    duration: number;
    newWeather: WeatherType;
    readonly previousWeather: WeatherType;
}

export class WeatherChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): (arg0: WeatherChangeBeforeEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: WeatherChangeBeforeEvent) => void): void;
}

export class World {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly afterEvents: WorldAfterEvents;
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    allowCheats: boolean;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly beforeEvents: WorldBeforeEvents;
    readonly gameRules: GameRules;
    readonly isHardcore: boolean;
    readonly primitiveShapesManager: PrimitiveShapesManager;
    readonly scoreboard: Scoreboard;
    readonly seed: string;
    readonly soundDefinitionRegistry: SoundDefinitionRegistry;
    readonly structureManager: StructureManager;
    readonly tickingAreaManager: TickingAreaManager;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    broadcastClientMessage(id: string, value: string): void;
    clearDynamicProperties(): void;
    getAbsoluteTime(): number;
    getAimAssist(): AimAssistRegistry;
    /**
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getAllPlayers(): Player[];
    getDay(): number;
    getDefaultSpawnLocation(): Vector3;
    getDifficulty(): Difficulty;
    /**
     * @throws This function can throw errors.
     */
    getDimension(dimensionId: string): Dimension;
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    getDynamicPropertyIds(): string[];
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @throws This function can throw errors.
     */
    getEntity(id: string): Entity | undefined;
    getLootTableManager(): LootTableManager;
    getMoonPhase(): MoonPhase;
    /**
     * @remarks This function can be called in early-execution mode.
     */
    getPackSettings(): Record<string, boolean | number | string>;
    /**
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    getTimeOfDay(): number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.PropertyOutOfBoundsError}
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @throws This function can throw errors.
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setAbsoluteTime(absoluteTime: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setDefaultSpawnLocation(spawnLocation: Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setDifficulty(difficulty: Difficulty): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    setDynamicProperties(values: Record<string, boolean | number | string | Vector3>): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    setTimeOfDay(timeOfDay: number | TimeOfDay): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    stopMusic(): void;
}

export class WorldAfterEvents {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly blockContainerClosed: BlockContainerClosedAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly blockContainerOpened: BlockContainerOpenedAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly buttonPush: ButtonPushAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly chatSend: ChatSendAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly effectAdd: EffectAddAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityContainerClosed: EntityContainerClosedAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityContainerOpened: EntityContainerOpenedAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityDie: EntityDieAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityHeal: EntityHealAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityItemDrop: EntityItemDropAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityItemPickup: EntityItemPickupAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityLoad: EntityLoadAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityStartSneaking: EntityStartSneakingAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityStopSneaking: EntityStopSneakingAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityTamed: EntityTamedAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityUpgrade: EntityUpgradeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly explosion: ExplosionAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly gameRuleChange: GameRuleChangeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemUse: ItemUseAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly leverAction: LeverActionAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly messageReceive: ServerMessageAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly packSettingChange: PackSettingChangeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly pistonActivate: PistonActivateAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerButtonInput: PlayerButtonInputAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerCancelBreakingBlock: PlayerCancelBreakingBlockAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerEmote: PlayerEmoteAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerHotbarSelectedSlotChange: PlayerHotbarSelectedSlotChangeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerInputModeChange: PlayerInputModeChangeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerInventoryItemChange: PlayerInventoryItemChangeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerJoin: PlayerJoinAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerLeave: PlayerLeaveAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerSpawn: PlayerSpawnAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerStartBreakingBlock: PlayerStartBreakingBlockAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerSwingStart: PlayerSwingStartAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerUseNameTag: PlayerUseNameTagAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly pressurePlatePop: PressurePlatePopAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly pressurePlatePush: PressurePlatePushAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly soundCompleted: SoundCompletedAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly targetBlockHit: TargetBlockHitAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly tripWireTrip: TripWireTripAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly weatherChange: WeatherChangeAfterEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly worldLoad: WorldLoadAfterEventSignal;
}

export class WorldBeforeEvents {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly chatSend: ChatSendBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly effectAdd: EffectAddBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityHeal: EntityHealBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityHurt: EntityHurtBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityItemPickup: EntityItemPickupBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityRemove: EntityRemoveBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly entityTamed: EntityTamedBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly explosion: ExplosionBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemUse: ItemUseBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerGameModeChange: PlayerGameModeChangeBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerLeave: PlayerLeaveBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly weatherChange: WeatherChangeBeforeEventSignal;
}

export class WorldLoadAfterEvent {
    private constructor();
}

export class WorldLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: WorldLoadAfterEvent) => void): (arg0: WorldLoadAfterEvent) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: WorldLoadAfterEvent) => void): void;
}

export interface AABB {
    center: Vector3;
    extent: Vector3;
}

export interface AnimationOptions {
    animation: SplineAnimation;
    totalTimeSeconds: number;
}

export interface BiomeFilter {
    excludeBiomes?: string[];
    excludeTags?: string[];
    includeBiomes?: string[];
    includeTags?: string[];
}

export interface BiomeSearchOptions {
    boundingSize?: Vector3;
}

export interface BlockBoundingBox {
    max: Vector3;
    min: Vector3;
}

export interface BlockContainerAccessEventOptions {
    accessSourceFilter?: ContainerAccessSourceFilter;
    blockFilter?: BlockFilter;
}

export interface BlockCustomComponent {
    beforeOnPlayerPlace?: (
        arg0: BlockComponentPlayerPlaceBeforeEvent,
        arg1: CustomComponentParameters,
    ) => void;
    onBlockStateChange?: (arg0: BlockComponentBlockStateChangeEvent, arg1: CustomComponentParameters) => void;
    onBreak?: (arg0: BlockComponentBlockBreakEvent, arg1: CustomComponentParameters) => void;
    onEntity?: (arg0: BlockComponentEntityEvent, arg1: CustomComponentParameters) => void;
    onEntityFallOn?: (arg0: BlockComponentEntityFallOnEvent, arg1: CustomComponentParameters) => void;
    onPlace?: (arg0: BlockComponentOnPlaceEvent, arg1: CustomComponentParameters) => void;
    onPlayerBreak?: (arg0: BlockComponentPlayerBreakEvent, arg1: CustomComponentParameters) => void;
    onPlayerInteract?: (arg0: BlockComponentPlayerInteractEvent, arg1: CustomComponentParameters) => void;
    onRandomTick?: (arg0: BlockComponentRandomTickEvent, arg1: CustomComponentParameters) => void;
    onRedstoneUpdate?: (arg0: BlockComponentRedstoneUpdateEvent, arg1: CustomComponentParameters) => void;
    onStepOff?: (arg0: BlockComponentStepOffEvent, arg1: CustomComponentParameters) => void;
    onStepOn?: (arg0: BlockComponentStepOnEvent, arg1: CustomComponentParameters) => void;
    onTick?: (arg0: BlockComponentTickEvent, arg1: CustomComponentParameters) => void;
}

export interface BlockEventOptions {
    blockTypes?: string[];
    permutations?: BlockPermutation[];
}

export interface BlockFillOptions {
    blockFilter?: BlockFilter;
    ignoreChunkBoundErrors?: boolean;
}

export interface BlockFilter {
    excludePermutations?: BlockPermutation[];
    excludeTags?: string[];
    excludeTypes?: string[];
    includePermutations?: BlockPermutation[];
    includeTags?: string[];
    includeTypes?: string[];
}

export interface BlockHitInformation {
    block: Block;
    face: Direction;
    faceLocation: Vector3;
}

// @ts-ignore
export interface BlockQueryOptions extends BlockFilter {
    closest?: number;
    farthest?: number;
    location?: Vector3;
}

export interface BlockRaycastHit {
    block: Block;
    face: Direction;
    faceLocation: Vector3;
}

// @ts-ignore
export interface BlockRaycastOptions extends BlockFilter {
    includeLiquidBlocks?: boolean;
    includePassableBlocks?: boolean;
    maxDistance?: number;
}

export interface CameraAttachOptions {
    entity: Entity;
    locator: EntityAttachPoint;
}

export interface CameraFadeOptions {
    fadeColor?: RGB;
    fadeTime?: CameraFadeTimeOptions;
}

export interface CameraFadeTimeOptions {
    fadeInTime: number;
    fadeOutTime: number;
    holdTime: number;
}

export interface CameraFixedBoomOptions {
    entityOffset?: Vector3;
    viewOffset?: Vector2;
}

export interface CameraFovOptions {
    easeOptions?: EaseOptions;
    fov?: number;
}

export interface CameraSetFacingOptions {
    easeOptions?: EaseOptions;
    facingEntity: Entity;
    location?: Vector3;
}

export interface CameraSetLocationOptions {
    easeOptions?: EaseOptions;
    location: Vector3;
}

export interface CameraSetPosOptions {
    easeOptions?: EaseOptions;
    facingLocation: Vector3;
    location?: Vector3;
}

export interface CameraSetRotOptions {
    easeOptions?: EaseOptions;
    location?: Vector3;
    rotation: Vector2;
}

export interface CameraShakeOptions {
    duration: number;
    intensity: number;
    type: CameraShakeType;
}

export interface CameraTargetOptions {
    offsetFromTargetCenter?: Vector3;
    targetEntity: Entity;
}

export interface CompoundBlockVolumeItem {
    action?: CompoundBlockVolumeAction;
    locationRelativity?: CompoundBlockVolumePositionRelativity;
    volume: BlockVolume;
}

export interface ContainerAccessSource {
    entity?: Entity;
}

export interface ContainerAccessSourceFilter {
    entityFilter?: EntityFilter;
}

export interface ContainerRules {
    allowedItems: string[];
    allowNestedStorageItems: boolean;
    bannedItems: string[];
    weightLimit?: number;
}

export interface CustomCommand {
    cheatsRequired?: boolean;
    description: string;
    mandatoryParameters?: CustomCommandParameter[];
    name: string;
    optionalParameters?: CustomCommandParameter[];
    permissionLevel: CommandPermissionLevel;
}

export interface CustomCommandParameter {
    enumName?: string;
    name: string;
    type: CustomCommandParamType;
}

export interface CustomCommandResult {
    message?: string;
    status: CustomCommandStatus;
}

export interface CustomTexture {
    iconHeight: number;
    iconWidth: number;
    path: string;
}

export interface DefinitionModifier {
    addedComponentGroups: string[];
    removedComponentGroups: string[];
    triggers: Trigger[];
}

export interface DimensionLocation {
    dimension: Dimension;
    x: number;
    y: number;
    z: number;
}

export interface EaseOptions {
    easeTime?: number;
    easeType?: EasingType;
}

export interface Enchantment {
    level: number;
    type: EnchantmentType;
}

export interface EntityApplyDamageByProjectileOptions {
    damagingEntity?: Entity;
    damagingProjectile: Entity;
}

export interface EntityApplyDamageOptions {
    cause: EntityDamageCause;
    damagingEntity?: Entity;
}

export interface EntityContainerAccessEventOptions {
    accessSourceFilter?: ContainerAccessSourceFilter;
    entityFilter?: EntityFilter;
}

export interface EntityDamageSource {
    cause: EntityDamageCause;
    damagingEntity?: Entity;
    damagingProjectile?: Entity;
}

export interface EntityDataDrivenTriggerEventOptions {
    entities?: Entity[];
    entityTypes?: string[];
    eventTypes?: string[];
}

export interface EntityEffectOptions {
    amplifier?: number;
    showParticles?: boolean;
}

export interface EntityEventOptions {
    entities?: Entity[];
    entityTypes?: string[];
}

export interface EntityFilter {
    excludeFamilies?: string[];
    excludeGameModes?: GameMode[];
    excludeNames?: string[];
    excludeTags?: string[];
    excludeTypes?: string[];
    families?: string[];
    gameMode?: GameMode;
    maxHorizontalRotation?: number;
    maxLevel?: number;
    maxVerticalRotation?: number;
    minHorizontalRotation?: number;
    minLevel?: number;
    minVerticalRotation?: number;
    name?: string;
    propertyOptions?: EntityQueryPropertyOptions[];
    scoreOptions?: EntityQueryScoreOptions[];
    tags?: string[];
    type?: string;
}

export interface EntityHealEventOptions {
    allowedHealCauses?: EntityHealCause[];
    entityFilter?: EntityFilter;
}

export interface EntityHitInformation {
    entity?: Entity;
}

export interface EntityHurtAfterEventOptions {
    allowedDamageCauses?: EntityDamageCause[];
    entities?: Entity[];
    entityFilter?: EntityFilter;
    entityTypes?: string[];
}

export interface EntityHurtBeforeEventOptions {
    allowedDamageCauses?: EntityDamageCause[];
    entityFilter?: EntityFilter;
}

export interface EntityItemDropEventOptions {
    entityFilter?: EntityFilter;
    itemFilter?: ItemFilter;
}

export interface EntityItemPickupEventOptions {
    entityFilter?: EntityFilter;
    itemFilter?: ItemFilter;
}

// @ts-ignore
export interface EntityQueryOptions extends EntityFilter {
    closest?: number;
    farthest?: number;
    location?: Vector3;
    maxDistance?: number;
    minDistance?: number;
    volume?: Vector3;
}

export interface EntityQueryPropertyOptions {
    exclude?: boolean;
    propertyId: string;
    value?: 
        | boolean
        | string
        | EqualsComparison
        | GreaterThanComparison
        | GreaterThanOrEqualsComparison
        | LessThanComparison
        | LessThanOrEqualsComparison
        | NotEqualsComparison
        | RangeComparison;
}

export interface EntityQueryScoreOptions {
    exclude?: boolean;
    maxScore?: number;
    minScore?: number;
    objective?: string;
}

export interface EntityRaycastHit {
    distance: number;
    entity: Entity;
}

// @ts-ignore
export interface EntityRaycastOptions extends EntityFilter {
    ignoreBlockCollision?: boolean;
    includeLiquidBlocks?: boolean;
    includePassableBlocks?: boolean;
    maxDistance?: number;
}

export interface EntitySneakingChangedEventOptions {
    entityFilter?: EntityFilter;
}

export interface EntityTamedEventFilter {
    entityFilter?: EntityFilter;
    tamingEntityFilter?: EntityFilter;
}

export interface EntityVisibilityRules {
    showDead?: boolean;
    showInvisible?: boolean;
    showSneaking?: boolean;
}

export interface EqualsComparison {
    equals: boolean | number | string;
}

export interface ExplosionOptions {
    allowUnderwater?: boolean;
    breaksBlocks?: boolean;
    causesFire?: boolean;
    source?: Entity;
}

export interface GetBlocksStandingOnOptions {
    blockFilter?: BlockFilter;
    ignoreThinBlocks?: boolean;
}

export interface GreaterThanComparison {
    greaterThan: number;
}

export interface GreaterThanOrEqualsComparison {
    greaterThanOrEquals: number;
}

export interface HotbarEventOptions {
    allowedSlots?: number[];
}

export interface InputEventOptions {
    buttons?: InputButton[];
    state?: ButtonState;
}

export interface InventoryItemEventOptions {
    allowedSlots?: number[];
    excludeItems?: string[];
    excludeTags?: string[];
    ignoreQuantityChange?: boolean;
    includeItems?: string[];
    includeTags?: string[];
    inventoryType?: PlayerInventoryType;
}

export interface ItemCustomComponent {
    onBeforeDurabilityDamage?: (
        arg0: ItemComponentBeforeDurabilityDamageEvent,
        arg1: CustomComponentParameters,
    ) => void;
    onCompleteUse?: (arg0: ItemComponentCompleteUseEvent, arg1: CustomComponentParameters) => void;
    onConsume?: (arg0: ItemComponentConsumeEvent, arg1: CustomComponentParameters) => void;
    onHitEntity?: (arg0: ItemComponentHitEntityEvent, arg1: CustomComponentParameters) => void;
    onMineBlock?: (arg0: ItemComponentMineBlockEvent, arg1: CustomComponentParameters) => void;
    onUse?: (arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) => void;
    onUseOn?: (arg0: ItemComponentUseOnEvent, arg1: CustomComponentParameters) => void;
}

export interface ItemFilter {
    includeTypes?: (ItemType | string)[];
}

export interface JigsawPlaceOptions {
    includeEntities?: boolean;
    keepJigsaws?: boolean;
    liquidSettings?: LiquidSettings;
}

export interface JigsawStructurePlaceOptions {
    ignoreStartHeight?: boolean;
    includeEntities?: boolean;
    keepJigsaws?: boolean;
    liquidSettings?: LiquidSettings;
}

export interface LessThanComparison {
    lessThan: number;
}

export interface LessThanOrEqualsComparison {
    lessThanOrEquals: number;
}

export interface MusicOptions {
    fade?: number;
    loop?: boolean;
    volume?: number;
}

export interface NotEqualsComparison {
    notEquals: boolean | number | string;
}

export interface PlayAnimationOptions {
    blendOutTime?: number;
    controller?: string;
    nextState?: string;
    players?: Player[];
    stopExpression?: string;
}

export interface PlayerAimAssistSettings {
    distance?: number;
    presetId: string;
    targetMode?: AimAssistTargetMode;
    viewAngle?: Vector2;
}

export interface PlayerBreakingBlockEventOptions {
    blockFilter?: BlockFilter;
    playerFilter?: EntityFilter;
}

export interface PlayerSoundOptions {
    location?: Vector3;
    loopCount?: number;
    pitch?: number;
    volume?: number;
}

export interface PlayerSwingEventOptions {
    heldItemOption?: HeldItemOption;
    swingSource?: EntitySwingSource;
}

// @ts-ignore
export interface PlayerVisibilityRules extends EntityVisibilityRules {
    showHidden?: boolean;
    showSpectator?: boolean;
    showSpectatorToSpectator?: boolean;
}

export interface PrimitiveShapeQueryOptions {
    attachedTo?: Entity;
    location?: Vector3;
    maxDistance?: number;
    minDistance?: number;
}

export interface ProgressKeyFrame {
    alpha: number;
    easingFunc?: EasingType;
    timeSeconds: number;
}

export interface ProjectileShootOptions {
    uncertainty?: number;
}

export interface RangeComparison {
    lowerBound: number;
    upperBound: number;
}

export interface RawMessage {
    rawtext?: RawMessage[];
    score?: RawMessageScore;
    text?: string;
    translate?: string;
    with?: string[] | RawMessage;
}

export interface RawMessageScore {
    name?: string;
    objective?: string;
}

export interface RawText {
    rawtext?: RawMessage[];
}

export interface RGB {
    blue: number;
    green: number;
    red: number;
}

// @ts-ignore
export interface RGBA extends RGB {
    alpha: number;
}

export interface RotationKeyFrame {
    easingFunc?: EasingType;
    rotation: Vector3;
    timeSeconds: number;
}

export interface ScoreboardObjectiveDisplayOptions {
    objective: ScoreboardObjective;
    sortOrder?: ObjectiveSortOrder;
}

export interface ScriptEventMessageFilterOptions {
    namespaces: string[];
}

export interface SoundDefinitionDurationInfo {
    duration: number;
}

export interface SoundDefinitionFilter {
    artists?: string[];
    genres?: string[];
    maxDuration?: number;
    minDuration?: number;
    moods?: string[];
    tags?: Record<string, string[]>;
    titles?: string[];
}

export interface SoundDefinitionMusicInfo {
    artist?: string;
    genres?: string[];
    moods?: string[];
    title?: string;
}

export interface SpawnEntityOptions {
    initialPersistence?: boolean;
    initialRotation?: number;
    spawnEvent?: string;
}

export interface SplineAnimation {
    progressKeyFrames: ProgressKeyFrame[];
    rotationKeyFrames: RotationKeyFrame[];
}

export interface StructureCreateOptions {
    includeBlocks?: boolean;
    includeEntities?: boolean;
    saveMode?: StructureSaveMode;
}

export interface StructurePlaceOptions {
    animationMode?: StructureAnimationMode;
    animationSeconds?: number;
    includeBlocks?: boolean;
    includeEntities?: boolean;
    integrity?: number;
    integritySeed?: string;
    mirror?: StructureMirrorAxis;
    rotation?: StructureRotation;
    waterlogged?: boolean;
}

export interface TeleportOptions {
    checkForBlocks?: boolean;
    dimension?: Dimension;
    facingLocation?: Vector3;
    keepVelocity?: boolean;
    rotation?: Vector2;
}

export interface TickingArea {
    boundingBox: BlockBoundingBox;
    chunkCount: number;
    dimension: Dimension;
    identifier: string;
    isFullyLoaded: boolean;
}

export interface TickingAreaOptions {
    dimension: Dimension;
    from: Vector3;
    to: Vector3;
}

export interface TitleDisplayOptions {
    fadeInDuration: number;
    fadeOutDuration: number;
    stayDuration: number;
    subtitle?: (RawMessage | string)[] | RawMessage | string;
}

export interface Vector2 {
    x: number;
    y: number;
}

export interface Vector3 {
    x: number;
    y: number;
    z: number;
}

export interface VectorXZ {
    x: number;
    z: number;
}

export interface WaypointTextureBounds {
    lowerBound: number;
    texture: CustomTexture | WaypointTexture;
    upperBound?: number;
}

export interface WaypointTextureSelector {
    textureBoundsList: WaypointTextureBounds[];
}

export interface WorldSoundOptions {
    loopCount?: number;
    pitch?: number;
    volume?: number;
}

// @ts-ignore
export class BlockCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}

// @ts-ignore
export class BlockCustomComponentReloadNewComponentError extends Error {
    private constructor();
}

// @ts-ignore
export class BlockCustomComponentReloadNewEventError extends Error {
    private constructor();
}

// @ts-ignore
export class BlockCustomComponentReloadVersionError extends Error {
    private constructor();
}

// @ts-ignore
export class BookError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: BookErrorReason;
}

// @ts-ignore
export class BookPageContentError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly pageIndex: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: BookErrorReason;
}

// @ts-ignore
export class CommandError extends Error {
    private constructor();
}

// @ts-ignore
export class ContainerRulesError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: ContainerRulesErrorReason;
}

// @ts-ignore
export class CustomCommandError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: CustomCommandErrorReason;
}

// @ts-ignore
export class CustomComponentInvalidRegistryError extends Error {
    private constructor();
}

// @ts-ignore
export class CustomComponentNameError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: CustomComponentNameErrorReason;
}

// @ts-ignore
export class CustomDimensionAlreadyRegisteredError extends Error {
    private constructor();
}

// @ts-ignore
export class CustomDimensionInvalidRegistryError extends Error {
    private constructor();
}

// @ts-ignore
export class CustomDimensionNameError extends Error {
    private constructor();
}

// @ts-ignore
export class CustomDimensionReloadNewDimensionError extends Error {
    private constructor();
}

// @ts-ignore
export class EnchantmentLevelOutOfBoundsError extends Error {
    private constructor();
}

// @ts-ignore
export class EnchantmentTypeNotCompatibleError extends Error {
    private constructor();
}

// @ts-ignore
export class EnchantmentTypeUnknownIdError extends Error {
    private constructor();
}

// @ts-ignore
export class EntitySpawnError extends Error {
    private constructor();
}

// @ts-ignore
export class FogSettingsError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidBlockComponentError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidContainerError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidContainerSlotError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidEntityComponentError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidEntityError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly id: string;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly "type": string;
}

// @ts-ignore
export class InvalidItemStackError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly itemType: ItemType;
}

// @ts-ignore
export class InvalidIteratorError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidPotionDeliveryTypeError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidPotionEffectTypeError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidStructureError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidWaypointError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidWaypointTextureSelectorError extends Error {
    private constructor();
}

// @ts-ignore
export class ItemCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}

// @ts-ignore
export class ItemCustomComponentReloadNewComponentError extends Error {
    private constructor();
}

// @ts-ignore
export class ItemCustomComponentReloadNewEventError extends Error {
    private constructor();
}

// @ts-ignore
export class ItemCustomComponentReloadVersionError extends Error {
    private constructor();
}

// @ts-ignore
export class LocationInUnloadedChunkError extends Error {
    private constructor();
}

// @ts-ignore
export class LocationOutOfWorldBoundariesError extends Error {
    private constructor();
}

// @ts-ignore
export class LocatorBarError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: LocatorBarErrorReason;
}

// @ts-ignore
export class NamespaceNameError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: NamespaceNameErrorReason;
}

// @ts-ignore
export class PlaceJigsawError extends Error {
    private constructor();
}

// @ts-ignore
export class PrimitiveShapeError extends Error {
    private constructor();
}

// @ts-ignore
export class RawMessageError extends Error {
    private constructor();
}

// @ts-ignore
export class TickingAreaError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: TickingAreaErrorReason;
}

// @ts-ignore
export class UnloadedChunksError extends Error {
    private constructor();
}

export const HudElementsCount = 13;
export const HudVisibilityCount = 2;
export const MoonPhaseCount = 8;
export const TicksPerDay = 24000;
export const TicksPerSecond = 20;

export const system: System;
export const world: World;
