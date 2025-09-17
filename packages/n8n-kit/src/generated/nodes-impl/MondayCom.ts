// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MondayComApiCredentials } from "../credentials/MondayComApi.ts";
import type { MondayComOAuth2ApiCredentials } from "../credentials/MondayComOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MondayComNodeParameters } from "../nodes/MondayCom";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MondayComProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MondayComNodeParameters;
    readonly mondayComApiCredentials?: Credentials<MondayComApiCredentials>;
    readonly mondayComOAuth2ApiCredentials?: Credentials<MondayComOAuth2ApiCredentials>;
}

/**
 * Consume Monday.com API
 */
export class MondayCom<L extends string, C extends IContext = never, P extends MondayComProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mondayCom" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.mondayComApiCredentials, this.props?.mondayComOAuth2ApiCredentials];
    }

}
