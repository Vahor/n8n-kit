// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Aws/ELB/AwsElb.node.ts' node

export const description = "Sends data to AWS ELB API" as const;
export const type = "n8n-nodes-base.awsElb" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AwsElbNodeParameters {
    /** Default: "loadBalancer" */
    readonly resource?: "listenerCertificate" | "loadBalancer";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getMany" | "add" | "getMany" | "remove";

    /**
     * The type of IP addresses used by the subnets for your load balancer
     * Default: "ipv4"
     */
    readonly ipAddressType?: "ipv4" | "dualstack";

    /** This name must be unique per region per account, can have a maximum of 32 characters */
    readonly name?: string;

    /** Default: "internet-facing" */
    readonly schema?: "internal" | "internet-facing";

    /** Default: "application" */
    readonly type?: "application" | "network";

    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getSubnets"}
     */
    readonly subnets?: any[];

    /** Default: {} */
    readonly additionalFields?: { securityGroups?: any[], tagsUi?: { tagValues: Array<{ key?: string, value?: string }> } };

    /** Unique identifier for a particular loadBalancer */
    readonly loadBalancerId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"maxValue":400,"minValue":1}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { names?: string };

    /**
     * Unique identifier for a particular loadBalancer. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getLoadBalancerListeners","loadOptionsDependsOn":["loadBalancerId"]}
     */
    readonly listenerId?: string;

    /** Unique identifier for a particular loadBalancer */
    readonly certificateId?: string;

}
