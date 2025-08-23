// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/JenkinsApi.credentials.ts' credentials

export const name = "jenkinsApi" as const;

/**
 * displayName: Jenkins API
 * documentationUrl: jenkins
 */
export interface JenkinsApiCredentials {

    /**
     */
    readonly "username"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "apiKey"?: string;

    /**
     */
    readonly "baseUrl"?: string;

    readonly __name: "jenkinsApi";

}
