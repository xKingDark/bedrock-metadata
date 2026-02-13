// Type definitions for Minecraft Bedrock Edition Script APIs
// Project: https://github.com/xKingDark/bedrock-metadata
// Definitions by: xKingDark <https://github.com/xKingDark>
/**
 * @internal
 * @packageDocumentation
 * Manifest Details
 * ```json
 * {
 *     "module_name": "@minecraft/server-graphics",
 *     "version": "1.0.0-internal"
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

export class ColorGrading {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsContrast(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsGain(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsGamma(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsOffset(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsSaturation(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMidtonesContrast(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMidtonesGain(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMidtonesGamma(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMidtonesOffset(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMidtonesSaturation(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsContrast(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsGain(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsGamma(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsOffset(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsSaturation(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsContrast(
        highlightsContrast: minecraftserver.Vector3,
        biomeIdentifier: minecraftserver.BiomeType,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsGain(highlightsGain: minecraftserver.Vector3, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsGamma(highlightsGamma: minecraftserver.Vector3, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsOffset(highlightsOffset: minecraftserver.Vector3, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsSaturation(
        highlightsSaturation: minecraftserver.Vector3,
        biomeIdentifier: minecraftserver.BiomeType,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMidtonesContrast(midtonesContrast: minecraftserver.Vector3, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMidtonesGain(midtonesGain: minecraftserver.Vector3, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMidtonesGamma(midtonesGamma: minecraftserver.Vector3, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMidtonesOffset(midtonesOffset: minecraftserver.Vector3, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMidtonesSaturation(
        midtonesSaturation: minecraftserver.Vector3,
        biomeIdentifier: minecraftserver.BiomeType,
    ): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsContrast(shadowsContrast: minecraftserver.Vector3, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsGain(shadowsGain: minecraftserver.Vector3, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsGamma(shadowsGamma: minecraftserver.Vector3, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsOffset(shadowsOffset: minecraftserver.Vector3, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsSaturation(shadowsSaturation: minecraftserver.Vector3, biomeIdentifier: minecraftserver.BiomeType): void;
}

export class Water {
    private constructor();
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetCDOM(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetChlorophyll(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSuspendedSediment(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesDepth(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesDirectionIncrement(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesFrequency(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesFrequencyScaling(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesMix(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesOctaves(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesPull(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesShape(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesSpeed(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesSpeedScaling(biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setCDOM(cdom: number, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setChlorophyll(chlorophyll: number, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSuspendedSediment(suspendedSediment: number, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesDepth(wavesDepth: number, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesDirectionIncrement(wavesDirectionIncrement: number, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesFrequency(wavesFrequency: number, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesFrequencyScaling(wavesFrequencyScaling: number, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesMix(wavesMix: number, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesOctaves(wavesOctaves: number, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesPull(wavesPull: number, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesShape(wavesShape: number, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesSpeed(wavesSpeed: number, biomeIdentifier: minecraftserver.BiomeType): void;
    /**
     * @remarks This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesSpeedScaling(wavesSpeedScaling: number, biomeIdentifier: minecraftserver.BiomeType): void;
}

export const InternalConstant = 1;

export const atmosphere:   Atmospherics;
export const colorGrading: ColorGrading;
export const water:        Water;
