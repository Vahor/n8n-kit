// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JotFormApiCredentials } from "../credentials/JotFormApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { JotFormTriggerNodeParameters } from "../nodes/JotFormTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface JotFormTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: JotFormTriggerNodeParameters;
    readonly jotFormApiCredentials: Credentials<JotFormApiCredentials>;
}

/**
 * Handle JotForm events via webhooks
 */
export class JotFormTrigger<L extends string, C extends IContext = never, P extends JotFormTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.jotFormTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.jotFormApiCredentials];
    }

}
