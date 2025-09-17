import {
	App,
	Chain,
	Credentials,
	Placeholder,
	type,
	Workflow,
} from "@vahor/n8n-kit";
import { StickyNote } from "@vahor/n8n-kit/nodes";
import {
	AgentV1,
	ChatTrigger,
	DocumentDefaultDataLoader,
	EmbeddingsGoogleGemini,
	GoogleDriveTrigger,
	GoogleDriveV2,
	LmChatGoogleGemini,
	MemoryBufferWindow,
	TextSplitterRecursiveCharacterTextSplitter,
	ToolVectorStore,
	VectorStorePinecone,
} from "@vahor/n8n-kit/nodes/generated";

// 	https://n8n.io/workflows/2753-rag-chatbot-for-company-documents-using-google-drive-and-gemini/

const googleDriveApiCredentials = Credentials.byId({
	name: "googleDriveOAuth2Api",
	id: "some-id-1",
});
const pineconeApiCredentials = Credentials.byId({
	name: "pineconeApi",
	id: "some-id-2",
});
const googlePalmApiCredentials = Credentials.byId({
	name: "googlePalmApi",
	id: "some-id-=",
});

const pineconeIndex = {
	value: "company-files",
	mode: "list",
} as const;

const app = new App();

new Workflow(app, "my-workflow", {
	active: true,
	name: "RAG Workflow For Company Documents stored in Google Drive",
	definition: [
		new StickyNote("note", {
			// TODO: should be left of "gdrive-file-updated"
			position: [-540, 220],
			parameters: {
				content:
					"## Set up steps\n\n1. Google Cloud Project and Vertex AI API:\n* Create a Google Cloud project.\n* Enable the Vertex AI API for your project.\n2. Google AI API Key:\n* Obtain a Google AI API key from Google AI Studio.\n3. Pinecone Account:\n* Create a free account on the Pinecone website.\nObtain your API key from your Pinecone dashboard.\n* Create an index named company-files in your Pinecone project.\n4. Google Drive:\n* Create a dedicated folder in your Google Drive where company documents will be stored.\n5. Credentials in n8n: Configure credentials in your n8n environment for:\n* Google Drive OAuth2\n* Google Gemini(PaLM) Api (using your Google AI API key)\n* Pinecone API (using your Pinecone API key)\n5. Import the Workflow:\n* Import this workflow into your n8n instance.\n6. Configure the Workflow:\n* Update both Google Drive Trigger nodes to watch the specific folder you created in your Google Drive.\n* Configure the Pinecone Vector Store nodes to use your company-files index.",
				height: 720,
				width: 420,
			},
		}),

		// gdrive to pinecone
		new StickyNote("note-documents-to-vector-store", {
			// TODO: should be top of "upload-to-pinecone"
			position: [440, -240],
			parameters: {
				content:
					"## Add documents to vector store when updating or creating new documents in Google Drive",
				width: 420,
			},
		}),

		Chain.start(
			new GoogleDriveTrigger("gdrive-file-created", {
				label: "Google Drive File Created",
				googleDriveOAuth2ApiCredentials: googleDriveApiCredentials,
				parameters: {
					event: "fileCreated",
					triggerOn: "specificFolder",
					options: {
						fileType: "all",
					},
					pollTimes: {
						item: [
							{
								mode: "everyMinute",
							},
						],
					},
					folderToWatch: {
						value: "1evDIoHePhjw_LgVFZXSZyK1sZm2GHp9W",
						mode: "list", // TODO: not sure if mode is required
					},
				},
			}),
		).next(new Placeholder("download-from-drive")),

		Chain.start(
			new GoogleDriveTrigger("gdrive-file-updated", {
				label: "Google Drive File Updated",
				googleDriveOAuth2ApiCredentials: googleDriveApiCredentials,
				outputSchema: type({
					id: "string",
					name: "string",
				}),
				parameters: {
					event: "fileUpdated",
					triggerOn: "specificFolder",
					pollTimes: {
						item: [
							{
								mode: "everyMinute",
							},
						],
					},
					folderToWatch: {
						value: "1evDIoHePhjw_LgVFZXSZyK1sZm2GHp9W",
						mode: "list", // TODO: not sure if mode is required
					},
				},
			}),
		)
			.next(
				({ $ }) =>
					new GoogleDriveV2("download-from-drive", {
						label: "Download File From Google Drive",
						googleDriveOAuth2ApiCredentials: googleDriveApiCredentials,
						parameters: {
							operation: "download",
							fileId: {
								mode: "id", // TODO: not sure if mode is required
								value: $("json.id").toExpression(),
							},
							options: {
								fileName: $("json.name").toExpression(),
							},
						},
					}),
			)
			.next(
				new VectorStorePinecone("upload-to-pinecone", {
					label: "Pinecone Vector Store",
					pineconeApiCredentials: pineconeApiCredentials,
					parameters: {
						mode: "insert",
						pineconeIndex,
					},
				})
					// Here the code gen was not able to parse the custom type, but it allowed us to use a .withCustom() method
					// so we use it here. The connection type is ai_embedding
					.withCustom(
						"ai_embedding",
						new EmbeddingsGoogleGemini("embeddings-google-gemini", {
							label: "Embeddings Google Gemini",
							googlePalmApiCredentials,
							parameters: {
								modelName: "models/text-embedding-004",
							},
						}),
					)
					.withCustom(
						"ai_document",
						new DocumentDefaultDataLoader("document-to-vector-store", {
							label: "Default Data Loader",
							parameters: {
								textSplittingMode: "custom", // Needed as we are using 1.1 and expected is in 1 : https://github.com/n8n-io/n8n/commit/40850c95b680a54f16fe8133ff7b801008879df2
								dataType: "binary",
								binaryMode: "specificField",
							},
						}).withCustom(
							"ai_textSplitter",
							new TextSplitterRecursiveCharacterTextSplitter("text-splitter", {
								label: "Recursive Character Text Splitter",
								parameters: {
									chunkOverlap: 100,
								},
							}),
						),
					),
			),

		// chat to ai-agent
		new StickyNote("note-chat-to-ai-agent", {
			// TODO: should be top of "ai-agent"
			position: [420, 660],
			parameters: {
				content: "## Chat with company documents",
			},
		}),
		Chain.start(
			new ChatTrigger("chat-message-received", {
				label: "When chat message received",
				parameters: {},
			}),
		).next(
			new AgentV1("ai-agent", {
				label: "AI Agent",
				parameters: {
					options: {
						systemMessage:
							'You are a helpful HR assistant designed to answer employee questions based on company policies.\n\nRetrieve relevant information from the provided internal documents and provide a concise, accurate, and informative answer to the employee\'s question.\n\nUse the tool called "company_documents_tool" to retrieve any information from the company\'s documents.\n\nIf the answer cannot be found in the provided documents, respond with "I cannot find the answer in the available resources."',
					},
				},
			})
				.withCustom(
					"ai_languageModel",
					new LmChatGoogleGemini("google-gemini", {
						label: "Google Gemini Chat Model",
						googlePalmApiCredentials,
						parameters: {
							modelName: "models/gemini-2.0-flash-exp",
						},
					}),
				)
				.withCustom(
					"ai_memory",
					new MemoryBufferWindow("memory-buffer-window", {
						label: "Window Buffer Memory",
						parameters: {},
					}),
				)
				.withCustom(
					"ai_tool",
					new ToolVectorStore("vector-store-tool", {
						label: "Vector Store Tool",
						parameters: {
							name: "company_documents_tool",
							description: "Retrieve information from any company documents",
						},
					})
						// Here it worked so there's no withCustom but directly a withVectorStore
						.withVectorStore(
							new VectorStorePinecone("pinecone-vector-store-retrieval", {
								label: "Pinecone Vector Store (Retrieval)",
								pineconeApiCredentials: pineconeApiCredentials,
								parameters: {
									pineconeIndex,
								},
							}).withCustom(
								"ai_embedding",
								new EmbeddingsGoogleGemini(
									"embeddings-google-gemini-retrieval",
									{
										label: "Embeddings Google Gemini (Retrieval)",
										googlePalmApiCredentials,
										parameters: {
											modelName: "models/text-embedding-004",
										},
									},
								),
							),
						)
						.withModel(
							new LmChatGoogleGemini("google-gemini-retrieval", {
								label: "Google Gemini Chat Model (Retrieval)",
								googlePalmApiCredentials,
								parameters: {
									modelName: "models/gemini-2.0-flash-exp",
								},
							}),
						),
				),
		),
	],
});

export { app };
