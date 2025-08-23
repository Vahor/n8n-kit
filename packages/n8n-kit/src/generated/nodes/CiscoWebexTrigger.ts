// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Cisco/Webex/CiscoWebexTrigger.node.ts' node

export const description = "Starts the workflow when Cisco Webex events occur." as const;
export const type = "n8n-nodes-base.ciscoWebexTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"ciscoWebexOAuth2Api","required":true}] as const;

/**
 * Starts the workflow when Cisco Webex events occur.
 */
export interface CiscoWebexTriggerNodeParameters {

    /**
     * Default: "meeting"
     */
    readonly resource?: "all" | "attachmentAction" | "meeting" | "membership" | "message" | "recording" | "room";

    readonly event?: "created" | "deleted" | "updated" | "all" | "created" | "deleted" | "updated" | "started" | "ended" | "all" | "created" | "deleted" | "updated" | "created" | "updated" | "deleted" | "all";

    /**
     * By default the response only contain a reference to the data the user inputed. If this option gets activated, it will resolve the data automatically.
     * Default: true
     */
    readonly resolveData?: boolean;

    /**
     * Default: {}
     */
    readonly filters?: { "hasFiles"?: boolean, "isLocked"?: boolean, "isModerator"?: boolean, "mentionedPeople"?: string, "messageId"?: string, "ownedBy"?: string, "personEmail"?: string, "personId"?: string, "roomId"?: string, "roomType"?: "direct" | "group", "type"?: "direct" | "group" };


}

