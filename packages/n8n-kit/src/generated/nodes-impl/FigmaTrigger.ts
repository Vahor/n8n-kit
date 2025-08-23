// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FigmaApiCredentials } from "../credentials/FigmaApi.ts";
import type { Credentials } from "../../credentials";
import type { FigmaTriggerNodeParameters } from "../nodes/FigmaTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface FigmaTriggerProps extends NodeProps, FigmaTriggerNodeParameters {

    readonly figmaApiCredentials: Credentials<FigmaApiCredentials>;

}

export class FigmaTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.figmaTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: FigmaTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { figmaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.figmaApiCredentials];

    }


}

