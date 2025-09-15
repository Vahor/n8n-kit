import { App } from "@vahor/n8n-kit";
import { createMyWorkflow } from "./workflows/my-workflow";

const app = new App();

createMyWorkflow(app);

export { app };
