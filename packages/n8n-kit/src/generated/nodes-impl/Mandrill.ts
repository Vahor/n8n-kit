// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MandrillApiCredentials } from "../credentials/MandrillApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MandrillNodeParameters } from "../nodes/Mandrill";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MandrillProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MandrillNodeParameters;
    readonly mandrillApiCredentials: Credentials<MandrillApiCredentials>;
}

/**
 * Consume Mandrill API
 */
export class Mandrill<L extends string, C extends IContext = never, P extends MandrillProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mandrill" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mandrillApiCredentials];
    }

}
