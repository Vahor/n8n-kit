// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftToDoOAuth2ApiCredentials } from "../credentials/MicrosoftToDoOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftToDoNodeParameters } from "../nodes/MicrosoftToDo";
import { Node, type NodeProps } from "../../nodes";

export interface MicrosoftToDoProps extends NodeProps {

    readonly parameters: MicrosoftToDoNodeParameters;
    readonly microsoftToDoOAuth2ApiCredentials: Credentials<MicrosoftToDoOAuth2ApiCredentials>;

}

export class MicrosoftToDo<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.microsoftToDo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MicrosoftToDoProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.microsoftToDoOAuth2ApiCredentials];

    }


}
