// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LdapCredentials } from "../credentials/Ldap.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { LdapNodeParameters } from "../nodes/Ldap";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LdapProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LdapNodeParameters;
    readonly ldapCredentials: Credentials<LdapCredentials>;
}

/**
 * Interact with LDAP servers
 */
export class Ldap<L extends string, C extends IContext = never, P extends LdapProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.ldap" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.ldapCredentials];
    }

}
