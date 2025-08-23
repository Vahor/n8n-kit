// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ICalendarNodeParameters } from "../nodes/ICalendar";
import { Node, type NodeProps } from "../../nodes";

export interface ICalendarProps extends NodeProps, ICalendarNodeParameters {


}

export class ICalendar<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.iCal" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ICalendarProps) {

        super(id, props);

    }

    override getParameters() : ICalendarNodeParameters {

        return this.props ?? {};

    }


}

