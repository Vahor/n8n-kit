// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CiscoWebexOAuth2ApiCredentials } from "../credentials/CiscoWebexOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CiscoWebexNodeParameters } from "../nodes/CiscoWebex";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CiscoWebexProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CiscoWebexNodeParameters;
    readonly ciscoWebexOAuth2ApiCredentials: Credentials<CiscoWebexOAuth2ApiCredentials>;
}

/**
 * Consume the Cisco Webex API
 */
export class CiscoWebex<L extends string, C extends IContext = never, P extends CiscoWebexProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.ciscoWebex" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.ciscoWebexOAuth2ApiCredentials];
    }

}
