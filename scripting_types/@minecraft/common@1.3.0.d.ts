// Type definitions for Minecraft Bedrock Edition Script APIs
// Project: https://github.com/xKingDark/bedrock-metadata
// Definitions by: xKingDark <https://github.com/xKingDark>
/**
 * @packageDocumentation
 * Manifest Details
 * ```json
 * { "module_name": "@minecraft/common", "version": "1.3.0" }
 * ```
 */
export enum InvalidArgumentErrorType {
    Duplicate        = "Duplicate",
    Empty            = "Empty",
    InvalidType      = "InvalidType",
    Unknown          = "Unknown",
    Unspecified      = "Unspecified",
    UnsupportedValue = "UnsupportedValue",
}

export interface NumberRange {
    max: number;
    min: number;
}

// @ts-ignore
export class ArgumentOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly index: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly maxValue?: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly minValue?: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly value?: number;
}

// @ts-ignore
export class ContainerSizeOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly maxValue: number;
}

// @ts-ignore
export class EngineError extends Error {
    private constructor();
}

// @ts-ignore
export class InvalidArgumentError extends Error {
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly index: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly "type": InvalidArgumentErrorType;
    constructor(funcName: string, argTypeName: string, errorType: InvalidArgumentErrorType, argIndex?: number);
}

// @ts-ignore
export class PropertyOutOfBoundsError extends Error {
    private constructor();
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly maxValue?: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly minValue?: number;
    /**
     * @remarks This property can be read in early-execution mode.
     */
    readonly value: number;
}

// @ts-ignore
export class RuntimeConditionError extends Error {
    private constructor();
}

// @ts-ignore
export class UnsupportedFunctionalityError extends Error {
    private constructor();
}
