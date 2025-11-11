// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @internal
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-editor-private-bindings",
 *     "version": "0.1.0-internal"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
import * as minecraftservereditorbindings from "@minecraft/server-editor-bindings";
export enum EditorRealmsServiceAvailability {
    NotLoggedIn = 0,
    NoRealmsSubscription = 1,
    DedicatedServer = 2,
    NotServerHost = 3,
    Success = 4,
    Unknown = 5,
}

export enum JigsawJointType {
    Rollable = 0,
    Aligned = 1,
}

export enum JigsawJsonType {
    Processor = 0,
    Structure = 1,
    StructureSet = 2,
    TemplatePool = 3,
}

export enum PersistenceGroupType {
    Local = 0,
    Replication = 1,
    Shared = 2,
}

export enum PersistenceScope {
    ClientProject = 0,
    ClientGlobal = 1,
    ServerProject = 2,
    ServerGlobal = 3,
}

export enum PrefabInstanceInteractionEventType {
    Clicked = "Clicked",
    Moved = "Moved",
}

export enum PrefabSource {
    Global = "Global",
    Project = "Project",
    Unknown = "Unknown",
}

export enum ProjectRegionAvailabilityMode {
    Loaded = 0,
    Ticking = 1,
}

export enum RealmsServiceStatus {
    Fetching = 0,
    Idle = 1,
    Exporting = 2,
    Uploading = 3,
}

export enum RealmsWorldUploadResult {
    Unknown = 0,
    Success = 1,
    ExportWorldFailure = 2,
    UploadWorldFailure = 3,
    EditorSystemFailure = 4,
    WorldUploadBusy = 5,
    WorldNameNonCompliant = 6,
}

export class DataStore {
    private constructor();
    readonly actionBarContainer: DataStoreActionBarContainer;
    readonly actionContainer: DataStoreActionContainer;
    readonly afterEvents: DataStoreAfterEvents;
    readonly menuContainer: DataStoreMenuContainer;
    readonly modalToolContainer: DataStoreModalToolContainer;
    readonly paneContainer: DataStorePaneContainer;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    sendNotificationEvent(dataTag: string, payload: string): void;
}

