// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/UptimeRobot/UptimeRobot.node.ts' node

export const description = "Consume UptimeRobot API" as const;
export const type = "n8n-nodes-base.uptimeRobot" as const;
export const version = 1 as const;
export const credentials = [{"name":"uptimeRobotApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface UptimeRobotNodeParameters {
    /** Default: "account" */
    readonly resource?: "account" | "alertContact" | "maintenanceWindow" | "monitor" | "publicStatusPage";

    /** Default: "get" */
    readonly operation?: "get" | "create" | "delete" | "get" | "getAll" | "reset" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll";

    /** The friendly name of the monitor */
    readonly friendlyName?: string;

    /** The type of the monitor */
    readonly type?: 5 | 1 | 2 | 3 | 4 | 4 | 2 | 6 | 9 | 1 | 3 | 5 | 1 | 2 | 3 | 4;

    /** The URL/IP of the monitor */
    readonly url?: string;

    /** The ID of the monitor */
    readonly id?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { alert_contacts?: boolean, logs?: boolean, mwindow?: boolean, monitors?: string, response_times?: boolean, search?: string, statuses?: ("0" | "1" | "2" | "8" | "9")[], types?: ("5" | "1" | "2" | "3" | "4")[] } | { alert_contacts?: string } | { mwindow?: string } | { psps?: string };

    /** Default: {} */
    readonly updateFields?: { friendly_name?: string, http_auth_type?: 1 | 2, http_method?: 6 | 2 | 1 | 7 | 5 | 3 | 4, http_password?: string, http_username?: string, interval?: number, port?: number, status?: 0 | 1, sub_type?: 99 | 3 | 1 | 2 | 6 | 5 | 4, url?: string } | { friendly_name?: string, value?: string } | { friendly_name?: string, start_time?: string, type?: 1 | 2 | 3 | 4, weekDay?: 1 | 2 | 3 | 4 | 5 | 6 | 7, monthDay?: number } | { custom_domain?: string, friendly_name?: string, monitors?: string, password?: string, sort?: 1 | 2 | 3 | 4 };

    /** The correspondent value for the alert contact type */
    readonly value?: string;

    /**
     * The maintenance window activation period (minutes)
     * Default: 1
     */
    readonly duration?: number;

    readonly weekDay?: 1 | 2 | 3 | 4 | 5 | 6 | 7;

    /**
     * Default: 1
     * Type options: {"minValue":1,"maxValue":30}
     */
    readonly monthDay?: number;

    /** The maintenance window start datetime */
    readonly start_time?: string;

    /** Monitor IDs to be displayed in status page (the values are separated with a dash (-) or 0 for all monitors) */
    readonly monitors?: string;

    /** Default: {} */
    readonly additionalFields?: { custom_domain?: string, password?: string, sort?: 1 | 2 | 3 | 4 };

}
