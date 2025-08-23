// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JwtAuthCredentials } from "../credentials/JwtAuth.ts";
import type { Credentials } from "../../credentials";
import type { JwtNodeParameters } from "../nodes/Jwt";
import { Node, type NodeProps } from "../../nodes";

export interface JwtProps extends NodeProps {

    readonly parameters: JwtNodeParameters;
    readonly jwtAuthCredentials: Credentials<JwtAuthCredentials>;

}

/**
 * JWT
 */
export class Jwt<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.jwt" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: JwtProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.jwtAuthCredentials];

    }


}
