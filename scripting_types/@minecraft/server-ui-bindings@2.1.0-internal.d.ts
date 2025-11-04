// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @internal
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-ui-bindings",
 *     "version": "2.1.0-internal"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export enum FormCancelationReason {
    UserBusy = "UserBusy",
    UserClosed = "UserClosed",
}

export enum FormRejectReason {
    MalformedResponse = "MalformedResponse",
    PlayerQuit = "PlayerQuit",
    ServerShutdown = "ServerShutdown",
}

export class ActionFormData {
    body(bodyText: minecraftserverbindings.RawMessage | string): ActionFormData;
    button(text: minecraftserverbindings.RawMessage | string, iconPath?: string): ActionFormData;
    divider(): ActionFormData;
    header(text: minecraftserverbindings.RawMessage | string): ActionFormData;
    label(text: minecraftserverbindings.RawMessage | string): ActionFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     *
     * {@link minecraftserverbindings.RawMessageError}
     */
    show(player: minecraftserverbindings.Player): Promise<ActionFormResponse>;
    title(titleText: minecraftserverbindings.RawMessage | string): ActionFormData;
}

// @ts-ignore
export class ActionFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}

export class DataStore {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    getProperty(player: minecraftserverbindings.Player, dataStoreName: string, property: string): string | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     *
     * {@link InvalidPathError}
     */
    getPropertyPath(
        player: minecraftserverbindings.Player,
        dataStoreName: string,
        property: string,
        path: string,
    ): string | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @param isWritable Defaults to: true
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     *
     * {@link InvalidPathError}
     */
    setClientWritable(
        player: minecraftserverbindings.Player,
        dataStoreName: string,
        property: string,
        path: string,
        isWritable?: boolean,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    setProperty(player: minecraftserverbindings.Player, dataStoreName: string, property: string, data: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     *
     * {@link InvalidPathError}
     */
    setPropertyPath(
        player: minecraftserverbindings.Player,
        dataStoreName: string,
        property: string,
        path: string,
        data: boolean | number | string,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    subscribe(
        player: minecraftserverbindings.Player,
        dataStoreName: string,
        property: string,
        onChange: (arg0: string) => void,
    ): (arg0: string) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     *
     * {@link InvalidPathError}
     */
    subscribePath(
        player: minecraftserverbindings.Player,
        dataStoreName: string,
        property: string,
        path: string,
        onChange: (arg0: string) => void,
    ): (arg0: string) => void;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    unsubscribe(onChange: (arg0: string) => void): boolean;
}

export class FormResponse {
    private constructor();
    readonly cancelationReason?: FormCancelationReason;
    readonly canceled: boolean;
}

export class MessageFormData {
    body(bodyText: minecraftserverbindings.RawMessage | string): MessageFormData;
    button1(text: minecraftserverbindings.RawMessage | string): MessageFormData;
    button2(text: minecraftserverbindings.RawMessage | string): MessageFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     *
     * {@link minecraftserverbindings.RawMessageError}
     */
    show(player: minecraftserverbindings.Player): Promise<MessageFormResponse>;
    title(titleText: minecraftserverbindings.RawMessage | string): MessageFormData;
}

// @ts-ignore
export class MessageFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}

export class ModalFormData {
    divider(): ModalFormData;
    dropdown(
        label: minecraftserverbindings.RawMessage | string,
        items: (minecraftserverbindings.RawMessage | string)[],
        dropdownOptions?: ModalFormDataDropdownOptions,
    ): ModalFormData;
    header(text: minecraftserverbindings.RawMessage | string): ModalFormData;
    label(text: minecraftserverbindings.RawMessage | string): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     *
     * {@link minecraftserverbindings.RawMessageError}
     */
    show(player: minecraftserverbindings.Player): Promise<ModalFormResponse>;
    slider(
        label: minecraftserverbindings.RawMessage | string,
        minimumValue: number,
        maximumValue: number,
        sliderOptions?: ModalFormDataSliderOptions,
    ): ModalFormData;
    submitButton(submitButtonText: minecraftserverbindings.RawMessage | string): ModalFormData;
    textField(
        label: minecraftserverbindings.RawMessage | string,
        placeholderText: minecraftserverbindings.RawMessage | string,
        textFieldOptions?: ModalFormDataTextFieldOptions,
    ): ModalFormData;
    title(titleText: minecraftserverbindings.RawMessage | string): ModalFormData;
    toggle(label: minecraftserverbindings.RawMessage | string, toggleOptions?: ModalFormDataToggleOptions): ModalFormData;
}

// @ts-ignore
export class ModalFormResponse extends FormResponse {
    private constructor();
    readonly formValues?: (boolean | number | string | undefined)[];
}

export class UIManager {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    closeAllForms(player: minecraftserverbindings.Player): void;
}

export interface ModalFormDataDropdownOptions {
    defaultValueIndex?: number;
    tooltip?: minecraftserverbindings.RawMessage | string;
}

export interface ModalFormDataSliderOptions {
    defaultValue?: number;
    tooltip?: minecraftserverbindings.RawMessage | string;
    valueStep?: number;
}

export interface ModalFormDataTextFieldOptions {
    defaultValue?: minecraftserverbindings.RawMessage | string;
    tooltip?: minecraftserverbindings.RawMessage | string;
}

export interface ModalFormDataToggleOptions {
    defaultValue?: boolean;
    tooltip?: minecraftserverbindings.RawMessage | string;
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
export class InvalidPathError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly path: string;
}

export const ddui: DataStore;
export const uiManager: UIManager;