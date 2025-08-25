// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BambooHrApiCredentials } from "../credentials/BambooHrApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { BambooHrNodeParameters } from "../nodes/BambooHr";
import { Node, type NodeProps } from "../../nodes/node";

export interface BambooHrProps extends NodeProps {
    readonly parameters: BambooHrNodeParameters;
    readonly bambooHrApiCredentials: Credentials<BambooHrApiCredentials>;
}

/**
 * Consume BambooHR API
 */
export class BambooHr<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.bambooHr" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: BambooHrProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.bambooHrApiCredentials];
    }

}
