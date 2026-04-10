// Type definitions for Minecraft Bedrock Edition Script APIs
// Project: https://github.com/xKingDark/bedrock-metadata
// Definitions by: xKingDark <https://github.com/xKingDark>
/**
 * @internal
 * @packageDocumentation
 * Manifest Details
 * ```json
 * { "module_name": "@minecraft/server-ui", "version": "2.1.0-internal" }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export enum DataDrivenScreenClosedReason {
    ClientCanceled       = "ClientCanceled",
    InvalidForm          = "InvalidForm",
    ProgrammaticClose    = "ProgrammaticClose",
    ProgrammaticCloseAll = "ProgrammaticCloseAll",
    UserBusy             = "UserBusy",
}

export enum DataDrivenScreenRejectReason {
    PlayerLeave    = "PlayerLeave",
    ServerShutdown = "ServerShutdown",
}

export enum FormCancelationReason {
    UserBusy   = "UserBusy",
    UserClosed = "UserClosed",
}

export enum FormRejectReason {
    MalformedResponse = "MalformedResponse",
    PlayerQuit        = "PlayerQuit",
    ServerShutdown    = "ServerShutdown",
}

export enum InternalTextFilteringError {
    DisabledByPlayer                = "DisabledByPlayer",
    TextProcessorServiceUnreachable = "TextProcessorServiceUnreachable",
    Unknown                         = "Unknown",
}

export declare enum TextFilteringError {
    DisabledByPlayer                = "DisabledByPlayer",
    TextProcessorServiceUnreachable = "TextProcessorServiceUnreachable",
    Unknown                         = "Unknown",
}

export class ActionFormData {
    body(bodyText: minecraftserver.RawMessage | string): ActionFormData;
    button(text: minecraftserver.RawMessage | string, iconPath?: string): ActionFormData;
    divider(): ActionFormData;
    header(text: minecraftserver.RawMessage | string): ActionFormData;
    label(text: minecraftserver.RawMessage | string): ActionFormData;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftserver.InvalidEntityError}
     *
     * {@link minecraftserver.RawMessageError}
     */
    show(player: minecraftserver.Player): Promise<ActionFormResponse>;
    title(titleText: minecraftserver.RawMessage | string): ActionFormData;
}

// @ts-ignore
export class ActionFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}

export declare class CustomForm {
    button(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        onClick: () => void,
        buttonOptions?: ButtonOptions,
    ): CustomForm;
    close(): void;
    closeButton(): CustomForm;
    divider(dividerOptions?: DividerOptions): CustomForm;
    dropdown(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        arg1: Observable<number>,
        items: DropdownItem[],
        dropdownOptions?: DropdownOptions,
    ): CustomForm;
    header(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        textOptions?: TextOptions,
    ): CustomForm;
    isShowing(): boolean;
    label(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        textOptions?: TextOptions,
    ): CustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    show(): Promise<DataDrivenScreenClosedReason>;
    slider(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        arg1: Observable<number>,
        arg2: Observable<number> | number,
        arg3: Observable<number> | number,
        sliderOptions?: SliderOptions,
    ): CustomForm;
    spacer(spacingOptions?: SpacingOptions): CustomForm;
    textField(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        arg1: Observable<string>,
        textFieldOptions?: TextFieldOptions,
    ): CustomForm;
    toggle(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        arg1: Observable<boolean>,
        toggleOptions?: ToggleOptions,
    ): CustomForm;
    static create(
        player: minecraftserver.Player,
        tooltip: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
    ): CustomForm;
}

