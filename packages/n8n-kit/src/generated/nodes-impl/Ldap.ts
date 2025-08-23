// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LdapCredentials } from "../credentials/Ldap.ts";
import type { Credentials } from "../../credentials";
import type { LdapNodeParameters } from "../nodes/Ldap";
import { Node, type NodeProps } from "../../nodes";

export interface LdapProps extends NodeProps, LdapNodeParameters {

    readonly ldapCredentials: Credentials<LdapCredentials>;

}

export class Ldap<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.ldap" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LdapProps) {

        super(id, props);

    }

    override getParameters() : Omit<LdapNodeParameters, "ldapCredentials"> {

        const { ldapCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.ldapCredentials];

    }


}
