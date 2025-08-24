// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GrafanaApiCredentials } from "../credentials/GrafanaApi.ts";
import type { Credentials } from "../../credentials";
import type { GrafanaNodeParameters } from "../nodes/Grafana";
import { Node, type NodeProps } from "../../nodes/node";

export interface GrafanaProps extends NodeProps {
    readonly parameters: GrafanaNodeParameters;
    readonly grafanaApiCredentials: Credentials<GrafanaApiCredentials>;
}

/**
 * Consume the Grafana API
 */
export class Grafana<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.grafana" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: GrafanaProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.grafanaApiCredentials];
    }

}
