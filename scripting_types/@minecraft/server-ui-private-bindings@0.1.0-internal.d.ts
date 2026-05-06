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
export class DataStore {
    private constructor();
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
