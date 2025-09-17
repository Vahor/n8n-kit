// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JiraSoftwareCloudApiCredentials } from "../credentials/JiraSoftwareCloudApi.ts";
import type { JiraSoftwareServerApiCredentials } from "../credentials/JiraSoftwareServerApi.ts";
import type { JiraSoftwareServerPatApiCredentials } from "../credentials/JiraSoftwareServerPatApi.ts";
import type { HttpQueryAuthCredentials } from "../credentials/HttpQueryAuth.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { JiraTriggerNodeParameters } from "../nodes/JiraTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface JiraTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: JiraTriggerNodeParameters;
    readonly jiraSoftwareCloudApiCredentials?: Credentials<JiraSoftwareCloudApiCredentials>;
    readonly jiraSoftwareServerApiCredentials?: Credentials<JiraSoftwareServerApiCredentials>;
    readonly jiraSoftwareServerPatApiCredentials?: Credentials<JiraSoftwareServerPatApiCredentials>;
    readonly httpQueryAuthCredentials?: Credentials<HttpQueryAuthCredentials>;
}

/**
 * Starts the workflow when Jira events occur
 */
export class JiraTrigger<L extends string, C extends IContext = never, P extends JiraTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.jiraTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.jiraSoftwareCloudApiCredentials, this.props?.jiraSoftwareServerApiCredentials, this.props?.jiraSoftwareServerPatApiCredentials, this.props?.httpQueryAuthCredentials];
    }

}
