// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Contacts/GoogleContacts.node.ts' node

export const description = "Consume Google Contacts API" as const;
export const type = "n8n-nodes-base.googleContacts" as const;
export const version = 1 as const;
export const credentials = [{"name":"googleContactsOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleContactsNodeParameters {
    /** Default: "contact" */
    readonly resource?: "contact";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    readonly familyName?: string;

    readonly givenName?: string;

    /** Default: {} */
    readonly additionalFields?: { addressesUi?: { addressesValues: { streetAddress?: string, city?: string, region?: string, countryCode?: string, postalCode?: string, type?: "home" | "work" | "other" } }, birthday?: string, companyUi?: { companyValues: Array<{ current?: boolean, domain?: string, name?: string, title?: string }> }, customFieldsUi?: { customFieldsValues: Array<{ key?: string, value?: string }> }, emailsUi?: { emailsValues: Array<{ type?: "home" | "work" | "other", value?: string }> }, eventsUi?: { eventsValues: Array<{ date?: string, type?: "anniversary" | "other" }> }, fileAs?: string, group?: unknown[], honorificPrefix?: string, honorificSuffix?: string, middleName?: string, biographies?: string, phoneUi?: { phoneValues: Array<{ type?: "googleVoice" | "home" | "homeFax" | "main" | "mobile" | "other" | "otherFax" | "pager" | "work" | "workFax" | "workMobile" | "workPager", value?: string }> }, relationsUi?: { relationsValues: Array<{ person?: string, type?: "assistant" | "brother" | "child" | "domesticPartner" | "father" | "friend" | "manager" | "mother" | "parent" | "referredBy" | "relative" | "sister" | "spouse" }> } };

    readonly contactId?: string;

    /**
     * A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas.
     * Default: []
     */
    readonly fields?: ("*" | "addresses" | "biographies" | "birthdays" | "coverPhotos" | "emailAddresses" | "events" | "genders" | "imClients" | "interests" | "locales" | "memberships" | "metadata" | "names" | "nicknames" | "occupations" | "organizations" | "phoneNumbers" | "photos" | "relations" | "residences" | "sipAddresses" | "skills" | "urls" | "userDefined")[];

    /** Whether to return the data exactly in the way it got received from the API */
    readonly rawData?: boolean;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /** Whether or not to use a query to filter the results */
    readonly useQuery?: boolean;

    /** The plain-text query for the request. The query is used to match prefix phrases of the fields on a person. For example, a person with name "foo name" matches queries such as "f", "fo", "foo", "foo n", "nam", etc., but not "oo n". */
    readonly query?: string;

    /** Default: {} */
    readonly options?: { sortOrder?: "LAST_MODIFIED_ASCENDING" | "LAST_MODIFIED_DESCENDING" | "FIRST_NAME_ASCENDING" | "LAST_NAME_ASCENDING" };

    /** Default: {} */
    readonly updateFields?: { etag?: string, familyName?: string, givenName?: string, addressesUi?: { addressesValues: { streetAddress?: string, city?: string, region?: string, countryCode?: string, postalCode?: string, type?: "home" | "work" | "other" } }, birthday?: string, companyUi?: { companyValues: Array<{ current?: boolean, domain?: string, name?: string, title?: string }> }, customFieldsUi?: { customFieldsValues: Array<{ key?: string, value?: string }> }, emailsUi?: { emailsValues: Array<{ type?: "home" | "work" | "other", value?: string }> }, eventsUi?: { eventsValues: Array<{ date?: string, type?: "anniversary" | "other" }> }, fileAs?: string, group?: unknown[], honorificPrefix?: string, honorificSuffix?: string, middleName?: string, biographies?: string, phoneUi?: { phoneValues: Array<{ type?: "googleVoice" | "home" | "homeFax" | "main" | "mobile" | "other" | "otherFax" | "pager" | "work" | "workFax" | "workMobile" | "workPager", value?: string }> }, relationsUi?: { relationsValues: Array<{ person?: string, type?: "assistant" | "brother" | "child" | "domesticPartner" | "father" | "friend" | "manager" | "mother" | "parent" | "referredBy" | "relative" | "sister" | "spouse" }> } };

}
