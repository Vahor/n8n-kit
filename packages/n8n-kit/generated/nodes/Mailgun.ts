// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Mailgun/Mailgun.node.ts' node

export const name = "mailgun" as const;
export const description = "Sends an email via Mailgun" as const;
export const version = 1 as const;
export const defaults = { name: "Mailgun" } as const;
export const credentials = [{ name: "mailgunApi", required: true }] as const;

/**
 * Sends an email via Mailgun
 */
export interface MailgunNodeParameters {
	/**
	 * Email address of the sender optional with name
	 */
	readonly fromEmail: string;

	/**
	 * Email address of the recipient. Multiple ones can be separated by comma.
	 */
	readonly toEmail: string;

	/**
	 * Cc Email address of the recipient. Multiple ones can be separated by comma.
	 */
	readonly ccEmail?: string;

	/**
	 * Bcc Email address of the recipient. Multiple ones can be separated by comma.
	 */
	readonly bccEmail?: string;

	/**
	 * Subject line of the email
	 */
	readonly subject?: string;

	/**
	 * Plain text message of email
	 * Type options: {"rows":5}
	 */
	readonly text?: string;

	/**
	 * HTML text message of email
	 * Type options: {"rows":5,"editor":"htmlEditor"}
	 */
	readonly html?: string;

	/**
	 * Name of the binary properties which contain data which should be added to email as attachment. Multiple ones can be comma-separated.
	 */
	readonly attachments?: string;
}
