// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DatabricksApiCredentials } from "../credentials/DatabricksApi.ts";
import type { DatabricksOAuth2ApiCredentials } from "../credentials/DatabricksOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { DatabricksNodeParameters } from "../nodes/Databricks";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DatabricksProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DatabricksNodeParameters;
    readonly databricksApiCredentials?: Credentials<DatabricksApiCredentials>;
    readonly databricksOAuth2ApiCredentials?: Credentials<DatabricksOAuth2ApiCredentials>;
}

/**
 * Interact with Databricks API
 */
export class Databricks<L extends string, C extends IContext = never, P extends DatabricksProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.databricks" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.databricksApiCredentials, this.props?.databricksOAuth2ApiCredentials];
    }

}
