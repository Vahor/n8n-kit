// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Aws/Transcribe/AwsTranscribe.node.ts' node

export const description = "Sends data to AWS Transcribe" as const;
export const type = "n8n-nodes-base.awsTranscribe" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AwsTranscribeNodeParameters {
    /** Default: "transcriptionJob" */
    readonly resource?: "transcriptionJob";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll";

    /** The name of the job */
    readonly transcriptionJobName?: string;

    /** The S3 object location of the input media file */
    readonly mediaFileUri?: string;

    /** Whether to set this field to true to enable automatic language identification */
    readonly detectLanguage?: boolean;

    /**
     * Language used in the input media file
     * Default: "en-US"
     */
    readonly languageCode?: "en-US" | "en-GB" | "de-DE" | "en-IN" | "en-IE" | "ru-RU" | "es-ES";

    /** Default: {} */
    readonly options?: { "channelIdentification"?: boolean, "maxAlternatives"?: number, "maxSpeakerLabels"?: number, "vocabularyName"?: string, "vocabularyFilterName"?: string, "vocabularyFilterMethod"?: "remove" | "mask" | "tag" };

    /**
     * By default, the response only contains metadata about the transcript. Enable this option to retrieve the transcript instead.
     * Default: true
     */
    readonly returnTranscript?: boolean;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 20
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { "jobNameContains"?: string, "status"?: "COMPLETED" | "FAILED" | "IN_PROGRESS" | "QUEUED" };

}
