import type { Type } from "arktype";
import type { Credentials } from "../credentials";
import type { HttpCustomAuthCredentials } from "../generated/credentials/HttpCustomAuth";
import {
	HttpRequestV3,
	type HttpRequestV3Props,
} from "../generated/nodes-impl/HttpRequestV3";
import type { IsNever } from "../utils/types";

type HttpRequestProps = Omit<HttpRequestV3Props, "parameters"> & {
	parameters: HttpRequestV3Props["parameters"] & {
		genericAuthType: string;
	};
	outputSchema?: Type;
};

// TODO: make this based on the genericAuthType property
type WithCredentials<T extends HttpRequestProps> = T & {
	httpCustomAuth?: Credentials<HttpCustomAuthCredentials>;
};

export class HttpRequest<
	L extends string,
	const P extends WithCredentials<HttpRequestProps>,
> extends HttpRequestV3<
	IsNever<P["outputSchema"]> extends true
		? never
		: NonNullable<P["outputSchema"]>["infer"],
	L
> {
	constructor(id: L, props: P) {
		super(id, props);
	}
}
