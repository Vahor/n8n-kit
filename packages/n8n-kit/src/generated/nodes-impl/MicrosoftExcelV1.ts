// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftExcelOAuth2ApiCredentials } from "../credentials/MicrosoftExcelOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftExcelV1NodeParameters } from "../nodes/MicrosoftExcelV1";
import { Node, type NodeProps } from "../../nodes";

export interface MicrosoftExcelV1Props extends NodeProps, MicrosoftExcelV1NodeParameters {

    readonly microsoftExcelOAuth2ApiCredentials: Credentials<MicrosoftExcelOAuth2ApiCredentials>;

}

export class MicrosoftExcelV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.microsoftExcel" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: MicrosoftExcelV1Props) {

        super(id, props);

    }

    override getParameters() : Omit<MicrosoftExcelV1NodeParameters, "microsoftExcelOAuth2ApiCredentials"> {

        const { microsoftExcelOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.microsoftExcelOAuth2ApiCredentials];

    }


}

