// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftExcelOAuth2ApiCredentials } from "../credentials/MicrosoftExcelOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftExcelV1NodeParameters } from "../nodes/MicrosoftExcelV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface MicrosoftExcelV1Props extends NodeProps {
    readonly parameters: MicrosoftExcelV1NodeParameters;
    readonly microsoftExcelOAuth2ApiCredentials: Credentials<MicrosoftExcelOAuth2ApiCredentials>;
}

/**
 * Consume Microsoft Excel API
 */
export class MicrosoftExcelV1<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.microsoftExcel" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MicrosoftExcelV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.microsoftExcelOAuth2ApiCredentials];
    }

}
