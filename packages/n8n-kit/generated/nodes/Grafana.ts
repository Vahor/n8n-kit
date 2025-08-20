// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Grafana/Grafana.node.ts' node

export const name = "grafana" as const;
export const description = "Consume the Grafana API" as const;
export const version = 1 as const;
export const defaults = { name: "Grafana" } as const;
export const credentials = [{ name: "grafanaApi", required: true }] as const;

/**
 * Consume the Grafana API
 */
export interface GrafanaNodeParameters {
	/**
	 * Default: "dashboard"
	 */
	readonly resource?: "dashboard" | "team" | "teamMember" | "user";
}
