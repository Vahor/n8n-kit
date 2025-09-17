// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DriftApiCredentials } from "../credentials/DriftApi.ts";
import type { DriftOAuth2ApiCredentials } from "../credentials/DriftOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { DriftNodeParameters } from "../nodes/Drift";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DriftProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DriftNodeParameters;
    readonly driftApiCredentials?: Credentials<DriftApiCredentials>;
    readonly driftOAuth2ApiCredentials?: Credentials<DriftOAuth2ApiCredentials>;
}

/**
 * Consume Drift API
 */
export class Drift<L extends string, C extends IContext = never, P extends DriftProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.drift" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.driftApiCredentials, this.props?.driftOAuth2ApiCredentials];
    }

}
