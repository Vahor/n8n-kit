// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TotpApiCredentials } from "../credentials/TotpApi.ts";
import type { Credentials } from "../../credentials";
import type { TotpNodeParameters } from "../nodes/Totp";
import { Node, type NodeProps } from "../../nodes";

export interface TotpProps extends NodeProps, TotpNodeParameters {

    readonly totpApiCredentials: Credentials<TotpApiCredentials>;

}

export class Totp<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.totp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: TotpProps) {

        super(id, props);

    }

    override getParameters() : Omit<TotpNodeParameters, "totpApiCredentials"> {

        const { totpApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.totpApiCredentials];

    }


}

