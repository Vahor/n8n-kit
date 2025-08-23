// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Ldap/Ldap.node.ts' node

export const description = "Interact with LDAP servers" as const;
export const type = "n8n-nodes-base.ldap" as const;
export const version = 1 as const;
export const credentials = [{"name":"ldap","required":true,"testedBy":"ldapConnectionTest"}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface LdapNodeParameters {
    /**
     * Default: "search"
     */
    readonly operation?: "compare" | "create" | "delete" | "rename" | "search" | "update";

    readonly nodeDebug?: boolean;

    /**
     * The distinguished name of the entry to compare
     * Type options: {"alwaysOpenEditWindow":false}
     */
    readonly dn?: string;

    /**
     * The ID of the attribute to compare
     * Default: []
     * Type options: {"loadOptionsMethod":"getAttributesForDn"}
     */
    readonly id?: string;

    /**
     * The value to compare
     */
    readonly value?: string;

    /**
     * The new distinguished name for the entry
     */
    readonly targetDn?: string;

    /**
     * Attributes to add to the entry
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly attributes?: { "attribute": any } | { "add": any, "replace": any, "delete": any };

    /**
     * The distinguished name of the subtree to search in
     */
    readonly baseDN?: string;

    /**
     * Directory object class to search for
     * Default: []
     * Type options: {"loadOptionsMethod":"getObjectClasses"}
     */
    readonly searchFor?: string;

    /**
     * Custom LDAP filter. Escape these chars * ( ) \ with a backslash "\".
     * Default: "(objectclass=*)"
     */
    readonly customFilter?: string;

    /**
     * Attribute to search for
     * Default: []
     * Type options: {"loadOptionsMethod":"getAttributes"}
     */
    readonly attribute?: string;

    /**
     * Text to search for, Use * for a wildcard
     */
    readonly searchText?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly options?: { "attributes"?: any[], "pageSize"?: number, "scope"?: "base" | "one" | "sub" };

}
