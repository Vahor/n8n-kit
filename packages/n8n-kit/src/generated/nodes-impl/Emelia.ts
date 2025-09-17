// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { EmeliaApiCredentials } from "../credentials/EmeliaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { EmeliaNodeParameters } from "../nodes/Emelia";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface EmeliaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: EmeliaNodeParameters;
    readonly emeliaApiCredentials: Credentials<EmeliaApiCredentials>;
}

/**
 * Consume the Emelia API
 */
export class Emelia<L extends string, C extends IContext = never, P extends EmeliaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.emelia" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.emeliaApiCredentials];
    }

}
