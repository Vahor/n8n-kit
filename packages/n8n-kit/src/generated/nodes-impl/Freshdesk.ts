// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FreshdeskApiCredentials } from "../credentials/FreshdeskApi.ts";
import type { Credentials } from "../../credentials";
import type { FreshdeskNodeParameters } from "../nodes/Freshdesk";
import { Node, type NodeProps } from "../../nodes";

export interface FreshdeskProps extends NodeProps, FreshdeskNodeParameters {

    readonly freshdeskApiCredentials: Credentials<FreshdeskApiCredentials>;

}

export class Freshdesk<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.freshdesk" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: FreshdeskProps) {

        super(id, props);

    }

    override getParameters() : Omit<FreshdeskNodeParameters, "freshdeskApiCredentials"> {

        const { freshdeskApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.freshdeskApiCredentials];

    }


}
