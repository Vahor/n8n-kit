// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TrelloApi.credentials.ts' credentials

export const name = "trelloApi" as const;

/**
 * displayName: Trello API
 * documentationUrl: trello
 */
export interface TrelloApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey": string;

    /** Type options: {"password":true} */
    readonly "apiToken": string;

    /**
     * Used to verify webhook authenticity. Found under the API Key tab at trello.com/power-ups/admin.
     * Type options: {"password":true}
     */
    readonly "oauthSecret"?: string;

    readonly __name: "trelloApi";
}
