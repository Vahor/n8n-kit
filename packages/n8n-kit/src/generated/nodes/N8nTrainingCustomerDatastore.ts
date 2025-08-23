// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/N8nTrainingCustomerDatastore/N8nTrainingCustomerDatastore.node.ts' node

export const description = "Dummy node used for n8n training" as const;
export const type = "n8n-nodes-base.n8nTrainingCustomerDatastore" as const;
export const version = 1 as const;
export const outputs = {"main":"main"} as const;

export interface N8nTrainingCustomerDatastoreNodeParameters {

    /**
     * Default: "getOnePerson"
     */
    readonly operation?: "getOnePerson" | "getAllPeople";

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 5
     * Type options: {"minValue":1,"maxValue":10}
     */
    readonly limit?: number;


}

