// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/OpenThesaurus/OpenThesaurus.node.ts' node

export const description = "Get synonmns for German words using the OpenThesaurus API" as const;
export const type = "n8n-nodes-base.openThesaurus" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface OpenThesaurusNodeParameters {
    /**
     * Default: "getSynonyms"
     */
    readonly operation?: "getSynonyms";

    /**
     * The word to get synonyms for
     */
    readonly text?: string;

    /**
     * Default: {}
     */
    readonly options?: { "baseform"?: boolean, "similar"?: boolean, "startswith"?: boolean, "substring"?: boolean, "substringFromResults"?: number, "substringMaxResults"?: number, "subsynsets"?: boolean, "supersynsets"?: boolean };

}
