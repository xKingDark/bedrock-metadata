// Type definitions for Minecraft Bedrock Edition Script APIs
// Project: https://github.com/xKingDark/bedrock-metadata
// Definitions by: xKingDark <https://github.com/xKingDark>
/**
 * @beta
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-graphics",
 *     "version": "1.0.0-beta"
 * }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export class Atmospherics {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendMax(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendMieStart(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendMin(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendStart(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMoonMieStrength(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetRayleighStrength(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSkyHorizonColor(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSkyZenithColor(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSunGlareShape(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSunMieStrength(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendMax(blendMax: number | Record<number, number>, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendMieStart(
        blendMieStart: number | Record<number, number>,
        biomeIdentifier: minecraftserver.BiomeType,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendMin(blendMin: number | Record<number, number>, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendStart(blendStart: number | Record<number, number>, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMoonMieStrength(
        moonMieStrength: number | Record<number, number>,
        biomeIdentifier: minecraftserver.BiomeType,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setRayleighStrength(
        rayleighStrength: number | Record<number, number>,
        biomeIdentifier: minecraftserver.BiomeType,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSkyHorizonColor(
        color: Record<number, minecraftserver.RGB> | minecraftserver.RGB,
        biomeIdentifier: minecraftserver.BiomeType,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSkyZenithColor(
        color: Record<number, minecraftserver.RGB> | minecraftserver.RGB,
        biomeIdentifier: minecraftserver.BiomeType,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSunGlareShape(sunGlareShape: number | Record<number, number>, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSunMieStrength(
        sunMieStrength: number | Record<number, number>,
        biomeIdentifier: minecraftserver.BiomeType,
    ): void;
}

export const atmosphere: Atmospherics;
