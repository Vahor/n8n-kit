// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DiscourseApiCredentials } from "../credentials/DiscourseApi.ts";
import type { Credentials } from "../../credentials";
import type { DiscourseNodeParameters } from "../nodes/Discourse";
import { Node, type NodeProps } from "../../nodes";

export interface DiscourseProps extends NodeProps, DiscourseNodeParameters {

    readonly discourseApiCredentials: Credentials<DiscourseApiCredentials>;

}

export class Discourse<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.discourse" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: DiscourseProps) {

        super(id, props);

    }

    override getParameters() : Omit<DiscourseNodeParameters, "discourseApiCredentials"> {

        const { discourseApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.discourseApiCredentials];

    }


}

