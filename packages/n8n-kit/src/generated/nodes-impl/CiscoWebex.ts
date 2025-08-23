// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CiscoWebexOAuth2ApiCredentials } from "../credentials/CiscoWebexOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { CiscoWebexNodeParameters } from "../nodes/CiscoWebex";
import { Node, type NodeProps } from "../../nodes";

export interface CiscoWebexProps extends NodeProps {

    readonly parameters: CiscoWebexNodeParameters;
    readonly ciscoWebexOAuth2ApiCredentials: Credentials<CiscoWebexOAuth2ApiCredentials>;

}

export class CiscoWebex<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.ciscoWebex" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: CiscoWebexProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.ciscoWebexOAuth2ApiCredentials];

    }


}
