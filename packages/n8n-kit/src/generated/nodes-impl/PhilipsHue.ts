// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PhilipsHueOAuth2ApiCredentials } from "../credentials/PhilipsHueOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { PhilipsHueNodeParameters } from "../nodes/PhilipsHue";
import { Node, type NodeProps } from "../../nodes";

export interface PhilipsHueProps extends NodeProps {

    readonly parameters: PhilipsHueNodeParameters;
    readonly philipsHueOAuth2ApiCredentials: Credentials<PhilipsHueOAuth2ApiCredentials>;

}

export class PhilipsHue<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.philipsHue" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PhilipsHueProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.philipsHueOAuth2ApiCredentials];

    }


}
