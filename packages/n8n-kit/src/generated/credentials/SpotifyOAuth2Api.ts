// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SpotifyOAuth2Api.credentials.ts' credentials

export const name = "spotifyOAuth2Api" as const;

/**
 * displayName: Spotify OAuth2 API
 * documentationUrl: spotify
 */
export interface SpotifyOAuth2ApiCredentials {
    /** Default: "https://api.spotify.com/" */
    readonly "server"?: unknown;

    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://accounts.spotify.com/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://accounts.spotify.com/api/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "user-read-playback-state playlist-read-collaborative user-modify-playback-state playlist-modify-public user-read-currently-playing playlist-read-private user-read-recently-played playlist-modify-private user-library-read user-follow-read" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "spotifyOAuth2Api";
}
