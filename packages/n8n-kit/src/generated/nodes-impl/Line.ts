// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LineNotifyOAuth2ApiCredentials } from "../credentials/LineNotifyOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { LineNodeParameters } from "../nodes/Line";
import { Node, type NodeProps } from "../../nodes";

export interface LineProps extends NodeProps, LineNodeParameters {

    readonly lineNotifyOAuth2ApiCredentials?: Credentials<LineNotifyOAuth2ApiCredentials>;

}

export class Line<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.line" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: LineProps) {

        super(id, props);

    }

    override getParameters() : Omit<LineNodeParameters, "lineNotifyOAuth2ApiCredentials"> {

        const { lineNotifyOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.lineNotifyOAuth2ApiCredentials];

    }


}
