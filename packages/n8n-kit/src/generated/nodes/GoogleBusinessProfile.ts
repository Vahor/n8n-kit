// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/BusinessProfile/GoogleBusinessProfile.node.ts' node

export const description = "Consume Google Business Profile API" as const;
export const type = "n8n-nodes-base.googleBusinessProfile" as const;
export const version = 1 as const;
export const credentials = [{"name":"googleBusinessProfileOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleBusinessProfileNodeParameters {
    /** Default: "post" */
    readonly resource?: "post" | "review";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "delete" | "get" | "getAll" | "reply";

    /**
     * The Google Business Profile account
     * Default: {"mode":"list","value":""}
     */
    readonly account?: {
	value: string,
	mode: "list" | "name",
};

    /**
     * The specific location or business associated with the account
     * Default: {"mode":"list","value":""}
     */
    readonly location?: {
	value: string,
	mode: "list" | "name",
};

    /**
     * The type of post to create (standard, event, offer, or alert)
     * Default: "STANDARD"
     */
    readonly postType?: "STANDARD" | "EVENT" | "OFFER" | "ALERT";

    /** The main text of the post */
    readonly summary?: string;

    /** E.g. Sales this week. */
    readonly title?: string;

    /** The start date and time of the event */
    readonly startDateTime?: string;

    /** The end date and time of the event */
    readonly endDateTime?: string;

    /** The start date of the offer */
    readonly startDate?: string;

    /** The end date of the offer */
    readonly endDate?: string;

    /**
     * The sub-type of the alert
     * Default: "COVID_19"
     */
    readonly alertType?: "COVID_19";

    /** Default: {} */
    readonly additionalOptions?: { "languageCode"?: string, "callToActionType"?: "ACTION_TYPE_UNSPECIFIED" | "BOOK" | "CALL" | "LEARN_MORE" | "ORDER" | "SHOP" | "SIGN_UP", "url"?: string, "couponCode"?: string, "redeemOnlineUrl"?: string, "termsConditions"?: string } | { "summary"?: string, "languageCode"?: string, "callToActionType"?: "ACTION_TYPE_UNSPECIFIED" | "BOOK" | "GET_OFFER" | "LEARN_MORE" | "ORDER" | "SHOP" | "SIGN_UP", "url"?: string, "startDateTime"?: string, "endDateTime"?: string, "title"?: string, "startDate"?: string, "endDate"?: string, "couponCode"?: string, "redeemOnlineUrl"?: string, "termsConditions"?: string };

    /**
     * Select the post to retrieve its details
     * Default: {"mode":"list","value":""}
     */
    readonly post?: {
	value: string,
	mode: "list" | "name",
};

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 20
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Select the review to retrieve its details
     * Default: {"mode":"list","value":""}
     */
    readonly review?: {
	value: string,
	mode: "list" | "id" | "name",
};

    /**
     * The body of the reply (up to 4096 characters)
     * Type options: {"rows":5}
     */
    readonly reply?: string;

}
