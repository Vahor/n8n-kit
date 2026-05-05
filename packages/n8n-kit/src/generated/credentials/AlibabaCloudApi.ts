// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/credentials/AlibabaCloudApi.credentials.ts' credentials

export const name = "alibabaCloudApi" as const;

/**
 * displayName: Alibaba Cloud
 * documentationUrl: alibaba
 */
export interface AlibabaCloudApiCredentials {
    /** Type options: {"password":true} */
    readonly "apiKey": string;

    /**
     * The region for the Alibaba Cloud Model Studio API endpoint
     * Default: "ap-southeast-1"
     */
    readonly "region"?: "ap-southeast-1" | "us-east-1" | "cn-beijing" | "cn-hongkong" | "eu-central-1";

    /** The Workspace ID required for the Germany (Frankfurt) region. Find it in the Model Studio console under the Germany region settings. */
    readonly "workspaceId": string;

    /** Default: "={{ (() => { const hosts = {\"ap-southeast-1\":\"https://dashscope-intl.aliyuncs.com\",\"us-east-1\":\"https://dashscope-us.aliyuncs.com\",\"cn-beijing\":\"https://dashscope.aliyuncs.com\",\"cn-hongkong\":\"https://cn-hongkong.dashscope.aliyuncs.com\"}; const region = $self.region; if (region === \"eu-central-1\") { return \"https://\" + $self.workspaceId + \".eu-central-1.maas.aliyuncs.com\"; } return hosts[region] || hosts[\"ap-southeast-1\"]; })() }}" */
    readonly "url"?: unknown;

    readonly __name: "alibabaCloudApi";
}
