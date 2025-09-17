// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MongoDbCredentials } from "../credentials/MongoDb.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MongoDbNodeParameters } from "../nodes/MongoDb";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MongoDbProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MongoDbNodeParameters;
    readonly mongoDbCredentials: Credentials<MongoDbCredentials>;
}

/**
 * Find, insert and update documents in MongoDB
 */
export class MongoDb<L extends string, C extends IContext = never, P extends MongoDbProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mongoDb" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mongoDbCredentials];
    }

}
