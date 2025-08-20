// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Mautic/Mautic.node.ts' node

export const name = "mautic" as const;
export const description = "Consume Mautic API" as const;
export const version = 1 as const;
export const defaults = {"name":"Mautic"} as const;
export const credentials = [{"name":"mauticApi","required":true,"displayOptions":{"show":{"authentication":["credentials"]}}},{"name":"mauticOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Consume Mautic API
 */
export interface MauticNodeParameters {

    /**
     * Default: "credentials"
     */
    readonly authentication?: "credentials" | "oAuth2";

    /**
     * Default: "contact"
     */
    readonly resource?: "campaignContact" | "company" | "companyContact" | "contact" | "contactSegment" | "segmentEmail";


}

