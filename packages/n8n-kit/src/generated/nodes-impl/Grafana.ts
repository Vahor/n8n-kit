// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GrafanaApiCredentials } from "../credentials/GrafanaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GrafanaNodeParameters } from "../nodes/Grafana";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GrafanaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GrafanaNodeParameters;
    readonly grafanaApiCredentials: Credentials<GrafanaApiCredentials>;
}

/**
 * Consume the Grafana API
 */
export class Grafana<L extends string, C extends IContext = never, P extends GrafanaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.grafana" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.grafanaApiCredentials];
    }

}
