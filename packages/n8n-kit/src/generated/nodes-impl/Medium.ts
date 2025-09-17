// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MediumApiCredentials } from "../credentials/MediumApi.ts";
import type { MediumOAuth2ApiCredentials } from "../credentials/MediumOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MediumNodeParameters } from "../nodes/Medium";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MediumProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MediumNodeParameters;
    readonly mediumApiCredentials?: Credentials<MediumApiCredentials>;
    readonly mediumOAuth2ApiCredentials?: Credentials<MediumOAuth2ApiCredentials>;
}

/**
 * Consume Medium API
 */
export class Medium<L extends string, C extends IContext = never, P extends MediumProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.medium" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.mediumApiCredentials, this.props?.mediumOAuth2ApiCredentials];
    }

}
