// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/InvoiceNinja/InvoiceNinjaTrigger.node.ts' node

export const name = "invoiceNinjaTrigger" as const;
export const description =
	"Starts the workflow when Invoice Ninja events occur" as const;
export const version = 2 as const;
export const defaults = { name: "Invoice Ninja Trigger" } as const;
export const credentials = [
	{ name: "invoiceNinjaApi", required: true },
] as const;

/**
 * Starts the workflow when Invoice Ninja events occur
 */
export interface InvoiceNinjaTriggerNodeParameters {
	/**
	 * Default: "v4"
	 */
	readonly apiVersion?: "v4" | "v5";

	/**
	 */
	readonly event:
		| "create_client"
		| "create_invoice"
		| "create_payment"
		| "create_quote"
		| "create_vendor";
}
