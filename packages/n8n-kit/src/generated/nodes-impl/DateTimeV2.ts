// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DateTimeV2NodeParameters } from "../nodes/DateTimeV2";
import { Node, type NodeProps } from "../../nodes";

export interface DateTimeV2Props extends NodeProps, DateTimeV2NodeParameters {


}

export class DateTimeV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.dateTime" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props?: DateTimeV2Props) {

        super(id, props);

    }

    override getParameters() : DateTimeV2NodeParameters {

        return this.props ?? {};

    }


}
