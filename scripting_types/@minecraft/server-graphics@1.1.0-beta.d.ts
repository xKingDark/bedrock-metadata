// Type definitions for Minecraft Bedrock Edition Script APIs
// Project: https://github.com/xKingDark/bedrock-metadata
// Definitions by: xKingDark <https://github.com/xKingDark>
/**
 * @beta
 * @packageDocumentation
 * Manifest Details
 * ```json
 * { "module_name": "@minecraft/server-graphics", "version": "1.1.0-beta" }
 * ```
 */
import * as minecraftcommon from "@minecraft/common";
import * as minecraftserver from "@minecraft/server";
export class BiomeAtmospherics {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendMax(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendMieStart(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendMin(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHorizonBlendStart(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMoonMieStrength(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetRayleighStrength(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSkyHorizonColor(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSkyZenithColor(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSunGlareShape(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSunMieStrength(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendMax(blendMax: number | Record<number, number>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendMieStart(blendMieStart: number | Record<number, number>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendMin(blendMin: number | Record<number, number>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHorizonBlendStart(blendStart: number | Record<number, number>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMoonMieStrength(moonMieStrength: number | Record<number, number>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setRayleighStrength(rayleighStrength: number | Record<number, number>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSkyHorizonColor(color: Record<number, minecraftserver.RGB> | minecraftserver.RGB): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSkyZenithColor(color: Record<number, minecraftserver.RGB> | minecraftserver.RGB): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSunGlareShape(sunGlareShape: number | Record<number, number>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSunMieStrength(sunMieStrength: number | Record<number, number>): void;
}

export class BiomeColorGrading {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsContrast(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsGain(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsGamma(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsMin(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsOffset(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetHighlightsSaturation(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMidtonesContrast(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMidtonesGain(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMidtonesGamma(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMidtonesOffset(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMidtonesSaturation(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsContrast(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsGain(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsGamma(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsMax(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsOffset(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetShadowsSaturation(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetTemperature(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsContrast(highlightsContrast: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsGain(highlightsGain: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsGamma(highlightsGamma: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsMin(highlightsMin: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsOffset(highlightsOffset: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setHighlightsSaturation(highlightsSaturation: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMidtonesContrast(midtonesContrast: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMidtonesGain(midtonesGain: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMidtonesGamma(midtonesGamma: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMidtonesOffset(midtonesOffset: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMidtonesSaturation(midtonesSaturation: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsContrast(shadowsContrast: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsGain(shadowsGain: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsGamma(shadowsGamma: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsMax(shadowsMax: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsOffset(shadowsOffset: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setShadowsSaturation(shadowsSaturation: minecraftserver.Vector3): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setTemperature(temperature: number): void;
}

export class BiomeLighting {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetAmbientColor(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetAmbientIlluminance(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetEmissiveDesaturation(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetFlashColor(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetFlashIlluminance(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMoonColor(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetMoonIlluminance(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetOrbitalOffsetDegrees(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSkyIntensity(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSunColor(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSunIlluminance(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setAmbientColor(color: Record<number, minecraftserver.RGB> | minecraftserver.RGB): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setAmbientIlluminance(illuminance: number | Record<number, number>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setEmissiveDesaturation(value: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setFlashColor(color: Record<number, minecraftserver.RGB> | minecraftserver.RGB): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setFlashIlluminance(illuminance: number | Record<number, number>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMoonColor(color: Record<number, minecraftserver.RGB> | minecraftserver.RGB): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setMoonIlluminance(illuminance: number | Record<number, number>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setOrbitalOffsetDegrees(degrees: number | Record<number, number>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSkyIntensity(intensity: number | Record<number, number>): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSunColor(color: Record<number, minecraftserver.RGB> | minecraftserver.RGB): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSunIlluminance(illuminance: number | Record<number, number>): void;
}

export class BiomeWater {
    private constructor();
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetCDOM(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetChlorophyll(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetSuspendedSediment(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesDepth(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesDirectionIncrement(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesFrequency(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesFrequencyScaling(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesMix(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesOctaves(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesPull(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesShape(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesSpeed(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.EngineError}
     */
    resetWavesSpeedScaling(): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setCDOM(cdom: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setChlorophyll(chlorophyll: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setSuspendedSediment(suspendedSediment: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesDepth(wavesDepth: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesDirectionIncrement(wavesDirectionIncrement: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesFrequency(wavesFrequency: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesFrequencyScaling(wavesFrequencyScaling: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesMix(wavesMix: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesOctaves(wavesOctaves: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesPull(wavesPull: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesShape(wavesShape: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesSpeed(wavesSpeed: number): void;
    /**
     * @remarks This function can't be called in restricted-execution mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.InvalidArgumentError}
     */
    setWavesSpeedScaling(wavesSpeedScaling: number): void;
}

/**
 * @remarks This function can't be called in restricted-execution mode.
 */
export function getBiomeAtmospherics(biome: minecraftserver.BiomeType): BiomeAtmospherics;

/**
 * @remarks This function can't be called in restricted-execution mode.
 */
export function getBiomeColorGrading(biome: minecraftserver.BiomeType): BiomeColorGrading;

/**
 * @remarks This function can't be called in restricted-execution mode.
 */
export function getBiomeLighting(biome: minecraftserver.BiomeType): BiomeLighting;

/**
 * @remarks This function can't be called in restricted-execution mode.
 */
export function getBiomeWater(biome: minecraftserver.BiomeType): BiomeWater;

/**
 * @remarks This function can't be called in restricted-execution mode.
 */
export function getPlayerAtmospherics(
    biome: minecraftserver.BiomeType,
    player: minecraftserver.Player,
): BiomeAtmospherics;

/**
 * @remarks This function can't be called in restricted-execution mode.
 */
export function getPlayerColorGrading(
    biome: minecraftserver.BiomeType,
    player: minecraftserver.Player,
): BiomeColorGrading;

/**
 * @remarks This function can't be called in restricted-execution mode.
 */
export function getPlayerLighting(biome: minecraftserver.BiomeType, player: minecraftserver.Player): BiomeLighting;

/**
 * @remarks This function can't be called in restricted-execution mode.
 */
export function getPlayerWater(biome: minecraftserver.BiomeType, player: minecraftserver.Player): BiomeWater;
