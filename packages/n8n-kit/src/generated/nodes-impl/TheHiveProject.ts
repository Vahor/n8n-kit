// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TheHiveProjectApiCredentials } from "../credentials/TheHiveProjectApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TheHiveProjectNodeParameters } from "../nodes/TheHiveProject";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TheHiveProjectProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TheHiveProjectNodeParameters;
    readonly theHiveProjectApiCredentials: Credentials<TheHiveProjectApiCredentials>;
}

/**
 * Consume TheHive 5 API
 */
export class TheHiveProject<L extends string, C extends IContext = never, P extends TheHiveProjectProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.theHiveProject" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.theHiveProjectApiCredentials];
    }

}
