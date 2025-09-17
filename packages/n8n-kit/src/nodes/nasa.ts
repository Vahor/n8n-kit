import { Nasa as _Nasa, type NasaProps } from "../generated/nodes-impl/Nasa";

// @ts-expect-error: we override the parameters type
export class Nasa<L extends string, P extends NasaProps> extends _Nasa<
	L,
	"parameters" extends keyof P
		? NonNullable<P["parameters"]>["resource"] extends "donkiSolarFlare"
			? { classType: string }
			: { __TODO: string }
		: never
> {
	constructor(
		id: L,
		override props: P,
	) {
		super(id, props as never);
	}
}
