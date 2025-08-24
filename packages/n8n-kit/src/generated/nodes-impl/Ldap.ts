// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LdapCredentials } from "../credentials/Ldap.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { LdapNodeParameters } from "../nodes/Ldap";
import { Node, type NodeProps } from "../../nodes/node";

export interface LdapProps extends NodeProps {
    readonly parameters: LdapNodeParameters;
    readonly ldapCredentials: Credentials<LdapCredentials>;
}

/**
 * Interact with LDAP servers
 */
export class Ldap<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.ldap" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LdapProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.ldapCredentials];
    }

}
