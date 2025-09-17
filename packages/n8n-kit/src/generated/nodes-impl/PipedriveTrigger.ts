// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PipedriveApiCredentials } from "../credentials/PipedriveApi.ts";
import type { PipedriveOAuth2ApiCredentials } from "../credentials/PipedriveOAuth2Api.ts";
import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PipedriveTriggerNodeParameters } from "../nodes/PipedriveTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PipedriveTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PipedriveTriggerNodeParameters;
    readonly pipedriveApiCredentials?: Credentials<PipedriveApiCredentials>;
    readonly pipedriveOAuth2ApiCredentials?: Credentials<PipedriveOAuth2ApiCredentials>;
    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;
}

/**
 * Starts the workflow when Pipedrive events occur
 */
export class PipedriveTrigger<L extends string, C extends IContext = never, P extends PipedriveTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.pipedriveTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.pipedriveApiCredentials, this.props?.pipedriveOAuth2ApiCredentials, this.props?.httpBasicAuthCredentials];
    }

}
