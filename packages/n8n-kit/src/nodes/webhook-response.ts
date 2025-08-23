import {
	type RespondToWebhookNodeParameters,
	type,
	version,
} from "../generated/nodes/RespondToWebhook";
import { ExpressionBuilder, recursiveExpression } from "../workflow";
import { Node, type NodeProps } from "./node";

export interface WebhookResponseProps extends NodeProps {
	parameters: Omit<RespondToWebhookNodeParameters, "responseBody"> & {
		responseBody?: Record<string, any> | ExpressionBuilder | string;
	};
}

export class WebhookResponse<L extends string> extends Node<L, never> {
	protected override type = type;
	protected override typeVersion = version;

	constructor(
		id: L,
		override props: WebhookResponseProps,
	) {
		super(id, props);
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
