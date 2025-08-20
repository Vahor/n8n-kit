// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Mailchimp/Mailchimp.node.ts' node

export const name = "mailchimp" as const;
export const description = "Consume Mailchimp API" as const;
export const version = 1 as const;
export const defaults = { name: "Mailchimp" } as const;
export const credentials = [
	{
		name: "mailchimpApi",
		required: true,
		displayOptions: { show: { authentication: ["apiKey"] } },
	},
	{
		name: "mailchimpOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["oAuth2"] } },
	},
] as const;

/**
 * Consume Mailchimp API
 */
export interface MailchimpNodeParameters {
	/**
	 * Default: "apiKey"
	 */
	readonly authentication?: "apiKey" | "oAuth2";

	/**
	 * Default: "member"
	 */
	readonly resource: "campaign" | "listGroup" | "member" | "memberTag";

	/**
	 * Default: "create"
	 */
	readonly operation:
		| "create"
		| "delete"
		| "get"
		| "getAll"
		| "update"
		| "replicate"
		| "resend"
		| "send";

	/**
	 * List of lists. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
	 * Type options: {"loadOptionsMethod":"getLists"}
	 */
	readonly list: string;

	/**
	 * Email address for a subscriber
	 */
	readonly email: string;

	/**
	 * Subscriber's current status
	 */
	readonly status:
		| "cleaned"
		| "pending"
		| "subscribed"
		| "transactional"
		| "unsubscribed";

	/**
	 */
	readonly jsonParameters?: boolean;

	/**
	 * Default: {}
	 */
	readonly options?: {
		emailType: "html" | "text";
		language: string;
		ipOptIn: string;
		ipSignup: string;
		timestampSignup: any;
		tags: string;
		vip: boolean;
		timestampOpt: any;
		fields: string;
		excludeFields: string;
		beforeLastChanged: any;
		beforeTimestampOpt: any;
		status:
			| "cleaned"
			| "pending"
			| "subscribed"
			| "transactional"
			| "unsubscribed";
		sinceLastChanged: any;
		isSyncing: boolean;
		beforeCreateTime: any;
		beforeSendTime: any;
		listId: string;
		sinceCreateTime: any;
		sinceSendTime: any;
		sortDirection: "ASC" | "DESC";
		sortField: "create_time" | "send_time";
	};

	/**
	 * Subscriber location information.n
	 * Default: {}
	 */
	readonly locationFieldsUi?: { locationFieldsValues: any };

	/**
	 * An individual merge var and value for a member
	 * Default: {}
	 * Type options: {"multipleValues":true}
	 */
	readonly mergeFieldsUi?: { mergeFieldsValues: any };

	/**
	 * Type options: {"alwaysOpenEditWindow":true}
	 */
	readonly mergeFieldsJson?: any;

	/**
	 * Type options: {"alwaysOpenEditWindow":true}
	 */
	readonly locationJson?: any;

	/**
	 * Default: {}
	 * Type options: {"multipleValues":true}
	 */
	readonly groupsUi?: { groupsValues: any };

	/**
	 * Type options: {"alwaysOpenEditWindow":true}
	 */
	readonly groupJson?: any;

	/**
	 * Whether to return all results or only up to a given limit
	 */
	readonly returnAll?: boolean;

	/**
	 * Max number of results to return
	 * Default: 500
	 * Type options: {"minValue":1,"maxValue":1000}
	 */
	readonly limit?: number;

	/**
	 * Default: {}
	 */
	readonly updateFields?: {
		emailType: "html" | "text";
		groupsUi: { groupsValues: any };
		language: string;
		mergeFieldsUi: { mergeFieldsValues: any };
		ipOptIn: string;
		ipSignup: string;
		timestampSignup: any;
		skipMergeValidation: boolean;
		status:
			| "cleaned"
			| "pending"
			| "subscribed"
			| "transactional"
			| "unsubscribed";
		vip: boolean;
		locationFieldsUi: { locationFieldsValues: any };
		timestampOpt: any;
	};

	/**
	 * Default: []
	 * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Tag"}
	 */
	readonly tags?: string;

	/**
	 * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
	 * Type options: {"loadOptionsMethod":"getGroupCategories","loadOptionsDependsOn":["list"]}
	 */
	readonly groupCategory: string;

	/**
	 * List of Campaigns
	 */
	readonly campaignId: string;
}
