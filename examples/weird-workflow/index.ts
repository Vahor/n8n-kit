import {
	type $Selector,
	App,
	Chain,
	Group,
	type,
	Workflow,
} from "@vahor/n8n-kit";
import {
	Code,
	HttpRequest,
	If,
	NoOp,
	Webhook,
	WebhookResponse,
} from "@vahor/n8n-kit/nodes";

// This workflow does not have a real use case, it's just to test weird things

const handleErrorMessageChain = <Id extends string>(
	workflow: Workflow,
	id: Id,
	errorResponse: Record<string, any>,
) => {
	return new Group(
		workflow,
		`${id}-handle-error-message-group`,
		{
			content: "Handle error message",
			color: "RED",
		},
		Chain.start(new NoOp(id)).multiple([
			new WebhookResponse(`${id}-response`, {
				parameters: {
					respondWith: "json",
					responseBody: JSON.stringify(errorResponse),
					options: {
						responseCode: 400,
					},
				},
			}),
		]),
	);
};

const checkValidEntityId = ({
	$,
	workflow,
}: {
	$: $Selector<typeof entryNode>;
	workflow: Workflow;
}) => {
	return new If("check-valid-entity-id", {
		parameters: {
			conditions: {
				conditions: [
					{
						leftValue: $("json.body.execution_type"),
						operator: {
							type: "string",
							operation: "exists",
						},
					},
				],
			},
		},
	}).false(
		handleErrorMessageChain(workflow, "invalid-entity-id", {
			error: "Invalid entity id",
			data: {
				body: $("json.body"),
			},
		}),
	);
};

const createConditionalDataChain = <Id extends string>(id: Id) => {
	// Common output schema for both chains
	const outputSchema = type({
		conditional_output: "string",
	});

	const httpChain = Chain.start(
		new HttpRequest(id, {
			parameters: {
				url: "https://api-1.com/posts/1",
				method: "GET",
			},
			outputSchema,
		}),
	);

	const otherBranch = Chain.start(new NoOp(`noop-2`)).next(
		new HttpRequest(id, {
			parameters: {
				method: "GET",
				url: "https://other-api.com/posts/1",
			},
			outputSchema: outputSchema.and({
				something_else: "string",
			}),
		}),
	);

	const condition = process.env.SOME_CONDITION;

	// TODO: not that great, currently it's required when using a complex Chain, single node doesn't need it
	type Output = Chain<{ [k in Id]: (typeof outputSchema)["infer"] }, [Id]>;
	return (condition === "true" ? httpChain : otherBranch) as unknown as Output;
};

const checkValidExecutionType = ({
	$,
	workflow,
}: {
	$: $Selector<typeof entryNode>;
	workflow: Workflow;
}) => {
	return new Group(
		workflow,
		"check-valid-execution-type-group",
		{
			content: "Check valid execution type",
			filterNodes: (node) => {
				return (
					node.id.startsWith("invalid-execution-type") ||
					node.id.startsWith("check-valid-execution-type") ||
					node.id.startsWith("conditional-data-fetch")
				);
			},
		},
		Chain.start(
			new If("check-valid-execution-type", {
				parameters: {
					conditions: {
						combinator: "and",
						conditions: [
							{
								leftValue: $("json.body.execution_type"),
								operator: {
									type: "string",
									operation: "exists",
								},
							},
						],
					},
				},
			})
				.false(
					Chain.start(
						process.env.SOME_CONDITION === "true"
							? new Code("code", {
									parameters: {
										jsCode: "return { codeOutput: 'hello' }",
									},
									outputSchema: type({
										codeOutput: "string",
									}),
								})
							: new Code("code", {
									parameters: {
										jsCode: "return { codeOutput: 'world' }",
									},
									outputSchema: type({
										codeOutput: "string",
										something_else: "string",
									}),
								}),
					).next(({ $ }) =>
						handleErrorMessageChain(workflow, "invalid-execution-type", {
							error: "Invalid execution type",
							data: {
								body: $("code.codeOutput"),
							},
						}),
					),
				)
				.true(
					// Use the conditional chain here
					createConditionalDataChain("conditional-data-fetch").next(({ $ }) =>
						Chain.start(
							new WebhookResponse("final-response", {
								parameters: {
									respondWith: "json",
									responseBody: JSON.stringify({
										message: "Data fetched successfully",
										source: $("['conditional-data-fetch'].conditional_output"),
									}),
								},
							}),
						),
					),
				),
		),
	);
};

const entryNode = Chain.start(
	new Webhook("webhook", {
		label: "Webhook",
		parameters: {
			httpMethod: "POST",
			path: "abc",
			responseMode: "responseNode",
		},
		outputSchema: {
			body: type({
				entity_id: "string",
				execution_type: "'full' | 'partial'",
			}),
		},
	}),
);

const app = new App();

new Workflow(app, "my-workflow", {
	active: true,
	name: "Weird Workflow",
	definition: (workflow) =>
		entryNode.next(({ $ }) =>
			checkValidEntityId({ $, workflow }).true(
				checkValidExecutionType({
					$,
					workflow,
				}),
			),
		),
});

export { app };
