// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/DateTime/V2/DateTimeV2.node.ts' node

export const name = "undefined" as const;
export const description = "Manipulate date and time values" as const;
export const version = 2 as const;

/**
 * Manipulate date and time values
 */
export interface DateTimeV2NodeParameters {

    /**
     * Default: "getCurrentDate"
     */
    readonly operation?: "addToDate" | "extractDate" | "formatDate" | "getCurrentDate" | "getTimeBetweenDates" | "roundDate" | "subtractFromDate";

    /**
     */
    readonly notice?: string | string | string | string | string | string;

    /**
     * When deactivated, the time will be set to midnight
     * Default: true
     */
    readonly includeTime?: boolean;

    /**
     * Name of the field to put the output in
     * Default: "currentDate"
     */
    readonly outputFieldName?: string | string | string | string | string | string | string;

    /**
     * Default: {}
     */
    readonly options?: { "includeInputFields"?: boolean, "timezone"?: string } | { "includeInputFields"?: boolean } | { "includeInputFields"?: boolean } | { "includeInputFields"?: boolean, "fromFormat"?: string, "timezone"?: boolean } | { "includeInputFields"?: boolean } | { "includeInputFields"?: boolean, "isoString"?: boolean } | { "includeInputFields"?: boolean };

    /**
     * The date that you want to change
     */
    readonly magnitude?: string | string;

    /**
     * Time unit for Duration parameter below
     * Default: "days"
     */
    readonly timeUnit?: "years" | "quarters" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | "milliseconds" | "years" | "quarters" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | "milliseconds";

    /**
     * The number of time units to add to the date
     */
    readonly duration?: number | number;

    /**
     * The date that you want to format
     */
    readonly date?: string | string | string;

    /**
     * The format to convert the date to
     * Default: "MM/dd/yyyy"
     */
    readonly format?: "custom" | "MM/dd/yyyy" | "yyyy/MM/dd" | "MMMM dd yyyy" | "MM-dd-yyyy" | "yyyy-MM-dd" | "X" | "x";

    /**
     */
    readonly customFormat?: string;

    /**
     * Default: "roundDown"
     */
    readonly mode?: "roundDown" | "roundUp";

    /**
     * Default: "month"
     */
    readonly toNearest?: "year" | "month" | "week" | "day" | "hour" | "minute" | "second";

    /**
     * Default: "month"
     */
    readonly to?: "month";

    /**
     */
    readonly startDate?: string;

    /**
     */
    readonly endDate?: string;

    /**
     * Default: ["day"]
     */
    readonly units?: ("year" | "month" | "week" | "day" | "hour" | "minute" | "second" | "millisecond")[];

    /**
     * Default: "month"
     */
    readonly part?: "year" | "month" | "week" | "day" | "hour" | "minute" | "second";


}

