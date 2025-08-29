import type { RespondToWebhookNodeParameters } from "../generated/nodes/RespondToWebhook";
import { RespondToWebhook as _WebhookResponse } from "../generated/nodes-impl/RespondToWebhook";
import type { NodeProps } from "./node";

export interface WebhookResponseProps extends NodeProps {
	parameters: RespondToWebhookNodeParameters;
}

export class WebhookResponse<L extends string> extends _WebhookResponse<{}, L> {
	constructor(
		id: L,
		override props: WebhookResponseProps,
	) {
		super(id, props as any);
	}

	override "~validate"(): void {
		super["~validate"]();

		if (this.props.parameters.responseBody != null) {
			if (
				!this.props.parameters.respondWith ||
				this.props.parameters.respondWith === "allIncomingItems" ||
				this.props.parameters.respondWith === "firstIncomingItem"
			) {
				throw new Error(
					`When 'responseBody' is present, 'respondWith' must be set to semething oother than 'allIncomingItems' or 'firstIncomingItem'.`,
				);
			}
		}
	}
}
