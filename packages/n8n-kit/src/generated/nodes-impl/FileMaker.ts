// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FileMakerCredentials } from "../credentials/FileMaker.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FileMakerNodeParameters } from "../nodes/FileMaker";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FileMakerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FileMakerNodeParameters;
    readonly fileMakerCredentials: Credentials<FileMakerCredentials>;
}

/**
 * Retrieve data from the FileMaker data API
 */
export class FileMaker<L extends string, C extends IContext = never, P extends FileMakerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.filemaker" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.fileMakerCredentials];
    }

}
