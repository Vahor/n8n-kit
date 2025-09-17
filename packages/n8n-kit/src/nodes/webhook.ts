import type { Type } from "arktype";
import type { WebhookNodeParameters } from "../generated/nodes/Webhook";
import {
	Webhook as _Webhook,
	type WebhookProps as _WebhookProps,
} from "../generated/nodes-impl/Webhook";
import type { IsNever, RequireFields } from "../utils/types";

export interface WebhookProps
	extends Omit<_WebhookProps, "parameters" | "outputSchema"> {
	parameters: RequireFields<WebhookNodeParameters, "httpMethod" | "path">;
	outputSchema?: {
		/** {@inheritDoc OutputSchema} */
		params?: Type;
		/** {@inheritDoc OutputSchema} */
		headers?: Type;
		/** {@inheritDoc OutputSchema} */
		body?: Type;
		/** {@inheritDoc OutputSchema} */
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

// @ts-expect-error: we override the type. TODO: I think we can fix this
export class Webhook<L extends string, P extends WebhookProps> extends _Webhook<
	L,
	{
		executionMode: "production" | "test";
		webhookUrl: string;
		headers: GetOutputSchemaField<P, "headers">;
		params: GetOutputSchemaField<P, "params">;
		body: GetOutputSchemaField<P, "body">;
		query: GetOutputSchemaField<P, "query">;
	}
> {
	constructor(
		id: L,
		override props: P,
	) {
		super(id, props as any);
	}
}
