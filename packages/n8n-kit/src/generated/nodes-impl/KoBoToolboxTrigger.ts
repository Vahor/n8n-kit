// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KoBoToolboxApiCredentials } from "../credentials/KoBoToolboxApi.ts";
import type { Credentials } from "../../credentials";
import type { KoBoToolboxTriggerNodeParameters } from "../nodes/KoBoToolboxTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface KoBoToolboxTriggerProps extends NodeProps, KoBoToolboxTriggerNodeParameters {

    readonly koBoToolboxApiCredentials: Credentials<KoBoToolboxApiCredentials>;

}

export class KoBoToolboxTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.koBoToolboxTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: KoBoToolboxTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<KoBoToolboxTriggerNodeParameters, "koBoToolboxApiCredentials"> {

        const { koBoToolboxApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.koBoToolboxApiCredentials];

    }


}
