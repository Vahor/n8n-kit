// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AcuitySchedulingApiCredentials } from "../credentials/AcuitySchedulingApi.ts";
import type { AcuitySchedulingOAuth2ApiCredentials } from "../credentials/AcuitySchedulingOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { AcuitySchedulingTriggerNodeParameters } from "../nodes/AcuitySchedulingTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface AcuitySchedulingTriggerProps extends NodeProps, AcuitySchedulingTriggerNodeParameters {

    readonly acuitySchedulingApiCredentials?: Credentials<AcuitySchedulingApiCredentials>;
    readonly acuitySchedulingOAuth2ApiCredentials?: Credentials<AcuitySchedulingOAuth2ApiCredentials>;

}

export class AcuitySchedulingTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.acuitySchedulingTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: AcuitySchedulingTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<AcuitySchedulingTriggerNodeParameters, "acuitySchedulingApiCredentials | acuitySchedulingOAuth2ApiCredentials"> {

        const { acuitySchedulingApiCredentials:_0, acuitySchedulingOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.acuitySchedulingApiCredentials, this.props.acuitySchedulingOAuth2ApiCredentials];

    }


}

