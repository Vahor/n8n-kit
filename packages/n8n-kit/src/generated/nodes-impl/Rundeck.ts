// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RundeckApiCredentials } from "../credentials/RundeckApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { RundeckNodeParameters } from "../nodes/Rundeck";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RundeckProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RundeckNodeParameters;
    readonly rundeckApiCredentials: Credentials<RundeckApiCredentials>;
}

/**
 * Manage Rundeck API
 */
export class Rundeck<L extends string, C extends IContext = never, P extends RundeckProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.rundeck" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.rundeckApiCredentials];
    }

}
