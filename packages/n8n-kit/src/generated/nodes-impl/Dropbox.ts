// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DropboxApiCredentials } from "../credentials/DropboxApi.ts";
import type { DropboxOAuth2ApiCredentials } from "../credentials/DropboxOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { DropboxNodeParameters } from "../nodes/Dropbox";
import { Node, type NodeProps } from "../../nodes/node";

export interface DropboxProps extends NodeProps {
    readonly parameters: DropboxNodeParameters;
    readonly dropboxApiCredentials?: Credentials<DropboxApiCredentials>;
    readonly dropboxOAuth2ApiCredentials?: Credentials<DropboxOAuth2ApiCredentials>;
}

/**
 * Access data on Dropbox
 */
export class Dropbox<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.dropbox" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: DropboxProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.dropboxApiCredentials, this.props!.dropboxOAuth2ApiCredentials];
    }

}
