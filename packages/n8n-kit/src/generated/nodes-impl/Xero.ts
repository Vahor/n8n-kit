// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { XeroOAuth2ApiCredentials } from "../credentials/XeroOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { XeroNodeParameters } from "../nodes/Xero";
import { Node, type NodeProps } from "../../nodes";

export interface XeroProps extends NodeProps {
    readonly parameters: XeroNodeParameters;
    readonly xeroOAuth2ApiCredentials: Credentials<XeroOAuth2ApiCredentials>;
}

/**
 * Consume Xero API
 */
export class Xero<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.xero" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: XeroProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.xeroOAuth2ApiCredentials];
    }

}
