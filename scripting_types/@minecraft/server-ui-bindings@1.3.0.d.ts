// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-ui-bindings",
 *     "version": "1.3.0"
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
    /**
     * @remarks This function can't be called in read-only mode.
     */
    body(bodyText: minecraftserverbindings.RawMessage | string): ActionFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    button(text: minecraftserverbindings.RawMessage | string, iconPath?: string): ActionFormData;
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
    /**
     * @remarks This function can't be called in read-only mode.
     */
    title(titleText: minecraftserverbindings.RawMessage | string): ActionFormData;
}

// @ts-ignore
export class ActionFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
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
    body(bodyText: minecraftserverbindings.RawMessage | string): MessageFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    button1(text: minecraftserverbindings.RawMessage | string): MessageFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    button2(text: minecraftserverbindings.RawMessage | string): MessageFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    show(player: minecraftserverbindings.Player): Promise<MessageFormResponse>;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    title(titleText: minecraftserverbindings.RawMessage | string): MessageFormData;
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
    dropdown(
        label: minecraftserverbindings.RawMessage | string,
        options: (minecraftserverbindings.RawMessage | string)[],
        defaultValueIndex?: number,
    ): ModalFormData;
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
    /**
     * @remarks This function can't be called in read-only mode.
     */
    slider(
        label: minecraftserverbindings.RawMessage | string,
        minimumValue: number,
        maximumValue: number,
        valueStep: number,
        defaultValue?: number,
    ): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    submitButton(submitButtonText: minecraftserverbindings.RawMessage | string): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    textField(
        label: minecraftserverbindings.RawMessage | string,
        placeholderText: minecraftserverbindings.RawMessage | string,
        defaultValue?: minecraftserverbindings.RawMessage | string,
    ): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    title(titleText: minecraftserverbindings.RawMessage | string): ModalFormData;
    /**
     * @remarks This function can't be called in read-only mode.
     */
    toggle(label: minecraftserverbindings.RawMessage | string, defaultValue?: boolean): ModalFormData;
}

// @ts-ignore
export class ModalFormResponse extends FormResponse {
    private constructor();
    readonly formValues?: (boolean | number | string)[];
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

// @ts-ignore
export class FormRejectError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: FormRejectReason;
}

export const uiManager: UIManager;