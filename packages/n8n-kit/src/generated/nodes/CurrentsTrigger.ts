// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Currents/CurrentsTrigger.node.ts' node

export const description = "Starts the workflow when Currents events occur" as const;
export const type = "n8n-nodes-base.currentsTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"currentsApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface CurrentsTriggerNodeParameters {
    /**
     * The Currents project
     * Default: {"mode":"list","value":""}
     */
    readonly projectId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * The events to listen to
     * Default: []
     */
    readonly events?: ("RUN_CANCELED" | "RUN_FINISH" | "RUN_START" | "RUN_TIMEOUT")[];

}
