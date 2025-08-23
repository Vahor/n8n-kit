// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostgresCredentials } from "../credentials/Postgres.ts";
import type { Credentials } from "../../credentials";
import type { VectorStorePGVectorNodeParameters } from "../nodes/VectorStorePGVector";
import { Node, type NodeProps } from "../../nodes";

export interface VectorStorePGVectorProps extends NodeProps {
    readonly parameters: VectorStorePGVectorNodeParameters;
    readonly postgresCredentials: Credentials<PostgresCredentials>;
}

/**
 * Work with your data in Postgresql with the PGVector extension
 */
export class VectorStorePGVector<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.vectorStorePGVector" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: VectorStorePGVectorProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.postgresCredentials];
    }

}
