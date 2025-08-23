// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MongoDbCredentials } from "../credentials/MongoDb.ts";
import type { Credentials } from "../../credentials";
import type { MongoDbNodeParameters } from "../nodes/MongoDb";
import { Node, type NodeProps } from "../../nodes";

export interface MongoDbProps extends NodeProps {

    readonly parameters: MongoDbNodeParameters;
    readonly mongoDbCredentials: Credentials<MongoDbCredentials>;

}

/**
 * Find, insert and update documents in MongoDB
 */
export class MongoDb<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mongoDb" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props: MongoDbProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.mongoDbCredentials];

    }


}
