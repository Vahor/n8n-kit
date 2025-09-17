// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LineNotifyOAuth2ApiCredentials } from "../credentials/LineNotifyOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { LineNodeParameters } from "../nodes/Line";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LineProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LineNodeParameters;
    readonly lineNotifyOAuth2ApiCredentials?: Credentials<LineNotifyOAuth2ApiCredentials>;
}

/**
 * Consume Line API
 */
export class Line<L extends string, C extends IContext = never, P extends LineProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.line" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.lineNotifyOAuth2ApiCredentials];
    }

}
