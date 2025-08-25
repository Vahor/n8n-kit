// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TotpApiCredentials } from "../credentials/TotpApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TotpNodeParameters } from "../nodes/Totp";
import { Node, type NodeProps } from "../../nodes/node";

export interface TotpProps extends NodeProps {
    readonly parameters: TotpNodeParameters;
    readonly totpApiCredentials: Credentials<TotpApiCredentials>;
}

/**
 * Generate a time-based one-time password
 */
export class Totp<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.totp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TotpProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.totpApiCredentials];
    }

}
