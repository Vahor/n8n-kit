// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Microsoft/Teams/MicrosoftTeamsTrigger.node.ts' node

export const name = "microsoftTeamsTrigger" as const;
export const description =
	"Triggers workflows in n8n based on events from Microsoft Teams, such as new messages or team updates, using specified configurations." as const;
export const version = 1 as const;
export const defaults = { name: "Microsoft Teams Trigger" } as const;
export const credentials = [
	{ name: "microsoftTeamsOAuth2Api", required: true },
] as const;

/**
 * Triggers workflows in n8n based on events from Microsoft Teams, such as new messages or team updates, using specified configurations.
 */
export interface MicrosoftTeamsTriggerNodeParameters {
	/**
	 * Select the event to trigger the workflow
	 * Default: "newChannelMessage"
	 */
	readonly event?:
		| "newChannel"
		| "newChannelMessage"
		| "newChat"
		| "newChatMessage"
		| "newTeamMember";

	/**
	 * Whether to watch for the event in all the available teams
	 */
	readonly watchAllTeams?: boolean;

	/**
	 * Select a team from the list, enter an ID or a URL
	 * Default: {"mode":"list","value":""}
	 */
	readonly teamId: any;

	/**
	 * Whether to watch for the event in all the available channels
	 */
	readonly watchAllChannels?: boolean;

	/**
	 * Select a channel from the list, enter an ID or a URL
	 * Default: {"mode":"list","value":""}
	 */
	readonly channelId: any;

	/**
	 * Whether to watch for the event in all the available chats
	 */
	readonly watchAllChats?: boolean;

	/**
	 * Select a chat from the list, enter an ID or a URL
	 * Default: {"mode":"list","value":""}
	 */
	readonly chatId: any;
}
