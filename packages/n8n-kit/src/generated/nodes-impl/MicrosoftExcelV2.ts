// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftExcelOAuth2ApiCredentials } from "../credentials/MicrosoftExcelOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftExcelV2NodeParameters } from "../nodes/MicrosoftExcelV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface MicrosoftExcelV2Props extends NodeProps {
    readonly parameters: MicrosoftExcelV2NodeParameters;
    readonly microsoftExcelOAuth2ApiCredentials: Credentials<MicrosoftExcelOAuth2ApiCredentials>;
}

/**
 * Consume Microsoft Excel API
 */
export class MicrosoftExcelV2<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.microsoftExcel" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, override props: MicrosoftExcelV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.microsoftExcelOAuth2ApiCredentials];
    }

}
