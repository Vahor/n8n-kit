// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Phantombuster/Phantombuster.node.ts' node

export const description = "Consume Phantombuster API" as const;
export const type = "n8n-nodes-base.phantombuster" as const;
export const version = 1 as const;
export const credentials = [{"name":"phantombusterApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface PhantombusterNodeParameters {
    /** Default: "agent" */
    readonly resource?: "agent";

    /** Default: "launch" */
    readonly operation?: "delete" | "get" | "getAll" | "getOutput" | "launch";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getAgents"}
     */
    readonly agentId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 25
     * Type options: {"minValue":1,"maxValue":50}
     */
    readonly limit?: number;

    /**
     * By default the outpout is presented as string. If this option gets activated, it will resolve the data automatically.
     * Default: true
     */
    readonly resolveData?: boolean;

    /** Default: {} */
    readonly additionalFields?: { prevContainerId?: string, prevStatus?: "finished" | "lauch error" | "never launched" | "running" | "starting" | "unknown", prevRuntimeEventIndex?: number } | { argumentsJson?: string, argumentsUi?: { argumentValues: { key?: string, value?: string } }, bonusArgumentUi?: { bonusArgumentValue: { key?: string, value?: string } }, bonusArgumentJson?: string, manualLaunch?: boolean, maxInstanceCount?: number, saveArgument?: string };

    readonly jsonParameters?: boolean;

}
