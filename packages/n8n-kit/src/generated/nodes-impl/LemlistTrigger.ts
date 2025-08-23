// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LemlistApiCredentials } from "../credentials/LemlistApi.ts";
import type { Credentials } from "../../credentials";
import type { LemlistTriggerNodeParameters } from "../nodes/LemlistTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface LemlistTriggerProps extends NodeProps, LemlistTriggerNodeParameters {

    readonly lemlistApiCredentials: Credentials<LemlistApiCredentials>;

}

export class LemlistTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lemlistTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LemlistTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<LemlistTriggerNodeParameters, "lemlistApiCredentials"> {

        const { lemlistApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.lemlistApiCredentials];

    }


}

