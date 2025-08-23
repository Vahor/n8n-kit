// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/DateTime/V1/DateTimeV1.node.ts' node

export const name = "dateTime" as const;
export const description = "Allows you to manipulate date and time values" as const;
export const version = 1 as const;

/**
 * Allows you to manipulate date and time values
 */
export interface DateTimeV1NodeParameters {

    /**
     */
    readonly noticeDateTime?: string;

    /**
     * Default: "format"
     */
    readonly action?: "calculate" | "format";

    /**
     * The value that should be converted
     */
    readonly value?: string;

    /**
     * Name of the property to which to write the converted date
     * Default: "data"
     */
    readonly dataPropertyName?: string;

    /**
     * Whether a predefined format should be selected or custom format entered
     */
    readonly custom?: boolean;

    /**
     * The format to convert the date to
     */
    readonly toFormat?: string | "MM/DD/YYYY" | "YYYY/MM/DD" | "MMMM DD YYYY" | "MM-DD-YYYY" | "YYYY-MM-DD" | "X" | "x";

    /**
     * Default: {}
     */
    readonly options?: { "fromFormat"?: string, "fromTimezone"?: string, "toTimezone"?: string } | { "fromFormat"?: string };

    /**
     * Default: "add"
     */
    readonly operation?: "add" | "subtract";

    /**
     * E.g. enter “10” then select “Days” if you want to add 10 days to Date Value.
     * Type options: {"minValue":0}
     */
    readonly duration?: number;

    /**
     * Time unit for Duration parameter above
     * Default: "days"
     */
    readonly timeUnit?: "quarters" | "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | "milliseconds";


}

