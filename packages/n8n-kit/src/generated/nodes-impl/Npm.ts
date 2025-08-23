// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NpmApiCredentials } from "../credentials/NpmApi.ts";
import type { Credentials } from "../../credentials";
import type { NpmNodeParameters } from "../nodes/Npm";
import { Node, type NodeProps } from "../../nodes";

export interface NpmProps extends NodeProps {

    readonly parameters: NpmNodeParameters;
    readonly npmApiCredentials?: Credentials<NpmApiCredentials>;

}

export class Npm<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.npm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: NpmProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.npmApiCredentials];

    }


}