export class DataDrivenScreen {
    constructor(player: minecraftserver.Player, screenId: string);
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    hideScreen(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    isShowing(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    showScreen(instanceId?: number): Promise<DataDrivenScreenResponse>;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    static closeAllScreens(player: minecraftserver.Player): void;
}

export class DataDrivenScreenResponse {
    private constructor();
    readonly closedReason: DataDrivenScreenClosedReason;
}

export class DataStore {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    getFilteredText(player: minecraftserver.Player, text: string): Promise<InternalTextFilteringError[] | string>;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getInstanceIdOverride(): number | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    getProperty(player: minecraftserver.Player, dataStoreName: string, property: string): string | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidEntityError}
     *
     * {@link InvalidPathError}
     */
    getPropertyPath(
        player: minecraftserver.Player,
        dataStoreName: string,
        property: string,
        path: string,
    ): string | undefined;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidEntityError}
     *
     * {@link InvalidPathError}
     */
    setClientWritable(
        player: minecraftserver.Player,
        dataStoreName: string,
        property: string,
        path: string,
        isWritable?: boolean,
    ): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setInstanceIdOverride(instanceId?: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    setProperty(player: minecraftserver.Player, dataStoreName: string, property: string, data: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidEntityError}
     *
     * {@link InvalidPathError}
     */
    setPropertyPath(
        player: minecraftserver.Player,
        dataStoreName: string,
        property: string,
        path: string,
        data: boolean | number | string,
    ): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidEntityError}
     *
     * {@link InvalidPathError}
     */
    subscribe(
        player: minecraftserver.Player,
        dataStoreName: string,
        property: string,
        path: string,
        onChange: (arg0: string) => void,
    ): (arg0: string) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    unsubscribe(onChange: (arg0: string) => void): boolean;
}

export class FormResponse {
    private constructor();
    readonly cancelationReason?: FormCancelationReason;
    readonly canceled: boolean;
}

export declare class MessageBox {
    body(bodyText: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage): MessageBox;
    button1(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        arg1?: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
    ): MessageBox;
    button2(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        arg1?: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
    ): MessageBox;
    close(): void;
    isShowing(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    show(): Promise<MessageBoxResult>;
    static create(
        player: minecraftserver.Player,
        tooltip: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
    ): MessageBox;
}

export class MessageFormData {
    body(bodyText: minecraftserver.RawMessage | string): MessageFormData;
    button1(text: minecraftserver.RawMessage | string): MessageFormData;
    button2(text: minecraftserver.RawMessage | string): MessageFormData;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftserver.InvalidEntityError}
     *
     * {@link minecraftserver.RawMessageError}
     */
    show(player: minecraftserver.Player): Promise<MessageFormResponse>;
    title(titleText: minecraftserver.RawMessage | string): MessageFormData;
}

// @ts-ignore
export class MessageFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}

export class ModalFormData {
    divider(): ModalFormData;
    dropdown(
        label: minecraftserver.RawMessage | string,
        items: (minecraftserver.RawMessage | string)[],
        dropdownOptions?: ModalFormDataDropdownOptions,
    ): ModalFormData;
    header(text: minecraftserver.RawMessage | string): ModalFormData;
    label(text: minecraftserver.RawMessage | string): ModalFormData;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftserver.InvalidEntityError}
     *
     * {@link minecraftserver.RawMessageError}
     */
    show(player: minecraftserver.Player): Promise<ModalFormResponse>;
    slider(
        label: minecraftserver.RawMessage | string,
        minimumValue: number,
        maximumValue: number,
        sliderOptions?: ModalFormDataSliderOptions,
    ): ModalFormData;
    submitButton(submitButtonText: minecraftserver.RawMessage | string): ModalFormData;
    textField(
        label: minecraftserver.RawMessage | string,
        placeholderText: minecraftserver.RawMessage | string,
        textFieldOptions?: ModalFormDataTextFieldOptions,
    ): ModalFormData;
    title(titleText: minecraftserver.RawMessage | string): ModalFormData;
    toggle(label: minecraftserver.RawMessage | string, toggleOptions?: ModalFormDataToggleOptions): ModalFormData;
}

// @ts-ignore
export class ModalFormResponse extends FormResponse {
    private constructor();
    readonly formValues?: (boolean | number | string | undefined)[];
}

export declare class Observable<T extends boolean | string | UIRawMessage | number> {
    bind(player: minecraftserver.Player, arg1: string, arg2: string, arg3: string): void;
    getBindingCount(): number;
    getData(): T;
    getFilteredText(player: minecraftserver.Player): Promise<string | TextFilteringError[]>;
    isClientWritable(): boolean;
    setData(arg0: T): void;
    subscribe(callback: (arg0: T) => void): (arg0: T) => void;
    toJSON(): unknown;
    unbind(player: minecraftserver.Player, arg1: string, arg2: string, arg3: string): void;
    unsubscribe(callback: (arg0: T) => void): void;
    waitForChange(): Promise<T>;
    static create<T extends boolean | string | UIRawMessage | number>(
        arg0: T,
        observableOptions?: ObservableOptions,
    ): Observable<T>;
}

