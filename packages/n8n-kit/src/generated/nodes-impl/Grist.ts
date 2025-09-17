// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GristApiCredentials } from "../credentials/GristApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GristNodeParameters } from "../nodes/Grist";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GristProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GristNodeParameters;
    readonly gristApiCredentials: Credentials<GristApiCredentials>;
}

/**
 * Consume the Grist API
 */
export class Grist<L extends string, C extends IContext = never, P extends GristProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.grist" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.gristApiCredentials];
    }

}
