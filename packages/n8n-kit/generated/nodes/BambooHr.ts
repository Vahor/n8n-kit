// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/BambooHr/BambooHr.node.ts' node

export const name = "bambooHr" as const;
export const description = "Consume BambooHR API" as const;
export const version = 1 as const;

/**
 * Consume BambooHR API
 */
export interface BambooHrNodeParameters {

    /**
     * Default: "employee"
     */
    readonly resource?: "companyReport" | "employee" | "employeeDocument" | "file";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "get" | "getAll" | "update" | "delete" | "download" | "getAll" | "update" | "upload" | "get";

    /**
     * Whether the employee to create was added to a pay schedule synced with Trax Payroll
     */
    readonly synced?: boolean;

    /**
     */
    readonly firstName?: string;

    /**
     */
    readonly lastName?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly address?: { "value": any };

    /**
     */
    readonly dateOfBirth?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getDepartments"}
     */
    readonly department?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getDivisions"}
     */
    readonly division?: string;

    /**
     */
    readonly employeeNumber?: string;

    /**
     */
    readonly exempt?: "exempt" | "non-exempt";

    /**
     */
    readonly gender?: "female" | "male";

    /**
     */
    readonly hireDate?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getEmployeeLocations"}
     */
    readonly location?: string;

    /**
     */
    readonly maritalStatus?: "single" | "married" | "domesticPartnership";

    /**
     */
    readonly mobilePhone?: string;

    /**
     */
    readonly paidPer?: "hour" | "day" | "week" | "month" | "quater" | "year";

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly payRate?: { "value": any };

    /**
     */
    readonly payType?: "commission" | "contract" | "daily" | "exceptionHourly" | "hourly" | "monthly" | "pieceRate" | "proRata" | "salary" | "weekly";

    /**
     */
    readonly preferredName?: string;

    /**
     * A standard United States Social Security number, with dashes
     */
    readonly ssn?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "address"?: { "value": any }, "dateOfBirth"?: string, "department"?: string, "division"?: string, "employeeNumber"?: string, "exempt"?: "exempt" | "non-exempt", "gender"?: "female" | "male", "hireDate"?: string, "location"?: string, "maritalStatus"?: "single" | "married" | "domesticPartnership", "mobilePhone"?: string, "paidPer"?: "hour" | "day" | "week" | "month" | "quater" | "year", "payRate"?: { "value": any }, "payType"?: "commission" | "contract" | "daily" | "exceptionHourly" | "hourly" | "monthly" | "pieceRate" | "proRata" | "salary" | "weekly", "preferredName"?: string, "ssn"?: string, "workEmail"?: string, "workPhone"?: string };

    /**
     */
    readonly employeeId?: string;

    /**
     * Default: {}
     */
    readonly options?: { "fields"?: string[] } | { "share"?: boolean } | { "fd"?: boolean, "onlyCurrent"?: boolean };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 5
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly addasasress?: { "value": any };

    /**
     * Default: {}
     */
    readonly updateFields?: { "addasasress"?: { "value": any }, "dateOfBirth"?: string, "department"?: string, "division"?: string, "employeeNumber"?: string, "firstName"?: string, "lastName"?: string, "exempt"?: "exempt" | "non-exempt", "gender"?: "female" | "male", "hireDate"?: string, "location"?: string, "maritalStatus"?: "single" | "married" | "domesticPartnership", "mobilePhone"?: string, "paidPer"?: "hour" | "day" | "week" | "month" | "quater" | "year", "payRate"?: { "value": any }, "payType"?: "commission" | "contract" | "daily" | "exceptionHourly" | "hourly" | "monthly" | "pieceRate" | "proRata" | "salary" | "weekly", "preferredName"?: string, "ssn"?: string, "workEmail"?: string, "workPhone"?: string } | { "categoryId"?: string, "name"?: string, "shareWithEmployee"?: boolean };

    /**
     * ID of the employee file
     */
    readonly fileId?: string;

    /**
     * The name of the output field to put the binary file data in
     * Default: "data"
     */
    readonly output?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simplifyOutput?: boolean;

    /**
     */
    readonly categoryId?: string;

    /**
     * The name of the input field containing the binary file data to be uploaded. Supported file types: PNG, JPEG.
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * ID of the report. You can get the report number by hovering over the report name on the reports page and grabbing the ID.
     */
    readonly reportId?: string;

    /**
     * The output format for the report
     * Default: "JSON"
     */
    readonly format?: "CSV" | "JSON" | "PDF" | "XLS" | "XML";


}

