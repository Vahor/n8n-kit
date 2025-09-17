// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NasaApiCredentials } from "../credentials/NasaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { NasaNodeParameters } from "../nodes/Nasa";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface NasaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: NasaNodeParameters;
    readonly nasaApiCredentials: Credentials<NasaApiCredentials>;
}

/**
 * Retrieve data from the NASA API
 */
export class Nasa<L extends string, C extends IContext = never, P extends NasaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.nasa" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.nasaApiCredentials];
    }

}
