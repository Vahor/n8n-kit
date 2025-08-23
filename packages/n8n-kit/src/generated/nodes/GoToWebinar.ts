// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/GoToWebinar/GoToWebinar.node.ts' node

export const name = "goToWebinar" as const;
export const description = "Consume the GoToWebinar API" as const;
export const version = 1 as const;
export const credentials = [{"name":"goToWebinarOAuth2Api","required":true}] as const;

/**
 * Consume the GoToWebinar API
 */
export interface GoToWebinarNodeParameters {

    /**
     * Default: "attendee"
     */
    readonly resource?: "attendee" | "coorganizer" | "panelist" | "registrant" | "session" | "webinar";

    /**
     * Default: "get"
     */
    readonly operation?: "get" | "getAll" | "getDetails" | "create" | "delete" | "getAll" | "reinvite" | "create" | "delete" | "get" | "getAll" | "create" | "get" | "getAll" | "update";

    /**
     * Key of the webinar that the attendee attended. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getWebinars"}
     */
    readonly webinarKey?: string;

    /**
     * Key of the session that the attendee attended. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getWebinarSessions","loadOptionsDependsOn":["webinarKey"]}
     */
    readonly sessionKey?: string;

    /**
     * Registrant key of the attendee at the webinar session
     */
    readonly registrantKey?: string;

    /**
     * The details to retrieve for the attendee
     */
    readonly details?: "polls" | "questions" | "surveyAnswers" | "performance" | "polls" | "questions" | "surveys";

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 10
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Whether the co-organizer has no GoToWebinar account
     */
    readonly isExternal?: boolean;

    /**
     * The co-organizer's organizer key for the webinar
     */
    readonly organizerKey?: string;

    /**
     * The co-organizer's given name
     */
    readonly givenName?: string;

    /**
     * The co-organizer's email address
     */
    readonly email?: string;

    /**
     * Key of the co-organizer to delete
     */
    readonly coorganizerKey?: string;

    /**
     * Name of the panelist to create
     */
    readonly name?: string;

    /**
     * Key of the panelist to delete
     */
    readonly panelistKey?: string;

    /**
     * First name of the registrant to create
     */
    readonly firstName?: string;

    /**
     * Last name of the registrant to create
     */
    readonly lastName?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "fullAddress"?: { "details": any }, "industry"?: string, "jobTitle"?: string, "multiChoiceResponses"?: { "details": any }, "numberOfEmployees"?: string, "organization"?: string, "phone"?: string, "purchasingRole"?: string, "purchasingTimeFrame"?: string, "questionsAndComments"?: string, "resendConfirmation"?: boolean, "simpleResponses"?: { "details": any }, "source"?: string } | { "times": { "timesProperties": any }, "webinarKey"?: string } | { "description"?: string, "experienceType"?: "CLASSIC" | "BROADCAST" | "SIMULIVE", "isOnDemand"?: boolean, "isPasswordProtected"?: boolean, "timezone"?: string, "type"?: "single_session" | "series" | "sequence" } | { "sendCancellationEmails"?: boolean } | { "times": { "timesProperties": any } };

    readonly subject?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly times?: { "timesProperties": any };

    readonly notifyParticipants?: boolean;

    /**
     * Default: {}
     */
    readonly updateFields?: { "description"?: string, "experienceType"?: "CLASSIC" | "BROADCAST" | "SIMULIVE", "isOnDemand"?: boolean, "isPasswordProtected"?: boolean, "times"?: { "timesProperties": any }, "subject"?: string, "timezone"?: string, "type"?: "single_session" | "series" | "sequence" };


}

