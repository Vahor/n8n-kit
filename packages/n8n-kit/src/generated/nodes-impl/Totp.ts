// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TotpApiCredentials } from "../credentials/TotpApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TotpNodeParameters } from "../nodes/Totp";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TotpProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TotpNodeParameters;
    readonly totpApiCredentials: Credentials<TotpApiCredentials>;
}

/**
 * Generate a time-based one-time password
 */
export class Totp<L extends string, C extends IContext = never, P extends TotpProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.totp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.totpApiCredentials];
    }

}
