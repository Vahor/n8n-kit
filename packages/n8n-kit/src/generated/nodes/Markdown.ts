// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Markdown/Markdown.node.ts' node

export const description = "Convert data between Markdown and HTML" as const;
export const type = "n8n-nodes-base.markdown" as const;
export const version = 1 as const;
export const credentials = [] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MarkdownNodeParameters {
    /** Default: "htmlToMarkdown" */
    readonly mode?: "markdownToHtml" | "htmlToMarkdown";

    /** The HTML to be converted to markdown */
    readonly html?: string;

    /** The Markdown to be converted to html */
    readonly markdown?: string;

    /**
     * The field to put the output in. Specify nested fields using dots, e.g."level1.level2.newKey".
     * Default: "data"
     */
    readonly destinationKey?: string;

    /** Default: {} */
    readonly options?: { bulletMarker?: string, codeFence?: string, emDelimiter?: string, globalEscape?: { value: { pattern?: string, replacement?: string } }, ignore?: string, keepDataImages?: boolean, lineStartEscape?: { value: { pattern?: string, replacement?: string } }, maxConsecutiveNewlines?: number, useLinkReferenceDefinitions?: boolean, strongDelimiter?: string, codeBlockStyle?: "fence" | "indented", textReplace?: { values: { pattern?: string, replacement?: string } }, blockElements?: string } | { openLinksInNewWindow?: boolean, simplifiedAutoLink?: boolean, backslashEscapesHTMLTags?: boolean, completeHTMLDocument?: boolean, customizedHeaderId?: boolean, emoji?: boolean, encodeEmails?: boolean, excludeTrailingPunctuationFromURLs?: boolean, ghCodeBlocks?: boolean, ghCompatibleHeaderId?: boolean, ghMentionsLink?: string, ghMentions?: boolean, tasklists?: boolean, headerLevelStart?: number, requireSpaceBeforeHeadingText?: boolean, literalMidWordAsterisks?: boolean, literalMidWordUnderscores?: boolean, noHeaderId?: boolean, parseImgDimensions?: boolean, prefixHeaderId?: string, rawHeaderId?: boolean, rawPrefixHeaderId?: boolean, simpleLineBreaks?: boolean, smartIndentationFix?: boolean, disableForced4SpacesIndentedSublists?: boolean, splitAdjacentBlockquotes?: boolean, strikethrough?: boolean, tablesHeaderId?: boolean, tables?: boolean };

}