export class ObservableBoolean {
    constructor(data: boolean);
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getData(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setData(data: boolean): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    subscribe(callback: (arg0: boolean) => void): (arg0: boolean) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    unsubscribe(callback: (arg0: boolean) => void): boolean;
}

export declare class ObservableCallback {
    bind(player: minecraftserver.Player, arg1: string, arg2: string, arg3: string): void;
    getData(): number;
    unbind(player: minecraftserver.Player, arg1: string, arg2: string, arg3: string): void;
    static create(onClick: () => void): ObservableCallback;
}

export class ObservableNumber {
    constructor(data: number);
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getData(): number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setData(data: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    subscribe(callback: (arg0: number) => void): (arg0: number) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    unsubscribe(callback: (arg0: number) => void): boolean;
}

export class ObservableString {
    constructor(data: string);
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getData(): string;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setData(data: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    subscribe(callback: (arg0: string) => void): (arg0: string) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    unsubscribe(callback: (arg0: string) => void): boolean;
}

export class UIManager {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     */
    closeAllForms(player: minecraftserver.Player): void;
}

export interface ButtonOptions {
    disabled?: Observable<boolean> | boolean;
    tooltip?: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage;
    visible?: Observable<boolean> | boolean;
}

export interface DividerOptions {
    visible?: Observable<boolean> | boolean;
}

export interface DropdownItem {
    description?: UIRawMessage | string;
    label: UIRawMessage | string;
    value: number;
}

export interface DropdownOptions {
    description?: Observable<string> | string | UIRawMessage;
    disabled?: Observable<boolean> | boolean;
    visible?: Observable<boolean> | boolean;
}

export interface MessageBoxResult {
    closeReason: DataDrivenScreenClosedReason;
    selection?: number;
}

export interface ModalFormDataDropdownOptions {
    defaultValueIndex?: number;
    tooltip?: minecraftserver.RawMessage | string;
}

export interface ModalFormDataSliderOptions {
    defaultValue?: number;
    tooltip?: minecraftserver.RawMessage | string;
    valueStep?: number;
}

export interface ModalFormDataTextFieldOptions {
    defaultValue?: minecraftserver.RawMessage | string;
    tooltip?: minecraftserver.RawMessage | string;
}

export interface ModalFormDataToggleOptions {
    defaultValue?: boolean;
    tooltip?: minecraftserver.RawMessage | string;
}

export interface ObservableOptions {
    clientWritable?: boolean;
}

export interface SliderOptions {
    description?: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage;
    disabled?: Observable<boolean> | boolean;
    step?: Observable<number> | number;
    visible?: Observable<boolean> | boolean;
}

export interface SpacingOptions {
    visible?: Observable<boolean> | boolean;
}

export interface TextFieldOptions {
    description?: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage;
    disabled?: Observable<boolean> | boolean;
    visible?: Observable<boolean> | boolean;
}

export interface TextOptions {
    visible?: Observable<boolean> | boolean;
}

export interface ToggleOptions {
    description?: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage;
    disabled?: Observable<boolean> | boolean;
    visible?: Observable<boolean> | boolean;
}

export interface UIRawMessage {
    rawtext?: UIRawMessage[];
    text?: string;
    translate?: string;
    with?: string[] | UIRawMessage;
}

// @ts-ignore
export class DataDrivenScreenRejectError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: DataDrivenScreenRejectReason;
}

// @ts-ignore
export declare class FormCloseError extends Error {}

// @ts-ignore
export class FormRejectError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: FormRejectReason;
}

// @ts-ignore
export declare class InvalidFormError extends Error {}

// @ts-ignore
export class InvalidPathError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly path: string;
}

// @ts-ignore
export declare class PlayerLeftError extends Error {}

// @ts-ignore
export declare class ServerShutdownError extends Error {}

export const testConstant = 5;

export const ddui: DataStore;
export const uiManager: UIManager;
