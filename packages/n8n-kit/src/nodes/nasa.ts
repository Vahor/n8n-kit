import { Nasa as _Nasa, type NasaProps } from "../generated/nodes-impl/Nasa";

export class Nasa<L extends string, P extends NasaProps> extends _Nasa<
	L,
	"parameters" extends keyof P
		? NonNullable<P["parameters"]>["resource"] extends "donkiSolarFlare"
			? { classType: string }
			: { __TODO: string }
		: never,
	P
> {
	constructor(
		id: L,
		override props: P,
	) {
		super(id, props as any);
	}
}
