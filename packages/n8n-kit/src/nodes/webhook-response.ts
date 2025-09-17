import {
	RespondToWebhook as _WebhookResponse,
	type RespondToWebhookProps as _WebhookResponseProps,
} from "../generated/nodes-impl/RespondToWebhook";
import type { RequireFields } from "../utils/types";

// @ts-expect-error: we override the type.
export class WebhookResponse<L extends string> extends _WebhookResponse<L> {
	constructor(
		id: L,
		override props: RequireFields<_WebhookResponseProps, "parameters">,
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
					`When 'responseBody' is present, 'respondWith' must be set to semething other than 'allIncomingItems' or 'firstIncomingItem'.`,
				);
			}
		}
	}
}
