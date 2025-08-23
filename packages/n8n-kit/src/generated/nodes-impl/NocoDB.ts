// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NocoDbCredentials } from "../credentials/NocoDb.ts";
import type { NocoDbApiTokenCredentials } from "../credentials/NocoDbApiToken.ts";
import type { Credentials } from "../../credentials";
import type { NocoDBNodeParameters } from "../nodes/NocoDB";
import { Node, type NodeProps } from "../../nodes";

export interface NocoDBProps extends NodeProps, NocoDBNodeParameters {

    readonly nocoDbCredentials?: Credentials<NocoDbCredentials>;
    readonly nocoDbApiTokenCredentials?: Credentials<NocoDbApiTokenCredentials>;

}

export class NocoDB<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.nocoDb" as const;
    protected typeVersion = 3 as const;

    constructor(id: L, public readonly props?: NocoDBProps) {

        super(id, props);

    }

    override getParameters() : Omit<NocoDBNodeParameters, "nocoDbCredentials | nocoDbApiTokenCredentials"> {

        const { nocoDbCredentials:_0, nocoDbApiTokenCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.nocoDbCredentials, this.props.nocoDbApiTokenCredentials];

    }


}

