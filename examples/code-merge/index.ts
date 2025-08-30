import { App, Chain, Workflow } from "@vahor/n8n-kit";
import { Merge } from "@vahor/n8n-kit/nodes";
import { Code, ManualTrigger } from "@vahor/n8n-kit/nodes/generated";

// https://n8n.io/workflows/655-merge-greetings-with-the-users-based-on-the-language/

const app = new App();

new Workflow(app, "my-workflow", {
	name: "Merge Example",
	definition: Chain.start(new ManualTrigger("When clicking ‘Test workflow’"))
		.multiple([
			new Code("Sample data (name + language)", {
				parameters: {
					jsCode: `
return [
  {
    json: {
      name: 'Stefan',
      language: 'de',
    }
  },
  {
    json: {
      name: 'Jim',
      language: 'en',
    }
  },
  {
    json: {
      name: 'Hans',
      language: 'de',
    }
  }
];
`,
				},
			}),
			new Code("Sample data (greeting + language)", {
				parameters: {
					jsCode: `
return [
  {
    json: {
      greeting: 'Hello',
      language: 'en',
    }
  },
  {
    json: {
      greeting: 'Hallo',
      language: 'de',
    }
  }
];
`,
				},
			}),
		])
		.connect(
			["Sample data (name + language)", "Sample data (greeting + language)"],
			new Merge("Merge (name + language + greeting)", {
				parameters: {
					mode: "combine",
					fieldsToMatchString: "language",
				},
			}),
			{ "Sample data (greeting + language)": { to: 1 } },
		),
});

export { app };
