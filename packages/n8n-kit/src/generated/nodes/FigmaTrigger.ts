// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Figma/FigmaTrigger.node.ts' node

export const description = "Starts the workflow when Figma events occur" as const;
export const type = "n8n-nodes-base.figmaTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"figmaApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"figmaOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface FigmaTriggerNodeParameters {
    /** Default: "accessToken" */
    readonly authentication?: "accessToken" | "oAuth2";

    /** Trigger will monitor this Figma Team for changes. Team ID can be found in the URL of a Figma Team page when viewed in a web browser: figma.com/files/team/{TEAM-ID}/. */
    readonly teamId?: string;

    readonly triggerOn?: "fileComment" | "fileDelete" | "fileUpdate" | "fileVersionUpdate" | "libraryPublish";

}
