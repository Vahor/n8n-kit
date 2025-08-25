// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Onfleet/OnfleetTrigger.node.ts' node

export const description = "Starts the workflow when Onfleet events occur" as const;
export const type = "n8n-nodes-base.onfleetTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"onfleetApi","required":true,"testedBy":"onfleetApiTest"}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface OnfleetTriggerNodeParameters {
    /** Default: [] */
    readonly triggerOn?: "SMSRecipientOptOut" | "smsRecipientResponseMissed" | "taskArrival" | "taskAssigned" | "taskCloned" | "taskCompleted" | "taskCreated" | "taskDelayed" | "taskDeleted" | "taskEta" | "taskFailed" | "taskStarted" | "taskUnassigned" | "taskUpdated" | "workerCreated" | "workerDeleted" | "workerDuty";

    /** Default: {} */
    readonly additionalFields?: { name?: string };

}
