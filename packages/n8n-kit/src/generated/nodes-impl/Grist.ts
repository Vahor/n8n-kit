// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GristApiCredentials } from "../credentials/GristApi.ts";
import type { Credentials } from "../../credentials";
import type { GristNodeParameters } from "../nodes/Grist";
import { Node, type NodeProps } from "../../nodes";

export interface GristProps extends NodeProps, GristNodeParameters {

    readonly gristApiCredentials: Credentials<GristApiCredentials>;

}

export class Grist<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.grist" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: GristProps) {

        super(id, props);

    }

    override getParameters() {

        const { gristApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.gristApiCredentials];

    }


}

