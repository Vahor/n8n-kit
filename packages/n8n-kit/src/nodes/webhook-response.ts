import type { RespondToWebhookNodeParameters } from "../generated/nodes/RespondToWebhook";
import { RespondToWebhook as _WebhookResponse } from "../generated/nodes-impl/RespondToWebhook";
import { ExpressionBuilder, recursiveExpression } from "../workflow";
import type { NodeProps } from "./node";

export interface WebhookResponseProps extends NodeProps {
	parameters: Omit<RespondToWebhookNodeParameters, "responseBody"> & {
		responseBody?: Record<string, any> | ExpressionBuilder | string;
	};
}

// @ts-expect-error: we override the parameters type
export class WebhookResponse<L extends string> extends _WebhookResponse<L> {
	constructor(
		id: L,
		override props: WebhookResponseProps,
	) {
		super(id, props as any);
	}

	override "~validate"(): void {
		super["~validate"]();
		const responseBody = this.props.parameters.responseBody;
		if (responseBody != null) {
			if (responseBody instanceof ExpressionBuilder) {
				this.props.parameters.responseBody = responseBody.toExpression();
			}

			if (typeof responseBody !== "string") {
				const result = recursiveExpression(responseBody);
				this.props.parameters.responseBody = `=${JSON.stringify(result, null, 2)}`;
			}
		}
	}
}
