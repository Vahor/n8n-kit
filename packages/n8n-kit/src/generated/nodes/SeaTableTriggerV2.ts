// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/SeaTable/v2/SeaTableTriggerV2.node.ts' node

export const description = "Starts the workflow when SeaTable events occur" as const;
export const type = "n8n-nodes-base.seaTableTrigger" as const;
export const version = 2 as const;
export const credentials = [{"name":"seaTableApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface SeaTableTriggerV2NodeParameters {
    /**
     * Default: "newRow"
     */
    readonly event?: "newRow" | "updatedRow" | "newAsset";

    /**
     * The name of SeaTable table to access. Choose from the list, or specify the name using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTableNames"}
     */
    readonly tableName?: string;

    /**
     * The name of SeaTable view to access. Choose from the list, or specify the name using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsDependsOn":["tableName"],"loadOptionsMethod":"getTableViews"}
     */
    readonly viewName?: string;

    /**
     * Select the digital-signature column that should be tracked. Choose from the list, or specify the name using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsDependsOn":["tableName"],"loadOptionsMethod":"getSignatureColumns"}
     */
    readonly assetColumn?: string;

    /**
     * Default: {}
     */
    readonly options?: { "simple"?: boolean, "convert"?: boolean };

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };
}
