// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/QuickChart/QuickChart.node.ts' node

export const name = "quickChart" as const;
export const description = "Create a chart via QuickChart" as const;
export const version = 1 as const;
export const defaults = { name: "QuickChart" } as const;
export const credentials = undefined;

/**
 * Create a chart via QuickChart
 */
export interface QuickChartNodeParameters {
	/**
	 * The type of chart to create
	 * Default: "bar"
	 */
	readonly chartType?: string;

	/**
	 * Default: "manually"
	 */
	readonly labelsMode?: "manually" | "array";

	/**
	 * Labels to use in the chart
	 * Default: {}
	 * Type options: {"multipleValues":true,"sortable":true}
	 */
	readonly labelsUi: { labelsValues: any };

	/**
	 * The array of labels to be used in the chart
	 */
	readonly labelsArray: string;

	/**
	 * Data to use for the dataset, documentation and examples <a href="https://quickchart.io/documentation/chart-types/" target="_blank">here</a>
	 */
	readonly data: any;

	/**
	 * The binary data will be displayed in the Output panel on the right, under the Binary tab
	 * Default: "data"
	 */
	readonly output: string;

	/**
	 * Default: {}
	 */
	readonly chartOptions?: {
		backgroundColor: any;
		devicePixelRatio: number;
		format: "png" | "pdf" | "svg" | "webp";
		height: number;
		horizontal: boolean;
		width: number;
	};

	/**
	 * Default: {}
	 */
	readonly datasetOptions?: {
		backgroundColor: any;
		borderColor: any;
		fill: boolean;
		label: string;
		pointStyle:
			| "circle"
			| "cross"
			| "crossRot"
			| "dash"
			| "line"
			| "rect"
			| "rectRot"
			| "rectRounded"
			| "star"
			| "triangle";
	};
}
