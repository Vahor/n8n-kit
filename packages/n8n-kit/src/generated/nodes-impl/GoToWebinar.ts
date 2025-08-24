// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoToWebinarOAuth2ApiCredentials } from "../credentials/GoToWebinarOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoToWebinarNodeParameters } from "../nodes/GoToWebinar";
import { Node, type NodeProps } from "../../nodes/node";

export interface GoToWebinarProps extends NodeProps {
    readonly parameters: GoToWebinarNodeParameters;
    readonly goToWebinarOAuth2ApiCredentials: Credentials<GoToWebinarOAuth2ApiCredentials>;
}

/**
 * Consume the GoToWebinar API
 */
export class GoToWebinar<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.goToWebinar" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: GoToWebinarProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.goToWebinarOAuth2ApiCredentials];
    }

}
