// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HighLevelOAuth2ApiCredentials } from "../credentials/HighLevelOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { HighLevelV2NodeParameters } from "../nodes/HighLevelV2";
import { Node, type NodeProps } from "../../nodes";

export interface HighLevelV2Props extends NodeProps, HighLevelV2NodeParameters {

    readonly highLevelOAuth2ApiCredentials: Credentials<HighLevelOAuth2ApiCredentials>;

}

export class HighLevelV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.highLevel" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props: HighLevelV2Props) {

        super(id, props);

    }

    override getParameters() : Omit<HighLevelV2NodeParameters, "highLevelOAuth2ApiCredentials"> {

        const { highLevelOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.highLevelOAuth2ApiCredentials];

    }


}

