// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WebflowOAuth2ApiCredentials } from "../credentials/WebflowOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { WebflowTriggerV2NodeParameters } from "../nodes/WebflowTriggerV2";
import { Node, type NodeProps } from "../../nodes";

export interface WebflowTriggerV2Props extends NodeProps {

    readonly parameters: WebflowTriggerV2NodeParameters;
    readonly webflowOAuth2ApiCredentials: Credentials<WebflowOAuth2ApiCredentials>;

}

export class WebflowTriggerV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.webflowTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: WebflowTriggerV2Props) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.webflowOAuth2ApiCredentials];

    }


}
