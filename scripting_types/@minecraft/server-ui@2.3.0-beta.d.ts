// Type definitions for Minecraft Bedrock Edition Script APIs
// Project: https://github.com/xKingDark/bedrock-metadata
// Definitions by: xKingDark <https://github.com/xKingDark>
/**
 * @beta
 * @packageDocumentation
 * Manifest Details
 * ```json
 * { "module_name": "@minecraft/server-ui", "version": "2.3.0-beta" }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export enum DataDrivenScreenClosedReason {
    ClientClosed = "ClientClosed",
    ServerClosed = "ServerClosed",
    UserBusy     = "UserBusy",
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

export enum FormVisibilityErrorReason {
    AlreadyShowing = "AlreadyShowing",
    NotShowing     = "NotShowing",
}

export enum TextFilteringError {
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

export class CustomForm {
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    constructor(
        player: minecraftserver.Player,
        title: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
    );
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    button(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        onClick: () => void,
        options?: ButtonOptions,
    ): CustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link FormVisibilityError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    close(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    closeButton(): CustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    divider(options?: DividerOptions): CustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     *
     * {@link InvalidObservableError}
     */
    dropdown(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        value: ObservableNumber,
        items: DropdownItemData[],
        options?: DropdownOptions,
    ): CustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    header(text: ObservableString | ObservableUIRawMessage | string | UIRawMessage, options?: TextOptions): CustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     *
     * {@link InvalidObservableError}
     */
    image(src: ObservableString | string, pack: ObservableString | string, options?: ImageOptions): CustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     */
    isShowing(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    label(text: ObservableString | ObservableUIRawMessage | string | UIRawMessage, options?: TextOptions): CustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link FormVisibilityError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    show(): Promise<DataDrivenScreenClosedReason>;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     *
     * {@link InvalidObservableError}
     */
    slider(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        value: ObservableNumber,
        min: number | ObservableNumber,
        max: number | ObservableNumber,
        options?: SliderOptions,
    ): CustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    spacer(options?: SpacingOptions): CustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     *
     * {@link InvalidObservableError}
     */
    textField(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        text: ObservableString,
        options?: TextFieldOptions,
    ): CustomForm;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     *
     * {@link InvalidObservableError}
     */
    toggle(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        toggled: ObservableBoolean,
        options?: ToggleOptions,
    ): CustomForm;
}

export class FormResponse {
    private constructor();
    readonly cancelationReason?: FormCancelationReason;
    readonly canceled: boolean;
}

export class MessageBox {
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    constructor(
        player: minecraftserver.Player,
        title: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
    );
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    body(body: ObservableString | ObservableUIRawMessage | string | UIRawMessage): MessageBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    button1(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
    ): MessageBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    button1WithOptions(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        options?: MessageBoxButtonOptions,
    ): MessageBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    button2(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
    ): MessageBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidFormModificationError}
     */
    button2WithOptions(
        label: ObservableString | ObservableUIRawMessage | string | UIRawMessage,
        options?: MessageBoxButtonOptions,
    ): MessageBox;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link FormVisibilityError}
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
     * {@link FormVisibilityError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    show(): Promise<MessageBoxResult>;
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

export class ObservableBoolean {
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    constructor(data: boolean, options?: ObservableOptions);
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    getData(): boolean;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    setData(data: boolean): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: boolean) => void): (arg0: boolean) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: boolean) => void): boolean;
}

export class ObservableNumber {
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    constructor(data: number, options?: ObservableOptions);
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    getData(): number;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    setData(data: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: number) => void): (arg0: number) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: number) => void): boolean;
}

export class ObservableString {
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    constructor(data: string, options?: ObservableOptions);
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
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
    getFilteredText(player: minecraftserver.Player): Promise<TextFilteringError[] | string>;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    setData(data: string): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: string) => void): (arg0: string) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: string) => void): boolean;
}

export class ObservableUIRawMessage {
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    constructor(data: UIRawMessage, options?: ObservableOptions);
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    getData(): UIRawMessage;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    setData(data: UIRawMessage): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    subscribe(callback: (arg0: UIRawMessage) => void): (arg0: UIRawMessage) => void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    unsubscribe(callback: (arg0: UIRawMessage) => void): boolean;
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
    disabled?: boolean | ObservableBoolean;
    imageDetails?: ImageDetails;
    tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    visible?: boolean | ObservableBoolean;
}

export interface DividerOptions {
    visible?: boolean | ObservableBoolean;
}

export interface DropdownItemData {
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    label: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    value: number;
}

export interface DropdownOptions {
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    disabled?: boolean | ObservableBoolean;
    tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    visible?: boolean | ObservableBoolean;
}

export interface ImageDetails {
    imagePackId: ObservableString | string;
    imageSrc: ObservableString | string;
}

export interface ImageOptions {
    onClick?: () => void;
    tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    visible?: boolean | ObservableBoolean;
    width?: number | ObservableNumber;
}

export interface MessageBoxButtonOptions {
    imageDetails?: ImageDetails;
    tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
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
    clientWritable: boolean;
}

export interface SliderOptions {
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    disabled?: boolean | ObservableBoolean;
    fixedFormatDigits?: number | ObservableNumber;
    step?: number | ObservableNumber;
    tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    visible?: boolean | ObservableBoolean;
}

export interface SpacingOptions {
    visible?: boolean | ObservableBoolean;
}

export interface TextFieldOptions {
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    disabled?: boolean | ObservableBoolean;
    tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    visible?: boolean | ObservableBoolean;
}

export interface TextOptions {
    tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    visible?: boolean | ObservableBoolean;
}

export interface ToggleOptions {
    description?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    disabled?: boolean | ObservableBoolean;
    tooltip?: ObservableString | ObservableUIRawMessage | string | UIRawMessage;
    visible?: boolean | ObservableBoolean;
}

export interface UIRawMessage {
    rawtext?: UIRawMessage[];
    text?: string;
    translate?: string;
    with?: string[] | UIRawMessage;
}

// @ts-ignore
export class FormRejectError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: FormRejectReason;
}

// @ts-ignore
export class FormVisibilityError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly formId: string;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: FormVisibilityErrorReason;
}

// @ts-ignore
export class InvalidFormError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly formId: string;
}

// @ts-ignore
export class InvalidFormModificationError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly formId: string;
}

// @ts-ignore
export class InvalidObservableError extends Error {
    private constructor();
}

// @ts-ignore
export class PlayerLeftError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly formId: string;
}

export const uiManager: UIManager;
