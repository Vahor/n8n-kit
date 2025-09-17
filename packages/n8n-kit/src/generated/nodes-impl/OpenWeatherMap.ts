// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenWeatherMapApiCredentials } from "../credentials/OpenWeatherMapApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { OpenWeatherMapNodeParameters } from "../nodes/OpenWeatherMap";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface OpenWeatherMapProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: OpenWeatherMapNodeParameters;
    readonly openWeatherMapApiCredentials: Credentials<OpenWeatherMapApiCredentials>;
}

/**
 * Gets current and future weather information
 */
export class OpenWeatherMap<L extends string, C extends IContext = never, P extends OpenWeatherMapProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.openWeatherMap" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.openWeatherMapApiCredentials];
    }

}
