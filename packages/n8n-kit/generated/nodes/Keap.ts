// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Keap/Keap.node.ts' node

export const name = "keap" as const;
export const description = "Consume Keap API" as const;
export const version = 1 as const;

/**
 * Consume Keap API
 */
export interface KeapNodeParameters {

    /**
     * Default: "company"
     */
    readonly resource?: "company" | "contact" | "contactNote" | "contactTag" | "ecommerceOrder" | "ecommerceProduct" | "email" | "file";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "getAll" | "upsert" | "delete" | "get" | "getAll" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "getAll" | "create" | "get" | "delete" | "getAll" | "create" | "delete" | "get" | "getAll" | "createRecord" | "getAll" | "send" | "delete" | "getAll" | "upload";

    /**
     */
    readonly companyName?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "emailAddress"?: string, "notes"?: string, "optInReason"?: string, "website"?: string } | { "anniversary"?: string, "companyId"?: number, "contactType"?: string, "familyName"?: string, "givenName"?: string, "ipAddress"?: string, "jobTitle"?: string, "leadSourceId"?: number, "middleName"?: string, "optInReason"?: string, "ownerId"?: string, "preferredLocale"?: string, "preferredName"?: string, "sourceType"?: "API" | "IMPORT" | "LANDINGPAGE" | "MANUAL" | "OTHER" | "UNKNOWN", "spouseName"?: string, "timezone"?: string, "website"?: string } | { "body"?: string, "title"?: string, "type"?: "appointment" | "call" | "email" | "fax" | "letter" | "other" } | { "body"?: string, "contactId"?: number, "title"?: string, "type"?: "appointment" | "call" | "email" | "fax" | "letter" | "other", "userId"?: string } | { "leadAffiliateId"?: number, "promoCodes"?: string, "salesAffiliateId"?: number } | { "active"?: boolean, "productDesc"?: string, "productPrice"?: number, "productShortDesc"?: string, "sku"?: string, "subscriptionOnly"?: boolean } | { "clickedDate"?: string, "contactId"?: number, "headers"?: string, "htmlContent"?: string, "openedDate"?: string, "originalProvider"?: "UNKNOWN" | "INFUSIONSOFT" | "MICROSOFT" | "GOOGLE", "originalProviderId"?: string, "plainContent"?: string, "providerSourceId"?: string, "receivedDate"?: string, "sentDate"?: string, "sentFromReplyAddress"?: string, "sentToBccAddresses"?: string, "sentToCCAddresses"?: string, "subject"?: string } | { "addressField"?: string, "htmlContent"?: string, "plainContent"?: string };

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly addressesUi?: { "addressesValues": any } | { "addressesValues": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly faxesUi?: { "faxesValues": any } | { "faxesValues": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly phonesUi?: { "phonesValues": any } | { "phonesValues": any };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean | boolean | boolean | boolean | boolean | boolean | boolean | boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":200}
     */
    readonly limit?: number | number | number | number | number | number | number | number;

    /**
     * Default: {}
     */
    readonly options?: { "companyName"?: string, "order"?: "datecreated" | "id" | "name", "orderDirection"?: "ascending" | "descending", "fields"?: string } | { "fields"?: string } | { "email"?: string, "givenName"?: string, "familyName"?: string, "order"?: "date" | "email" | "id" | "name", "orderDirection"?: "ascending" | "descending", "since"?: string, "until"?: string } | { "since"?: string, "until"?: string, "paid"?: boolean, "order"?: string, "contactId"?: number, "productId"?: number };

    /**
     * Performs duplicate checking by one of the following options: Email, EmailAndName. If a match is found using the option provided, the existing contact will be updated.
     * Default: "email"
     */
    readonly duplicateOption?: "email" | "emailAndName";

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly emailsUi?: { "emailsValues": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly socialAccountsUi?: { "socialAccountsValues": any };

    /**
     */
    readonly contactId?: string | string | string | string | string | string | string | string;

    /**
     * The infusionsoft user to create the note on behalf of. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getUsers"}
     */
    readonly userId?: string | string;

    /**
     */
    readonly noteId?: string | string | string;

    /**
     * Default: {}
     */
    readonly filters?: { "contactId"?: number, "userId"?: string } | { "active"?: boolean } | { "contactId"?: number, "email"?: string, "sinceSentDate"?: string, "untilSentDate"?: string } | { "contactId"?: number, "name"?: string, "permission"?: "user" | "company" | "both", "type"?: "application" | "attachment" | "contact" | "digitalProduct" | "fax" | "funnel" | "hidden" | "image" | "import" | "logoThumnail" | "reSampledImage" | "styleCart" | "templateThumnail" | "ticket" | "webform", "viewable"?: "public" | "private" | "both" };

    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getTags"}
     */
    readonly tagIds?: string[] | string;

    /**
     */
    readonly orderDate?: string;

    /**
     */
    readonly orderTitle?: string;

    /**
     */
    readonly orderType?: "offline" | "online";

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly addressUi?: { "addressValues": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly orderItemsUi?: { "orderItemsValues": any };

    /**
     */
    readonly orderId?: string | string;

    /**
     */
    readonly productName?: string;

    /**
     */
    readonly productId?: string | string;

    /**
     */
    readonly sentToAddress?: string;

    /**
     */
    readonly sentFromAddress?: string;

    /**
     * Contact IDs to receive the email. Multiple can be added seperated by comma.
     */
    readonly contactIds?: string;

    /**
     * The subject line of the email
     */
    readonly subject?: string;

    /**
     * Attachments to be sent with each copy of the email, maximum of 10 with size of 1MB each
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly attachmentsUi?: { "attachmentsValues": any, "attachmentsBinary": any };

    /**
     * Whether the data to upload should be taken from binary field
     */
    readonly binaryData?: boolean;

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     */
    readonly fileAssociation?: "company" | "contact" | "user";

    /**
     * The filename of the attached file, including extension
     */
    readonly fileName?: string;

    /**
     * The content of the attachment, encoded in Base64
     */
    readonly fileData?: string;

    /**
     */
    readonly isPublic?: boolean;

    /**
     */
    readonly fileId?: string;


}

