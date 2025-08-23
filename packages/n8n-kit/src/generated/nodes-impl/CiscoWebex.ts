// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CiscoWebexOAuth2ApiCredentials } from "../credentials/CiscoWebexOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { CiscoWebexNodeParameters } from "../nodes/CiscoWebex";
import { Node, type NodeProps } from "../../nodes";

export interface CiscoWebexProps extends NodeProps, CiscoWebexNodeParameters {

    readonly ciscoWebexOAuth2ApiCredentials: Credentials<CiscoWebexOAuth2ApiCredentials>;

}

export class CiscoWebex<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.ciscoWebex" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: CiscoWebexProps) {

        super(id, props);

    }

    override getParameters() : Omit<CiscoWebexNodeParameters, "ciscoWebexOAuth2ApiCredentials"> {

        const { ciscoWebexOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.ciscoWebexOAuth2ApiCredentials];

    }


}

