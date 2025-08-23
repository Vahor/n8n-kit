// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenWeatherMapApiCredentials } from "../credentials/OpenWeatherMapApi.ts";
import type { Credentials } from "../../credentials";
import type { OpenWeatherMapNodeParameters } from "../nodes/OpenWeatherMap";
import { Node, type NodeProps } from "../../nodes";

export interface OpenWeatherMapProps extends NodeProps, OpenWeatherMapNodeParameters {

    readonly openWeatherMapApiCredentials: Credentials<OpenWeatherMapApiCredentials>;

}

export class OpenWeatherMap<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.openWeatherMap" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: OpenWeatherMapProps) {

        super(id, props);

    }

    override getParameters() : Omit<OpenWeatherMapNodeParameters, "openWeatherMapApiCredentials"> {

        const { openWeatherMapApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.openWeatherMapApiCredentials];

    }


}
