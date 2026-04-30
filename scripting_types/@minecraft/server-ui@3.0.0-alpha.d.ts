// Type definitions for Minecraft Bedrock Edition Script APIs
// Project: https://github.com/xKingDark/bedrock-metadata
// Definitions by: xKingDark <https://github.com/xKingDark>
/**
 * @alpha
 * @packageDocumentation
 * Manifest Details
 * ```json
 * { "module_name": "@minecraft/server-ui", "version": "3.0.0-alpha" }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export declare enum DataDrivenScreenClosedReason {
    ServerClose = "ServerClose",
    UserBusy    = "UserBusy",
    UserClose   = "UserClose",
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

export enum InternalDataDrivenScreenClosedReason {
    ClientClosed = "ClientClosed",
    ServerClosed = "ServerClosed",
    UserBusy     = "UserBusy",
}

export enum InternalFormVisibilityErrorReason {
    AlreadyShowing = "AlreadyShowing",
    NotShowing     = "NotShowing",
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

export class FormResponse {
    private constructor();
    readonly cancelationReason?: FormCancelationReason;
    readonly canceled: boolean;
}

export class InternalCustomForm {
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    constructor(
        player: minecraftserver.Player,
        title: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string,
    );
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InternalInvalidFormModificationError}
     */
    button(
        label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string,
        onClick: () => void,
        options?: InternalButtonOptions,
    ): InternalCustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InternalFormVisibilityError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    close(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InternalInvalidFormModificationError}
     */
    closeButton(): InternalCustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InternalInvalidFormModificationError}
     */
    divider(options?: InternalDividerOptions): InternalCustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InternalInvalidFormModificationError}
     */
    dropdown(
        label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string,
        value: ObservableNumber,
        items: InternalDropdownItemData[],
        options?: InternalDropdownOptions,
    ): InternalCustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InternalInvalidFormModificationError}
     */
    header(
        text: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string,
        options?: InternalTextOptions,
    ): InternalCustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    isShowing(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InternalInvalidFormModificationError}
     */
    label(
        text: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string,
        options?: InternalTextOptions,
    ): InternalCustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InternalFormVisibilityError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    show(): Promise<InternalDataDrivenScreenClosedReason>;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InternalInvalidFormModificationError}
     */
    slider(
        label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string,
        value: ObservableNumber,
        min: number | ObservableNumber,
        max: number | ObservableNumber,
        options?: InternalSliderOptions,
    ): InternalCustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InternalInvalidFormModificationError}
     */
    spacer(options?: InternalSpacingOptions): InternalCustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InternalInvalidFormModificationError}
     */
    textField(
        label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string,
        text: ObservableString,
        options?: InternalTextFieldOptions,
    ): InternalCustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InternalInvalidFormModificationError}
     */
    toggle(
        label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string,
        toggled: ObservableBoolean,
        options?: InternalToggleOptions,
    ): InternalCustomForm;
}

export class InternalMessageBox {
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    constructor(
        player: minecraftserver.Player,
        title: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string,
    );
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InternalInvalidFormModificationError}
     */
    body(body: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string): InternalMessageBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InternalInvalidFormModificationError}
     */
    button1(
        label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string,
        tooltip?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string,
    ): InternalMessageBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InternalInvalidFormModificationError}
     */
    button2(
        label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string,
        tooltip?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string,
    ): InternalMessageBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InternalFormVisibilityError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    close(): void;
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
     * {@link InternalFormVisibilityError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    show(): Promise<InternalMessageBoxResult>;
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
    getData(): T;
    getFilteredText(player: minecraftserver.Player): Promise<string | TextFilteringError[]>;
    setData(arg0: T): void;
    subscribe(callback: (arg0: T) => void): (arg0: T) => void;
    toJSON(): unknown;
    unsubscribe(callback: (arg0: T) => void): void;
    static create<T extends boolean | string | UIRawMessage | number>(
        arg0: T,
        observableOptions?: ObservableOptions,
    ): Observable<T>;
}

export class ObservableBoolean {
    constructor(data: boolean, options?: InternalObservableOptions);
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

export class ObservableNumber {
    constructor(data: number, options?: InternalObservableOptions);
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
    constructor(data: string, options?: InternalObservableOptions);
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getData(): string;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    getFilteredText(player: minecraftserver.Player): Promise<InternalTextFilteringError[] | string>;
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

export class ObservableUIRawMessage {
    constructor(data: InternalUIRawMessage, options?: InternalObservableOptions);
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    getData(): InternalUIRawMessage;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    setData(data: InternalUIRawMessage): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    subscribe(callback: (arg0: InternalUIRawMessage) => void): (arg0: InternalUIRawMessage) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    unsubscribe(callback: (arg0: InternalUIRawMessage) => void): boolean;
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

export interface InternalButtonOptions {
    disabled?: boolean | ObservableBoolean;
    tooltip?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string;
    visible?: boolean | ObservableBoolean;
}

export interface InternalDividerOptions {
    visible?: boolean | ObservableBoolean;
}

export interface InternalDropdownItemData {
    description?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string;
    label: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string;
    value: number;
}

export interface InternalDropdownOptions {
    description?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string;
    disabled?: boolean | ObservableBoolean;
    visible?: boolean | ObservableBoolean;
}

export interface InternalMessageBoxResult {
    closeReason: InternalDataDrivenScreenClosedReason;
    selection?: number;
}

export interface InternalObservableOptions {
    clientWritable: boolean;
}

export interface InternalSliderOptions {
    description?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string;
    disabled?: boolean | ObservableBoolean;
    step?: number | ObservableNumber;
    visible?: boolean | ObservableBoolean;
}

export interface InternalSpacingOptions {
    visible?: boolean | ObservableBoolean;
}

export interface InternalTextFieldOptions {
    description?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string;
    disabled?: boolean | ObservableBoolean;
    visible?: boolean | ObservableBoolean;
}

export interface InternalTextOptions {
    visible?: boolean | ObservableBoolean;
}

export interface InternalToggleOptions {
    description?: InternalUIRawMessage | ObservableString | ObservableUIRawMessage | string;
    disabled?: boolean | ObservableBoolean;
    visible?: boolean | ObservableBoolean;
}

export interface InternalUIRawMessage {
    rawtext?: InternalUIRawMessage[];
    text?: string;
    translate?: string;
    with?: string[] | InternalUIRawMessage;
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
export class InternalFormVisibilityError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly formId: string;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: InternalFormVisibilityErrorReason;
}

// @ts-ignore
export class InternalInvalidFormError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly formId: string;
}

// @ts-ignore
export class InternalInvalidFormModificationError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly formId: string;
}

// @ts-ignore
export class InternalPlayerLeftError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly formId: string;
}

// @ts-ignore
export declare class PlayerLeftError extends Error {}

// @ts-ignore
export declare class ServerShutdownError extends Error {}

export const isAlpha = true;

export const uiManager: UIManager;
