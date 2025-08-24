// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DropcontactApiCredentials } from "../credentials/DropcontactApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { DropcontactNodeParameters } from "../nodes/Dropcontact";
import { Node, type NodeProps } from "../../nodes/node";

export interface DropcontactProps extends NodeProps {
    readonly parameters: DropcontactNodeParameters;
    readonly dropcontactApiCredentials: Credentials<DropcontactApiCredentials>;
}

/**
 * Find B2B emails and enrich contacts
 */
export class Dropcontact<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.dropcontact" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: DropcontactProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.dropcontactApiCredentials];
    }

}
