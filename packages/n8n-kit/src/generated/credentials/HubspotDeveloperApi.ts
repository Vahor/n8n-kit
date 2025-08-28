// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/HubspotDeveloperApi.credentials.ts' credentials

export const name = "hubspotDeveloperApi" as const;

/**
 * displayName: HubSpot Developer API
 * documentationUrl: hubspot
 */
export interface HubspotDeveloperApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://app.hubspot.com/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://api.hubapi.com/oauth/v1/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "grant_type=authorization_code" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    /** Type options: {"password":true} */
    readonly "apiKey": string;

    readonly "appId": string;

    /** Default: "crm.objects.contacts.read crm.schemas.contacts.read crm.objects.companies.read crm.schemas.companies.read crm.objects.deals.read crm.schemas.deals.read" */
    readonly "scope"?: unknown;

    readonly __name: "hubspotDeveloperApi";
}
