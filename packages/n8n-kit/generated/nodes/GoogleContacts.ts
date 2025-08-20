// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/Contacts/GoogleContacts.node.ts' node

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


}

