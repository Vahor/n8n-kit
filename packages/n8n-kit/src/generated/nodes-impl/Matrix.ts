// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MatrixApiCredentials } from "../credentials/MatrixApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MatrixNodeParameters } from "../nodes/Matrix";
import { Node, type NodeProps } from "../../nodes/node";

export interface MatrixProps extends NodeProps {
    readonly parameters: MatrixNodeParameters;
    readonly matrixApiCredentials: Credentials<MatrixApiCredentials>;
}

/**
 * Consume Matrix API
 */
export class Matrix<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.matrix" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MatrixProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.matrixApiCredentials];
    }

}
