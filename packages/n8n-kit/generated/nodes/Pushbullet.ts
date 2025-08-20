// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Pushbullet/Pushbullet.node.ts' node

export const name = "pushbullet" as const;
export const description = "Consume Pushbullet API" as const;
export const version = 1 as const;
export const defaults = { name: "Pushbullet" } as const;
export const credentials = [
	{ name: "pushbulletOAuth2Api", required: true },
] as const;

/**
 * Consume Pushbullet API
 */
export interface PushbulletNodeParameters {
	/**
	 * Default: "push"
	 */
	readonly resource?: "push";

	/**
	 * Default: "create"
	 */
	readonly operation?: "create" | "delete" | "getAll" | "update";

	/**
	 * Default: "note"
	 */
	readonly type: "file" | "link" | "note";

	/**
	 * Title of the push
	 */
	readonly title: string;

	/**
	 * Body of the push
	 */
	readonly body: string;

	/**
	 * URL of the push
	 */
	readonly url: string;

	/**
	 * Default: "data"
	 */
	readonly binaryPropertyName: string;

	/**
	 * Define the medium that will be used to send the push
	 * Default: "default"
	 */
	readonly target: "channel_tag" | "default" | "device_iden" | "email";

	/**
	 * The value to be set depending on the target selected. For example, if the target selected is email then this field would take the email address of the person you are trying to send the push to.
	 */
	readonly value: string;

	/**
	 */
	readonly pushId: string;

	/**
	 * Whether to return all results or only up to a given limit
	 */
	readonly returnAll?: boolean;

	/**
	 * Max number of results to return
	 * Default: 100
	 * Type options: {"minValue":1,"maxValue":500}
	 */
	readonly limit?: number;

	/**
	 * Default: {}
	 */
	readonly filters?: { active: boolean; modified_after: any };

	/**
	 * Whether to mark a push as having been dismissed by the user, will cause any notifications for the push to be hidden if possible
	 */
	readonly dismissed: boolean;
}
