// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { S3Credentials } from "../credentials/S3.ts";
import type { Credentials } from "../../credentials";
import type { S3NodeParameters } from "../nodes/S3";
import { Node, type NodeProps } from "../../nodes";

export interface S3Props extends NodeProps, S3NodeParameters {

    readonly s3Credentials: Credentials<S3Credentials>;

}

export class S3<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.s3" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: S3Props) {

        super(id, props);

    }

    override getParameters() : Omit<S3NodeParameters, "s3Credentials"> {

        const { s3Credentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.s3Credentials];

    }


}

