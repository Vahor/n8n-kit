// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AutomizyApiCredentials } from "../credentials/AutomizyApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AutomizyNodeParameters } from "../nodes/Automizy";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AutomizyProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AutomizyNodeParameters;
    readonly automizyApiCredentials: Credentials<AutomizyApiCredentials>;
}

/**
 * Consume Automizy API
 */
export class Automizy<L extends string, C extends IContext = never, P extends AutomizyProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.automizy" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.automizyApiCredentials];
    }

}
