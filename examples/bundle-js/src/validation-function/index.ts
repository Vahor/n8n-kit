import * as z from "zod/mini";
import { default as data } from "./some-data.json" with { type: "json" };

const schema = z.object({
	action: z.enum(["create", "update", "delete"]),
	user_id: z.string().check(z.length(24)),
});

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
