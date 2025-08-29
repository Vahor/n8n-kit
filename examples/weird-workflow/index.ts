import {
	type $Selector,
	App,
	Chain,
	Group,
	type,
	Workflow,
} from "@vahor/n8n-kit";
import { If, NoOp, Webhook, WebhookResponse } from "@vahor/n8n-kit/nodes";

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
					responseBody: errorResponse,
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
	}).false(
		handleErrorMessageChain(workflow, "invalid-entity-id", {
			error: "Invalid entity id",
			data: {
				body: $("json.body"),
			},
		}),
	);
};

const checkValidExecutionType = ({
	$,
	workflow,
	trueChain,
}: {
	$: $Selector<typeof entryNode>;
	workflow: Workflow;
	trueChain: Chain<any>;
}) => {
	return new Group(
		workflow,
		"check-valid-execution-type-group",
		{
			content: "Check valid execution type",
			filterNodes: (node) => {
				return (
					node.id.startsWith("invalid-execution-type") ||
					node.id.startsWith("check-valid-execution-type")
				);
			},
		},
		Chain.start(
			new If("check-valid-execution-type", {
				parameters: {
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
			})
				.false(
					handleErrorMessageChain(workflow, "invalid-execution-type", {
						error: "Invalid execution type",
						data: {
							body: $("json.body"),
						},
					}),
				)
				.true(trueChain),
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

const workflow = new Workflow("weird-workflow", {
	active: true,
	name: "Weird Workflow",
	definition: (workflow) =>
		entryNode.next(({ $ }) =>
			checkValidEntityId({ $, workflow }).true(
				checkValidExecutionType({
					$,
					workflow,
					trueChain: Chain.start(new NoOp("nooo"))
						.next(new NoOp("2"))
						.next(new NoOp("3")),
				}),
			),
		),
});

const app = new App();
app.add(workflow);

export { app };
