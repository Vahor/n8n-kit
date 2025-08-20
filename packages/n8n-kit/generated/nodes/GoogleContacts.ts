// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Google/Contacts/GoogleContacts.node.js' node

export const name = "googleContacts" as const;
export const description = "Consume Google Contacts API" as const;
export const version = 1 as const;
export const defaults = {"name":"Google Contacts"} as const;
export const credentials = [{"name":"googleContactsOAuth2Api","required":true}] as const

/**
 * Consume Google Contacts API
 */
export interface GoogleContactsNodeParameters {

    /**
     * Default: "contact"
     */
    readonly resource?: "contact";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     */
    readonly familyName?: string;

    /**
     */
    readonly givenName?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "addressesUi"?: { "addressesValues": any }, "birthday"?: string, "companyUi"?: { "companyValues": any }, "customFieldsUi"?: { "customFieldsValues": any }, "emailsUi"?: { "emailsValues": any }, "eventsUi"?: { "eventsValues": any }, "fileAs"?: string, "group"?: string[], "honorificPrefix"?: string, "honorificSuffix"?: string, "middleName"?: string, "biographies"?: string, "phoneUi"?: { "phoneValues": any }, "relationsUi"?: { "relationsValues": any } };

    /**
     */
    readonly contactId?: string;

    /**
     * A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas.
     * Default: []
     */
    readonly fields?: ("*" | "addresses" | "biographies" | "birthdays" | "coverPhotos" | "emailAddresses" | "events" | "genders" | "imClients" | "interests" | "locales" | "memberships" | "metadata" | "names" | "nicknames" | "occupations" | "organizations" | "phoneNumbers" | "photos" | "relations" | "residences" | "sipAddresses" | "skills" | "urls" | "userDefined")[];

    /**
     * Whether to return the data exactly in the way it got received from the API
     */
    readonly rawData?: boolean;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Whether or not to use a query to filter the results
     */
    readonly useQuery?: boolean;

    /**
     * The plain-text query for the request. The query is used to match prefix phrases of the fields on a person. For example, a person with name "foo name" matches queries such as "f", "fo", "foo", "foo n", "nam", etc., but not "oo n".
     */
    readonly query?: string;

    /**
     * Default: {}
     */
    readonly options?: { "sortOrder"?: "LAST_MODIFIED_ASCENDING" | "LAST_MODIFIED_DESCENDING" | "FIRST_NAME_ASCENDING" | "LAST_NAME_ASCENDING" };

    /**
     * Default: {}
     */
    readonly updateFields?: { "etag"?: string, "familyName"?: string, "givenName"?: string, "addressesUi"?: { "addressesValues": any }, "birthday"?: string, "companyUi"?: { "companyValues": any }, "customFieldsUi"?: { "customFieldsValues": any }, "emailsUi"?: { "emailsValues": any }, "eventsUi"?: { "eventsValues": any }, "fileAs"?: string, "group"?: string[], "honorificPrefix"?: string, "honorificSuffix"?: string, "middleName"?: string, "biographies"?: string, "phoneUi"?: { "phoneValues": any }, "relationsUi"?: { "relationsValues": any } };


}

