import {
	name,
	type RespondToWebhookNodeParameters,
	version,
} from "generated/nodes/RespondToWebhook";
import { ExpressionBuilder, recursiveExpression } from "../workflow";
import { Node, type NodeProps } from "./node";

export interface WebhookResponseProps
	extends NodeProps,
		Omit<RespondToWebhookNodeParameters, "responseBody"> {
	responseBody?: Record<string, any> | ExpressionBuilder | string;
}

export class WebhookResponse<L extends string> extends Node<L, never> {
	protected override type = `n8n-nodes-base.${name}` as const;
	protected override typeVersion = version;

	constructor(
		id: L,
		public readonly props: WebhookResponseProps,
	) {
		super(id, props);
	}

	override "~validate"(): void {
		super["~validate"]();
		if (this.props.responseBody != null) {
			if (this.props.responseBody instanceof ExpressionBuilder) {
				this.props.responseBody = this.props.responseBody.toExpression();
			}

			if (typeof this.props.responseBody !== "string") {
				const result = recursiveExpression(this.props.responseBody);
				this.props.responseBody = `=${JSON.stringify(result, null, 2)}`;
			}
		}
	}

	override getParameters() {
		return this.props;
	}
}
