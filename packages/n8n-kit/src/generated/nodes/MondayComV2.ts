// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MondayCom/V2/MondayComV2.node.ts' node

export const description = "Consume Monday.com API" as const;
export const type = "n8n-nodes-base.mondayCom" as const;
export const version = 2 as const;
export const credentials = [{"name":"mondayComApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"mondayComOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MondayComV2NodeParameters {
    /** Default: "accessToken" */
    readonly authentication?: "accessToken" | "oAuth2";

    /** Default: "item" */
    readonly resource?: "board" | "group" | "column" | "item" | "update";

    /** Default: "getBoard" */
    readonly operation?: "aggregateBoardData" | "archiveOrDeleteBoard" | "createBoard" | "duplicateBoard" | "getBoard" | "getBoards" | "getActivityLogs" | "getBoardSubscribers" | "searchBoardsAccount" | "updateBoardSubscribers" | "addColumnLabel" | "createColumn" | "createOrGetTag" | "deleteColumn" | "getColumns" | "updateColumn" | "updateColumnLabel" | "archiveOrDeleteGroup" | "createGroup" | "duplicateGroup" | "getGroups" | "updateGroup" | "archiveOrDeleteItem" | "bulkImport" | "clearColumnValues" | "createItem" | "duplicateItem" | "getItem" | "getBulkImportStatus" | "getColumnValue" | "getItems" | "getItemSubscribers" | "moveItem" | "searchItemsAccount" | "updateItem" | "addFileToUpdate" | "createUpdate" | "getUpdates" | "searchUpdatesAccount";

    /** The name of the new board */
    readonly boardName?: string;

    /**
     * Who can see the board: public = everyone in the account, private = invited members, shareable = including guests
     * Default: "public"
     */
    readonly boardKind?: "private" | "public" | "share";

    /** Default: {} */
    readonly createBoardOptions?: { description?: string, folderId?: string, ownerIds?: { rows: Array<{ user?: {
	value: string,
	mode: "list" | "id",
} }> }, subscriberIds?: { rows: Array<{ user?: {
	value: string,
	mode: "list" | "id",
} }> }, templateId?: string, workspaceId?: {
	value: string,
	mode: "list" | "id",
} };

    /**
     * How much of the board to copy
     * Default: "duplicate_board_with_structure"
     */
    readonly duplicateType?: "duplicate_board_with_pulses" | "duplicate_board_with_structure" | "duplicate_board_with_pulses_and_updates";

    /** Default: {} */
    readonly duplicateBoardOptions?: { boardName?: string, folderId?: string, keepSubscribers?: boolean, workspaceId?: {
	value: string,
	mode: "list" | "id",
} };

    /**
     * Whether to add the selected users/teams to the board or remove them
     * Default: "add"
     */
    readonly subscribersAction?: "add" | "remove";

    /**
     * The users to add or remove. In expression mode, pass user IDs as a comma-separated string.
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly subscriberUserIds?: { rows: Array<{ user?: {
	value: string,
	mode: "list" | "id",
} }> };

    /**
     * The teams to add or remove. In expression mode, pass team IDs as a comma-separated string. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getTeamsList"}
     */
    readonly subscriberTeamIds?: unknown[];

    /**
     * Whether the users/teams become plain subscribers or board owners
     * Default: "subscriber"
     */
    readonly subscriberKind?: "owner" | "subscriber";

    /** Default: {} */
    readonly updateSubscribersOptions?: { mode?: "append" | "replace" };

    /**
     * Whether to return the users subscribed to the board
     * Default: true
     */
    readonly includeSubscribers?: boolean;

    /**
     * Whether to return the users who own the board
     * Default: true
     */
    readonly includeOwners?: boolean;

    /**
     * Whether to return the teams subscribed to the board. Limitation: only the first 1,000 team subscribers are returned.
     * Default: true
     */
    readonly includeTeamSubscribers?: boolean;

    /**
     * Whether to return the teams that own the board. Limitation: only the first 1,000 team owners are returned.
     * Default: true
     */
    readonly includeTeamOwners?: boolean;

    /** Default: {} */
    readonly activityLogFilters?: { columnIds?: unknown[], from?: string, groupIds?: unknown[], itemIds?: string, to?: string, userIds?: { rows: Array<{ user?: {
	value: string,
	mode: "list" | "id",
} }> } };

    /** Default: {} */
    readonly activityLogOptions?: { limit?: number, page?: number };

    /** Default: {} */
    readonly getBoardOptions?: { includeCompleteData?: boolean };

    /**
     * What to calculate across the board’s items
     * Default: {"calculations":[{"function":"countItems"}]}
     * Type options: {"multipleValues":true}
     */
    readonly aggregateCalculations?: { calculations: Array<{ function?: "average" | "countItems" | "countUnique" | "countValues" | "max" | "median" | "min" | "sum", numericColumnId?: string, minMaxColumnId?: string, anyColumnId?: string, outputName?: string }> };

    /**
     * Split the results into one row per value of these columns, like the rows of a pivot table. Without a grouping you get a single totals row for the whole board.
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly aggregateGroupBy?: { groups: Array<{ columnId?: string, dateGrouping?: "none" | "day" | "week" | "month" | "quarter" | "year" }> };

    /**
     * Only aggregate the items that match these column-value filters (applied server-side)
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly aggregateFilters?: { rules: Array<{ columnId?: string, operator?: string, value?: string }> };

    /** Default: {} */
    readonly aggregateOptions?: { limit?: number, filtersMatch?: "and" | "or" };

    /** Default: {} */
    readonly filters?: { boardKind?: "private" | "public" | "share", boardIds?: unknown[], orderBy?: "created_at" | "used_at", state?: "active" | "all" | "archived" | "deleted", workspaceIds?: unknown[] };

    /** Default: {} */
    readonly options?: { includeCompleteData?: boolean, limit?: number, page?: number } | { columnIds?: unknown[], includeCursor?: boolean, groupIds?: unknown[], includeSubitems?: boolean, limit?: number, filtersMatch?: "and" | "or", sortBy?: string, sortDirection?: "asc" | "desc", startingCursor?: string };

    /**
     * The column to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getBoardColumns","loadOptionsDependsOn":["boardId.value"]}
     */
    readonly updateColumnId?: string;

    /**
     * The column to permanently delete — its values on all items are lost. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getBoardColumns","loadOptionsDependsOn":["boardId.value"]}
     */
    readonly deleteColumnId?: string;

    /** The new title for the column; leave empty to keep the current title */
    readonly newColumnTitle?: string;

    /** The new description for the column; leave empty to keep the current description */
    readonly newColumnDescription?: string;

    /** Default: {} */
    readonly updateColumnOptions?: { rollupFunction?: "COUNT_KEYS" | "MAX" | "MIN" | "MIN_MAX" | "NONE" | "SUM", settingsJson?: string, width?: number };

    /**
     * The kind of column to edit labels on
     * Default: "status"
     */
    readonly labelColumnKind?: "dropdown" | "status";

    /**
     * The status/dropdown column to edit labels on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getBoardLabelColumns","loadOptionsDependsOn":["boardId.value","labelColumnKind"]}
     */
    readonly labelColumnId?: string;

    /** The text of the new label */
    readonly newLabelName?: string;

    /**
     * The color of the new label, from monday’s status palette
     * Default: "working_orange"
     */
    readonly newLabelColor?: "explosive" | "american_gray" | "blackish" | "dark_red" | "sofia_pink" | "stuck_red" | "sunset" | "bright_blue" | "chili_blue" | "dark_blue" | "indigo" | "navy" | "river" | "royal" | "sky" | "steel" | "winter" | "dark_orange" | "peach" | "working_orange" | "egg_yolk" | "saladish" | "aquamarine" | "bright_green" | "done_green" | "grass_green" | "teal" | "berry" | "bubble" | "dark_indigo" | "dark_purple" | "lavender" | "lilac" | "lipstick" | "orchid" | "purple" | "brown" | "coffee" | "pecan" | "tan";

    /** Default: {} */
    readonly addColumnLabelOptions?: { isDone?: boolean, description?: string, labelPosition?: "after" | "first" | "last" | "before", positionLabelId?: string };

    /**
     * The label to modify (by its label ID). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getColumnLabels","loadOptionsDependsOn":["boardId.value","labelColumnKind","labelColumnId"]}
     */
    readonly existingLabelId?: string;

    /**
     * What to change on the label. Anything not set keeps its current value.
     * Default: {}
     */
    readonly labelChanges?: { color?: "explosive" | "american_gray" | "blackish" | "dark_red" | "sofia_pink" | "stuck_red" | "sunset" | "bright_blue" | "chili_blue" | "dark_blue" | "indigo" | "navy" | "river" | "royal" | "sky" | "steel" | "winter" | "dark_orange" | "peach" | "working_orange" | "egg_yolk" | "saladish" | "aquamarine" | "bright_green" | "done_green" | "grass_green" | "teal" | "berry" | "bubble" | "dark_indigo" | "dark_purple" | "lavender" | "lilac" | "lipstick" | "orchid" | "purple" | "brown" | "coffee" | "pecan" | "tan", isDone?: boolean, isDeactivated?: boolean, description?: string, newName?: string, labelPosition?: "after" | "first" | "last" | "before", positionLabelId?: string };

    /** The name of the tag to get or create. Tag names are case sensitive. */
    readonly tagName?: string;

    /** Default: {} */
    readonly tagOptions?: { boardId?: string };

    /** The title of the new column */
    readonly columnTitle?: string;

    /**
     * The type of column to create. Types needing complex settings (connect boards, mirror, formula) are not listed — use the GraphQL operation for those.
     * Default: "text"
     */
    readonly columnType?: "checkbox" | "color_picker" | "country" | "date" | "dependency" | "dropdown" | "email" | "file" | "hour" | "link" | "location" | "long_text" | "numbers" | "people" | "phone" | "rating" | "status" | "tags" | "text" | "timeline" | "vote" | "week" | "world_clock";

    /**
     * The status labels to create, in display order. Left empty, monday creates its default labels (Working on it / Done / Stuck).
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly statusLabels?: { label: Array<{ label: string, color?: "explosive" | "american_gray" | "blackish" | "dark_red" | "sofia_pink" | "stuck_red" | "sunset" | "bright_blue" | "chili_blue" | "dark_blue" | "indigo" | "navy" | "river" | "royal" | "sky" | "steel" | "winter" | "dark_orange" | "peach" | "working_orange" | "egg_yolk" | "saladish" | "aquamarine" | "bright_green" | "done_green" | "grass_green" | "teal" | "berry" | "bubble" | "dark_indigo" | "dark_purple" | "lavender" | "lilac" | "lipstick" | "orchid" | "purple" | "brown" | "coffee" | "pecan" | "tan", description?: string, isDone?: boolean }> };

    /**
     * The dropdown options to create, in display order. Left empty, the dropdown starts without options.
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly dropdownLabels?: { label: Array<{ label: string }> };

    /**
     * Settings specific to the selected column type. Anything not set keeps monday’s default.
     * Default: {}
     */
    readonly columnTypeSettings?: { allowMultipleItems?: boolean, calcType?: "earliestToLatest" | "earliest" | "latest", ccPulse?: boolean, color?: string, colorMethod?: "hex" | "rgb", customUnit?: string, dateFormat?: string, defaultText?: string, disableAutoTitle?: boolean, endWorkingHours?: number, hideFooter?: boolean, hourFormat?: "24H" | "12H", includePulseInSubject?: boolean, limitSelect?: boolean, labelLimitCount?: number, maxPeopleAllowed?: number, ratingLimit?: number, useNumericOnlyFormat?: boolean, precision?: 0 | 1 | 2 | 3 | 4 | 5 | -1, ratingSymbol?: "stars" | "hearts", rollupFunction?: "" | "COUNT_KEYS" | "MAX" | "MIN" | "MIN_MAX" | "NONE" | "SUM", showFlag?: boolean, showCurrentYear?: boolean, showMilestone?: boolean, showTimeByDefault?: boolean, showUtcOffset?: boolean, showWeekDay?: boolean, showWeekNumber?: boolean, showWeekends?: boolean, startWorkingHours?: number, clockFormat?: string, timeFormat?: string, unitDirection?: "left" | "right", unitSymbol?: string };

    /** Default: {} */
    readonly createColumnOptions?: { customColumnId?: string, defaultsJson?: string, description?: string, columnPosition?: "after" | "start" | "end" | "before", positionColumnId?: string };

    /**
     * The group to operate on
     * Default: {"mode":"list","value":""}
     */
    readonly groupId?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: {} */
    readonly duplicateGroupOptions?: { groupTitle?: string, groupPosition?: "after" | "bottom" | "top" | "before", positionGroupId?: string };

    /** The name of the new group */
    readonly groupName?: string;

    /** Default: {} */
    readonly createGroupOptions?: { groupColor?: "#c4c4c4" | "#808080" | "#ff158a" | "#bb3354" | "#e2445c" | "#579bfc" | "#0086c0" | "#66ccff" | "#ff642e" | "#fdab3d" | "#cab641" | "#ffcb00" | "#037f4c" | "#00c875" | "#9cd326" | "#784bd1" | "#ff5ac4" | "#a25ddc" | "#7f5347", groupPosition?: "after" | "bottom" | "top" | "before", positionGroupId?: string };

    /**
     * The group attributes to change. Each field is applied as its own change in one request, in order (title, color, position) — if one fails, fields before it may already be applied.
     * Default: {}
     */
    readonly updateGroupFields?: { groupColor?: "grey" | "trolley-grey" | "dark-pink" | "dark-red" | "red" | "blue" | "dark-blue" | "turquoise" | "dark-orange" | "orange" | "yellow" | "dark-green" | "green" | "lime-green" | "dark-purple" | "light-pink" | "purple" | "brown", newTitle?: string, groupPosition?: "after" | "bottom" | "top" | "before", positionGroupId?: string };

    /** Default: {} */
    readonly getGroupsOptions?: { groupIds?: unknown[] };

    /**
     * The board to operate on
     * Default: {"mode":"list","value":""}
     */
    readonly boardId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * The item to operate on
     * Default: {"mode":"list","value":""}
     */
    readonly itemId?: {
	value: string,
	mode: "list" | "id",
} | {
	value: string,
	mode: "list",
} | string;

    /**
     * How to choose the item
     * Default: "id"
     */
    readonly itemInputMode?: "id" | "list";

    /**
     * Whether to process one picked item or a list of item IDs
     * Default: "single"
     */
    readonly itemsMode?: "multiple" | "single";

    /** Comma-separated IDs of the items to archive or delete (up to 50 per execution). Feed it from a Get Many operation with an expression. */
    readonly bulkItemIds?: string;

    /**
     * Whether to archive (recoverable) or permanently delete
     * Default: "archive"
     */
    readonly archiveOrDeleteAction?: "archive" | "delete";

    /**
     * The column to read the value from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getBoardColumns","loadOptionsDependsOn":["boardId.value"]}
     */
    readonly columnId?: string;

    /** Default: "group" */
    readonly moveDestination?: "board" | "group";

    /**
     * The group to move the item to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getBoardGroups","loadOptionsDependsOn":["boardId.value"]}
     */
    readonly targetGroupId?: string;

    /**
     * The board to move the item to
     * Default: {"mode":"list","value":""}
     */
    readonly targetBoardId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * The group on the target board to move the item to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTargetBoardGroups","loadOptionsDependsOn":["targetBoardId.value"]}
     */
    readonly targetBoardGroupId?: string;

    /**
     * How source columns map to target-board columns. Unmapped columns lose their values on cross-board moves.
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly columnsMappingUi?: { mappings: Array<{ source?: string, target?: string }> };

    /** Default: {} */
    readonly moveOptions?: { columnsMapping?: string };

    /** Whether the duplicate should include the item’s updates */
    readonly withUpdates?: boolean;

    /**
     * Whether to create a top-level item or a subitem under a parent item
     * Default: "item"
     */
    readonly createAs?: "subitem" | "item";

    /** The name of the new item */
    readonly name?: string;

    /** Default: "mapper" */
    readonly columnValuesMode?: "mapper" | "json";

    /**
     * Column values in the monday API format, keyed by column ID (e.g. {"status": {"label": "Done"}}). See <a href="https://developer.monday.com/api-reference/reference/column-types-reference">the column types reference</a>.
     * Default: "{}"
     */
    readonly columnValuesJson?: string;

    /** Default: {} */
    readonly createOptions?: { groupId?: string, createLabelsIfMissing?: boolean };

    /** Comma-separated IDs of the items to clear (up to 10 per execution). Feed it from a Get Many operation with an expression. */
    readonly clearItemIds?: string;

    /**
     * The columns to reset to their empty/default value on every selected item (up to 10). Read-only columns (formula, mirror, etc.) cannot be cleared. In expression mode, pass a comma-separated string of column IDs. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getClearableBoardColumns","loadOptionsDependsOn":["boardId.value"]}
     */
    readonly clearColumnIds?: unknown[];

    /**
     * The group newly created items are added to; leave empty for the board's top group. With Upsert/Skip matching, matching is board-wide — this only places NEW items. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getBoardGroups","loadOptionsDependsOn":["boardId.value"]}
     */
    readonly bulkImportGroupId?: string;

    /**
     * Which import mutation to use
     * Default: "ingest"
     */
    readonly bulkImportType?: "backfill" | "ingest";

    /**
     * Where the import rows come from
     * Default: "mapped"
     */
    readonly bulkImportSource?: "file" | "mapped";

    /** Default: "data" */
    readonly bulkImportBinaryPropertyName?: string;

    /**
     * How to handle rows whose match column value already exists on the board. Not available for multi-level hierarchy files (they always create).
     * Default: "none"
     */
    readonly bulkImportOnMatch?: "none" | "SKIP" | "UPSERT";

    /**
     * The column existing items are matched on (board-wide). If several rows share a match value, only the last row is applied; if several items match, the most recently created one is updated. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getBulkImportMatchColumns","loadOptionsDependsOn":["boardId.value"]}
     */
    readonly bulkImportMatchColumnId?: string;

    /**
     * Whether to wait for the import job to finish (polling every 10 seconds, up to Max Wait Time) and return its result. When off, save the job ID and poll manually with Get Bulk Import Status every 10 seconds.
     * Default: true
     */
    readonly bulkImportWait?: boolean;

    /** Default: {} */
    readonly bulkImportOptions?: { includeRowResults?: boolean, maxWaitTime?: number };

    /** The job ID returned by a Bulk Import run. Poll every 10 seconds. Note: if the import report is ready, the report URL expires after 10 minutes. */
    readonly bulkImportJobId?: string;

    /** Default: {} */
    readonly bulkImportStatusOptions?: { includeRowResults?: boolean };

    /**
     * Whether to return a flattened item (column values keyed by column title) instead of the raw API shape
     * Default: true
     */
    readonly simplify?: boolean;

    /** Default: {} */
    readonly getItemOptions?: { includeAllItemInfo?: boolean, includeSubitems?: boolean, includeUpdates?: boolean, columnIds?: unknown[] };

    /**
     * Server-side column-value filters (items_page query params) — far cheaper than fetching everything and filtering in n8n
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly itemFilters?: { rules: Array<{ columnId?: string, operator?: string, value?: string }> };

    /** The text to search for — matched by keyword and semantic relevance */
    readonly searchQuery?: string;

    /** Whether to also resolve each result to its latest full entity from the core API (adds latency). The search index itself is fast but can be slightly stale. liveData is null when the entity was deleted, is inaccessible, or was not yet re-indexed. */
    readonly includeLiveData?: boolean;

    /** Default: {} */
    readonly searchOptions?: { boardIds?: unknown[], createdAfter?: string, createdBefore?: string, creatorIds?: { rows: Array<{ user?: {
	value: string,
	mode: "list" | "id",
} }> }, searchLimit?: number, strategy?: "BALANCED" | "QUALITY" | "SPEED", updatedAfter?: string, updatedBefore?: string, workspaceIds?: unknown[] };

    /** The ID of the update to attach the file to */
    readonly updateId?: string;

    /** Default: "data" */
    readonly binaryPropertyName?: string;

    /** Default: "item" */
    readonly updatesScope?: "account" | "item";

    /**
     * The text of the update. Supports HTML tags: &lt;b&gt; (bold), &lt;i&gt; (italic), &lt;u&gt; (underline), &lt;a&gt; (links), &lt;br&gt; (line breaks). Some HTML attributes and styles may be stripped by the API. Maximum length limit unknown. Do not use @ symbols for mentions; use Mention Users/Teams options instead.
     * Type options: {"rows":3}
     */
    readonly updateBody?: string;

    /** Default: {} */
    readonly createUpdateOptions?: { mentionUserIds?: { rows: Array<{ user?: {
	value: string,
	mode: "list" | "id",
} }> }, mentionTeamIds?: unknown[], parentId?: string };

    /** Default: {} */
    readonly getUpdatesOptions?: { includeAssets?: boolean, includeReplies?: boolean, limit?: number, page?: number };

}
