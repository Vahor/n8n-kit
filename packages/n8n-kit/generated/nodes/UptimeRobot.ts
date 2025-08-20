// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/UptimeRobot/UptimeRobot.node.ts' node

export const name = "uptimeRobot" as const;
export const description = "Consume UptimeRobot API" as const;
export const version = 1 as const;
export const defaults = {"name":"UptimeRobot"} as const;
export const credentials = [{"name":"uptimeRobotApi","required":true}] as const

/**
 * Consume UptimeRobot API
 */
export interface UptimeRobotNodeParameters {

    /**
     * Default: "account"
     */
    readonly resource?: "account" | "alertContact" | "maintenanceWindow" | "monitor" | "publicStatusPage";

    /**
     * Default: "get"
     */
    readonly operation?: "get";


}

