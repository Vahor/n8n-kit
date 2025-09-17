// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZohoOAuth2ApiCredentials } from "../credentials/ZohoOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ZohoCrmNodeParameters } from "../nodes/ZohoCrm";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ZohoCrmProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ZohoCrmNodeParameters;
    readonly zohoOAuth2ApiCredentials: Credentials<ZohoOAuth2ApiCredentials>;
}

/**
 * Consume Zoho CRM API
 */
export class ZohoCrm<L extends string, C extends IContext = never, P extends ZohoCrmProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.zohoCrm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.zohoOAuth2ApiCredentials];
    }

}
