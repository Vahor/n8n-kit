// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { QuickBaseApiCredentials } from "../credentials/QuickBaseApi.ts";
import type { Credentials } from "../../credentials";
import type { QuickBaseNodeParameters } from "../nodes/QuickBase";
import { Node, type NodeProps } from "../../nodes";

export interface QuickBaseProps extends NodeProps, QuickBaseNodeParameters {

    readonly quickbaseApiCredentials: Credentials<QuickBaseApiCredentials>;

}

export class QuickBase<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.quickbase" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: QuickBaseProps) {

        super(id, props);

    }

    override getParameters() : Omit<QuickBaseNodeParameters, "quickbaseApiCredentials"> {

        const { quickbaseApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.quickbaseApiCredentials];

    }


}
