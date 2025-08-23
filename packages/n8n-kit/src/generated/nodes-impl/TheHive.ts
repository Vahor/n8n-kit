// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TheHiveApiCredentials } from "../credentials/TheHiveApi.ts";
import type { Credentials } from "../../credentials";
import type { TheHiveNodeParameters } from "../nodes/TheHive";
import { Node, type NodeProps } from "../../nodes";

export interface TheHiveProps extends NodeProps, TheHiveNodeParameters {

    readonly theHiveApiCredentials: Credentials<TheHiveApiCredentials>;

}

export class TheHive<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.theHive" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: TheHiveProps) {

        super(id, props);

    }

    override getParameters() : Omit<TheHiveNodeParameters, "theHiveApiCredentials"> {

        const { theHiveApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.theHiveApiCredentials];

    }


}
