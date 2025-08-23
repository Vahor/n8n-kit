// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AsanaApiCredentials } from "../credentials/AsanaApi.ts";
import type { AsanaOAuth2ApiCredentials } from "../credentials/AsanaOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { AsanaTriggerNodeParameters } from "../nodes/AsanaTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface AsanaTriggerProps extends NodeProps {

    readonly parameters: AsanaTriggerNodeParameters;
    readonly asanaApiCredentials?: Credentials<AsanaApiCredentials>;
    readonly asanaOAuth2ApiCredentials?: Credentials<AsanaOAuth2ApiCredentials>;

}

export class AsanaTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.asanaTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: AsanaTriggerProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.asanaApiCredentials, this.props!.asanaOAuth2ApiCredentials];

    }


}
