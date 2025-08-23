// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Aws/DynamoDB/AwsDynamoDB.node.ts' node

export const description = "Consume the AWS DynamoDB API" as const;
export const type = "n8n-nodes-base.awsDynamoDb" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AwsDynamoDBNodeParameters {
    /**
     * Default: "item"
     */
    readonly resource?: "item";

    /**
     * Default: "upsert"
     */
    readonly operation?: "upsert" | "delete" | "get" | "getAll";

    /**
     * Table to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getTables"}
     */
    readonly tableName?: string;

    /**
     * Whether to insert the input data this node receives in the new row
     * Default: "defineBelow"
     */
    readonly dataToSend?: "autoMapInputData" | "defineBelow";

    /**
     * List of input properties to avoid sending, separated by commas. Leave empty to send all properties.
     */
    readonly inputsToIgnore?: string;

    /**
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Field to Send","multipleValues":true}
     */
    readonly fieldsUi?: { "fieldValues": any };

    /**
     * Default: {}
     */
    readonly additionalFields?: { "eavUi": { "eavValues": any }, "conditionExpression"?: string, "eanUi"?: { "eanValues": any } } | { "conditionExpression"?: string, "eanUi"?: { "eanValues": any }, "expressionAttributeUi": { "expressionAttributeValues": any } } | { "projectionExpression"?: string, "eanUi"?: { "eanValues": any }, "readType"?: "stronglyConsistentRead" | "eventuallyConsistentRead" };

    /**
     * Use ReturnValues if you want to get the item attributes as they appeared before they were deleted
     * Default: "NONE"
     */
    readonly returnValues?: "ALL_OLD" | "NONE";

    /**
     * Item's primary key. For example, with a simple primary key, you only need to provide a value for the partition key. For a composite primary key, you must provide values for both the partition key and the sort key.
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly keysUi?: { "keyValues": any };

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * Default: "ALL_ATTRIBUTES"
     */
    readonly select?: "ALL_ATTRIBUTES" | "ALL_PROJECTED_ATTRIBUTES" | "SPECIFIC_ATTRIBUTES" | "ALL_ATTRIBUTES" | "ALL_PROJECTED_ATTRIBUTES" | "COUNT" | "SPECIFIC_ATTRIBUTES";

    /**
     * Whether to do an scan or query. Check <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-query-scan.html" >differences</a>.
     */
    readonly scan?: boolean;

    /**
     * A filter expression determines which items within the Scan results should be returned to you. All of the other results are discarded. Empty value will return all Scan results.
     */
    readonly filterExpression?: string;

    /**
     * Condition to determine the items to be retrieved. The condition must perform an equality test on a single partition key value, in this format: <code>partitionKeyName = :partitionkeyval</code>
     */
    readonly keyConditionExpression?: string;

    /**
     * Substitution tokens for attribute names in an expression
     * Default: {}
     * Type options: {"multipleValues":true,"minValue":1}
     */
    readonly eavUi?: { "eavValues": any };

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
    readonly options?: { "indexName"?: string, "projectionExpression"?: string, "filterExpression"?: string, "eanUi"?: { "eanValues": any } };

}
