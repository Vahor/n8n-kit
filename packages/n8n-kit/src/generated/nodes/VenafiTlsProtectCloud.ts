// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Venafi/ProtectCloud/VenafiTlsProtectCloud.node.ts' node

export const name = "venafiTlsProtectCloud" as const;
export const description = "Consume Venafi TLS Protect Cloud API" as const;
export const version = 1 as const;
export const credentials = [{"name":"venafiTlsProtectCloudApi","required":true}] as const;

/**
 * Consume Venafi TLS Protect Cloud API
 */
export interface VenafiTlsProtectCloudNodeParameters {

    /**
     * Default: "certificateRequest"
     */
    readonly resource?: "certificate" | "certificateRequest";

    /**
     * Default: "delete"
     */
    readonly operation?: "delete" | "download" | "get" | "getMany" | "renew" | "create" | "get" | "getMany";

    /**
     */
    readonly certificateId?: string;

    /**
     * Default: "certificate"
     */
    readonly downloadItem?: "certificate" | "keystore";

    /**
     * Default: "PEM"
     */
    readonly keystoreType?: "JKS" | "PKCS12" | "PEM";

    /**
     */
    readonly certificateLabel?: string;

    /**
     */
    readonly privateKeyPassphrase?: string;

    /**
     */
    readonly keystorePassphrase?: string;

    /**
     * The name of the input field containing the binary file data to be uploaded
     * Default: "data"
     */
    readonly binaryProperty?: string;

    /**
     * Default: {}
     */
    readonly options?: { "chainOrder"?: "EE_FIRST" | "EE_ONLY" | "ROOT_FIRST", "format"?: "PEM" | "DER" } | { "validityPeriod"?: "P1Y" | "P10D" | "PT12H" } | { "validityPeriod"?: string };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "subject"?: string };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getApplications"}
     */
    readonly applicationId?: string;

    /**
     */
    readonly existingCertificateId?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getCertificateIssuingTemplates"}
     */
    readonly certificateIssuingTemplateId?: string;

    /**
     */
    readonly certificateSigningRequest?: string;

    /**
     */
    readonly generateCsr?: boolean;

    /**
     * The Common Name field for the certificate Subject (CN)
     * Default: "n8n.io"
     */
    readonly commonName?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "keyType"?: "EC" | "RSA", "keyCurve"?: "ED25519" | "P256" | "P384" | "P521" | "UNKNOWN", "keyLength"?: number, "organization"?: string, "organizationalUnits"?: string, "locality"?: string, "state"?: string, "country"?: string, "SubjectAltNamesUi"?: { "SubjectAltNamesValues": any } };

    /**
     */
    readonly certificateRequestId?: string;


}

