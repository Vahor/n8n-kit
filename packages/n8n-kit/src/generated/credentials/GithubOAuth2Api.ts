// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GithubOAuth2Api.credentials.ts' credentials

export const name = "githubOAuth2Api" as const;

/**
 * displayName: GitHub OAuth2 API
 * documentationUrl: github
 */
export interface GithubOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /**
     * The server to connect to. Only has to be set if Github Enterprise is used.
     * Default: "https://api.github.com"
     */
    readonly "server"?: string;

    /** Default: "={{$self[\"server\"] === \"https://api.github.com\" ? \"https://github.com\" : $self[\"server\"].split(\"://\")[0] + \"://\" + $self[\"server\"].split(\"://\")[1].split(\"/\")[0]}}/login/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "={{$self[\"server\"] === \"https://api.github.com\" ? \"https://github.com\" : $self[\"server\"].split(\"://\")[0] + \"://\" + $self[\"server\"].split(\"://\")[1].split(\"/\")[0]}}/login/oauth/access_token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "repo,admin:repo_hook,admin:org,admin:org_hook,gist,notifications,user,write:packages,read:packages,delete:packages,workflow" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "githubOAuth2Api";
}
