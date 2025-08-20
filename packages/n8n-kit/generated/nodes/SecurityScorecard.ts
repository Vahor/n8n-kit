// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/SecurityScorecard/SecurityScorecard.node.ts' node

export const name = "securityScorecard" as const;
export const description = "Consume SecurityScorecard API" as const;
export const version = 1 as const;
export const defaults = { name: "SecurityScorecard" } as const;
export const credentials = [
	{ name: "securityScorecardApi", required: true },
] as const;

/**
 * Consume SecurityScorecard API
 */
export interface SecurityScorecardNodeParameters {
	/**
	 * Default: "company"
	 */
	readonly resource:
		| "company"
		| "industry"
		| "invite"
		| "portfolio"
		| "portfolioCompany"
		| "report";
}
