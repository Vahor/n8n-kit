// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Code/Code.node.js' node

export const name = "code" as const;
export const description = "Run custom JavaScript or Python code" as const;
export const version = 2 as const;
export const defaults = {"name":"Code","color":"#FF9922"} as const;

/**
 * Run custom JavaScript or Python code
 */
export interface CodeNodeParameters {

    /**
     * Default: "runOnceForAllItems"
     */
    readonly mode?: "runOnceForAllItems" | "runOnceForEachItem";

    /**
     * Default: "javaScript"
     */
    readonly language?: "javaScript" | "python";

    /**
     * JavaScript code to execute.<br><br>Tip: You can use luxon vars like <code>$today</code> for dates and <code>$jmespath</code> for querying JSON structures. <a href="https://docs.n8n.io/nodes/n8n-nodes-base.function">Learn more</a>.
     * Type options: {"editor":"codeNodeEditor","editorLanguage":"javaScript","rows":5}
     */
    readonly jsCode?: string;

    /**
     */
    readonly notice?: string;

    /**
     * Python code to execute.<br><br>Tip: You can use luxon vars like <code>_today</code> for dates and <code>$_mespath</code> for querying JSON structures. <a href="https://docs.n8n.io/nodes/n8n-nodes-base.function">Learn more</a>.
     * Type options: {"editor":"codeNodeEditor","editorLanguage":"python","rows":5}
     */
    readonly pythonCode?: string;


}

