// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/YouTube/YouTube.node.ts' node

export const name = "youTube" as const;
export const description = "Consume YouTube API" as const;
export const version = 1 as const;
export const defaults = {"name":"YouTube"} as const;
export const credentials = [{"name":"youTubeOAuth2Api","required":true}] as const

/**
 * Consume YouTube API
 */
export interface YouTubeNodeParameters {

    /**
     * Default: "channel"
     */
    readonly resource?: "channel" | "playlist" | "playlistItem" | "video" | "videoCategory";

    /**
     * Default: "getAll"
     */
    readonly operation?: "get" | "getAll" | "update" | "uploadBanner" | "create" | "delete" | "add" | "rate" | "upload";

    /**
     * The fields parameter specifies a comma-separated list of one or more channel resource properties that the API response will include
     * Default: ["*"]
     */
    readonly part?: ("*" | "brandingSettings" | "contentDetails" | "contentOwnerDetails" | "id" | "localizations" | "snippet" | "statistics" | "status" | "topicDetails" | "player" | "liveStreamingDetails" | "recordingDetails")[];

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 25
     * Type options: {"minValue":1,"maxValue":50}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "categoryId"?: string, "forUsername"?: string, "id"?: string, "managedByMe"?: boolean, "channelId"?: string, "forDeveloper"?: boolean, "publishedAfter"?: string, "publishedBefore"?: string, "q"?: string, "regionCode"?: string, "relatedToVideoId"?: string, "videoCategoryId"?: string, "videoSyndicated"?: boolean, "videoType"?: "any" | "episode" | "movie" };

    /**
     * Default: {}
     */
    readonly options?: { "h1"?: string, "onBehalfOfContentOwner"?: string, "description"?: string, "privacyStatus"?: "private" | "public" | "unlisted", "tags"?: string, "defaultLanguage"?: string, "onBehalfOfContentOwnerChannel"?: string, "endAt"?: string, "note"?: string, "position"?: number, "startAt"?: string, "embeddable"?: boolean, "license"?: "creativeCommon" | "youtube", "notifySubscribers"?: boolean, "publicStatsViewable"?: boolean, "publishAt"?: string, "recordingDate"?: string, "selfDeclaredMadeForKids"?: boolean, "order"?: "date" | "relevance", "safeSearch"?: "moderate" | "none" | "strict" };

    /**
     * ID of the channel
     */
    readonly channelId?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "brandingSettingsUi"?: { "channelSettingsValues": any, "imageSettingsValues": any, "statusValue": any }, "onBehalfOfContentOwner"?: string, "defaultLanguage"?: string, "description"?: string, "privacyStatus"?: "private" | "public" | "unlisted", "tags"?: string, "embeddable"?: boolean, "license"?: "creativeCommon" | "youtube", "notifySubscribers"?: boolean, "publicStatsViewable"?: boolean, "publishAt"?: string, "recordingDate"?: string, "selfDeclaredMadeForKids"?: boolean };

    /**
     * Default: "data"
     */
    readonly binaryProperty?: string;

    /**
     * The playlist's title
     */
    readonly title?: string;

    /**
     */
    readonly playlistId?: string;

    /**
     */
    readonly videoId?: string;

    /**
     */
    readonly playlistItemId?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getCountriesCodes"}
     */
    readonly regionCode?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getVideoCategories","loadOptionsDependsOn":["regionCode"]}
     */
    readonly categoryId?: string;

    /**
     */
    readonly rating?: "dislike" | "like" | "none";


}

