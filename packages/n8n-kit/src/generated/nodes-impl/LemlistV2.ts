// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LemlistApiCredentials } from "../credentials/LemlistApi.ts";
import type { Credentials } from "../../credentials";
import type { LemlistV2NodeParameters } from "../nodes/LemlistV2";
import { Node, type NodeProps } from "../../nodes";

export interface LemlistV2Props extends NodeProps, LemlistV2NodeParameters {

    readonly lemlistApiCredentials: Credentials<LemlistApiCredentials>;

}

export class LemlistV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lemlist" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props?: LemlistV2Props) {

        super(id, props);

    }

    override getParameters() {

        const { lemlistApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.lemlistApiCredentials];

    }


}

