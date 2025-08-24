// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CronNodeParameters } from "../nodes/Cron";
import { Node, type NodeProps } from "../../nodes/node";

export interface CronProps extends NodeProps {
    readonly parameters: CronNodeParameters;
}

/**
 * Triggers the workflow at a specific time
 */
export class Cron<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.cron" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: CronProps) {
        super(id, props);
    }

}
