// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOAuth2ApiCredentials } from "../credentials/MicrosoftOAuth2Api.ts";
import type { MicrosoftEntraServicePrincipalApiCredentials } from "../credentials/MicrosoftEntraServicePrincipalApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftExcelSharePointNodeParameters } from "../nodes/MicrosoftExcelSharePoint";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MicrosoftExcelSharePointProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MicrosoftExcelSharePointNodeParameters;
    readonly microsoftOAuth2ApiCredentials?: Credentials<MicrosoftOAuth2ApiCredentials>;
    readonly microsoftEntraServicePrincipalApiCredentials?: Credentials<MicrosoftEntraServicePrincipalApiCredentials>;
}

/**
 * Read and write Excel workbooks stored in SharePoint document libraries
 */
export class MicrosoftExcelSharePoint<L extends string, C extends IContext = never, P extends MicrosoftExcelSharePointProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.microsoftExcelSharePoint" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.microsoftOAuth2ApiCredentials, this.props?.microsoftEntraServicePrincipalApiCredentials];
    }

}
