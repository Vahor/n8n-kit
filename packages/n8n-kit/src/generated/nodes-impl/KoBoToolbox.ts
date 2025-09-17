// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KoBoToolboxApiCredentials } from "../credentials/KoBoToolboxApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { KoBoToolboxNodeParameters } from "../nodes/KoBoToolbox";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface KoBoToolboxProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: KoBoToolboxNodeParameters;
    readonly koBoToolboxApiCredentials: Credentials<KoBoToolboxApiCredentials>;
}

/**
 * Work with KoBoToolbox forms and submissions
 */
export class KoBoToolbox<L extends string, C extends IContext = never, P extends KoBoToolboxProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.koBoToolbox" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.koBoToolboxApiCredentials];
    }

}
