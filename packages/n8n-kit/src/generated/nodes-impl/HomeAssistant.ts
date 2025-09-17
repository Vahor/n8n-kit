// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HomeAssistantApiCredentials } from "../credentials/HomeAssistantApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { HomeAssistantNodeParameters } from "../nodes/HomeAssistant";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface HomeAssistantProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: HomeAssistantNodeParameters;
    readonly homeAssistantApiCredentials: Credentials<HomeAssistantApiCredentials>;
}

/**
 * Consume Home Assistant API
 */
export class HomeAssistant<L extends string, C extends IContext = never, P extends HomeAssistantProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.homeAssistant" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.homeAssistantApiCredentials];
    }

}
