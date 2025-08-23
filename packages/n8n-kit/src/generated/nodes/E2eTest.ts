// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/E2eTest/E2eTest.node.ts' node

export const description = "Dummy node used for e2e testing" as const;
export const type = "n8n-nodes-base.e2eTest" as const;
export const version = 1 as const;
export const outputs = {"main":"main"} as const;

export interface E2eTestNodeParameters {

    /**
     * Default: "remoteOptions"
     */
    readonly operation?: "remoteOptions" | "resourceLocator" | "resourceMapper";

    readonly fieldId?: string;

    /**
     * Remote options to load. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsDependsOn":["fieldId"],"loadOptionsMethod":"getOptions"}
     */
    readonly remoteOptions?: string;

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly rlc?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /**
     * Default: {"mappingMode":"defineBelow","value":null}
     * Type options: {"loadOptionsDependsOn":["fieldId"],"resourceMapper":{"resourceMapperMethod":"getMappingColumns","mode":"upsert","fieldWords":{"singular":"column","plural":"columns"},"addAllFields":true,"multiKeyMatch":false}}
     */
    readonly resourceMapper?: any;

    readonly otherField?: string;


}

