// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MatrixApiCredentials } from "../credentials/MatrixApi.ts";
import type { Credentials } from "../../credentials";
import type { MatrixNodeParameters } from "../nodes/Matrix";
import { Node, type NodeProps } from "../../nodes";

export interface MatrixProps extends NodeProps {
    readonly parameters: MatrixNodeParameters;
    readonly matrixApiCredentials: Credentials<MatrixApiCredentials>;
}

/**
 * Consume Matrix API
 */
export class Matrix<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.matrix" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MatrixProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.matrixApiCredentials];
    }

}
