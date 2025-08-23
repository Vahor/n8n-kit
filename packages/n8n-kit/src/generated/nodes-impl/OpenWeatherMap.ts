// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenWeatherMapApiCredentials } from "../credentials/OpenWeatherMapApi.ts";
import type { Credentials } from "../../credentials";
import type { OpenWeatherMapNodeParameters } from "../nodes/OpenWeatherMap";
import { Node, type NodeProps } from "../../nodes";

export interface OpenWeatherMapProps extends NodeProps {
    readonly parameters: OpenWeatherMapNodeParameters;
    readonly openWeatherMapApiCredentials: Credentials<OpenWeatherMapApiCredentials>;
}

/**
 * Gets current and future weather information
 */
export class OpenWeatherMap<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.openWeatherMap" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: OpenWeatherMapProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.openWeatherMapApiCredentials];
    }

}
