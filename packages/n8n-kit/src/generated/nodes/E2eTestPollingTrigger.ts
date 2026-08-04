// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/E2eTest/E2eTestPollingTrigger.node.ts' node

export const description = "Dummy polling trigger for e2e testing" as const;
export const type = "n8n-nodes-base.e2eTestPollingTrigger" as const;
export const version = 1 as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface E2eTestPollingTriggerNodeParameters {
    /** GET endpoint to poll. Expected to return JSON of shape { "items": [...] }. */
    readonly url?: string;

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };
}
