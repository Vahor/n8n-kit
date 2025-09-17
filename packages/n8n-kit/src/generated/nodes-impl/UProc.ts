// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { UProcApiCredentials } from "../credentials/UProcApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { UProcNodeParameters } from "../nodes/UProc";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface UProcProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: UProcNodeParameters;
    readonly uprocApiCredentials: Credentials<UProcApiCredentials>;
}

/**
 * Consume uProc API
 */
export class UProc<L extends string, C extends IContext = never, P extends UProcProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.uproc" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.uprocApiCredentials];
    }

}
