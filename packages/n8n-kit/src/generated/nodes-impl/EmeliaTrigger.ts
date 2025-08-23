// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { EmeliaApiCredentials } from "../credentials/EmeliaApi.ts";
import type { Credentials } from "../../credentials";
import type { EmeliaTriggerNodeParameters } from "../nodes/EmeliaTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface EmeliaTriggerProps extends NodeProps, EmeliaTriggerNodeParameters {

    readonly emeliaApiCredentials: Credentials<EmeliaApiCredentials>;

}

export class EmeliaTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.emeliaTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmeliaTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmeliaTriggerNodeParameters, "emeliaApiCredentials"> {

        const { emeliaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.emeliaApiCredentials];

    }


}

