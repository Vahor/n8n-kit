// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NocoDbCredentials } from "../credentials/NocoDb.ts";
import type { NocoDbApiTokenCredentials } from "../credentials/NocoDbApiToken.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { NocoDBNodeParameters } from "../nodes/NocoDB";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface NocoDBProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: NocoDBNodeParameters;
    readonly nocoDbCredentials?: Credentials<NocoDbCredentials>;
    readonly nocoDbApiTokenCredentials?: Credentials<NocoDbApiTokenCredentials>;
}

/**
 * Read, update, write and delete data from NocoDB
 */
export class NocoDB<L extends string, C extends IContext = never, P extends NocoDBProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.nocoDb" as const;
    protected typeVersion = 3 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.nocoDbCredentials, this.props?.nocoDbApiTokenCredentials];
    }

}
