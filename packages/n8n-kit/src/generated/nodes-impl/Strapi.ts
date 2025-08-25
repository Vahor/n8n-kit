// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StrapiApiCredentials } from "../credentials/StrapiApi.ts";
import type { StrapiTokenApiCredentials } from "../credentials/StrapiTokenApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { StrapiNodeParameters } from "../nodes/Strapi";
import { Node, type NodeProps } from "../../nodes/node";

export interface StrapiProps extends NodeProps {
    readonly parameters: StrapiNodeParameters;
    readonly strapiApiCredentials?: Credentials<StrapiApiCredentials>;
    readonly strapiTokenApiCredentials?: Credentials<StrapiTokenApiCredentials>;
}

/**
 * Consume Strapi API
 */
export class Strapi<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.strapi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: StrapiProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.strapiApiCredentials, this.props!.strapiTokenApiCredentials];
    }

}
