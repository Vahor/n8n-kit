// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MatrixApiCredentials } from "../credentials/MatrixApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MatrixNodeParameters } from "../nodes/Matrix";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MatrixProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MatrixNodeParameters;
    readonly matrixApiCredentials: Credentials<MatrixApiCredentials>;
}

/**
 * Consume Matrix API
 */
export class Matrix<L extends string, C extends IContext = never, P extends MatrixProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.matrix" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.matrixApiCredentials];
    }

}
