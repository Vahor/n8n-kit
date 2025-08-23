// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoToWebinarOAuth2ApiCredentials } from "../credentials/GoToWebinarOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoToWebinarNodeParameters } from "../nodes/GoToWebinar";
import { Node, type NodeProps } from "../../nodes";

export interface GoToWebinarProps extends NodeProps, GoToWebinarNodeParameters {

    readonly goToWebinarOAuth2ApiCredentials: Credentials<GoToWebinarOAuth2ApiCredentials>;

}

export class GoToWebinar<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.goToWebinar" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: GoToWebinarProps) {

        super(id, props);

    }

    override getParameters() : Omit<GoToWebinarNodeParameters, "goToWebinarOAuth2ApiCredentials"> {

        const { goToWebinarOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.goToWebinarOAuth2ApiCredentials];

    }


}
