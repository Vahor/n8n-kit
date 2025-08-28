// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/HubspotOAuth2Api.credentials.ts' credentials

export const name = "hubspotOAuth2Api" as const;

/**
 * displayName: HubSpot OAuth2 API
 * documentationUrl: hubspot
 */
export interface HubspotOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://app.hubspot.com/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://api.hubapi.com/oauth/v1/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "crm.lists.write crm.objects.contacts.read crm.objects.contacts.write crm.objects.companies.read crm.objects.companies.write crm.objects.deals.read crm.objects.deals.write crm.objects.owners.read crm.schemas.companies.read crm.schemas.contacts.read crm.schemas.deals.read forms tickets" */
    readonly "scope"?: unknown;

    /** Default: "grant_type=authorization_code" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "hubspotOAuth2Api";
}
