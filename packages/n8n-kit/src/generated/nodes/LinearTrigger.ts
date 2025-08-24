// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Linear/LinearTrigger.node.ts' node

export const description = "Starts the workflow when Linear events occur" as const;
export const type = "n8n-nodes-base.linearTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"linearApi","required":true,"testedBy":"linearApiTest","displayOptions":{"show":{"authentication":["apiToken"]}}},{"name":"linearOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface LinearTriggerNodeParameters {
    /** Default: "apiToken" */
    readonly authentication?: "apiToken" | "oAuth2";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTeams"}
     */
    readonly teamId?: string;

    /** Default: [] */
    readonly resources?: ("reaction" | "cycle" | "issue" | "comment" | "issueLabel" | "project")[];

}
