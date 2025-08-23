// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DateTimeV1NodeParameters } from "../nodes/DateTimeV1";
import { Node, type NodeProps } from "../../nodes";

export interface DateTimeV1Props extends NodeProps, DateTimeV1NodeParameters {


}

export class DateTimeV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.dateTime" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: DateTimeV1Props) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

