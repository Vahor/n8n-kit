import type { Type } from "arktype";
import type { WebhookNodeParameters } from "../generated/nodes/Webhook";
import { Webhook as _Webhook } from "../generated/nodes-impl/Webhook";
import type { IsNever, RequireFields } from "../utils/types";
import type { NodeProps } from "./node";

interface WebhookBaseProps
	extends RequireFields<WebhookNodeParameters, "httpMethod" | "path"> {}

export interface WebhookProps extends NodeProps {
	parameters: WebhookBaseProps;
	outputSchema?: {
		params?: Type;
		headers?: Type;
		body?: Type;
		query?: Type;
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
			: // @ts-ignore: ts doesn't know what IsNever is
				P["outputSchema"][F]["infer"]
		: never;

export class Webhook<L extends string, P extends WebhookProps> extends _Webhook<
	{
		executionMode: "production" | "test";
		webhookUrl: string;
		headers: GetOutputSchemaField<P, "headers">;
		params: GetOutputSchemaField<P, "params">;
		body: GetOutputSchemaField<P, "body">;
		query: GetOutputSchemaField<P, "query">;
	},
	L
> {
	constructor(
		id: L,
		override props: P,
	) {
		super(id, props as any);
	}
}
