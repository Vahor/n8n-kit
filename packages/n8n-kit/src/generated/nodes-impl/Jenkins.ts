// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JenkinsApiCredentials } from "../credentials/JenkinsApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { JenkinsNodeParameters } from "../nodes/Jenkins";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface JenkinsProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: JenkinsNodeParameters;
    readonly jenkinsApiCredentials: Credentials<JenkinsApiCredentials>;
}

/**
 * Consume Jenkins API
 */
export class Jenkins<L extends string, C extends IContext = never, P extends JenkinsProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.jenkins" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.jenkinsApiCredentials];
    }

}
