// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Netscaler/ADC/NetscalerAdc.node.ts' node

export const description = "Consume Netscaler ADC API" as const;
export const type = "n8n-nodes-base.citrixAdc" as const;
export const version = 1 as const;
export const credentials = [{"name":"citrixAdcApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface NetscalerAdcNodeParameters {
    /**
     * Default: "file"
     */
    readonly resource?: "certificate" | "file";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "install" | "delete" | "download" | "upload";

    /**
     * Name for and, optionally, path to the generated certificate file. /nsconfig/ssl/ is the default path.
     */
    readonly certificateFileName?: string;

    /**
     * Format in which the certificate is stored on the appliance
     * Default: "PEM"
     */
    readonly certificateFormat?: "PEM" | "DER";

    /**
     * Default: "ROOT_CERT"
     */
    readonly certificateType?: "ROOT_CERT" | "INTM_CERT" | "SRVR_CERT" | "CLNT_CERT";

    /**
     * Name for and, optionally, path to the certificate-signing request (CSR). /nsconfig/ssl/ is the default path.
     */
    readonly certificateRequestFileName?: string;

    /**
     * Name of the CA certificate file that issues and signs the Intermediate-CA certificate or the end-user client and server certificates
     */
    readonly caCertificateFileName?: string;

    /**
     * Format of the CA certificate
     * Default: "PEM"
     */
    readonly caCertificateFileFormat?: "PEM" | "DER";

    /**
     * Private key, associated with the CA certificate that is used to sign the Intermediate-CA certificate or the end-user client and server certificate. If the CA key file is password protected, the user is prompted to enter the pass phrase that was used to encrypt the key.
     */
    readonly caPrivateKeyFileName?: string;

    /**
     * Format of the CA certificate
     * Default: "PEM"
     */
    readonly caPrivateKeyFileFormat?: "PEM" | "DER";

    /**
     * Name for and, optionally, path to the private key. You can either use an existing RSA or DSA key that you own or create a new private key on the Netscaler ADC. This file is required only when creating a self-signed Root-CA certificate. The key file is stored in the /nsconfig/ssl directory by default.
     */
    readonly privateKeyFileName?: string;

    /**
     * Serial number file maintained for the CA certificate. This file contains the serial number of the next certificate to be issued or signed by the CA.
     */
    readonly caSerialFileNumber?: string;

    /**
     * Format in which the key is stored on the appliance
     * Default: "PEM"
     */
    readonly privateKeyFormat?: "PEM" | "DER";

    /**
     * Default: {}
     */
    readonly additionalFields?: { "pempassphrase"?: string, "subjectaltname"?: string, "days"?: string };

    /**
     * Name for the certificate and private-key pair
     */
    readonly certificateKeyPairName?: string;

    /**
     * Input format of the certificate and the private-key files. The three formats supported by the appliance are: PEM - Privacy Enhanced Mail DER - Distinguished Encoding Rule PFX - Personal Information Exchange.
     * Type options: {"password":true}
     */
    readonly password?: string;

    /**
     * Whether to alert when the certificate is about to expire
     */
    readonly notifyExpiration?: boolean;

    /**
     * Time, in number of days, before certificate expiration, at which to generate an alert that the certificate is about to expire
     * Default: 10
     * Type options: {"minValue":10,"maxValue":100}
     */
    readonly notificationPeriod?: number;

    /**
     * Whether to parse the certificate chain as a single file after linking the server certificate to its issuer's certificate within the file
     */
    readonly certificateBundle?: boolean;

    /**
     * Default: "/nsconfig/ssl/"
     */
    readonly fileLocation?: string;

    /**
     * The name of the incoming field containing the binary file data to be processed
     * Default: "data"
     */
    readonly binaryProperty?: string;

    /**
     * Default: {}
     */
    readonly options?: { "fileName"?: string };

    /**
     * Name of the file. It should not include filepath.
     */
    readonly fileName?: string;

}
