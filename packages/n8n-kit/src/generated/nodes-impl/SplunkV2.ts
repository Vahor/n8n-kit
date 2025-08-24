// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SplunkApiCredentials } from "../credentials/SplunkApi.ts";
import type { Credentials } from "../../credentials";
import type { SplunkV2NodeParameters } from "../nodes/SplunkV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface SplunkV2Props extends NodeProps {
    readonly parameters: SplunkV2NodeParameters;
    readonly splunkApiCredentials: Credentials<SplunkApiCredentials>;
}

/**
 * Consume the Splunk Enterprise API
 */
export class SplunkV2<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.splunk" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: SplunkV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.splunkApiCredentials];
    }

}
