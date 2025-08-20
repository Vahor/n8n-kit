// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/RssFeedRead/RssFeedRead.node.ts' node

export const name = "rssFeedRead" as const;
export const description = "Reads data from an RSS Feed" as const;
export const version = 1.2 as const;
export const defaults = { name: "RSS Read", color: "#b02020" } as const;
export const credentials = undefined;

/**
 * Reads data from an RSS Feed
 */
export interface RssFeedReadNodeParameters {
	/**
	 * URL of the RSS feed
	 */
	readonly url: string;

	/**
	 * Default: {}
	 */
	readonly options?: { customFields: string; ignoreSSL: boolean };
}
