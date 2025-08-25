// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Tapfiliate/Tapfiliate.node.ts' node

export const description = "Consume Tapfiliate API" as const;
export const type = "n8n-nodes-base.tapfiliate" as const;
export const version = 1 as const;
export const credentials = [{"name":"tapfiliateApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface TapfiliateNodeParameters {
    /** Default: "affiliate" */
    readonly resource?: "affiliate" | "affiliateMetadata" | "programAffiliate";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "add" | "remove" | "update" | "add" | "approve" | "disapprove" | "get" | "getAll";

    /** The affiliate’s email */
    readonly email?: string;

    /** The affiliate’s firstname */
    readonly firstname?: string;

    /** The affiliate’s lastname */
    readonly lastname?: string;

    /** Default: {} */
    readonly additionalFields?: { addressUi?: { addressValues: { address?: string, address_two?: string, postal_code?: string, city?: string, state?: string, country?: string } }, companyName?: string } | { approved?: boolean, coupon?: string };

    /** The ID of the affiliate */
    readonly affiliateId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { affiliate_group_id?: string, click_id?: string, email?: string, parentId?: string, referral_code?: string, source_id?: string } | { affiliate_group_id?: string, email?: string, parentId?: string, source_id?: string };

    /**
     * Meta data
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly metadataUi?: { metadataValues: Array<{ key?: string, value?: string }> };

    /** Name of the metadata key to remove */
    readonly key?: string;

    /** Value to set for the metadata key */
    readonly value?: string;

    /**
     * The ID of the Program to add the affiliate to. This ID can be found as part of the URL when viewing the program on the platform. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getPrograms"}
     */
    readonly programId?: string;

}
