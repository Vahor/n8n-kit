// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Cisco/Webex/CiscoWebex.node.ts' node

export const description = "Consume the Cisco Webex API" as const;
export const type = "n8n-nodes-base.ciscoWebex" as const;
export const version = 1 as const;
export const credentials = [{"name":"ciscoWebexOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface CiscoWebexNodeParameters {
    /** Default: "message" */
    readonly resource?: "meeting" | "message";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /** Meeting title. The title can be a maximum of 128 characters long. */
    readonly title?: string;

    /** Date and time for the start of the meeting. Acceptable <a href="https://datatracker.ietf.org/doc/html/rfc2445"> format</a>. */
    readonly start?: string;

    /** Date and time for the end of the meeting. Acceptable <a href="https://datatracker.ietf.org/doc/html/rfc2445"> format</a>. */
    readonly end?: string;

    /** Default: {} */
    readonly additionalFields?: { agenda?: string, allowAnyUserToBeCoHost?: boolean, allowAuthenticatedDevices?: boolean, allowFirstUserToBeCoHost?: boolean, autoAcceptRequest?: boolean, enableConnectAudioBeforeHost?: boolean, enabledAutoRecordMeeting?: boolean, enabledJoinBeforeHost?: boolean, excludePassword?: boolean, hostEmail?: string, integrationTags?: string, inviteesUi?: { inviteeValues: { email: string, displayName?: string, coHost?: boolean } }, joinBeforeHostMinutes?: 0 | 5 | 10 | 15, publicMeeting?: boolean, recurrence?: string, requireRegistrationInfo?: ("requireFirstName" | "requireLastName" | "requireEmail" | "requireJobTitle" | "requireCompanyName" | "requireAddress1" | "requireAddress2" | "requireCity" | "requireState" | "requireZipCode" | "requireCountryRegion" | "requireWorkPhone" | "requireFax")[], reminderTime?: number, sendEmail?: boolean, siteUrl?: string } | { attachmentsUi?: { attachmentValues: { elementsUi?: { elementValues: { type?: "textBlock" | "inputText", text: string, color?: "accent" | "attention" | "dark" | "default" | "good" | "light" | "warning", fontType?: "default" | "monospace", horizontalAlignment?: "left" | "center" | "right", isSubtle?: boolean, maxLines?: number, size?: "default" | "extraLarge" | "large" | "medium" | "small", weight?: "default" | "lighter" | "bolder", wrap?: boolean, height?: "auto" | "stretch", separator?: boolean, spacing?: "default" | "extraLarge" | "large" | "medium" | "none" | "padding" | "small", id?: string, isVisible?: boolean, isMultiline?: boolean, maxLength?: number, placeholder?: string, regex?: string, style?: "text" | "tel" | "url" | "email", value?: string } }, actionsUi?: { actionValues: { type?: "execute" | "openUrl" | "submit", url?: string, data?: string, verb?: string, title: string, iconUrl?: string, style?: "default" | "positive" | "destructive" } } } }, fileUi?: { fileValue: { fileLocation?: "url" | "binaryData", binaryPropertyName: string, url?: string } }, markdown?: string };

    /** ID of the meeting */
    readonly meetingId?: string;

    /** Default: {} */
    readonly options?: { hostEmail?: string, sendEmail?: boolean } | { hostEmail?: string, password?: string, sendEmail?: boolean };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { from?: string, hostEmail?: string, integrationTag?: string, current?: boolean, meetingNumber?: string, meetingType?: "meetingSeries" | "scheduledMeeting" | "meeting", participantEmail?: string, siteUrl?: string, state?: "active" | "ended" | "expired" | "inProgress" | "lobby" | "missed" | "ready" | "scheduled", to?: string, webLink?: string } | { before?: string, beforeMessage?: string, parentId?: string, mentionedPeople?: string };

    /** Default: {} */
    readonly updateFields?: { agenda?: string, allowAnyUserToBeCoHost?: boolean, allowAuthenticatedDevices?: boolean, allowFirstUserToBeCoHost?: boolean, enableConnectAudioBeforeHost?: boolean, enabledAutoRecordMeeting?: boolean, enabledJoinBeforeHost?: boolean, end?: string, excludePassword?: boolean, hostEmail?: string, inviteesUi?: { inviteeValues: { email: string, displayName?: string, coHost?: boolean } }, joinBeforeHostMinutes?: 0 | 5 | 10 | 15, password?: string, publicMeeting?: boolean, recurrence?: string, requireRegistrationInfo?: ("requireFirstName" | "requireLastName" | "requireEmail" | "requireJobTitle" | "requireCompanyName" | "requireAddress1" | "requireAddress2" | "requireCity" | "requireState" | "requireZipCode" | "requireCountryRegion" | "requireWorkPhone" | "requireFax")[], reminderTime?: number, sendEmail?: boolean, siteUrl?: string, start?: string, title?: string };

    /** Default: "room" */
    readonly destination?: "room" | "person";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getRooms"}
     */
    readonly roomId?: string;

    /** Default: "email" */
    readonly specifyPersonBy?: "email" | "id";

    readonly toPersonId?: string;

    readonly toPersonEmail?: string;

    /** The message, in plain text */
    readonly text?: string;

    /** ID of the message to delete */
    readonly messageId?: string;

    /** Whether the message uses markdown */
    readonly markdown?: boolean;

    /** The message, in Markdown format. The maximum message length is 7439 bytes. */
    readonly markdownText?: string;

}
