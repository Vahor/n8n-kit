// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ConfluenceCloudOAuth2ApiCredentials } from "../credentials/ConfluenceCloudOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ConfluenceNodeParameters } from "../nodes/Confluence";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ConfluenceProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ConfluenceNodeParameters;
    readonly confluenceCloudOAuth2ApiCredentials: Credentials<ConfluenceCloudOAuth2ApiCredentials>;
}

/**
 * Interact with the Confluence Cloud API
 */
export class Confluence<L extends string, C extends IContext = never, P extends ConfluenceProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.confluence" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.confluenceCloudOAuth2ApiCredentials];
    }

}
