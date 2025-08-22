// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/HomeAssistant/HomeAssistant.node.ts' node

export const name = "homeAssistant" as const;
export const description = "Consume Home Assistant API" as const;
export const version = 1 as const;

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
    readonly operation?: "getScreenshot" | "get" | "check" | "create" | "getAll" | "getAll" | "getErroLogs" | "getLogbookEntries" | "call" | "getAll" | "upsert" | "get" | "getAll" | "create";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getCameraEntities"}
     */
    readonly cameraEntityId?: string;

    /**
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
    readonly additionalFields?: { "endTime"?: string, "entityIds"?: string, "minimalResponse"?: boolean, "significantChangesOnly"?: boolean, "startTime"?: string } | { "endTime"?: string, "entityId"?: string, "startTime"?: string };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getDomains"}
     */
    readonly domain?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsDependsOn":["domain"],"loadOptionsMethod":"getDomainServices"}
     */
    readonly service?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly serviceAttributes?: { "attributes": any };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
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

