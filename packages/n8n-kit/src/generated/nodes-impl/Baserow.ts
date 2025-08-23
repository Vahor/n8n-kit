// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BaserowApiCredentials } from "../credentials/BaserowApi.ts";
import type { Credentials } from "../../credentials";
import type { BaserowNodeParameters } from "../nodes/Baserow";
import { Node, type NodeProps } from "../../nodes";

export interface BaserowProps extends NodeProps {

    readonly parameters: BaserowNodeParameters;
    readonly baserowApiCredentials: Credentials<BaserowApiCredentials>;

}

export class Baserow<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.baserow" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: BaserowProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.baserowApiCredentials];

    }


}
