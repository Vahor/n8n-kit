// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Salesforce/SalesforceTrigger.node.ts' node

export const description = "Fetches data from Salesforce and starts the workflow on specified polling intervals." as const;
export const type = "n8n-nodes-base.salesforceTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"salesforceOAuth2Api","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface SalesforceTriggerNodeParameters {
    /** Which Salesforce event should trigger the node */
    readonly triggerOn?: "accountCreated" | "accountUpdated" | "attachmentCreated" | "attachmentUpdated" | "caseCreated" | "caseUpdated" | "contactCreated" | "contactUpdated" | "customObjectCreated" | "customObjectUpdated" | "leadCreated" | "leadUpdated" | "opportunityCreated" | "opportunityUpdated" | "taskCreated" | "taskUpdated" | "userCreated" | "userUpdated";

    /**
     * Name of the custom object. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getCustomObjects"}
     */
    readonly customObject?: string;

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };
}
