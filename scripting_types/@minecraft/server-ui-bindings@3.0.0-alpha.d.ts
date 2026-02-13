// Type definitions for Minecraft Bedrock Edition Script APIs
// Project: https://github.com/xKingDark/bedrock-metadata
// Definitions by: xKingDark <https://github.com/xKingDark>
/**
 * @alpha
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-ui-bindings",
 *     "version": "3.0.0-alpha"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export enum FormCancelationReason {
    UserBusy   = "UserBusy",
    UserClosed = "UserClosed",
}

export enum FormRejectReason {
    MalformedResponse = "MalformedResponse",
    PlayerQuit        = "PlayerQuit",
    ServerShutdown    = "ServerShutdown",
}

export class ActionFormData {
    /**
     * @remarks This function can't be called in read-only mode.
     */
    body(bodyText: minecraftserver.RawMessage | string): ActionFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    button(text: minecraftserver.RawMessage | string, iconPath?: string): ActionFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    divider(): ActionFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    header(text: minecraftserver.RawMessage | string): ActionFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    label(text: minecraftserver.RawMessage | string): ActionFormData;
    /**
     * @remarks This function can't be called in read-only mode.
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
    /**
     * @remarks This function can't be called in read-only mode.
     */
    title(titleText: minecraftserver.RawMessage | string): ActionFormData;
}

// @ts-ignore
export class ActionFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}

export class DataDrivenScreen {
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    showScreen(player: minecraftserver.Player, screenId: string): void;
}

export class DataStore {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    getProperty(player: minecraftserver.Player, dataStoreName: string, property: string): string | undefined;
    /**
     * @remarks This function can't be called in read-only mode.
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
     * @remarks This function can't be called in read-only mode.
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
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    setProperty(player: minecraftserver.Player, dataStoreName: string, property: string, data: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
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
     * @remarks This function can't be called in read-only mode.
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
    /**
     * @remarks This function can't be called in read-only mode.
     */
    body(bodyText: minecraftserver.RawMessage | string): MessageFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    button1(text: minecraftserver.RawMessage | string): MessageFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    button2(text: minecraftserver.RawMessage | string): MessageFormData;
    /**
     * @remarks This function can't be called in read-only mode.
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
    /**
     * @remarks This function can't be called in read-only mode.
     */
    title(titleText: minecraftserver.RawMessage | string): MessageFormData;
}

// @ts-ignore
export class MessageFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}

export class ModalFormData {
    /**
     * @remarks This function can't be called in read-only mode.
     */
    divider(): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    dropdown(
        label: minecraftserver.RawMessage | string,
        items: (minecraftserver.RawMessage | string)[],
        dropdownOptions?: ModalFormDataDropdownOptions,
    ): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    header(text: minecraftserver.RawMessage | string): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    label(text: minecraftserver.RawMessage | string): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
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
    /**
     * @remarks This function can't be called in read-only mode.
     */
    slider(
        label: minecraftserver.RawMessage | string,
        minimumValue: number,
        maximumValue: number,
        sliderOptions?: ModalFormDataSliderOptions,
    ): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    submitButton(submitButtonText: minecraftserver.RawMessage | string): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    textField(
        label: minecraftserver.RawMessage | string,
        placeholderText: minecraftserver.RawMessage | string,
        textFieldOptions?: ModalFormDataTextFieldOptions,
    ): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    title(titleText: minecraftserver.RawMessage | string): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    toggle(label: minecraftserver.RawMessage | string, toggleOptions?: ModalFormDataToggleOptions): ModalFormData;
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
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    closeAllDataDrivenScreens(player: minecraftserver.Player): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    closeAllForms(player: minecraftserver.Player): void;
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

export const isAlpha = true;

export const ddui:      DataStore;
export const uiManager: UIManager;
