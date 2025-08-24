// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BeeminderApiCredentials } from "../credentials/BeeminderApi.ts";
import type { BeeminderOAuth2ApiCredentials } from "../credentials/BeeminderOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { BeeminderNodeParameters } from "../nodes/Beeminder";
import { Node, type NodeProps } from "../../nodes/node";

export interface BeeminderProps extends NodeProps {
    readonly parameters: BeeminderNodeParameters;
    readonly beeminderApiCredentials?: Credentials<BeeminderApiCredentials>;
    readonly beeminderOAuth2ApiCredentials?: Credentials<BeeminderOAuth2ApiCredentials>;
}

/**
 * Consume Beeminder API
 */
export class Beeminder<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.beeminder" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: BeeminderProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.beeminderApiCredentials, this.props!.beeminderOAuth2ApiCredentials];
    }

}
