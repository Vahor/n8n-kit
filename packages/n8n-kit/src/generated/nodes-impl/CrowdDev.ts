// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CrowdDevApiCredentials } from "../credentials/CrowdDevApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CrowdDevNodeParameters } from "../nodes/CrowdDev";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CrowdDevProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CrowdDevNodeParameters;
    readonly crowdDevApiCredentials: Credentials<CrowdDevApiCredentials>;
}

/**
 * crowd.dev is an open-source suite of community and data tools built to unlock community-led growth for your organization.
 */
export class CrowdDev<L extends string, C extends IContext = never, P extends CrowdDevProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.crowdDev" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.crowdDevApiCredentials];
    }

}
