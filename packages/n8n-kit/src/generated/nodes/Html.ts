// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Html/Html.node.ts' node

export const description = "Work with HTML" as const;
export const type = "n8n-nodes-base.html" as const;
export const version = 1.2 as const;
export const outputs = {"main":"main"} as const;

export interface HtmlNodeParameters {

    /**
     * Default: "generateHtmlTemplate"
     */
    readonly operation?: "generateHtmlTemplate" | "extractHtmlContent" | "convertToHtmlTable";

    /**
     * HTML template to render
     * Default: "<!DOCTYPE html>\n\n<html>\n<head>\n  <meta charset=\"UTF-8\" />\n  <title>My HTML document</title>\n</head>\n<body>\n  <div class=\"container\">\n    <h1>This is an H1 heading</h1>\n    <h2>This is an H2 heading</h2>\n    <p>This is a paragraph</p>\n  </div>\n</body>\n</html>\n\n<style>\n.container {\n  background-color: #ffffff;\n  text-align: center;\n  padding: 16px;\n  border-radius: 8px;\n}\n\nh1 {\n  color: #ff6d5a;\n  font-size: 24px;\n  font-weight: bold;\n  padding: 8px;\n}\n\nh2 {\n  color: #909399;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 8px;\n}\n</style>\n\n<script>\nconsole.log(\"Hello World!\");\n</script>"
     * Type options: {"editor":"htmlEditor"}
     */
    readonly html?: string;

    readonly notice?: string;

    /**
     * If HTML should be read from binary or JSON data
     * Default: "json"
     */
    readonly sourceData?: "binary" | "json";

    /**
     * Default: "data"
     */
    readonly dataPropertyName?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly extractionValues?: { "values": any };

    /**
     * Default: {}
     */
    readonly options?: { "trimValues"?: boolean, "cleanUpText"?: boolean } | { "capitalize"?: boolean, "customStyling"?: boolean, "caption"?: string, "tableAttributes"?: string, "headerAttributes"?: string, "rowAttributes"?: string, "cellAttributes"?: string };


}

