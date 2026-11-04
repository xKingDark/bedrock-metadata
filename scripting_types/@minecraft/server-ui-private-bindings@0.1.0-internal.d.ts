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
    getVariable(player: minecraftserver.Player, variableName: string): boolean | number | string | undefined;
}

export const testConstant = 5;

export const ddui: DataStore;
