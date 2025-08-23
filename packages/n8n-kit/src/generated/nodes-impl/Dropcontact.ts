// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DropcontactApiCredentials } from "../credentials/DropcontactApi.ts";
import type { Credentials } from "../../credentials";
import type { DropcontactNodeParameters } from "../nodes/Dropcontact";
import { Node, type NodeProps } from "../../nodes";

export interface DropcontactProps extends NodeProps, DropcontactNodeParameters {

    readonly dropcontactApiCredentials: Credentials<DropcontactApiCredentials>;

}

export class Dropcontact<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.dropcontact" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: DropcontactProps) {

        super(id, props);

    }

    override getParameters() {

        const { dropcontactApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.dropcontactApiCredentials];

    }


}

