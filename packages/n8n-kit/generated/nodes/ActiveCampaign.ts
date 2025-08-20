// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ActiveCampaign/ActiveCampaign.node.ts' node

export const name = "activeCampaign" as const;
export const description = "Create and edit data in ActiveCampaign" as const;
export const version = 1 as const;
export const defaults = { name: "ActiveCampaign" } as const;
export const credentials = [
	{ name: "activeCampaignApi", required: true },
] as const;

/**
 * Create and edit data in ActiveCampaign
 */
export interface ActiveCampaignNodeParameters {
	/**
	 * Default: "contact"
	 */
	readonly resource?:
		| "account"
		| "accountContact"
		| "connection"
		| "contact"
		| "contactList"
		| "contactTag"
		| "deal"
		| "ecommerceCustomer"
		| "ecommerceOrder"
		| "ecommerceOrderProducts"
		| "list"
		| "tag";
}
