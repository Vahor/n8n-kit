import * as path from "node:path";
import logger from "@vahor/n8n-kit/logger";
import chalk from "chalk";
import chokidar from "chokidar";

export type WatchOptions = {
	watch?: string;
};

export interface WatchConfig {
	/** Function to execute when files change */
	callback: () => Promise<unknown>;
	/** Description of the action being performed (e.g., "rebuilding", "redeploying") */
	actionName: string;
	/** Success message to show after rebuild (e.g., "Rebuild", "Redeploy") */
	successName: string;
}

export const setupWatch = async (
	config: WatchConfig,
	entrypoint: string,
): Promise<void> => {
	const { callback, actionName, successName } = config;

	const watchPath = path.resolve(process.cwd(), entrypoint);

	logger.log(`${chalk.green("Watching")} ${entrypoint} for changes...`);
	logger.log(`Press ${chalk.bold("Ctrl+C")} to stop watching`);

	let isProcessing = false;
	let timeoutId: NodeJS.Timeout | null = null;

	const rebuild = async () => {
		if (isProcessing) return;
		isProcessing = true;

		try {
			console.log();
			logger.log(`${chalk.yellow("Change detected")} - ${actionName}...`);
			console.log();
			await callback();
			console.log();
			logger.log(`${chalk.green("✓")} ${successName} complete`);
		} catch (error) {
			console.log();
			logger.error(`${successName} failed: ${error}`);
		} finally {
			isProcessing = false;
		}
	};

	const debouncedRebuild = () => {
		if (timeoutId) clearTimeout(timeoutId);
		timeoutId = setTimeout(rebuild, 300);
	};

	// Watch for changes
	const watcher = chokidar.watch(watchPath, {
		ignored: [
			"**/node_modules/**",
			"**/.git/**",
			"**/dist/**",
			"**/workflows/*.json",
		],
		ignoreInitial: true,
		persistent: true,
	});

	watcher.on("change", debouncedRebuild);
	watcher.on("add", debouncedRebuild);
	watcher.on("unlink", debouncedRebuild);

	const cleanup = () => {
		watcher.close();
		if (timeoutId) clearTimeout(timeoutId);
		logger.log(`\n${chalk.yellow("Stopped watching")}`);
		process.exit(0);
	};

	process.on("SIGINT", cleanup);
	process.on("SIGTERM", cleanup);
};
