// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TheHiveProjectApiCredentials } from "../credentials/TheHiveProjectApi.ts";
import type { Credentials } from "../../credentials";
import type { TheHiveProjectNodeParameters } from "../nodes/TheHiveProject";
import { Node, type NodeProps } from "../../nodes";

export interface TheHiveProjectProps extends NodeProps, TheHiveProjectNodeParameters {

    readonly theHiveProjectApiCredentials: Credentials<TheHiveProjectApiCredentials>;

}

export class TheHiveProject<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.theHiveProject" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: TheHiveProjectProps) {

        super(id, props);

    }

    override getParameters() : Omit<TheHiveProjectNodeParameters, "theHiveProjectApiCredentials"> {

        const { theHiveProjectApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.theHiveProjectApiCredentials];

    }


}
