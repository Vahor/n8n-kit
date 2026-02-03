// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Crypto/v2/CryptoV2.node.ts' node

export const description = "Provide cryptographic utilities" as const;
export const type = "n8n-nodes-base.crypto" as const;
export const version = 2 as const;
export const credentials = [{"name":"crypto","required":true,"displayOptions":{"show":{"action":["hmac","sign"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface CryptoV2NodeParameters {
    /** Default: "hash" */
    readonly action?: "generate" | "hash" | "hmac" | "sign";

    /** Whether the data to hashed should be taken from binary field */
    readonly binaryData?: boolean;

    /**
     * Name of the binary property which contains the input data
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * The hash type to use
     * Default: "SHA256"
     */
    readonly type?: "MD5" | "SHA256" | "SHA3-256" | "SHA3-384" | "SHA3-512" | "SHA384" | "SHA512";

    /** The value that should be hashed */
    readonly value?: string;

    /**
     * Name of the property to which to write the hash
     * Default: "data"
     */
    readonly dataPropertyName?: string;

    /** Default: "hex" */
    readonly encoding?: "base64" | "hex";

    /** Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a> */
    readonly algorithm?: "md5" | "ripemd160" | "sha1" | "sha224" | "sha256" | "sha384" | "sha512" | "sha512-224" | "sha512-256";

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
