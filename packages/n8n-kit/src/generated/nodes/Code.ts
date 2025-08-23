// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Code/Code.node.ts' node

export const description = "Run custom JavaScript or Python code" as const;
export const type = "n8n-nodes-base.code" as const;
export const version = 2 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface CodeNodeParameters {
    /**
     * Default: "runOnceForAllItems"
     */
    readonly mode?: "runOnceForAllItems" | "runOnceForEachItem";

    /**
     * Default: "javaScript"
     */
    readonly language?: "javaScript" | "python" | any;

    /**
     * JavaScript code to execute.<br><br>Tip: You can use luxon vars like <code>$today</code> for dates and <code>$jmespath</code> for querying JSON structures. <a href="https://docs.n8n.io/nodes/n8n-nodes-base.function">Learn more</a>.
     * Type options: {"editor":"codeNodeEditor","editorLanguage":"javaScript"}
     */
    readonly jsCode?: string;

    readonly notice?: string;

    /**
     * Python code to execute.<br><br>Tip: You can use built-in methods and variables like <code>_today</code> for dates and <code>_jmespath</code> for querying JSON structures. <a href="https://docs.n8n.io/code/builtin/">Learn more</a>.
     * Type options: {"editor":"codeNodeEditor","editorLanguage":"python"}
     */
    readonly pythonCode?: string;

}
