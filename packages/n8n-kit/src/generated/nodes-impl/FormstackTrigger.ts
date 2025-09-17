// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FormstackApiCredentials } from "../credentials/FormstackApi.ts";
import type { FormstackOAuth2ApiCredentials } from "../credentials/FormstackOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FormstackTriggerNodeParameters } from "../nodes/FormstackTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FormstackTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FormstackTriggerNodeParameters;
    readonly formstackApiCredentials?: Credentials<FormstackApiCredentials>;
    readonly formstackOAuth2ApiCredentials?: Credentials<FormstackOAuth2ApiCredentials>;
}

/**
 * Starts the workflow on a Formstack form submission.
 */
export class FormstackTrigger<L extends string, C extends IContext = never, P extends FormstackTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.formstackTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.formstackApiCredentials, this.props?.formstackOAuth2ApiCredentials];
    }

}
