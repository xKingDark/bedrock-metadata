// Type definitions for Minecraft Bedrock Edition script APIs
// Project: https://github.com/DarkGamerYT/bedrock-metadata
// Definitions by: xKingDark <https://github.com/DarkGamerYT>
/**
 * @internal
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-ui-private-bindings",
 *     "version": "0.1.0-internal"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
import * as minecraftserveruibindings from "@minecraft/server-ui-bindings";
export class DataDrivenScreen {
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    showScreen(player: minecraftserverbindings.Player, screenId: string): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftserverbindings.InvalidEntityError}
     */
    static closeAllScreens(player: minecraftserverbindings.Player): void;
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
     *
     * {@link InvalidPathError}
     */
    subscribe(
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