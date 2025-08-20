// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/N8nTrainingCustomerDatastore/N8nTrainingCustomerDatastore.node.ts' node

export const name = "n8nTrainingCustomerDatastore" as const;
export const description = "Dummy node used for n8n training" as const;
export const version = 1 as const;
export const defaults = {"name":"Customer Datastore (n8n training)"} as const;

/**
 * Dummy node used for n8n training
 */
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

