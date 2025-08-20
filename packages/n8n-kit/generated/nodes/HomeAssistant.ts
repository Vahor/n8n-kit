// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/HomeAssistant/HomeAssistant.node.js' node

export const name = "homeAssistant" as const;
export const description = "Consume Home Assistant API" as const;
export const version = 1 as const;
export const defaults = {"name":"Home Assistant"} as const;
export const credentials = [{"name":"homeAssistantApi","required":true,"testedBy":"homeAssistantApiTest"}] as const

/**
 * Consume Home Assistant API
 */
export interface HomeAssistantNodeParameters {

    /**
     * Default: "config"
     */
    readonly resource?: "cameraProxy" | "config" | "event" | "log" | "service" | "state" | "template";

    /**
     * Default: "getScreenshot"
     */
    readonly operation?: "getScreenshot" | "get" | "check" | "create" | "getAll" | "getErroLogs" | "getLogbookEntries" | "call" | "upsert";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getCameraEntities"}
     */
    readonly cameraEntityId?: string;

    /**
     * Name of the binary property to which to write the data of the read file
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * The Entity ID for which an event will be created
     */
    readonly eventType?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly eventAttributes?: { "attributes": any };

    /**
     * Default: {}
     */
    readonly additionalFields?: { "endTime"?: string, "entityIds"?: string, "minimalResponse"?: boolean, "significantChangesOnly"?: boolean, "startTime"?: string, "entityId"?: string };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getDomains"}
     */
    readonly domain?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>
     * Type options: {"loadOptionsDependsOn":["domain"],"loadOptionsMethod":"getDomainServices"}
     */
    readonly service?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly serviceAttributes?: { "attributes": any };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getAllEntities"}
     */
    readonly entityId?: string;

    /**
     */
    readonly state?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly stateAttributes?: { "attributes": any };

    /**
     * Render a Home Assistant template. <a href="https://www.home-assistant.io/docs/configuration/templating/">See template docs for more information.</a>.
     */
    readonly template?: string;


}

