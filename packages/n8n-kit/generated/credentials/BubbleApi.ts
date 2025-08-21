// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/BubbleApi.credentials.ts' credentials

export const name = "bubbleApi" as const;

/**
 * displayName: Bubble API
 * documentationUrl: bubble
 */
export interface BubbleApiNodeParameters {

    /**
     * Type options: {"password":true}
     */
    readonly apiToken?: string;

    /**
     */
    readonly appName?: string;

    /**
     * Default: "live"
     */
    readonly environment?: "development" | "live";

    /**
     * Default: "bubbleHosted"
     */
    readonly hosting?: "bubbleHosted" | "selfHosted";

    /**
     */
    readonly domain?: string;


}

