// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { Sms77ApiCredentials } from "../credentials/Sms77Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { Sms77NodeParameters } from "../nodes/Sms77";
import { Node, type NodeProps } from "../../nodes/node";

export interface Sms77Props extends NodeProps {
    readonly parameters: Sms77NodeParameters;
    readonly sms77ApiCredentials: Credentials<Sms77ApiCredentials>;
}

/**
 * Send SMS and make text-to-speech calls
 */
export class Sms77<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.sms77" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: Sms77Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.sms77ApiCredentials];
    }

}
