// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MarketstackApiCredentials } from "../credentials/MarketstackApi.ts";
import type { Credentials } from "../../credentials";
import type { MarketstackNodeParameters } from "../nodes/Marketstack";
import { Node, type NodeProps } from "../../nodes";

export interface MarketstackProps extends NodeProps {

    readonly parameters: MarketstackNodeParameters;
    readonly marketstackApiCredentials: Credentials<MarketstackApiCredentials>;

}

export class Marketstack<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.marketstack" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MarketstackProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.marketstackApiCredentials];

    }


}
