// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ContentfulApi.credentials.ts' credentials

export const name = "contentfulApi" as const;

/**
 * displayName: Contentful API
 * documentationUrl: contentful
 */
export interface ContentfulApiCredentials {
    /** The ID for the Contentful space */
    readonly "spaceId": string;

    /**
     * Access token that has access to the space. Can be left empty if only Delivery API should be used.
     * Type options: {"password":true}
     */
    readonly "ContentDeliveryaccessToken"?: string;

    /**
     * Access token that has access to the space. Can be left empty if only Preview API should be used.
     * Type options: {"password":true}
     */
    readonly "ContentPreviewaccessToken"?: string;

    readonly __name: "contentfulApi";
}
