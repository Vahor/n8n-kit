// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Zammad/Zammad.node.ts' node

export const description = "Consume the Zammad API" as const;
export const type = "n8n-nodes-base.zammad" as const;
export const version = 1 as const;
export const credentials = [{"name":"zammadBasicAuthApi","required":true,"testedBy":"zammadBasicAuthApiTest","displayOptions":{"show":{"authentication":["basicAuth"]}}},{"name":"zammadTokenAuthApi","required":true,"testedBy":"zammadTokenAuthApiTest","displayOptions":{"show":{"authentication":["tokenAuth"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface ZammadNodeParameters {
    /** Default: "tokenAuth" */
    readonly authentication?: "basicAuth" | "tokenAuth";

    /** Default: "user" */
    readonly resource?: "group" | "organization" | "ticket" | "user";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "create" | "delete" | "get" | "getAll" | "getSelf" | "update";

    readonly name?: string;

    /** Group to update. Specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>. */
    readonly id?: string;

    /** Default: {} */
    readonly additionalFields?: { "active"?: boolean, "customFieldsUi"?: { "customFieldPairs": any }, "note"?: string } | { "shared"?: boolean, "domain"?: string, "domain_assignment"?: boolean, "active"?: boolean, "vip"?: boolean, "note"?: string, "customFieldsUi"?: { "customFieldPairs": any } } | { "customFieldsUi"?: { "customFieldPairs": any } } | { "active"?: boolean, "addressUi"?: { "addressDetails": any }, "customFieldsUi"?: { "customFieldPairs": any }, "department"?: string, "email"?: string, "fax"?: string, "note"?: string, "organization"?: string, "phone"?: string, "mobile"?: string, "verified"?: boolean, "vip"?: boolean, "web"?: string };

    /** Default: {} */
    readonly updateFields?: { "active"?: boolean, "customFieldsUi"?: { "customFieldPairs": any }, "name"?: string, "note"?: string } | { "shared"?: boolean, "domain"?: string, "domain_assignment"?: boolean, "active"?: boolean, "vip"?: boolean, "note"?: string, "customFieldsUi"?: { "customFieldPairs": any } } | { "active"?: boolean, "addressUi"?: { "addressDetails": any }, "customFieldsUi"?: { "customFieldPairs": any }, "department"?: string, "email"?: string, "fax"?: string, "firstname"?: string, "lastname"?: string, "note"?: string, "organization"?: string, "phone"?: string, "mobile"?: string, "verified"?: boolean, "vip"?: boolean, "web"?: string };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Title of the ticket to create */
    readonly title?: string;

    /**
     * Group that will own the ticket to create. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"loadGroupNames"}
     */
    readonly group?: string;

    /**
     * Email address of the customer concerned in the ticket to create. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"loadCustomerEmails"}
     */
    readonly customer?: string;

    /** Default: {} */
    readonly article?: { "articleDetails": any };

    readonly firstname?: string;

    readonly lastname?: string;

    readonly query?: string;

    /** Default: {} */
    readonly filters?: { "query"?: string, "sortUi"?: { "sortDetails": any } };

}
