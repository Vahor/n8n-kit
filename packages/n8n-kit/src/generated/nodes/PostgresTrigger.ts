// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Postgres/PostgresTrigger.node.ts' node

export const description = "Listens to Postgres messages" as const;
export const type = "n8n-nodes-base.postgresTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"postgres","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface PostgresTriggerNodeParameters {
    /** Default: "createTrigger" */
    readonly triggerMode?: "createTrigger" | "listenTrigger";

    /** Default: {"mode":"list","value":"public"} */
    readonly schema?: {
	value: string,
	mode: "list" | "name",
};

    /** Default: {"mode":"list","value":""} */
    readonly tableName?: {
	value: string,
	mode: "list" | "name",
};

    /** Name of the channel to listen to */
    readonly channelName?: string;

    /** Default: "INSERT" */
    readonly firesOn?: "INSERT" | "UPDATE" | "DELETE";

    /** Default: {} */
    readonly additionalFields?: { channelName?: string, functionName?: string, replaceIfExists?: boolean, triggerName?: string };

    /** Default: {} */
    readonly options?: { connectionTimeout?: number, delayClosingIdleConnection?: number };

}
