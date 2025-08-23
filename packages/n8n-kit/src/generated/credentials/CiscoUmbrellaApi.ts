// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/CiscoUmbrellaApi.credentials.ts' credentials

export const name = "ciscoUmbrellaApi" as const;

/**
 * displayName: Cisco Umbrella API
 * documentationUrl: ciscoumbrella
 */
export interface CiscoUmbrellaApiCredentials {
    /**
     * Type options: {"expirable":true}
     */
    readonly "sessionToken"?: any;

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey": string;

    /**
     * Type options: {"password":true}
     */
    readonly "secret": string;

    readonly __name: "ciscoUmbrellaApi";
}
