// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SyncroMspApiCredentials } from "../credentials/SyncroMspApi.ts";
import type { Credentials } from "../../credentials";
import type { SyncroMspV1NodeParameters } from "../nodes/SyncroMspV1";
import { Node, type NodeProps } from "../../nodes";

export interface SyncroMspV1Props extends NodeProps, SyncroMspV1NodeParameters {

    readonly syncroMspApiCredentials: Credentials<SyncroMspApiCredentials>;

}

export class SyncroMspV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.syncroMsp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: SyncroMspV1Props) {

        super(id, props);

    }

    override getParameters() : Omit<SyncroMspV1NodeParameters, "syncroMspApiCredentials"> {

        const { syncroMspApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.syncroMspApiCredentials];

    }


}

