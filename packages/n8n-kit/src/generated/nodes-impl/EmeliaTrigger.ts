// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { EmeliaApiCredentials } from "../credentials/EmeliaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { EmeliaTriggerNodeParameters } from "../nodes/EmeliaTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface EmeliaTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: EmeliaTriggerNodeParameters;
    readonly emeliaApiCredentials: Credentials<EmeliaApiCredentials>;
}

/**
 * Handle Emelia campaign activity events via webhooks
 */
export class EmeliaTrigger<L extends string, C extends IContext = never, P extends EmeliaTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.emeliaTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.emeliaApiCredentials];
    }

}
