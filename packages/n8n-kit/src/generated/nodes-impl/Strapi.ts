// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StrapiApiCredentials } from "../credentials/StrapiApi.ts";
import type { StrapiTokenApiCredentials } from "../credentials/StrapiTokenApi.ts";
import type { Credentials } from "../../credentials";
import type { StrapiNodeParameters } from "../nodes/Strapi";
import { Node, type NodeProps } from "../../nodes";

export interface StrapiProps extends NodeProps, StrapiNodeParameters {

    readonly strapiApiCredentials?: Credentials<StrapiApiCredentials>;
    readonly strapiTokenApiCredentials?: Credentials<StrapiTokenApiCredentials>;

}

export class Strapi<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.strapi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: StrapiProps) {

        super(id, props);

    }

    override getParameters() : Omit<StrapiNodeParameters, "strapiApiCredentials | strapiTokenApiCredentials"> {

        const { strapiApiCredentials:_0, strapiTokenApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.strapiApiCredentials, this.props.strapiTokenApiCredentials];

    }


}

