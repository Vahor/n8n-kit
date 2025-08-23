// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CronNodeParameters } from "../nodes/Cron";
import { Node, type NodeProps } from "../../nodes";

export interface CronProps extends NodeProps, CronNodeParameters {


}

export class Cron<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.cron" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: CronProps) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

