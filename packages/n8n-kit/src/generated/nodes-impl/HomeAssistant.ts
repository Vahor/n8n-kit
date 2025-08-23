// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HomeAssistantApiCredentials } from "../credentials/HomeAssistantApi.ts";
import type { Credentials } from "../../credentials";
import type { HomeAssistantNodeParameters } from "../nodes/HomeAssistant";
import { Node, type NodeProps } from "../../nodes";

export interface HomeAssistantProps extends NodeProps {

    readonly parameters: HomeAssistantNodeParameters;
    readonly homeAssistantApiCredentials: Credentials<HomeAssistantApiCredentials>;

}

export class HomeAssistant<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.homeAssistant" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: HomeAssistantProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.homeAssistantApiCredentials];

    }


}
