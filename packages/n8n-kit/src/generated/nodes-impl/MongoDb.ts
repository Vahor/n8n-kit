// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MongoDbCredentials } from "../credentials/MongoDb.ts";
import type { Credentials } from "../../credentials";
import type { MongoDbNodeParameters } from "../nodes/MongoDb";
import { Node, type NodeProps } from "../../nodes";

export interface MongoDbProps extends NodeProps, MongoDbNodeParameters {

    readonly mongoDbCredentials: Credentials<MongoDbCredentials>;

}

export class MongoDb<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mongoDb" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, public readonly props?: MongoDbProps) {

        super(id, props);

    }

    override getParameters() {

        const { mongoDbCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mongoDbCredentials];

    }


}

