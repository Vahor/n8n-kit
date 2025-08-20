// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/DebugHelper/DebugHelper.node.ts' node

export const name = "debugHelper" as const;
export const description = "Causes problems intentionally and generates useful data for debugging" as const;
export const version = 1 as const;
export const defaults = {"name":"DebugHelper"} as const;
export const credentials = [] as const

/**
 * Causes problems intentionally and generates useful data for debugging
 */
export interface DebugHelperNodeParameters {

    /**
     * Default: "throwError"
     */
    readonly category?: "doNothing" | "throwError" | "oom" | "randomData";

    /**
     * Default: "NodeApiError"
     */
    readonly throwErrorType?: "NodeApiError" | "NodeOperationError" | "Error";

    /**
     * The message to send as part of the error
     * Default: "Node has thrown an error"
     */
    readonly throwErrorMessage?: string;

    /**
     * The approximate amount of memory to generate. Be generous...
     * Default: 10
     */
    readonly memorySizeValue?: number;

    /**
     * Default: "user"
     */
    readonly randomDataType?: "address" | "latLong" | "creditCard" | "email" | "ipv4" | "ipv6" | "macAddress" | "nanoid" | "url" | "user" | "uuid" | "semver";

    /**
     * The alphabet to use for generating the nanoIds
     * Default: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
     */
    readonly nanoidAlphabet?: string;

    /**
     * The length of each nanoIds
     * Default: "16"
     */
    readonly nanoidLength?: string;

    /**
     * If set, seed to use for generating the data (same seed will generate the same data)
     */
    readonly randomDataSeed?: string;

    /**
     * The number of random data items to generate into an array
     * Default: 10
     */
    readonly randomDataCount?: number;

    /**
     * Whether to output a single array instead of multiple items
     */
    readonly randomDataSingleArray?: boolean;


}

