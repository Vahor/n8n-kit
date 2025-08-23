// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZohoOAuth2ApiCredentials } from "../credentials/ZohoOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { ZohoCrmNodeParameters } from "../nodes/ZohoCrm";
import { Node, type NodeProps } from "../../nodes";

export interface ZohoCrmProps extends NodeProps, ZohoCrmNodeParameters {

    readonly zohoOAuth2ApiCredentials: Credentials<ZohoOAuth2ApiCredentials>;

}

export class ZohoCrm<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.zohoCrm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: ZohoCrmProps) {

        super(id, props);

    }

    override getParameters() : Omit<ZohoCrmNodeParameters, "zohoOAuth2ApiCredentials"> {

        const { zohoOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.zohoOAuth2ApiCredentials];

    }


}

