// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LemlistApiCredentials } from "../credentials/LemlistApi.ts";
import type { Credentials } from "../../credentials";
import type { LemlistV1NodeParameters } from "../nodes/LemlistV1";
import { Node, type NodeProps } from "../../nodes";

export interface LemlistV1Props extends NodeProps, LemlistV1NodeParameters {

    readonly lemlistApiCredentials: Credentials<LemlistApiCredentials>;

}

export class LemlistV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lemlist" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LemlistV1Props) {

        super(id, props);

    }

    override getParameters() : Omit<LemlistV1NodeParameters, "lemlistApiCredentials"> {

        const { lemlistApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.lemlistApiCredentials];

    }


}
