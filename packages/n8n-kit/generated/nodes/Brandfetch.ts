// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Brandfetch/Brandfetch.node.ts' node

export const name = "Brandfetch" as const;
export const description = "Consume Brandfetch API" as const;
export const version = 1 as const;
export const defaults = { name: "Brandfetch" } as const;
export const credentials = [{ name: "brandfetchApi", required: true }] as const;

/**
 * Consume Brandfetch API
 */
export interface BrandfetchNodeParameters {
	/**
	 * Default: "logo"
	 */
	readonly operation?: "color" | "company" | "font" | "industry" | "logo";

	/**
	 * The domain name of the company
	 */
	readonly domain: string;

	/**
	 * Name of the binary property to which to write the data of the read file
	 */
	readonly download: boolean;

	/**
	 * Default: ["logo","icon"]
	 */
	readonly imageTypes: ("icon" | "logo")[];

	/**
	 * The image format in which the logo should be returned as
	 * Default: ["png"]
	 */
	readonly imageFormats: ("png" | "svg")[];
}
