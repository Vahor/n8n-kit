import type { Type } from "arktype";
import {
	name,
	version,
	type WebhookNodeParameters,
} from "generated/nodes/Webhook";
import type { IsNever, RequireFields } from "../utils/types";
import { Node, type NodeProps } from "./node";

interface WebhookBaseProps
	extends RequireFields<WebhookNodeParameters, "httpMethod" | "path"> {}

export interface WebhookProps extends NodeProps, WebhookBaseProps {
	outputSchema?: {
		params?: Type;
		headers?: Type;
		body?: Type;
	};
}

type GetOutputSchemaField<
	P extends WebhookProps,
	F extends keyof NonNullable<WebhookProps["outputSchema"]>,
> = IsNever<P["outputSchema"]> extends true
	? never
	: F extends keyof P["outputSchema"]
		? IsNever<P["outputSchema"][F]> extends true
			? never
			: P["outputSchema"][F]["infer"]
		: never;

export class Webhook<L extends string, P extends WebhookProps> extends Node<
	L,
	{
		executionMode: "production" | "test";
		headers: GetOutputSchemaField<P, "headers">;
		params: GetOutputSchemaField<P, "params">;
		body: GetOutputSchemaField<P, "body">;
	}
> {
	protected override type = `n8n-nodes-base.${name}` as const;
	protected override typeVersion = version;

	constructor(
		id: L,
		public readonly props: P,
	) {
		super(id, props);
	}

	override getParameters() {
		return this.props;
	}
}
