// Type definitions for Minecraft Bedrock Edition Script APIs
// Project: https://github.com/xKingDark/bedrock-metadata
// Definitions by: xKingDark <https://github.com/xKingDark>
/**
 * @internal
 * @packageDocumentation
 * Manifest Details
 * ```json
 * { "module_name": "@minecraft/server-ui-private-bindings", "version": "0.1.0-internal" }
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

export enum InternalTextFilteringError {
    DisabledByPlayer                = "DisabledByPlayer",
    TextProcessorServiceUnreachable = "TextProcessorServiceUnreachable",
    Unknown                         = "Unknown",
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

// @ts-ignore
export class DataDrivenScreenRejectError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly reason: DataDrivenScreenRejectReason;
}

// @ts-ignore
export class InvalidPathError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly path: string;
}

export const testConstant = 5;

export const ddui: DataStore;
