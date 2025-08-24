// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GitlabApi.credentials.ts' credentials

export const name = "gitlabApi" as const;

/**
 * displayName: GitLab API
 * documentationUrl: gitlab
 */
export interface GitlabApiCredentials {
    /** Default: "https://gitlab.com" */
    readonly "server"?: string;

    /** Type options: {"password":true} */
    readonly "accessToken"?: string;

    readonly __name: "gitlabApi";
}
