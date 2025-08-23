// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/LoneScale/LoneScale.node.ts' node

export const description = "Create List, add / delete items" as const;
export const type = "n8n-nodes-base.loneScale" as const;
export const version = 1 as const;
export const credentials = [{"name":"loneScaleApi","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface LoneScaleNodeParameters {

    /**
     * Create a new list
     * Default: "list"
     */
    readonly resource?: "list" | "item";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "add";

    /**
     * Type of your list
     * Default: "PEOPLE"
     */
    readonly type?: "COMPANY" | "PEOPLE";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getLists","loadOptionsDependsOn":["type"]}
     */
    readonly list?: string;

    /**
     * Contact first name
     */
    readonly first_name?: string;

    /**
     * Contact last name
     */
    readonly last_name?: string;

    /**
     * Contact company name
     */
    readonly company_name?: string;

    /**
     * Default: {}
     */
    readonly peopleAdditionalFields?: { "full_name"?: string, "email"?: string, "company_name"?: string, "current_position"?: string, "domain"?: string, "linkedin_url"?: string, "location"?: string, "contact_id"?: string };

    /**
     * Default: {}
     */
    readonly companyAdditionalFields?: { "linkedin_url"?: string, "domain"?: string, "location"?: string, "contact_id"?: string };

    /**
     * Name of your list
     */
    readonly name?: string;


}

