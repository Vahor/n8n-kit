// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/agents/OpenAiAssistant/OpenAiAssistant.node.ts' node

export const description = "Utilizes Assistant API from Open AI." as const;
export const type = "@n8n/n8n-nodes-langchain.openAiAssistant" as const;
export const version = 1.1 as const;
export const credentials = [{"name":"openAiApi","required":true}] as const;
export const inputs = {"undefined":"main","Tools":"ai_tool"} as const;
export const outputs = {"main":"main"} as const;

export interface OpenAiAssistantNodeParameters {
    /** Default: "existing" */
    readonly mode?: "new" | "existing";

    readonly name?: string;

    /**
     * How the Assistant and model should behave or respond
     * Type options: {"rows":5}
     */
    readonly instructions?: string;

    /**
     * The model which will be used to power the assistant. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>. The Retrieval tool requires gpt-3.5-turbo-1106 and gpt-4-1106-preview models.
     * Default: "gpt-3.5-turbo-1106"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"={{ $parameter.options?.baseURL?.split(\"/\").slice(-1).pop() || \"v1\"  }}/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"filter","properties":{"pass":"={{ $responseItem.id.startsWith('gpt-') && !$responseItem.id.includes('instruct') }}"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.id}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string;

    /**
     * The assistant to use. <a href="https://beta.openai.com/docs/assistants/overview">Learn more</a>.
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","headers":{"OpenAI-Beta":"assistants=v1"},"url":"={{ $parameter.options?.baseURL?.split(\"/\").slice(-1).pop() || \"v1\"  }}/assistants"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.name}}","value":"={{$responseItem.id}}","description":"={{$responseItem.model}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly assistantId?: string;

    /** Default: "={{ $json.chat_input }}" */
    readonly text?: string;

    /** Default: [] */
    readonly nativeTools?: ("code_interpreter" | "retrieval")[];

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { baseURL?: string, maxRetries?: number, timeout?: number };

}
