// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZoomApiCredentials } from "../credentials/ZoomApi.ts";
import type { ZoomOAuth2ApiCredentials } from "../credentials/ZoomOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { ZoomNodeParameters } from "../nodes/Zoom";
import { Node, type NodeProps } from "../../nodes";

export interface ZoomProps extends NodeProps, ZoomNodeParameters {

    readonly zoomApiCredentials?: Credentials<ZoomApiCredentials>;
    readonly zoomOAuth2ApiCredentials?: Credentials<ZoomOAuth2ApiCredentials>;

}

export class Zoom<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.zoom" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ZoomProps) {

        super(id, props);

    }

    override getParameters() : Omit<ZoomNodeParameters, "zoomApiCredentials | zoomOAuth2ApiCredentials"> {

        const { zoomApiCredentials:_0, zoomOAuth2ApiCredentials:_1, ...rest } = this.props ?? {};
        return rest;

    }

    override getCredentials() {

        return [this.props?.zoomApiCredentials, this.props?.zoomOAuth2ApiCredentials];

    }


}
