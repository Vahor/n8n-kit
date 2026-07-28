// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftExcelOAuth2ApiCredentials } from "../credentials/MicrosoftExcelOAuth2Api.ts";
import type { MicrosoftOAuth2ApiCredentials } from "../credentials/MicrosoftOAuth2Api.ts";
import type { MicrosoftEntraServicePrincipalApiCredentials } from "../credentials/MicrosoftEntraServicePrincipalApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftExcelV2NodeParameters } from "../nodes/MicrosoftExcelV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MicrosoftExcelV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MicrosoftExcelV2NodeParameters;
    readonly microsoftExcelOAuth2ApiCredentials?: Credentials<MicrosoftExcelOAuth2ApiCredentials>;
    readonly microsoftOAuth2ApiCredentials?: Credentials<MicrosoftOAuth2ApiCredentials>;
    readonly microsoftEntraServicePrincipalApiCredentials?: Credentials<MicrosoftEntraServicePrincipalApiCredentials>;
}

/**
 * Consume the Microsoft Excel API for workbooks stored in OneDrive
 */
export class MicrosoftExcelV2<L extends string, C extends IContext = never, P extends MicrosoftExcelV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.microsoftExcel" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.microsoftExcelOAuth2ApiCredentials, this.props?.microsoftOAuth2ApiCredentials, this.props?.microsoftEntraServicePrincipalApiCredentials];
    }

}
