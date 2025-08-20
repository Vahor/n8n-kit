// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/Books/GoogleBooks.node.ts' node

export const name = "googleBooks" as const;
export const description = "Read data from Google Books" as const;
export const version = 2 as const;
export const defaults = { name: "Google Books" } as const;
export const credentials = [
	{
		name: "googleApi",
		required: true,
		displayOptions: { show: { authentication: ["serviceAccount"] } },
	},
	{
		name: "googleBooksOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["oAuth2"] } },
	},
] as const;

/**
 * Read data from Google Books
 */
export interface GoogleBooksNodeParameters {
	/**
	 * Default: "serviceAccount"
	 */
	readonly authentication?: "serviceAccount" | "oAuth2" | "oAuth2";

	/**
	 * Default: "bookshelf"
	 */
	readonly resource?: "bookshelf" | "bookshelfVolume" | "volume";

	/**
	 * Default: "get"
	 */
	readonly operation?: "get" | "getAll" | "add" | "clear" | "move" | "remove";

	/**
	 */
	readonly myLibrary: boolean;

	/**
	 * Full-text search query string
	 */
	readonly searchQuery: string;

	/**
	 * ID of user
	 */
	readonly userId: string;

	/**
	 * ID of the bookshelf
	 */
	readonly shelfId: string;

	/**
	 * ID of the volume
	 */
	readonly volumeId: string;

	/**
	 * Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on)
	 */
	readonly volumePosition: string;

	/**
	 * Whether to return all results or only up to a given limit
	 */
	readonly returnAll?: boolean;

	/**
	 * Max number of results to return
	 * Default: 40
	 * Type options: {"minValue":1,"maxValue":40}
	 */
	readonly limit?: number;
}
