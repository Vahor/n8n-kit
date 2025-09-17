// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SplunkApiCredentials } from "../credentials/SplunkApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SplunkV2NodeParameters } from "../nodes/SplunkV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SplunkV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SplunkV2NodeParameters;
    readonly splunkApiCredentials: Credentials<SplunkApiCredentials>;
}

/**
 * Consume the Splunk Enterprise API
 */
export class SplunkV2<L extends string, C extends IContext = never, P extends SplunkV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.splunk" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.splunkApiCredentials];
    }

}
