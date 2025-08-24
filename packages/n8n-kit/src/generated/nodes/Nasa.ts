// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Nasa/Nasa.node.ts' node

export const description = "Retrieve data from the NASA API" as const;
export const type = "n8n-nodes-base.nasa" as const;
export const version = 1 as const;
export const credentials = [{"name":"nasaApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface NasaNodeParameters {
    /** Default: "astronomyPictureOfTheDay" */
    readonly resource?: "asteroidNeoBrowse" | "asteroidNeoFeed" | "asteroidNeoLookup" | "astronomyPictureOfTheDay" | "donkiCoronalMassEjection" | "donkiHighSpeedStream" | "donkiInterplanetaryShock" | "donkiMagnetopauseCrossing" | "donkiNotifications" | "donkiRadiationBeltEnhancement" | "donkiSolarEnergeticParticle" | "donkiSolarFlare" | "donkiWsaEnlilSimulation" | "earthAssets" | "earthImagery";

    /** Default: "get" */
    readonly operation?: "get" | "getAll";

    /** The ID of the asteroid to be returned */
    readonly asteroidId?: string;

    /** Default: {} */
    readonly additionalFields?: { "includeCloseApproachData"?: boolean } | { "date"?: string } | { "startDate"?: string, "endDate"?: string } | { "startDate"?: string, "endDate"?: string, "location"?: "ALL" | "earth" | "MESSENGER" | "STEREO A" | "STEREO B", "catalog"?: "ALL" | "SWRC_CATALOG" | "WINSLOW_MESSENGER_ICME_CATALOG" } | { "date"?: string, "dim"?: number };

    /**
     * By default just the URL of the image is returned. When set to true the image will be downloaded.
     * Default: true
     */
    readonly download?: boolean;

    /** Default: "data" */
    readonly binaryPropertyName?: string;

    /** Latitude for the location of the image */
    readonly lat?: number;

    /** Longitude for the location of the image */
    readonly lon?: number;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 20
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

}
