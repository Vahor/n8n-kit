// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MattermostApiCredentials } from "../credentials/MattermostApi.ts";
import type { Credentials } from "../../credentials";
import type { MattermostV1NodeParameters } from "../nodes/MattermostV1";
import { Node, type NodeProps } from "../../nodes";

export interface MattermostV1Props extends NodeProps {

    readonly parameters: MattermostV1NodeParameters;
    readonly mattermostApiCredentials: Credentials<MattermostApiCredentials>;

}

export class MattermostV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mattermost" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MattermostV1Props) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.mattermostApiCredentials];

    }


}
