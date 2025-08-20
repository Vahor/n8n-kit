// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Stripe/Stripe.node.ts' node

export const name = "stripe" as const;
export const description = "Consume the Stripe API" as const;
export const version = 1 as const;
export const defaults = { name: "Stripe" } as const;
export const credentials = [{ name: "stripeApi", required: true }] as const;

/**
 * Consume the Stripe API
 */
export interface StripeNodeParameters {
	/**
	 * Default: "balance"
	 */
	readonly resource?:
		| "balance"
		| "charge"
		| "coupon"
		| "customer"
		| "customerCard"
		| "source"
		| "token";
}
