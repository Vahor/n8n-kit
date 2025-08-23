// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CrateDbCredentials } from "../credentials/CrateDb.ts";
import type { Credentials } from "../../credentials";
import type { CrateDbNodeParameters } from "../nodes/CrateDb";
import { Node, type NodeProps } from "../../nodes";

export interface CrateDbProps extends NodeProps, CrateDbNodeParameters {

    readonly crateDbCredentials: Credentials<CrateDbCredentials>;

}

export class CrateDb<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.crateDb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: CrateDbProps) {

        super(id, props);

    }

    override getParameters() : Omit<CrateDbNodeParameters, "crateDbCredentials"> {

        const { crateDbCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.crateDbCredentials];

    }


}
