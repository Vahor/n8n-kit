import {
	ScheduleTrigger as _ScheduleTrigger,
	type ScheduleTriggerProps,
} from "../generated/nodes-impl/ScheduleTrigger";

export class ScheduleTrigger<L extends string> extends _ScheduleTrigger<
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
	},
	L
> {
	constructor(
		id: L,
		override props: ScheduleTriggerProps,
	) {
		super(id, props);
	}
}
