// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JiraSoftwareCloudApiCredentials } from "../credentials/JiraSoftwareCloudApi.ts";
import type { JiraSoftwareServerApiCredentials } from "../credentials/JiraSoftwareServerApi.ts";
import type { JiraSoftwareServerPatApiCredentials } from "../credentials/JiraSoftwareServerPatApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { JiraNodeParameters } from "../nodes/Jira";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface JiraProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: JiraNodeParameters;
    readonly jiraSoftwareCloudApiCredentials?: Credentials<JiraSoftwareCloudApiCredentials>;
    readonly jiraSoftwareServerApiCredentials?: Credentials<JiraSoftwareServerApiCredentials>;
    readonly jiraSoftwareServerPatApiCredentials?: Credentials<JiraSoftwareServerPatApiCredentials>;
}

/**
 * Consume Jira Software API
 */
export class Jira<L extends string, C extends IContext = never, P extends JiraProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.jira" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.jiraSoftwareCloudApiCredentials, this.props?.jiraSoftwareServerApiCredentials, this.props?.jiraSoftwareServerPatApiCredentials];
    }

}
