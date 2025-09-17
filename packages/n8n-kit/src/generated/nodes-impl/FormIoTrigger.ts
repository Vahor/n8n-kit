// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FormIoApiCredentials } from "../credentials/FormIoApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FormIoTriggerNodeParameters } from "../nodes/FormIoTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FormIoTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FormIoTriggerNodeParameters;
    readonly formIoApiCredentials: Credentials<FormIoApiCredentials>;
}

/**
 * Handle form.io events via webhooks
 */
export class FormIoTrigger<L extends string, C extends IContext = never, P extends FormIoTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.formIoTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.formIoApiCredentials];
    }

}
