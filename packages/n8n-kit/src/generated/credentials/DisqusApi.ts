// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/DisqusApi.credentials.ts' credentials

export const name = "disqusApi" as const;

/**
 * displayName: Disqus API
 * documentationUrl: disqus
 */
export interface DisqusApiCredentials {
    /**
     * Visit your account details page, and grab the Access Token. See <a href="https://disqus.com/api/docs/auth/">Disqus auth</a>.
     * Type options: {"password":true}
     */
    readonly "accessToken"?: string;

    readonly __name: "disqusApi";
}
