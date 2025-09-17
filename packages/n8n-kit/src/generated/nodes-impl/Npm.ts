// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NpmApiCredentials } from "../credentials/NpmApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { NpmNodeParameters } from "../nodes/Npm";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface NpmProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: NpmNodeParameters;
    readonly npmApiCredentials?: Credentials<NpmApiCredentials>;
}

/**
 * Consume NPM registry API
 */
export class Npm<L extends string, C extends IContext = never, P extends NpmProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.npm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.npmApiCredentials];
    }

}
