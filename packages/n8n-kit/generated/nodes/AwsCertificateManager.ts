// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Aws/CertificateManager/AwsCertificateManager.node.ts' node

export const name = "awsCertificateManager" as const;
export const description = "Sends data to AWS Certificate Manager" as const;
export const version = 1 as const;
export const defaults = {"name":"AWS Certificate Manager"} as const;
export const credentials = [{"name":"aws","required":true}] as const

/**
 * Sends data to AWS Certificate Manager
 */
export interface AwsCertificateManagerNodeParameters {

    /**
     * Default: "certificate"
     */
    readonly resource?: "certificate";

    /**
     * Default: "renew"
     */
    readonly operation?: "delete" | "get" | "getMany" | "getMetadata" | "renew";

    /**
     * String that contains the ARN of the ACM certificate to be renewed. This must be of the form: arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012.
     */
    readonly certificateArn?: string;

    /**
     */
    readonly bucketName?: string;

    /**
     */
    readonly certificateKey?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly options?: { "certificateStatuses"?: ("EXPIRED" | "FAILED" | "INACTIVE" | "ISSUED" | "PENDING_VALIDATION" | "REVOKED" | "VALIDATION_TIMED_OUT")[], "extendedKeyUsage"?: ("ANY" | "CODE_SIGNING" | "CUSTOM" | "EMAIL_PROTECTION" | "IPSEC_END_SYSTEM" | "IPSEC_TUNNEL" | "IPSEC_USER" | "NONE" | "OCSP_SIGNING" | "TIME_STAMPING" | "TLS_WEB_CLIENT_AUTHENTICATION" | "TLS_WEB_SERVER_AUTHENTICATION")[], "keyTypes"?: ("EC_prime256v1" | "EC_secp384r1" | "EC_secp521r1" | "RSA_1024" | "RSA_2048" | "RSA_4096")[], "keyUsage"?: ("ANY" | "CERTIFICATE_SIGNING" | "CRL_SIGNING" | "CUSTOM" | "DATA_ENCIPHERMENT" | "DECIPHER_ONLY" | "DIGITAL_SIGNATURE" | "ENCIPHER_ONLY" | "KEY_AGREEMENT" | "KEY_ENCIPHERMENT" | "NON_REPUDIATION")[] };


}

