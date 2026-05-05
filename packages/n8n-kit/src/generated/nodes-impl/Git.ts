// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GitPasswordCredentials } from "../credentials/GitPassword.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GitNodeParameters } from "../nodes/Git";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GitProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GitNodeParameters;
    readonly gitPasswordCredentials?: Credentials<GitPasswordCredentials>;
}

/**
 * Control git.
 */
export class Git<L extends string, C extends IContext = never, P extends GitProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.git" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.gitPasswordCredentials];
    }

}
