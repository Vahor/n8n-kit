// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NpmApiCredentials } from "../credentials/NpmApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { NpmNodeParameters } from "../nodes/Npm";
import { Node, type NodeProps } from "../../nodes/node";

export interface NpmProps extends NodeProps {
    readonly parameters: NpmNodeParameters;
    readonly npmApiCredentials?: Credentials<NpmApiCredentials>;
}

/**
 * Consume NPM registry API
 */
export class Npm<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.npm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: NpmProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.npmApiCredentials];
    }

}
