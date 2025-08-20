// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Crypto/Crypto.node.ts' node

export const name = "crypto" as const;
export const description = "Provide cryptographic utilities" as const;
export const version = 1 as const;
export const defaults = {"name":"Crypto","color":"#408000"} as const;
export const credentials = undefined 

/**
 * Provide cryptographic utilities
 */
export interface CryptoNodeParameters {

    /**
     * Default: "hash"
     */
    readonly action?: "generate" | "hash" | "hmac" | "sign";

    /**
     * The hash type to use
     * Default: "MD5"
     */
    readonly type?: "MD5" | "SHA256" | "SHA3-256" | "SHA3-384" | "SHA3-512" | "SHA384" | "SHA512";

    /**
     * Whether the data to hashed should be taken from binary field
     */
    readonly binaryData?: boolean;

    /**
     * Name of the binary property which contains the input data
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * The value that should be hashed
     */
    readonly value?: string;

    /**
     * Name of the property to which to write the hash
     * Default: "data"
     */
    readonly dataPropertyName?: string;

    /**
     * Default: "hex"
     */
    readonly encoding?: "base64" | "hex";

    /**
     * Type options: {"password":true}
     */
    readonly secret?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     */
    readonly algorithm?: string;

    /**
     * Private key to use when signing the string
     */
    readonly privateKey?: string;

    /**
     * Encoding that will be used to generate string
     * Default: "uuid"
     */
    readonly encodingType?: "ascii" | "base64" | "hex" | "uuid";

    /**
     * Length of the generated string
     * Default: 32
     */
    readonly stringLength?: number;


}

