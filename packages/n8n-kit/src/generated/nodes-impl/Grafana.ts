// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GrafanaApiCredentials } from "../credentials/GrafanaApi.ts";
import type { Credentials } from "../../credentials";
import type { GrafanaNodeParameters } from "../nodes/Grafana";
import { Node, type NodeProps } from "../../nodes";

export interface GrafanaProps extends NodeProps, GrafanaNodeParameters {

    readonly grafanaApiCredentials: Credentials<GrafanaApiCredentials>;

}

export class Grafana<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.grafana" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: GrafanaProps) {

        super(id, props);

    }

    override getParameters() : Omit<GrafanaNodeParameters, "grafanaApiCredentials"> {

        const { grafanaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.grafanaApiCredentials];

    }


}
