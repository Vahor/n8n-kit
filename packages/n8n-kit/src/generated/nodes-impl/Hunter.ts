// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HunterApiCredentials } from "../credentials/HunterApi.ts";
import type { Credentials } from "../../credentials";
import type { HunterNodeParameters } from "../nodes/Hunter";
import { Node, type NodeProps } from "../../nodes";

export interface HunterProps extends NodeProps, HunterNodeParameters {

    readonly hunterApiCredentials: Credentials<HunterApiCredentials>;

}

export class Hunter<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.hunter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: HunterProps) {

        super(id, props);

    }

    override getParameters() : Omit<HunterNodeParameters, "hunterApiCredentials"> {

        const { hunterApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.hunterApiCredentials];

    }


}
