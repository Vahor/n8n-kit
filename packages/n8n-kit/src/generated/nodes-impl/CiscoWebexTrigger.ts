// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CiscoWebexOAuth2ApiCredentials } from "../credentials/CiscoWebexOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { CiscoWebexTriggerNodeParameters } from "../nodes/CiscoWebexTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface CiscoWebexTriggerProps extends NodeProps, CiscoWebexTriggerNodeParameters {

    readonly ciscoWebexOAuth2ApiCredentials: Credentials<CiscoWebexOAuth2ApiCredentials>;

}

export class CiscoWebexTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.ciscoWebexTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: CiscoWebexTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<CiscoWebexTriggerNodeParameters, "ciscoWebexOAuth2ApiCredentials"> {

        const { ciscoWebexOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.ciscoWebexOAuth2ApiCredentials];

    }


}
