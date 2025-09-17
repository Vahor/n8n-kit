// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AcuitySchedulingApiCredentials } from "../credentials/AcuitySchedulingApi.ts";
import type { AcuitySchedulingOAuth2ApiCredentials } from "../credentials/AcuitySchedulingOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AcuitySchedulingTriggerNodeParameters } from "../nodes/AcuitySchedulingTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AcuitySchedulingTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AcuitySchedulingTriggerNodeParameters;
    readonly acuitySchedulingApiCredentials?: Credentials<AcuitySchedulingApiCredentials>;
    readonly acuitySchedulingOAuth2ApiCredentials?: Credentials<AcuitySchedulingOAuth2ApiCredentials>;
}

/**
 * Handle Acuity Scheduling events via webhooks
 */
export class AcuitySchedulingTrigger<L extends string, C extends IContext = never, P extends AcuitySchedulingTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.acuitySchedulingTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.acuitySchedulingApiCredentials, this.props?.acuitySchedulingOAuth2ApiCredentials];
    }

}
