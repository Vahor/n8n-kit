// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KoBoToolboxApiCredentials } from "../credentials/KoBoToolboxApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { KoBoToolboxTriggerNodeParameters } from "../nodes/KoBoToolboxTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface KoBoToolboxTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: KoBoToolboxTriggerNodeParameters;
    readonly koBoToolboxApiCredentials: Credentials<KoBoToolboxApiCredentials>;
}

/**
 * Process KoBoToolbox submissions
 */
export class KoBoToolboxTrigger<L extends string, C extends IContext = never, P extends KoBoToolboxTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.koBoToolboxTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.koBoToolboxApiCredentials];
    }

}
