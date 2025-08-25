// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ClickUp/ClickUpTrigger.node.ts' node

export const description = "Handle ClickUp events via webhooks (Beta)" as const;
export const type = "n8n-nodes-base.clickUpTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"clickUpApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"clickUpOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface ClickUpTriggerNodeParameters {
    /** Default: "accessToken" */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTeams"}
     */
    readonly team?: string;

    /** Default: [] */
    readonly events?: ("*" | "folderCreated" | "folderDeleted" | "folderUpdated" | "goalCreated" | "goalDeleted" | "goalUpdated" | "keyResultCreated" | "keyResultDelete" | "keyResultUpdated" | "listCreated" | "listDeleted" | "listUpdated" | "spaceCreated" | "spaceDeleted" | "spaceUpdated" | "taskAssigneeUpdated" | "taskCommentPosted" | "taskCommentUpdated" | "taskCreated" | "taskDeleted" | "taskDueDateUpdated" | "taskMoved" | "taskStatusUpdated" | "taskTagUpdated" | "taskTimeEstimateUpdated" | "taskTimeTrackedUpdated" | "taskUpdated")[];

    /** Default: {} */
    readonly filters?: { folderId?: string, listId?: string, spaceId?: string, taskId?: string };

}
