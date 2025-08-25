// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/CrowdDev/CrowdDev.node.ts' node

export const description = "crowd.dev is an open-source suite of community and data tools built to unlock community-led growth for your organization." as const;
export const type = "n8n-nodes-base.crowdDev" as const;
export const version = 1 as const;
export const credentials = [{"name":"crowdDevApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface CrowdDevNodeParameters {
    /** Default: "activity" */
    readonly resource?: "activity" | "automation" | "member" | "note" | "organization" | "task";

    /** Default: "createWithMember" */
    readonly operation?: "createWithMember" | "createForMember" | "createOrUpdate" | "delete" | "find" | "update" | "create" | "delete" | "find" | "update" | "create" | "destroy" | "find" | "list" | "update";

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly username?: { itemChoice: { key: string, value: string } } | string;

    /** UI friendly name of the member */
    readonly displayName?: string;

    /**
     * Email addresses of the member
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly emails?: { itemChoice: { email?: string } };

    /** Date of joining the community */
    readonly joinedAt?: string;

    /** The ID of the member that performed the activity */
    readonly member?: string;

    /** Type of activity */
    readonly type?: string;

    /** Date and time when the activity took place */
    readonly timestamp?: string;

    /** Platform on which the activity took place */
    readonly platform?: string;

    /** The ID of the activity in the platform (e.g. the ID of the message in Discord) */
    readonly sourceId?: string;

    /** Default: {} */
    readonly additionalOptions?: { title?: string, body?: string, channel?: string, sourceParentId?: string } | { displayName?: string, emails?: { itemChoice: { email?: string } }, joinedAt?: string, organizations?: { itemChoice: { name: string, url?: string, description?: string, logo?: string, employees?: number } }, tags?: { itemChoice: { tag?: string } }, tasks?: { itemChoice: { task?: string } }, notes?: { itemChoice: { note?: string } }, activities?: { itemChoice: { activity?: string } } } | { url?: string, description?: string, logo?: string, employees?: number, members?: { itemChoice: { member?: string } } } | { name?: string, body?: string, status?: string, members?: { itemChoice: { member?: string } }, activities?: { itemChoice: { activity?: string } }, assigneess?: string };

    /** The ID of the member */
    readonly id?: string;

    /**
     * The body of the note
     * Type options: {"rows":4}
     */
    readonly body?: string;

    /** The name of the organization */
    readonly name?: string;

    /**
     * What will trigger an automation
     * Default: "new_activity"
     */
    readonly trigger?: "new_activity" | "new_member";

    /** URL to POST webhook data to */
    readonly url?: string;

}
