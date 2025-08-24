import { Nasa as _Nasa, type NasaProps } from "../generated/nodes-impl/Nasa";

export class Nasa<L extends string, P extends NasaProps> extends _Nasa<
	P["parameters"]["resource"] extends "donkiSolarFlare"
		? { classType: string }
		: { __TODO: string },
	L
> {
	constructor(
		id: L,
		override props: P,
	) {
		super(id, props);
	}
}
