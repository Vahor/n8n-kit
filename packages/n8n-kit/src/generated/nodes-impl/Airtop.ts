// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AirtopApiCredentials } from "../credentials/AirtopApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AirtopNodeParameters } from "../nodes/Airtop";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AirtopProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AirtopNodeParameters;
    readonly airtopApiCredentials: Credentials<AirtopApiCredentials>;
}

/**
 * Scrape and control any site with Airtop
 */
export class Airtop<L extends string, C extends IContext = never, P extends AirtopProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.airtop" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.airtopApiCredentials];
    }

}
