// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/trigger/ChatTrigger/ChatTrigger.node.ts' node

export const description = "Runs the workflow when an n8n generated webchat is submitted" as const;
export const type = "@n8n/n8n-nodes-langchain.chatTrigger" as const;
export const version = 1.3 as const;
export const credentials = [{"name":"httpBasicAuth","required":true,"displayOptions":{"show":{"authentication":["basicAuth"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface ChatTriggerNodeParameters {
    /**
     * Whether the chat should be publicly available or only accessible through the manual chat interface
     */
    readonly public?: boolean;

    /**
     * Default: "hostedChat"
     */
    readonly mode?: "hostedChat" | "webhook";

    readonly hostedChatNotice?: string;

    readonly embeddedChatNotice?: string;

    /**
     * The way to authenticate
     * Default: "none"
     */
    readonly authentication?: "basicAuth" | "n8nUserAuth" | "none";

    /**
     * Default messages shown at the start of the chat, one per line
     * Default: "Hi there! 👋\nMy name is Nathan. How can I assist you today?"
     * Type options: {"rows":3}
     */
    readonly initialMessages?: string;

    /**
     * Default: {}
     */
    readonly options?: { "allowFileUploads"?: boolean, "allowedFilesMimeTypes"?: string } | { "allowedOrigins"?: string, "allowFileUploads"?: boolean, "allowedFilesMimeTypes"?: string, "inputPlaceholder"?: string, "loadPreviousSession"?: "notSupported" | "memory" | "manually", "showWelcomeScreen"?: boolean, "getStarted"?: string, "subtitle"?: string, "title"?: string, "customCss"?: string, "responseMode"?: "lastNode" | "responseNode" } | { "allowedOrigins"?: string, "allowFileUploads"?: boolean, "allowedFilesMimeTypes"?: string, "inputPlaceholder"?: string, "loadPreviousSession"?: "notSupported" | "memory" | "manually", "showWelcomeScreen"?: boolean, "getStarted"?: string, "subtitle"?: string, "title"?: string, "customCss"?: string, "responseMode"?: "lastNode" | "responseNode" | "streaming" } | { "allowFileUploads"?: boolean, "allowedFilesMimeTypes"?: string, "responseMode"?: "lastNode" | "responseNodes" } | { "allowedOrigins"?: string, "allowFileUploads"?: boolean, "allowedFilesMimeTypes"?: string, "inputPlaceholder"?: string, "loadPreviousSession"?: "notSupported" | "memory" | "manually", "showWelcomeScreen"?: boolean, "getStarted"?: string, "subtitle"?: string, "title"?: string, "customCss"?: string, "responseMode"?: "lastNode" | "streaming" | "responseNode" | "lastNode" | "streaming" | "responseNodes" };

}
