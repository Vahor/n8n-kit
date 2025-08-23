// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AcuitySchedulingApiCredentials } from "../credentials/AcuitySchedulingApi.ts";
import type { AcuitySchedulingOAuth2ApiCredentials } from "../credentials/AcuitySchedulingOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { AcuitySchedulingTriggerNodeParameters } from "../nodes/AcuitySchedulingTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface AcuitySchedulingTriggerProps extends NodeProps {

    readonly parameters: AcuitySchedulingTriggerNodeParameters;
    readonly acuitySchedulingApiCredentials?: Credentials<AcuitySchedulingApiCredentials>;
    readonly acuitySchedulingOAuth2ApiCredentials?: Credentials<AcuitySchedulingOAuth2ApiCredentials>;

}

export class AcuitySchedulingTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.acuitySchedulingTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: AcuitySchedulingTriggerProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.acuitySchedulingApiCredentials, this.props!.acuitySchedulingOAuth2ApiCredentials];

    }


}
