// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AsanaApiCredentials } from "../credentials/AsanaApi.ts";
import type { AsanaOAuth2ApiCredentials } from "../credentials/AsanaOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AsanaTriggerNodeParameters } from "../nodes/AsanaTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AsanaTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AsanaTriggerNodeParameters;
    readonly asanaApiCredentials?: Credentials<AsanaApiCredentials>;
    readonly asanaOAuth2ApiCredentials?: Credentials<AsanaOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Asana events occur.
 */
export class AsanaTrigger<L extends string, C extends IContext = never, P extends AsanaTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.asanaTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.asanaApiCredentials, this.props?.asanaOAuth2ApiCredentials];
    }

}
