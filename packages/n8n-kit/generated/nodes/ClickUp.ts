// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ClickUp/ClickUp.node.ts' node

export const name = "clickUp" as const;
export const description = "Consume ClickUp API (Beta)" as const;
export const version = 1 as const;
export const defaults = {"name":"ClickUp"} as const;
export const credentials = [{"name":"clickUpApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"clickUpOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Consume ClickUp API (Beta)
 */
export interface ClickUpNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "task"
     */
    readonly resource?: "checklist" | "checklistItem" | "comment" | "folder" | "goal" | "goalKeyResult" | "list" | "spaceTag" | "task" | "taskDependency" | "taskList" | "taskTag" | "timeEntry" | "timeEntryTag";


}

