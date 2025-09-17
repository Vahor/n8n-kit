// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { QuickBaseApiCredentials } from "../credentials/QuickBaseApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { QuickBaseNodeParameters } from "../nodes/QuickBase";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface QuickBaseProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: QuickBaseNodeParameters;
    readonly quickbaseApiCredentials: Credentials<QuickBaseApiCredentials>;
}

/**
 * Integrate with the Quick Base RESTful API
 */
export class QuickBase<L extends string, C extends IContext = never, P extends QuickBaseProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.quickbase" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.quickbaseApiCredentials];
    }

}
