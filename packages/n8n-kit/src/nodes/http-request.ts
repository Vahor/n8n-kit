import type { Type } from "arktype";
import type { Credentials } from "../credentials";
import type { HttpCustomAuthCredentials } from "../generated/credentials/HttpCustomAuth";
import {
	HttpRequestV3,
	type HttpRequestV3Props,
} from "../generated/nodes-impl/HttpRequestV3";
import type { IsNever, RequireFields } from "../utils/types";

type HttpRequestProps = Omit<HttpRequestV3Props, "parameters"> & {
	parameters: RequireFields<
		HttpRequestV3Props["parameters"],
		"method" | "url"
	> & {
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
	constructor(
		id: L,
		override props: P,
	) {
		super(id, props);
	}

	override "~validate"(): void {
		super["~validate"]();

		if (
			this.props.parameters.method === "GET" ||
			!this.props.parameters.method
		) {
			if (this.props.parameters.jsonBody != null) {
				throw new Error(`When 'method' is 'GET', 'jsonBody' must be null.`);
			}
		}

		if (this.props.parameters.jsonBody != null) {
			if (!this.props.parameters.sendBody) {
				throw new Error(`When 'jsonBody' is present, 'sendBody' must be true.`);
			}
			if (
				this.props.parameters.contentType &&
				this.props.parameters.contentType !== "json"
			) {
				throw new Error(
					`When 'jsonBody' is present, 'contentType' must be 'json'.`,
				);
			}
			if (this.props.parameters.specifyBody !== "json") {
				throw new Error(
					`When 'jsonBody' is present, 'specifyBody' must be 'json'.`,
				);
			}
		}
	}

	override getCredentials(): Array<Credentials | undefined> {
		return [this.props?.httpSslAuthCredentials, this.props?.httpCustomAuth];
	}
}
