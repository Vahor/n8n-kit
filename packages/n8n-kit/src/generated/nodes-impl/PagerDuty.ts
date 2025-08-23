// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PagerDutyApiCredentials } from "../credentials/PagerDutyApi.ts";
import type { PagerDutyOAuth2ApiCredentials } from "../credentials/PagerDutyOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { PagerDutyNodeParameters } from "../nodes/PagerDuty";
import { Node, type NodeProps } from "../../nodes";

export interface PagerDutyProps extends NodeProps {

    readonly parameters: PagerDutyNodeParameters;
    readonly pagerDutyApiCredentials?: Credentials<PagerDutyApiCredentials>;
    readonly pagerDutyOAuth2ApiCredentials?: Credentials<PagerDutyOAuth2ApiCredentials>;

}

export class PagerDuty<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.pagerDuty" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: PagerDutyProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.pagerDutyApiCredentials, this.props!.pagerDutyOAuth2ApiCredentials];

    }


}
