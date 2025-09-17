// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PhilipsHueOAuth2ApiCredentials } from "../credentials/PhilipsHueOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PhilipsHueNodeParameters } from "../nodes/PhilipsHue";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PhilipsHueProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PhilipsHueNodeParameters;
    readonly philipsHueOAuth2ApiCredentials: Credentials<PhilipsHueOAuth2ApiCredentials>;
}

/**
 * Consume Philips Hue API
 */
export class PhilipsHue<L extends string, C extends IContext = never, P extends PhilipsHueProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.philipsHue" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.philipsHueOAuth2ApiCredentials];
    }

}
