// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/If/V2/IfV2.node.ts' node

export const description = "Route items to different branches (true/false)" as const;
export const type = "n8n-nodes-base.if" as const;
export const version = 2.2 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface IfV2NodeParameters {
    /**
     * Default: {}
     * Type options: {"filter":{"caseSensitive":"={{!$parameter.options.ignoreCase}}","typeValidation":"={{ ($nodeVersion < 2.1 ? $parameter.options.looseTypeValidation :  $parameter.looseTypeValidation) ? \"loose\" : \"strict\" }}","version":"={{ $nodeVersion >= 2.2 ? 2 : 1 }}"}}
     */
    readonly conditions?: any;

    /** If the type of an expression doesn't match the type of the comparison, n8n will try to cast the expression to the required type. E.g. for booleans <code>"false"</code> or <code>0</code> will be cast to <code>false</code> */
    readonly looseTypeValidation?: boolean;

    /** Default: {} */
    readonly options?: { ignoreCase?: boolean, looseTypeValidation?: boolean };

}
