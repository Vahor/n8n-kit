// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AirtableApiCredentials } from "../credentials/AirtableApi.ts";
import type { AirtableTokenApiCredentials } from "../credentials/AirtableTokenApi.ts";
import type { AirtableOAuth2ApiCredentials } from "../credentials/AirtableOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AirtableV1NodeParameters } from "../nodes/AirtableV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AirtableV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AirtableV1NodeParameters;
    readonly airtableApiCredentials?: Credentials<AirtableApiCredentials>;
    readonly airtableTokenApiCredentials?: Credentials<AirtableTokenApiCredentials>;
    readonly airtableOAuth2ApiCredentials?: Credentials<AirtableOAuth2ApiCredentials>;
}

/**
 * Read, update, write and delete data from Airtable
 */
export class AirtableV1<L extends string, C extends IContext = never, P extends AirtableV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.airtable" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.airtableApiCredentials, this.props?.airtableTokenApiCredentials, this.props?.airtableOAuth2ApiCredentials];
    }

}
