// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DropboxApiCredentials } from "../credentials/DropboxApi.ts";
import type { DropboxOAuth2ApiCredentials } from "../credentials/DropboxOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { DropboxNodeParameters } from "../nodes/Dropbox";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DropboxProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DropboxNodeParameters;
    readonly dropboxApiCredentials?: Credentials<DropboxApiCredentials>;
    readonly dropboxOAuth2ApiCredentials?: Credentials<DropboxOAuth2ApiCredentials>;
}

/**
 * Access data on Dropbox
 */
export class Dropbox<L extends string, C extends IContext = never, P extends DropboxProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.dropbox" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.dropboxApiCredentials, this.props?.dropboxOAuth2ApiCredentials];
    }

}
