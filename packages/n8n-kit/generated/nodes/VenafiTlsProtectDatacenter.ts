// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Venafi/Datacenter/VenafiTlsProtectDatacenter.node.ts' node

export const name = "venafiTlsProtectDatacenter" as const;
export const description = "Consume Venafi TLS Protect Datacenter" as const;
export const version = 1 as const;
export const defaults = {"name":"Venafi TLS Protect Datacenter"} as const;
export const credentials = [{"name":"venafiTlsProtectDatacenterApi","required":true}] as const

/**
 * Consume Venafi TLS Protect Datacenter
 */
export interface VenafiTlsProtectDatacenterNodeParameters {

    /**
     * Default: "certificate"
     */
    readonly resource?: "certificate" | "policy";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "download" | "get" | "getMany" | "renew";

    /**
     * The folder DN for the new certificate. If the value is missing, the folder name is the system default. If no system default is configured
     */
    readonly PolicyDN?: string;

    /**
     * The Common Name field for the certificate Subject (DN)
     */
    readonly Subject?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "Approvers"?: string, "CADN"?: string, "CertificateType"?: "Code Signing" | "Device" | "Server" | "User", "City"?: string, "Contacts"?: string, "Country"?: string, "customFieldsUi"?: { "customFielsValues": any }, "CreatedBy"?: string, "Devices"?: { "applications"?: string, "CloudInstanceID"?: string, "CloudRegion"?: string, "CloudService"?: string, "ConcurrentConnectionLimit"?: number, "Contacts"?: string, "CreatedBy"?: string, "CredentialDN"?: string, "description"?: string, "EnforceKnownHost"?: boolean, "host"?: string, "ObjectName"?: string, "port"?: number, "SudoCredentialDN"?: number, "TempDirectory"?: string, "TrustedFingerprint"?: string, "UseSudo"?: boolean }, "DisableAutomaticRenewal"?: boolean, "EllipticCurve"?: "P256" | "P384" | "P521", "KeyAlgorithm"?: "RSA" | "ECC", "KeyBitSize"?: number, "ManagementType"?: "Enrollment" | "Monitoring" | "Provisioning" | "Unassigned", "origin"?: string, "Organization"?: string, "OrganizationalUnit"?: string, "PKCS10"?: string, "Reenable"?: boolean, "SetWorkToDo"?: boolean, "State"?: string, "SubjectAltNamesUi"?: { "SubjectAltNamesValues": any }, "IncludeChain"?: boolean, "RootFirstOrder"?: string, "KeystorePassword"?: string };

    /**
     */
    readonly certificateDn?: string;

    /**
     */
    readonly includePrivateKey?: boolean;

    /**
     * Type options: {"password":true}
     */
    readonly password?: string;

    /**
     * The name of the input field containing the binary file data to be uploaded
     * Default: "data"
     */
    readonly binaryProperty?: string;

    /**
     * A GUID that uniquely identifies the certificate
     */
    readonly certificateId?: string;

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
    readonly options?: { "fields"?: ("Issuer" | "KeyAlgorithm" | "KeySize" | "Subject")[] };

    /**
     * The Distinguished Name (DN) of the certificate to renew
     */
    readonly certificateDN?: string;

    /**
     * The Distinguished Name (DN) of the policy folder
     */
    readonly policyDn?: string;


}

