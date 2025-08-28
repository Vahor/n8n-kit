import { default as data } from "./data/some-data.json" with { type: "json" };
import { schema } from "./other-file";

type Input = {
	action: string;
	user_id: string;
	some_constant: string;
};

export const handler = (input: Input) => {
	console.log(input);
	console.log(data);
	return schema.safeParse({
		action: input.action,
		user_id: input.user_id,
	});
};
