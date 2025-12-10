// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/trigger/ChatTrigger/ChatTrigger.node.ts' node

export const description = "Runs the workflow when an n8n generated webchat is submitted" as const;
export const type = "@n8n/n8n-nodes-langchain.chatTrigger" as const;
export const version = 1.4 as const;
export const credentials = [{"name":"httpBasicAuth","required":true,"displayOptions":{"show":{"authentication":["basicAuth"]}}}] as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"main":"main"} as const;

export interface ChatTriggerNodeParameters {
    /** Whether the chat should be publicly available or only accessible through the manual chat interface */
    readonly public?: boolean;

    /** Default: "hostedChat" */
    readonly mode?: "hostedChat" | "webhook";

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

    /** Whether to make the agent available in n8n Chat */
    readonly availableInChat?: boolean;

    /** The name of the agent on n8n Chat. Name of the workflow is used if left empty. */
    readonly agentName?: string;

    /**
     * The description of the agent on n8n Chat
     * Type options: {"rows":2}
     */
    readonly agentDescription?: string;

    /** Default: {} */
    readonly options?: { allowFileUploads?: boolean, allowedFilesMimeTypes?: string } | { allowedOrigins?: string, allowFileUploads?: boolean, allowedFilesMimeTypes?: string, inputPlaceholder?: string, loadPreviousSession?: "notSupported" | "memory" | "manually", showWelcomeScreen?: boolean, getStarted?: string, subtitle?: string, title?: string, customCss?: string, responseMode?: "lastNode" | "responseNode" } | { allowedOrigins?: string, allowFileUploads?: boolean, allowedFilesMimeTypes?: string, inputPlaceholder?: string, loadPreviousSession?: "notSupported" | "memory" | "manually", showWelcomeScreen?: boolean, getStarted?: string, subtitle?: string, title?: string, customCss?: string, responseMode?: "lastNode" | "responseNode" | "streaming" } | { allowFileUploads?: boolean, allowedFilesMimeTypes?: string, responseMode?: "lastNode" | "responseNodes" | "streaming" | "streaming" } | { allowedOrigins?: string, allowFileUploads?: boolean, allowedFilesMimeTypes?: string, inputPlaceholder?: string, loadPreviousSession?: "notSupported" | "memory" | "manually", showWelcomeScreen?: boolean, getStarted?: string, subtitle?: string, title?: string, customCss?: string, responseMode?: "streaming" | "lastNode" | "streaming" | "responseNode" | "lastNode" | "streaming" | "responseNodes" };

}