export class DataStoreActionBarContainer {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getItemPayload(id: string): string;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getItemProperty(id: string, property: string): boolean | number | string | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    hasItemPayload(id: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    hasItemProperty(id: string, property: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    registerItem(id: string, payload: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unregisterItem(id: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateRegisteredItem(id: string, payload: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateRegisteredItemProperty(id: string, payload: string, property: string): void;
}

export class DataStoreActionContainer {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    bindActionToControl(controlId: string, actionPayload: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    removeActionFromControl(controlId: string, actionPayload?: string): void;
}

export class DataStoreAfterEvents {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly payloadReceived: DataStorePayloadAfterEventSignal;
}

export class DataStoreMenuContainer {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createItem(id: string, payload: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    destroyItem(id: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getPayload(id: string): string;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getProperty(id: string, property: string): boolean | number | string | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    hasPayload(id: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    hasProperty(id: string, property: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateItem(id: string, payload: string): void;
}

export class DataStoreModalToolActivationChangedEvent {
    private constructor();
    readonly isActive: boolean;
    readonly toolId?: string;
}

export class DataStoreModalToolActivationChangedEventSignal {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: DataStoreModalToolActivationChangedEvent) => void): (arg0: DataStoreModalToolActivationChangedEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: DataStoreModalToolActivationChangedEvent) => void): void;
}

export class DataStoreModalToolContainer {
    private constructor();
    readonly toolActivationChanged: DataStoreModalToolActivationChangedEventSignal;
    getSelectedTool(): string | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getToolPayload(id: string): string;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getToolProperty(id: string, property: string): boolean | number | string | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    hasToolPayload(id: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    hasToolProperty(id: string, property: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    registerTool(id: string, payload: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unregisterTool(id: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateRegisteredTool(id: string, payload: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateRegisteredToolProperty(id: string, payload: string, property: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateSelectedTool(toolId?: string): void;
}

export class DataStorePaneContainer {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createPane(id: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    destroyPane(id: string): void;
}

export class DataStorePayloadAfterEvent {
    private constructor();
    readonly dataTag: string;
    readonly payload: string;
}

export class DataStorePayloadAfterEventSignal {
    private constructor();
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: DataStorePayloadAfterEvent) => void): (arg0: DataStorePayloadAfterEvent) => void;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: DataStorePayloadAfterEvent) => void): void;
}

export class DataTransferManager {
    private constructor();
    /**
     * @throws This function can throw errors.
     */
    closeSession(collectionUniqueId: string): void;
    /**
     * @throws This function can throw errors.
     */
    getRegisteredAccessors(): DataTransferCollectionNameData[];
    /**
     * @throws This function can throw errors.
     */
    openSession(collectionUniqueId: string): void;
    /**
     * @throws This function can throw errors.
     */
    requestData(collectionUniqueId: string, useSnapshot?: boolean): Promise<DataTransferRequestResponse>;
    /**
     * @throws This function can throw errors.
     */
    sendData(collectionUniqueId: string, jsonData: string): void;
    /**
     * @throws This function can throw errors.
     */
    sendDataToClipboard(jsonData: string): void;
}

export class DataTransferRequestResponse {
    private constructor();
    readonly collectionName: string;
    readonly data: string;
    readonly schema: string;
}

export class InputService {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    focusViewport(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getKeyBindingProcessingState(contextId: string, bindingId: string): number | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    registerKeyBinding(
        contextId: string,
        bindingId: string,
        key: number,
        modifier: minecraftservereditorbindings.InputModifier,
        info: InputBindingInfo,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    registerMouseBinding(
        contextId: string,
        bindingId: string,
        mouseAction: minecraftservereditorbindings.MouseActionCategory,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unregisterKeyBinding(contextId: string, bindingId: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    unregisterMouseBinding(contextId: string, bindingId: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    updateKeyBindingProcessingState(contextId: string, bindingId: string, state?: number): void;
}

export class InternalPersistenceManager {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createGroup(namespacedName: string, options: PersistenceGroupCreationOptions): PersistenceGroup;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    deleteGroup(namespacedName: string, options: PersistenceGroupCreationOptions): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    disposeAllGroups(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    fetchGroups(options: PersistenceQueryGroupOptions): PersistenceGroup[];
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getGroup(namespacedName: string, options: PersistenceGroupCreationOptions): PersistenceGroup | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getOrCreateGroup(namespacedName: string, options: PersistenceGroupCreationOptions): PersistenceGroup;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    requestClientGroup(
        namespacedName: string,
        options: PersistenceGroupCreationOptions,
        callback: (arg0: PersistenceGroup) => void,
    ): void;
}

export class InternalPlayerServiceContext {
    private constructor();
    readonly dataStore: DataStore;
    readonly dataTransfer: DataTransferManager;
    readonly input: InputService;
    readonly internalPersistenceManager: InternalPersistenceManager;
    readonly jigsawService: JigsawService;
    readonly prefabManager: PrefabManager;
    readonly realmsService: RealmsService;
    readonly regionManager: ProjectRegionManager;
}

export class JigsawService {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    generateJigsaw(
        registryName: string,
        startingPool: string,
        startTarget: string,
        seed: minecraftserverbindings.Vector3,
        depth: number,
        maxHorizontalDistanceFromCenter: number,
        validateRegistry: boolean,
        clipboardItem: minecraftservereditorbindings.ClipboardItem,
    ): Promise<EditorJigsawSection[]>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getEmptyRegistryFiles(): Record<string, string>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getExportLocation(): string;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getJigsawBlockData(pos: minecraftserverbindings.Vector3): JigsawBlockData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getRegistryData(registryName: string): Record<string, EditorRegistryFile[]>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getRegistryList(): string[];
    /**
     * @remarks This function can't be called in read-only mode.
     */
    setJigsawBlockData(pos: minecraftserverbindings.Vector3, jigsawData: JigsawBlockData): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setRegistryData(
        registryName: string,
        processorData: EditorRegistryFile[],
        structureData: EditorRegistryFile[],
        structureSetData: EditorRegistryFile[],
        templatePoolData: EditorRegistryFile[],
    ): Promise<string[]>;
}

export class MinecraftEditorInternal {
    private constructor();
    readonly isNewLevel: boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    fireTelemetryEvent(player: minecraftserverbindings.Player, source: string, eventName: string, metadata: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getPlayerServices(player: minecraftserverbindings.Player): InternalPlayerServiceContext;
    /**
     * @remarks This function can be called in early-execution mode.
     *
     * This function can't be called in read-only mode.
     */
    registerExtension(
        extensionName: string,
        activationFunction: (arg0: minecraftservereditorbindings.ExtensionContext) => void,
        shutdownFunction: (arg0: minecraftservereditorbindings.ExtensionContext) => void,
        options?: minecraftservereditorbindings.ExtensionOptionalParameters,
    ): minecraftservereditorbindings.Extension;
}

export class PersistenceGroup {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    createItem(itemName: string, defaultJsonValue?: string): PersistenceGroupItem;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    deleteItem(itemName: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    dispose(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    disposeAllGroupItems(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    disposeGroupItem(key: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    fetchItem(itemName: string): PersistenceGroupItem | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getOrCreateItem(itemName: string, defaultJsonValue?: string): PersistenceGroupItem;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    listItems(): string[];
}

export class PersistenceGroupItem {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    commit(): void;
    /**
     * @throws This function can throw errors.
     */
    getAsJSON(): string;
    /**
     * @throws This function can throw errors.
     */
    getKey(): string;
    /**
     * @throws This function can throw errors.
     */
    getValue(): string;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setValue(value: string): void;
}

export class PrefabInstanceInteractionEvent {
    private constructor();
    readonly eventData: PrefabInstanceInteractionEventClicked | PrefabInstanceInteractionEventMoved;
    readonly eventType: PrefabInstanceInteractionEventType;
    readonly instance: PrefabTemplateInstance;
}

export class PrefabManager {
    private constructor();
    readonly instanceInteractionEvents: PrefabServiceInstanceInteractionEvent;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link PrefabServiceError}
     */
    beginCapturingMouseClicks(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link PrefabServiceError}
     */
    clearSelectedInstances(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link PrefabErrorInvalidName}
     *
     * {@link PrefabErrorInvalidTemplate}
     *
     * {@link PrefabServiceError}
     *
     * {@link PrefabTemplateExists}
     *
     * {@link PrefabTemplateNotFound}
     */
    cloneTemplate(
        templateOrMetadataToClone: PrefabTemplate | PrefabTemplateMetadata,
        newName: string,
        optionalNewDisplayName?: string,
    ): PrefabTemplate;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link PrefabErrorInvalidName}
     *
     * {@link PrefabErrorStringInvalidLength}
     *
     * {@link PrefabServiceError}
     */
    createTemplate(name: string, options?: PrefabServiceCreateTemplateOptions): PrefabTemplate;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link PrefabErrorInvalidInstance}
     *
     * {@link PrefabServiceError}
     */
    deleteInstance(instance: PrefabTemplateInstance): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link PrefabErrorInvalidName}
     *
     * {@link PrefabErrorInvalidTemplate}
     *
     * {@link PrefabServiceError}
     *
     * {@link PrefabTemplateNotFound}
     */
    deleteTemplate(templateOrMetadata: PrefabTemplate | PrefabTemplateMetadata): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link PrefabErrorInvalidInstance}
     *
     * {@link PrefabServiceError}
     */
    deselectInstance(instance: PrefabTemplateInstance): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link PrefabServiceError}
     */
    endCapturingMouseClicks(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link PrefabErrorInvalidName}
     *
     * {@link PrefabServiceError}
     *
     * {@link PrefabTemplateNotFound}
     */
    getTemplate(searchMetadata_or_fullyQualifiedName: PrefabTemplateMetadata | string): PrefabTemplate;
    /**
     * @throws This function can throw errors.
     *
     * {@link PrefabServiceError}
     */
    getTemplateList(): PrefabTemplateMetadata[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link PrefabErrorInvalidInstance}
     *
     * {@link PrefabServiceError}
     */
    selectInstance(instance: PrefabTemplateInstance, append: boolean): void;
}

export class PrefabServiceInstanceInteractionEvent {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     */
    subscribe(callback: (arg0: PrefabInstanceInteractionEvent) => void): (arg0: PrefabInstanceInteractionEvent) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(callback: (arg0: PrefabInstanceInteractionEvent) => void): void;
}

export class PrefabTemplate {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    description: string;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    displayName: string;
    /**
     * @throws This property can throw errors.
     *
     * {@link PrefabErrorInvalidTemplate}
     *
     * {@link PrefabServiceError}
     */
    readonly instanceCount: number;
    /**
     * @throws This property can throw errors.
     *
     * {@link PrefabErrorInvalidTemplate}
     */
    readonly name: string;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    notes: string;
    /**
     * @throws This property can throw errors.
     *
     * {@link PrefabErrorInvalidTemplate}
     */
    readonly source: PrefabSource;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link PrefabErrorInvalidStructure}
     *
     * {@link PrefabErrorInvalidTemplate}
     *
     * {@link PrefabErrorValueOutOfBounds}
     */
    addStructure(
        structure: minecraftservereditorbindings.EditorStructure,
        options?: PrefabTemplateAddStructureOptions,
    ): PrefabTemplateStructure;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link PrefabErrorInvalidInstance}
     *
     * {@link PrefabErrorInvalidTemplate}
     *
     * {@link PrefabServiceError}
     */
    createInstance(
        location: minecraftserverbindings.Vector3,
        options?: PrefabTemplateCreateInstanceOptions,
    ): PrefabTemplateInstance;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link PrefabErrorInvalidTemplate}
     */
    getMetadata(): PrefabTemplateMetadata;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link PrefabErrorInvalidTemplate}
     */
    getTags(): string[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link PrefabErrorInvalidTemplate}
     */
    getTemplateStructures(): PrefabTemplateStructure[];
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link PrefabErrorInvalidTemplate}
     *
     * {@link PrefabErrorInvalidTemplateStructure}
     */
    removeStructure(templateStructure: PrefabTemplateStructure): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link PrefabErrorInvalidName}
     *
     * {@link PrefabErrorInvalidTemplate}
     *
     * {@link PrefabServiceError}
     *
     * {@link PrefabTemplateExists}
     */
    setName(newName: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link PrefabErrorInvalidTemplate}
     *
     * {@link PrefabErrorStringInvalidLength}
     *
     * {@link PrefabServiceError}
     */
    setTags(newTags: string[]): void;
}

export class PrefabTemplateInstance {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    instanceMirror: minecraftserverbindings.StructureMirrorAxis;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    instanceRotation: minecraftserverbindings.StructureRotation;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    location: minecraftserverbindings.Vector3;
    /**
     * @throws This function can throw errors.
     *
     * {@link Error}
     *
     * {@link PrefabErrorInvalidInstance}
     *
     * {@link PrefabServiceError}
     */
    bakeInstance(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link PrefabErrorInvalidInstance}
     */
    getStructureRefs(): PrefabTemplateInstanceStructure[];
    /**
     * @throws This function can throw errors.
     *
     * {@link PrefabErrorInvalidInstance}
     *
     * {@link PrefabErrorInvalidTemplate}
     *
     * {@link PrefabServiceError}
     */
    getTemplate(): PrefabTemplate;
}

export class PrefabTemplateInstanceStructure {
    private constructor();
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    instanceMirror: minecraftserverbindings.StructureMirrorAxis;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    instanceRotation: minecraftserverbindings.StructureRotation;
    /**
     * @throws This function can throw errors.
     *
     * {@link PrefabErrorInvalidInstance}
     *
     * {@link PrefabErrorInvalidTemplate}
     *
     * {@link PrefabErrorInvalidTemplateStructure}
     *
     * {@link PrefabServiceError}
     */
    getTemplateStructure(): PrefabTemplateStructure;
}

export class PrefabTemplateStructure {
    private constructor();
    /**
     * @throws This property can throw errors.
     *
     * {@link PrefabErrorInvalidTemplateStructure}
     */
    readonly id: string;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    instanceMirror: minecraftserverbindings.StructureMirrorAxis;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    instanceOffset: minecraftserverbindings.Vector3;
    /**
     * @remarks This property can't be edited in read-only mode.
     */
    instanceRotation: minecraftserverbindings.StructureRotation;
    /**
     * @throws This property can throw errors.
     *
     * {@link PrefabErrorInvalidTemplateStructure}
     */
    readonly structureNormalizedOrigin: minecraftserverbindings.Vector3;
    /**
     * @throws This property can throw errors.
     *
     * {@link PrefabErrorInvalidTemplateStructure}
     */
    readonly structureOffset: minecraftserverbindings.Vector3;
    /**
     * @throws This property can throw errors.
     *
     * {@link PrefabErrorInvalidTemplateStructure}
     */
    readonly structureSize: minecraftserverbindings.Vector3;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link PrefabErrorInvalidStructure}
     *
     * {@link PrefabErrorInvalidTemplateStructure}
     *
     * {@link PrefabServiceError}
     */
    getStructure(): minecraftservereditorbindings.EditorStructure;
}

export class ProjectRegion {
    private constructor();
    /**
     * @throws This property can throw errors.
     */
    readonly availabilityMode: ProjectRegionAvailabilityMode;
    readonly id: string;
    readonly isValid: boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    dispose(): boolean;
    /**
     * @throws This function can throw errors.
     */
    getAvailableLocationFromRay(
        location: minecraftserverbindings.Vector3,
        direction: minecraftserverbindings.Vector3,
        options?: minecraftserverbindings.BlockRaycastOptions,
    ): minecraftserverbindings.Vector3 | undefined;
    /**
     * @throws This function can throw errors.
     */
    getBlock(location: minecraftserverbindings.Vector3): minecraftserverbindings.Block | undefined;
    /**
     * @throws This function can throw errors.
     */
    getBlockMapColor(location: minecraftserverbindings.Vector3): minecraftserverbindings.RGBA;
    /**
     * @throws This function can throw errors.
     */
    getBlockPermutation(location: minecraftserverbindings.Vector3): minecraftserverbindings.BlockPermutation;
    /**
     * @throws This function can throw errors.
     */
    getBlockTypeId(location: minecraftserverbindings.Vector3): string;
    /**
     * @throws This function can throw errors.
     */
    getBounds(): minecraftserverbindings.BlockBoundingBox;
    /**
     * @throws This function can throw errors.
     */
    isAirBlock(location: minecraftserverbindings.Vector3): boolean;
    /**
     * @throws This function can throw errors.
     */
    isAreaAvailable(boundingBox: minecraftserverbindings.BlockBoundingBox): boolean;
    /**
     * @throws This function can throw errors.
     */
    isAvailable(): boolean;
    /**
     * @throws This function can throw errors.
     */
    isBlockWaterLogged(location: minecraftserverbindings.Vector3): boolean;
    /**
     * @throws This function can throw errors.
     */
    isLiquidBlock(location: minecraftserverbindings.Vector3): boolean;
    /**
     * @throws This function can throw errors.
     */
    isLocationAvailable(location: minecraftserverbindings.Vector3): boolean;
    /**
     * @throws This function can throw errors.
     */
    isSolidBlock(location: minecraftserverbindings.Vector3): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    requestBlockOperationArea(
        volume: minecraftservereditorbindings.RelativeVolumeListBlockVolume,
        callback: (arg0: minecraftserverbindings.BlockLocationIterator) => void,
    ): Promise<void>;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    requestExpandToContain(extentX: minecraftcommon.NumberRange, extentZ: minecraftcommon.NumberRange): Promise<void>;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    requestExtentsUpdate(extentX: minecraftcommon.NumberRange, extentZ: minecraftcommon.NumberRange): Promise<void>;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    requestMove(center: minecraftserverbindings.Vector3): Promise<void>;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setBlockType(location: minecraftserverbindings.Vector3, blockType: minecraftserverbindings.BlockType | string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    setBlockWaterlogged(location: minecraftserverbindings.Vector3, isWaterlogged: boolean): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserverbindings.EntitySpawnError}
     *
     * {@link Error}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    spawnEntity(
        identifier: minecraftserverbindings.EntityType | string,
        location: minecraftserverbindings.Vector3,
        rotation?: number,
    ): minecraftserverbindings.Entity;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    waitUntilAvailable(): Promise<void>;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    waitUntilBoundsAvailable(boundingBox: minecraftserverbindings.BlockBoundingBox): Promise<void>;
}

export class ProjectRegionManager {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    disposeAllRegions(): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    disposeRegion(id: string): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getCursorRegion(): ProjectRegion;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getSelectionRegion(): ProjectRegion;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    leaseRegion(options: ProjectRegionOptions): ProjectRegion;
}

export class RealmsService {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    beginDownloadFromRealms(realmsWorldId: string, slotId: number): Promise<string>;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    beginUploadToRealms(
        realmsWorldId: string,
        slotId: number,
        gameOptions: minecraftservereditorbindings.GameOptions,
    ): Promise<RealmsWorldUploadResult>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    canUploadWorld(): boolean;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getRealmWorldlist(): Promise<EditorRealmsWorld[]>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    getServiceStatus(): RealmsServiceStatus;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    getSlots(worldId: string): Promise<EditorRealmsWorldSlot[]>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    isRealmsServiceAvailable(): EditorRealmsServiceAvailability;
}

export interface DataTransferCollectionNameData {
    nameStringId: string;
    uniqueId: string;
}

export interface EditorJigsawSection {
    bounds: minecraftserverbindings.BlockBoundingBox;
    offset: minecraftserverbindings.Vector3;
    rotation: minecraftserverbindings.StructureRotation;
    structureId: string;
}

export interface EditorRealmsWorld {
    id: string;
    name: string;
}

export interface EditorRealmsWorldSlot {
    id: number;
    name: string;
}

export interface EditorRegistryFile {
    fileJson: string;
    fileName: string;
}

export interface InputBindingInfo {
    actionId?: string;
    canRebind: boolean;
    label?: string;
    tooltip?: string;
}

export interface JigsawBlockData {
    finalBlock: string;
    jointType: JigsawJointType;
    jointTypeVisible: boolean;
    name: string;
    placementPriority: number;
    selectionPriority: number;
    target: string;
    targetPool: string;
}

export interface PersistenceGroupCreationOptions {
    groupType?: PersistenceGroupType;
    scope: PersistenceScope;
    version?: number;
}

export interface PersistenceQueryGroupOptions {
    namespace?: string;
    namespacedName?: string;
    scope?: PersistenceScope;
    version?: number;
}

export interface PrefabInstanceInteractionEventClicked {
    altPressed: boolean;
    ctrlPressed: boolean;
    shiftPressed: boolean;
}

export interface PrefabInstanceInteractionEventMoved {
    location: minecraftserverbindings.Vector3;
}

export interface PrefabServiceCreateTemplateOptions {
    description?: string;
    displayName?: string;
    notes?: string;
    tags?: string[];
}

export interface PrefabTemplateAddStructureOptions {
    mirror?: minecraftserverbindings.StructureMirrorAxis;
    offset?: minecraftserverbindings.Vector3;
    rotation?: minecraftserverbindings.StructureRotation;
}

export interface PrefabTemplateCreateInstanceOptions {
    mirror?: minecraftserverbindings.StructureMirrorAxis;
    rotation?: minecraftserverbindings.StructureRotation;
}

export interface PrefabTemplateMetadata {
    description: string;
    displayName: string;
    instanceReferenceCount: number;
    name: string;
    notes: string;
    readOnly: boolean;
    source: PrefabSource;
    structureReferenceCount: number;
    tags: string[];
    templateId: string;
}

export interface ProjectRegionOptions {
    availabilityMode?: ProjectRegionAvailabilityMode;
    extentX: minecraftcommon.NumberRange;
    extentZ: minecraftcommon.NumberRange;
}

// @ts-ignore
export class PrefabErrorInvalidInstance extends Error {
    private constructor();
}

// @ts-ignore
export class PrefabErrorInvalidName extends Error {
    private constructor();
}

// @ts-ignore
export class PrefabErrorInvalidStructure extends Error {
    private constructor();
}

// @ts-ignore
export class PrefabErrorInvalidTemplate extends Error {
    private constructor();
}

// @ts-ignore
export class PrefabErrorInvalidTemplateStructure extends Error {
    private constructor();
}

// @ts-ignore
export class PrefabErrorStringInvalidLength extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly length: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly maxLength: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly string: string;
}

// @ts-ignore
export class PrefabErrorValueOutOfBounds extends Error {
    private constructor();
}

// @ts-ignore
export class PrefabServiceError extends Error {
    private constructor();
}

// @ts-ignore
export class PrefabTemplateExists extends Error {
    private constructor();
}

// @ts-ignore
export class PrefabTemplateNotFound extends Error {
    private constructor();
}

export const editorInternal: MinecraftEditorInternal;