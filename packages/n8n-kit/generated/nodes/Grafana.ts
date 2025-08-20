// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Grafana/Grafana.node.ts' node

export const name = "grafana" as const;
export const description = "Consume the Grafana API" as const;
export const version = 1 as const;
export const defaults = {"name":"Grafana"} as const;
export const credentials = [{"name":"grafanaApi","required":true}] as const

/**
 * Consume the Grafana API
 */
export interface GrafanaNodeParameters {

    /**
     * Default: "dashboard"
     */
    readonly resource?: "dashboard" | "team" | "teamMember" | "user";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "add" | "remove";

    /**
     * Title of the dashboard to create
     */
    readonly title?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "folderId"?: string, "email"?: string };

    /**
     * Unique alphabetic identifier or URL of the dashboard to delete
     */
    readonly dashboardUidOrUrl?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "query"?: string, "name"?: string };

    /**
     * Default: {}
     */
    readonly updateFields?: { "folderId"?: string, "title"?: string, "email"?: string, "name"?: string, "role"?: "Admin" | "Editor" | "Viewer" };

    /**
     * Name of the team to create
     */
    readonly name?: string;

    /**
     * ID of the team to delete
     */
    readonly teamId?: string;

    /**
     * User to add to a team. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getUsers"}
     */
    readonly userId?: string;

    /**
     * User to remove from the team. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getUsers"}
     */
    readonly memberId?: string;


}

