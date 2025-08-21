// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/DfirIrisApi.credentials.ts' credentials

export const name = "dfirIrisApi" as const;

/**
 * displayName: DFIR-IRIS API
 * documentationUrl: dfiriris
 */
export interface DfirIrisApiCredentials {

    /**
     * The API endpoints are reachable on the same Address and port as the web interface.
     */
    readonly "baseUrl": string;

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey": string;

    /**
     */
    readonly "skipSslCertificateValidation"?: boolean;

    readonly __name: "dfirIrisApi";


}

