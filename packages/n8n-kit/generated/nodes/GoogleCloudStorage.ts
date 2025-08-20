// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/CloudStorage/GoogleCloudStorage.node.ts' node

export const name = "googleCloudStorage" as const;
export const description = "Use the Google Cloud Storage API" as const;
export const version = 1 as const;
export const defaults = {"name":"Google Cloud Storage"} as const;
export const credentials = [{"name":"googleCloudStorageOAuth2Api","required":true,"testedBy":{"request":{"method":"GET","url":"/b/"}}}] as const

/**
 * Use the Google Cloud Storage API
 */
export interface GoogleCloudStorageNodeParameters {

    /**
     * Default: "bucket"
     */
    readonly resource?: "bucket" | "object";


}

