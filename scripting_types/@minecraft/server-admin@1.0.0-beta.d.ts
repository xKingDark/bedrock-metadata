// Type definitions for Minecraft Bedrock Edition Script APIs
// Project: https://github.com/xKingDark/bedrock-metadata
// Definitions by: xKingDark <https://github.com/xKingDark>
/**
 * @beta
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-admin",
 *     "version": "1.0.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export class AdminBeforeEvents {
    private constructor();
    readonly asyncPlayerJoin: AsyncPlayerJoinBeforeEventSignal;
}

export class AllowList {
    private constructor();
    /**
     * @remarks This property can't be edited in restricted-execution mode.
     */
    enabled: boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link AllowListModificationError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    add(player: minecraftserver.Player | string): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    contains(player: minecraftserver.Player | string): boolean;
    /**
     * @throws This function can throw errors.
     *
     * {@link AllowListFileReloadError}
     */
    reloadFile(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link AllowListModificationError}
     *
     * {@link minecraftserver.InvalidEntityError}
     */
    remove(player: minecraftserver.Player | string): void;
}

export class AsyncPlayerJoinBeforeEvent {
    private constructor();
    readonly name: string;
    readonly persistentId: string;
    /**
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    allowJoin(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    disallowJoin(reason?: string): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link DisconnectedError}
     */
    disconnect(reason?: string): void;
    isValid(): boolean;
}

export class AsyncPlayerJoinBeforeEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>,
    ): (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>;
    unsubscribe(callback: (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>): boolean;
}

export class DedicatedServerUtils {
    private constructor();
    readonly allowList: AllowList;
    readonly levelStorage: LevelStorage;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    reloadCDNConfig(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    reloadPermissions(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    reloadScriptingConfig(): void;
    stopServer(): void;
}

export class LevelStorage {
    private constructor();
    /**
     * @throws This function can throw errors.
     *
     * {@link LevelStorageSaveStateChangeError}
     */
    saveHold(): void;
    /**
     * @throws This function can throw errors.
     *
     * {@link LevelStorageSaveStateChangeError}
     */
    saveQuery(): LevelStorageQuerySnapshotFile[];
    /**
     * @throws This function can throw errors.
     *
     * {@link LevelStorageSaveStateChangeError}
     */
    saveResume(): void;
}

export class LevelStorageQuerySnapshotFile {
    private constructor();
    readonly fileName: string;
    readonly fileSize: number;
}

export class SecretString {
    constructor(value: string);
}

export class ServerSecrets {
    private constructor();
    readonly names: string[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    get(name: string): SecretString | undefined;
}

export class ServerVariables {
    private constructor();
    readonly names: string[];
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * This function can be called in early-execution mode.
     */
    get(name: string): unknown | undefined;
}

export interface TransferPlayerIpPortOptions {
    hostname: string;
    port: number;
}

export interface TransferPlayerNetherNetOptions {
    netherNetId: string;
}

// @ts-ignore
export class AllowListFileReloadError extends Error {
    private constructor();
}

// @ts-ignore
export class AllowListModificationError extends Error {
    private constructor();
}

// @ts-ignore
export class CannotDeopPlayerError extends Error {
    private constructor();
}

// @ts-ignore
export class CannotKickPlayerError extends Error {
    private constructor();
}

// @ts-ignore
export class DisconnectedError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly id: string;
}

// @ts-ignore
export class LevelStorageSaveStateChangeError extends Error {
    private constructor();
}

// @ts-ignore
export class PlayerAlreadyOpError extends Error {
    private constructor();
}

/**
 * @remarks This function can't be called in restricted-execution mode.
 *
 * @throws This function can throw errors.
 *
 * {@link CannotDeopPlayerError}
 *
 * {@link minecraftcommon.EngineError}
 *
 * {@link minecraftcommon.InvalidArgumentError}
 */
export function deopPlayer(player: minecraftserver.Player): void;

/**
 * @remarks This function can't be called in restricted-execution mode.
 *
 * @throws This function can throw errors.
 *
 * {@link CannotKickPlayerError}
 *
 * {@link minecraftcommon.EngineError}
 *
 * {@link minecraftcommon.InvalidArgumentError}
 */
export function kickPlayer(player: minecraftserver.Player, reason?: string): void;

/**
 * @remarks This function can't be called in restricted-execution mode.
 *
 * @throws This function can throw errors.
 *
 * {@link minecraftcommon.EngineError}
 *
 * {@link minecraftcommon.InvalidArgumentError}
 *
 * {@link PlayerAlreadyOpError}
 */
export function opPlayer(player: minecraftserver.Player): void;

/**
 * @remarks This function can't be called in restricted-execution mode.
 *
 * @throws This function can throw errors.
 */
export function transferPlayer(
    player: minecraftserver.Player,
    options: TransferPlayerIpPortOptions | TransferPlayerNetherNetOptions,
): void;

export const beforeEvents: AdminBeforeEvents;
export const dedicatedServer: DedicatedServerUtils | undefined;
export const secrets: ServerSecrets;
export const variables: ServerVariables;
