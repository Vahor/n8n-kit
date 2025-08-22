import {
	App,
	Chain,
	NoOp,
	Placeholder,
	StickyNote,
	Workflow,
} from "@vahor/n8n-kit";

// 	https://n8n.io/workflows/2753-rag-chatbot-for-company-documents-using-google-drive-and-gemini/

const workflow = new Workflow("my-workflow", {
	active: true,
	name: "NASA Example",
	definition: [
		new StickyNote("note", {
			position: [-540, 220],
			content:
				"## Set up steps\n\n1. Google Cloud Project and Vertex AI API:\n* Create a Google Cloud project.\n* Enable the Vertex AI API for your project.\n2. Google AI API Key:\n* Obtain a Google AI API key from Google AI Studio.\n3. Pinecone Account:\n* Create a free account on the Pinecone website.\nObtain your API key from your Pinecone dashboard.\n* Create an index named company-files in your Pinecone project.\n4. Google Drive:\n* Create a dedicated folder in your Google Drive where company documents will be stored.\n5. Credentials in n8n: Configure credentials in your n8n environment for:\n* Google Drive OAuth2\n* Google Gemini(PaLM) Api (using your Google AI API key)\n* Pinecone API (using your Pinecone API key)\n5. Import the Workflow:\n* Import this workflow into your n8n instance.\n6. Configure the Workflow:\n* Update both Google Drive Trigger nodes to watch the specific folder you created in your Google Drive.\n* Configure the Pinecone Vector Store nodes to use your company-files index.",
			height: 720,
			width: 420,
		}),

		Chain.start(new NoOp("gdrive-file-created")).next(
			new Placeholder("download-from-drive"),
		),

		Chain.start(new NoOp("gdrive-file-updated"))
			.next(
				new NoOp("download-from-drive", {
					name: "Download File From Google Drive",
				}),
			)
			.next(new NoOp("upload-to-pinecone")),
	],
});

const app = new App();
app.add(workflow);

export { app };
