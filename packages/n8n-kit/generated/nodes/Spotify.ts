// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Spotify/Spotify.node.ts' node

export const name = "spotify" as const;
export const description =
	"Access public song data via the Spotify API" as const;
export const version = 1 as const;
export const defaults = { name: "Spotify" } as const;
export const credentials = [
	{ name: "spotifyOAuth2Api", required: true },
] as const;

/**
 * Access public song data via the Spotify API
 */
export interface SpotifyNodeParameters {
	/**
	 * Default: "player"
	 */
	readonly resource?:
		| "album"
		| "artist"
		| "library"
		| "myData"
		| "player"
		| "playlist"
		| "track";

	/**
	 * Default: "addSongToQueue"
	 */
	readonly operation?:
		| "addSongToQueue"
		| "currentlyPlaying"
		| "nextSong"
		| "pause"
		| "previousSong"
		| "recentlyPlayed"
		| "resume"
		| "volume"
		| "startMusic"
		| "get"
		| "getNewReleases"
		| "getTracks"
		| "search"
		| "getAlbums"
		| "getRelatedArtists"
		| "getTopTracks"
		| "add"
		| "create"
		| "getUserPlaylists"
		| "delete"
		| "getAudioFeatures"
		| "getLikedTracks"
		| "getFollowingArtists";

	/**
	 * Enter a playlist, artist, or album URI or ID
	 */
	readonly id: string;

	/**
	 * The keyword term to search for
	 */
	readonly query: string;

	/**
	 * Top tracks in which country? Enter the postal abbreviation
	 * Default: "US"
	 */
	readonly country: string;

	/**
	 * Name of the playlist to create
	 */
	readonly name: string;

	/**
	 * Default: {}
	 */
	readonly additionalFields?: {
		description: string;
		public: boolean;
		position: number;
	};

	/**
	 * The track's Spotify URI or its ID. The track to add/delete from the playlist.
	 */
	readonly trackID: string;

	/**
	 * Whether to return all results or only up to a given limit
	 */
	readonly returnAll: boolean;

	/**
	 * Max number of results to return
	 * Default: 50
	 * Type options: {"minValue":1,"maxValue":100}
	 */
	readonly limit: number;

	/**
	 * The volume percentage to set
	 * Default: 50
	 * Type options: {"minValue":0,"maxValue":100}
	 */
	readonly volumePercent: number;

	/**
	 * Default: {}
	 */
	readonly filters?: { country: string; market: string };
}
