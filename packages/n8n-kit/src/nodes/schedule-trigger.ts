import {
	ScheduleTrigger as _ScheduleTrigger,
	type ScheduleTriggerProps,
} from "../generated/nodes-impl/ScheduleTrigger";

// @ts-expect-error: we override the type.
export class ScheduleTrigger<L extends string> extends _ScheduleTrigger<
	L,
	{
		timestamp: string;
		"Readable date": string;
		"Readable time": string;
		"Day of week": string;
		Year: string;
		Month: string;
		Hour: string;
		Minute: string;
		Second: string;
		Timezone: string;
	}
> {
	constructor(
		id: L,
		override props: Omit<ScheduleTriggerProps, "outputSchema">,
	) {
		super(id, props as any);
	}
}
