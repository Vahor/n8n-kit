// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/OpenWeatherMap/OpenWeatherMap.node.ts' node

export const name = "openWeatherMap" as const;
export const description =
	"Gets current and future weather information" as const;
export const version = 1 as const;
export const defaults = { name: "OpenWeatherMap" } as const;
export const credentials = [
	{ name: "openWeatherMapApi", required: true },
] as const;

/**
 * Gets current and future weather information
 */
export interface OpenWeatherMapNodeParameters {
	/**
	 * Default: "currentWeather"
	 */
	readonly operation?: "currentWeather" | "5DayForecast";

	/**
	 * The format in which format the data should be returned
	 * Default: "metric"
	 */
	readonly format?: "imperial" | "metric" | "standard";

	/**
	 * How to define the location for which to return the weather
	 * Default: "cityName"
	 */
	readonly locationSelection?:
		| "cityName"
		| "cityId"
		| "coordinates"
		| "zipCode";

	/**
	 * The name of the city to return the weather of
	 */
	readonly cityName: string;

	/**
	 * The ID of city to return the weather of. List can be downloaded here: http://bulk.openweathermap.org/sample/.
	 * Default: 160001123
	 */
	readonly cityId: number;

	/**
	 * The latitude of the location to return the weather of
	 */
	readonly latitude: string;

	/**
	 * The longitude of the location to return the weather of
	 */
	readonly longitude: string;

	/**
	 * The ID of city to return the weather of. List can be downloaded here: http://bulk.openweathermap.org/sample/.
	 */
	readonly zipCode: string;

	/**
	 * The two letter language code to get your output in (eg. en, de, ...).
	 */
	readonly language?: string;
}
