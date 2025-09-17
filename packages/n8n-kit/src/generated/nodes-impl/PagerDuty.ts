// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PagerDutyApiCredentials } from "../credentials/PagerDutyApi.ts";
import type { PagerDutyOAuth2ApiCredentials } from "../credentials/PagerDutyOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PagerDutyNodeParameters } from "../nodes/PagerDuty";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PagerDutyProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PagerDutyNodeParameters;
    readonly pagerDutyApiCredentials?: Credentials<PagerDutyApiCredentials>;
    readonly pagerDutyOAuth2ApiCredentials?: Credentials<PagerDutyOAuth2ApiCredentials>;
}

/**
 * Consume PagerDuty API
 */
export class PagerDuty<L extends string, C extends IContext = never, P extends PagerDutyProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.pagerDuty" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.pagerDutyApiCredentials, this.props?.pagerDutyOAuth2ApiCredentials];
    }

}
