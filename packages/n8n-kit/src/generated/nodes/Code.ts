// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Code/Code.node.ts' node

export const description = "Run custom JavaScript or Python code" as const;
export const type = "n8n-nodes-base.code" as const;
export const version = 2 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface CodeNodeParameters {
    /** Default: "runOnceForAllItems" */
    readonly mode?: "runOnceForAllItems" | "runOnceForEachItem";

    /** Default: "javaScript" */
    readonly language?: "javaScript" | "pythonNative";

    /**
     * JavaScript code to execute.<br><br>Tip: You can use luxon vars like <code>$today</code> for dates and <code>$jmespath</code> for querying JSON structures. <a href="https://docs.n8n.io/nodes/n8n-nodes-base.function">Learn more</a>.
     * Type options: {"editor":"codeNodeEditor","editorLanguage":"javaScript"}
     */
    readonly jsCode?: string;

    /**
     * Python code to execute. Runs in a sandbox with no network access, and imports only work if your instance allowlists them: read the input items from <code>_items</code> (all-items mode) or <code>_item</code> (per-item mode). <a href="https://docs.n8n.io/code/builtin/">Learn more</a>.
     * Type options: {"editor":"codeNodeEditor","editorLanguage":"python"}
     */
    readonly pythonCode?: string;

}
