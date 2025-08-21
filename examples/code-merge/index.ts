import {
	App,
	Chain,
	Code,
	ManualTrigger,
	Merge,
	Workflow,
} from "@vahor/n8n-kit";

// https://n8n.io/workflows/655-merge-greetings-with-the-users-based-on-the-language/

const workflow = new Workflow("merge-example", {
	name: "Merge Example",
	definition: Chain.start(new ManualTrigger("When clicking ‘Test workflow’"))
		.multiple([
			new Code("Sample data (name + language)", {
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
			}),
			new Code("Sample data (greeting + language)", {
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
			}),
		])
		.connect(
			["Sample data (name + language)", "Sample data (greeting + language)"],
			new Merge("Merge (name + language + greeting)", {
				mode: "combine",
				fieldsToMatchString: "language",
			}),
			{ "Sample data (greeting + language)": { index: 1 } },
		),
});

const app = new App();
app.add(workflow);

export { app };
