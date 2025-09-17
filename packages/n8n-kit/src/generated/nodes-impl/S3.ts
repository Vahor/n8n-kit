// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { S3Credentials } from "../credentials/S3.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { S3NodeParameters } from "../nodes/S3";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface S3Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: S3NodeParameters;
    readonly s3Credentials: Credentials<S3Credentials>;
}

/**
 * Sends data to any S3-compatible service
 */
export class S3<L extends string, C extends IContext = never, P extends S3Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.s3" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.s3Credentials];
    }

}
