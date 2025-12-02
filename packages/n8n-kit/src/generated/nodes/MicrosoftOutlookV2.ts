// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/Outlook/v2/MicrosoftOutlookV2.node.ts' node

export const description = "Consume Microsoft Outlook API" as const;
export const type = "n8n-nodes-base.microsoftOutlook" as const;
export const version = 2 as const;
export const credentials = [{"name":"microsoftOutlookOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftOutlookV2NodeParameters {
    /** Default: "message" */
    readonly resource?: "calendar" | "contact" | "draft" | "event" | "folder" | "folderMessage" | "message" | "messageAttachment";

    /** Default: "getAll" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "send" | "update" | "getAll" | "delete" | "get" | "getAll" | "move" | "reply" | "send" | "sendAndWait" | "update" | "add" | "download" | "get" | "getAll";

    /** The name of the calendar to create */
    readonly name?: string;

    /** Default: {} */
    readonly additionalFields?: { calendarGroup?: string, color?: "lightBlue" | "lightBrown" | "lightGray" | "lightGreen" | "lightOrange" | "lightPink" | "lightRed" | "lightTeal" | "lightYellow" } | { assistantName?: string, birthday?: string, businessAddress?: { values: { city?: string, countryOrRegion?: string, postalCode?: string, state?: string, street?: string } }, businessHomePage?: string, businessPhones?: string, categories?: string, children?: string, companyName?: string, department?: string, displayName?: string, emailAddresses?: { values: Array<{ name?: string, address?: string }> }, fileAs?: string, homeAddress?: { values: { city?: string, countryOrRegion?: string, postalCode?: string, state?: string, street?: string } }, homePhones?: string, imAddresses?: string, initials?: string, jobTitle?: string, manager?: string, middleName?: string, mobilePhone?: string, givenName?: string, nickName?: string, officeLocation?: string, otherAddress?: { values: { city?: string, countryOrRegion?: string, postalCode?: string, state?: string, street?: string } }, personalNotes?: string, profession?: string, spouseName?: string, surname?: string, title?: string } | { attachments?: { attachments: Array<{ binaryPropertyName?: string }> }, bccRecipients?: string, categories?: unknown[], ccRecipients?: string, internetMessageHeaders?: { headers: Array<{ name?: string, value?: string }> }, from?: string, importance?: "Low" | "Normal" | "High", bodyContentType?: "html" | "Text", isReadReceiptRequested?: boolean, replyTo?: string, toRecipients?: string } | { categories?: unknown[], body?: string, bodyPreview?: string, hideAttendees?: boolean, importance?: "low" | "normal" | "high", isAllDay?: boolean, isCancelled?: boolean, isDraft?: boolean, isOnlineMeeting?: boolean, sensitivity?: "normal" | "personal" | "private" | "confidential", showAs?: "busy" | "free" | "oof" | "tentative" | "workingElsewhere", timeZone?: "Africa/Abidjan" | "Africa/Accra" | "Africa/Addis_Ababa" | "Africa/Algiers" | "Africa/Asmara" | "Africa/Asmera" | "Africa/Bamako" | "Africa/Bangui" | "Africa/Banjul" | "Africa/Bissau" | "Africa/Blantyre" | "Africa/Brazzaville" | "Africa/Bujumbura" | "Africa/Cairo" | "Africa/Casablanca" | "Africa/Ceuta" | "Africa/Conakry" | "Africa/Dakar" | "Africa/Dar_es_Salaam" | "Africa/Djibouti" | "Africa/Douala" | "Africa/El_Aaiun" | "Africa/Freetown" | "Africa/Gaborone" | "Africa/Harare" | "Africa/Johannesburg" | "Africa/Juba" | "Africa/Kampala" | "Africa/Khartoum" | "Africa/Kigali" | "Africa/Kinshasa" | "Africa/Lagos" | "Africa/Libreville" | "Africa/Lome" | "Africa/Luanda" | "Africa/Lubumbashi" | "Africa/Lusaka" | "Africa/Malabo" | "Africa/Maputo" | "Africa/Maseru" | "Africa/Mbabane" | "Africa/Mogadishu" | "Africa/Monrovia" | "Africa/Nairobi" | "Africa/Ndjamena" | "Africa/Niamey" | "Africa/Nouakchott" | "Africa/Ouagadougou" | "Africa/Porto-Novo" | "Africa/Sao_Tome" | "Africa/Timbuktu" | "Africa/Tripoli" | "Africa/Tunis" | "Africa/Windhoek" | "America/Adak" | "America/Anchorage" | "America/Anguilla" | "America/Antigua" | "America/Araguaina" | "America/Argentina/Buenos_Aires" | "America/Argentina/Catamarca" | "America/Argentina/ComodRivadavia" | "America/Argentina/Cordoba" | "America/Argentina/Jujuy" | "America/Argentina/La_Rioja" | "America/Argentina/Mendoza" | "America/Argentina/Rio_Gallegos" | "America/Argentina/Salta" | "America/Argentina/San_Juan" | "America/Argentina/San_Luis" | "America/Argentina/Tucuman" | "America/Argentina/Ushuaia" | "America/Aruba" | "America/Asuncion" | "America/Atikokan" | "America/Atka" | "America/Bahia" | "America/Bahia_Banderas" | "America/Barbados" | "America/Belem" | "America/Belize" | "America/Blanc-Sablon" | "America/Boa_Vista" | "America/Bogota" | "America/Boise" | "America/Buenos_Aires" | "America/Cambridge_Bay" | "America/Campo_Grande" | "America/Cancun" | "America/Caracas" | "America/Catamarca" | "America/Cayenne" | "America/Cayman" | "America/Chicago" | "America/Chihuahua" | "America/Ciudad_Juarez" | "America/Coral_Harbour" | "America/Cordoba" | "America/Costa_Rica" | "America/Coyhaique" | "America/Creston" | "America/Cuiaba" | "America/Curacao" | "America/Danmarkshavn" | "America/Dawson" | "America/Dawson_Creek" | "America/Denver" | "America/Detroit" | "America/Dominica" | "America/Edmonton" | "America/Eirunepe" | "America/El_Salvador" | "America/Ensenada" | "America/Fort_Nelson" | "America/Fort_Wayne" | "America/Fortaleza" | "America/Glace_Bay" | "America/Godthab" | "America/Goose_Bay" | "America/Grand_Turk" | "America/Grenada" | "America/Guadeloupe" | "America/Guatemala" | "America/Guayaquil" | "America/Guyana" | "America/Halifax" | "America/Havana" | "America/Hermosillo" | "America/Indiana/Indianapolis" | "America/Indiana/Knox" | "America/Indiana/Marengo" | "America/Indiana/Petersburg" | "America/Indiana/Tell_City" | "America/Indiana/Vevay" | "America/Indiana/Vincennes" | "America/Indiana/Winamac" | "America/Indianapolis" | "America/Inuvik" | "America/Iqaluit" | "America/Jamaica" | "America/Jujuy" | "America/Juneau" | "America/Kentucky/Louisville" | "America/Kentucky/Monticello" | "America/Knox_IN" | "America/Kralendijk" | "America/La_Paz" | "America/Lima" | "America/Los_Angeles" | "America/Louisville" | "America/Lower_Princes" | "America/Maceio" | "America/Managua" | "America/Manaus" | "America/Marigot" | "America/Martinique" | "America/Matamoros" | "America/Mazatlan" | "America/Mendoza" | "America/Menominee" | "America/Merida" | "America/Metlakatla" | "America/Mexico_City" | "America/Miquelon" | "America/Moncton" | "America/Monterrey" | "America/Montevideo" | "America/Montreal" | "America/Montserrat" | "America/Nassau" | "America/New_York" | "America/Nipigon" | "America/Nome" | "America/Noronha" | "America/North_Dakota/Beulah" | "America/North_Dakota/Center" | "America/North_Dakota/New_Salem" | "America/Nuuk" | "America/Ojinaga" | "America/Panama" | "America/Pangnirtung" | "America/Paramaribo" | "America/Phoenix" | "America/Port-au-Prince" | "America/Port_of_Spain" | "America/Porto_Acre" | "America/Porto_Velho" | "America/Puerto_Rico" | "America/Punta_Arenas" | "America/Rainy_River" | "America/Rankin_Inlet" | "America/Recife" | "America/Regina" | "America/Resolute" | "America/Rio_Branco" | "America/Rosario" | "America/Santa_Isabel" | "America/Santarem" | "America/Santiago" | "America/Santo_Domingo" | "America/Sao_Paulo" | "America/Scoresbysund" | "America/Shiprock" | "America/Sitka" | "America/St_Barthelemy" | "America/St_Johns" | "America/St_Kitts" | "America/St_Lucia" | "America/St_Thomas" | "America/St_Vincent" | "America/Swift_Current" | "America/Tegucigalpa" | "America/Thule" | "America/Thunder_Bay" | "America/Tijuana" | "America/Toronto" | "America/Tortola" | "America/Vancouver" | "America/Virgin" | "America/Whitehorse" | "America/Winnipeg" | "America/Yakutat" | "America/Yellowknife" | "Antarctica/Casey" | "Antarctica/Davis" | "Antarctica/DumontDUrville" | "Antarctica/Macquarie" | "Antarctica/Mawson" | "Antarctica/McMurdo" | "Antarctica/Palmer" | "Antarctica/Rothera" | "Antarctica/South_Pole" | "Antarctica/Syowa" | "Antarctica/Troll" | "Antarctica/Vostok" | "Arctic/Longyearbyen" | "Asia/Aden" | "Asia/Almaty" | "Asia/Amman" | "Asia/Anadyr" | "Asia/Aqtau" | "Asia/Aqtobe" | "Asia/Ashgabat" | "Asia/Ashkhabad" | "Asia/Atyrau" | "Asia/Baghdad" | "Asia/Bahrain" | "Asia/Baku" | "Asia/Bangkok" | "Asia/Barnaul" | "Asia/Beirut" | "Asia/Bishkek" | "Asia/Brunei" | "Asia/Calcutta" | "Asia/Chita" | "Asia/Choibalsan" | "Asia/Chongqing" | "Asia/Chungking" | "Asia/Colombo" | "Asia/Dacca" | "Asia/Damascus" | "Asia/Dhaka" | "Asia/Dili" | "Asia/Dubai" | "Asia/Dushanbe" | "Asia/Famagusta" | "Asia/Gaza" | "Asia/Harbin" | "Asia/Hebron" | "Asia/Ho_Chi_Minh" | "Asia/Hong_Kong" | "Asia/Hovd" | "Asia/Irkutsk" | "Asia/Istanbul" | "Asia/Jakarta" | "Asia/Jayapura" | "Asia/Jerusalem" | "Asia/Kabul" | "Asia/Kamchatka" | "Asia/Karachi" | "Asia/Kashgar" | "Asia/Kathmandu" | "Asia/Katmandu" | "Asia/Khandyga" | "Asia/Kolkata" | "Asia/Krasnoyarsk" | "Asia/Kuala_Lumpur" | "Asia/Kuching" | "Asia/Kuwait" | "Asia/Macao" | "Asia/Macau" | "Asia/Magadan" | "Asia/Makassar" | "Asia/Manila" | "Asia/Muscat" | "Asia/Nicosia" | "Asia/Novokuznetsk" | "Asia/Novosibirsk" | "Asia/Omsk" | "Asia/Oral" | "Asia/Phnom_Penh" | "Asia/Pontianak" | "Asia/Pyongyang" | "Asia/Qatar" | "Asia/Qostanay" | "Asia/Qyzylorda" | "Asia/Rangoon" | "Asia/Riyadh" | "Asia/Saigon" | "Asia/Sakhalin" | "Asia/Samarkand" | "Asia/Seoul" | "Asia/Shanghai" | "Asia/Singapore" | "Asia/Srednekolymsk" | "Asia/Taipei" | "Asia/Tashkent" | "Asia/Tbilisi" | "Asia/Tehran" | "Asia/Tel_Aviv" | "Asia/Thimbu" | "Asia/Thimphu" | "Asia/Tokyo" | "Asia/Tomsk" | "Asia/Ujung_Pandang" | "Asia/Ulaanbaatar" | "Asia/Ulan_Bator" | "Asia/Urumqi" | "Asia/Ust-Nera" | "Asia/Vientiane" | "Asia/Vladivostok" | "Asia/Yakutsk" | "Asia/Yangon" | "Asia/Yekaterinburg" | "Asia/Yerevan" | "Atlantic/Azores" | "Atlantic/Bermuda" | "Atlantic/Canary" | "Atlantic/Cape_Verde" | "Atlantic/Faeroe" | "Atlantic/Faroe" | "Atlantic/Jan_Mayen" | "Atlantic/Madeira" | "Atlantic/Reykjavik" | "Atlantic/South_Georgia" | "Atlantic/St_Helena" | "Atlantic/Stanley" | "Australia/ACT" | "Australia/Adelaide" | "Australia/Brisbane" | "Australia/Broken_Hill" | "Australia/Canberra" | "Australia/Currie" | "Australia/Darwin" | "Australia/Eucla" | "Australia/Hobart" | "Australia/LHI" | "Australia/Lindeman" | "Australia/Lord_Howe" | "Australia/Melbourne" | "Australia/NSW" | "Australia/North" | "Australia/Perth" | "Australia/Queensland" | "Australia/South" | "Australia/Sydney" | "Australia/Tasmania" | "Australia/Victoria" | "Australia/West" | "Australia/Yancowinna" | "Brazil/Acre" | "Brazil/DeNoronha" | "Brazil/East" | "Brazil/West" | "CET" | "CST6CDT" | "Canada/Atlantic" | "Canada/Central" | "Canada/Eastern" | "Canada/Mountain" | "Canada/Newfoundland" | "Canada/Pacific" | "Canada/Saskatchewan" | "Canada/Yukon" | "Chile/Continental" | "Chile/EasterIsland" | "Cuba" | "EET" | "EST" | "EST5EDT" | "Egypt" | "Eire" | "Etc/GMT" | "Etc/GMT+0" | "Etc/GMT+1" | "Etc/GMT+10" | "Etc/GMT+11" | "Etc/GMT+12" | "Etc/GMT+2" | "Etc/GMT+3" | "Etc/GMT+4" | "Etc/GMT+5" | "Etc/GMT+6" | "Etc/GMT+7" | "Etc/GMT+8" | "Etc/GMT+9" | "Etc/GMT-0" | "Etc/GMT-1" | "Etc/GMT-10" | "Etc/GMT-11" | "Etc/GMT-12" | "Etc/GMT-13" | "Etc/GMT-14" | "Etc/GMT-2" | "Etc/GMT-3" | "Etc/GMT-4" | "Etc/GMT-5" | "Etc/GMT-6" | "Etc/GMT-7" | "Etc/GMT-8" | "Etc/GMT-9" | "Etc/GMT0" | "Etc/Greenwich" | "Etc/UCT" | "Etc/UTC" | "Etc/Universal" | "Etc/Zulu" | "Europe/Amsterdam" | "Europe/Andorra" | "Europe/Astrakhan" | "Europe/Athens" | "Europe/Belfast" | "Europe/Belgrade" | "Europe/Berlin" | "Europe/Bratislava" | "Europe/Brussels" | "Europe/Bucharest" | "Europe/Budapest" | "Europe/Busingen" | "Europe/Chisinau" | "Europe/Copenhagen" | "Europe/Dublin" | "Europe/Gibraltar" | "Europe/Guernsey" | "Europe/Helsinki" | "Europe/Isle_of_Man" | "Europe/Istanbul" | "Europe/Jersey" | "Europe/Kaliningrad" | "Europe/Kiev" | "Europe/Kirov" | "Europe/Kyiv" | "Europe/Lisbon" | "Europe/Ljubljana" | "Europe/London" | "Europe/Luxembourg" | "Europe/Madrid" | "Europe/Malta" | "Europe/Mariehamn" | "Europe/Minsk" | "Europe/Monaco" | "Europe/Moscow" | "Europe/Nicosia" | "Europe/Oslo" | "Europe/Paris" | "Europe/Podgorica" | "Europe/Prague" | "Europe/Riga" | "Europe/Rome" | "Europe/Samara" | "Europe/San_Marino" | "Europe/Sarajevo" | "Europe/Saratov" | "Europe/Simferopol" | "Europe/Skopje" | "Europe/Sofia" | "Europe/Stockholm" | "Europe/Tallinn" | "Europe/Tirane" | "Europe/Tiraspol" | "Europe/Ulyanovsk" | "Europe/Uzhgorod" | "Europe/Vaduz" | "Europe/Vatican" | "Europe/Vienna" | "Europe/Vilnius" | "Europe/Volgograd" | "Europe/Warsaw" | "Europe/Zagreb" | "Europe/Zaporozhye" | "Europe/Zurich" | "GB" | "GB-Eire" | "GMT" | "GMT+0" | "GMT-0" | "GMT0" | "Greenwich" | "HST" | "Hongkong" | "Iceland" | "Indian/Antananarivo" | "Indian/Chagos" | "Indian/Christmas" | "Indian/Cocos" | "Indian/Comoro" | "Indian/Kerguelen" | "Indian/Mahe" | "Indian/Maldives" | "Indian/Mauritius" | "Indian/Mayotte" | "Indian/Reunion" | "Iran" | "Israel" | "Jamaica" | "Japan" | "Kwajalein" | "Libya" | "MET" | "MST" | "MST7MDT" | "Mexico/BajaNorte" | "Mexico/BajaSur" | "Mexico/General" | "NZ" | "NZ-CHAT" | "Navajo" | "PRC" | "PST8PDT" | "Pacific/Apia" | "Pacific/Auckland" | "Pacific/Bougainville" | "Pacific/Chatham" | "Pacific/Chuuk" | "Pacific/Easter" | "Pacific/Efate" | "Pacific/Enderbury" | "Pacific/Fakaofo" | "Pacific/Fiji" | "Pacific/Funafuti" | "Pacific/Galapagos" | "Pacific/Gambier" | "Pacific/Guadalcanal" | "Pacific/Guam" | "Pacific/Honolulu" | "Pacific/Johnston" | "Pacific/Kanton" | "Pacific/Kiritimati" | "Pacific/Kosrae" | "Pacific/Kwajalein" | "Pacific/Majuro" | "Pacific/Marquesas" | "Pacific/Midway" | "Pacific/Nauru" | "Pacific/Niue" | "Pacific/Norfolk" | "Pacific/Noumea" | "Pacific/Pago_Pago" | "Pacific/Palau" | "Pacific/Pitcairn" | "Pacific/Pohnpei" | "Pacific/Ponape" | "Pacific/Port_Moresby" | "Pacific/Rarotonga" | "Pacific/Saipan" | "Pacific/Samoa" | "Pacific/Tahiti" | "Pacific/Tarawa" | "Pacific/Tongatapu" | "Pacific/Truk" | "Pacific/Wake" | "Pacific/Wallis" | "Pacific/Yap" | "Poland" | "Portugal" | "ROC" | "ROK" | "Singapore" | "Turkey" | "UCT" | "US/Alaska" | "US/Aleutian" | "US/Arizona" | "US/Central" | "US/East-Indiana" | "US/Eastern" | "US/Hawaii" | "US/Indiana-Starke" | "US/Michigan" | "US/Mountain" | "US/Pacific" | "US/Samoa" | "UTC" | "Universal" | "W-SU" | "WET" | "Zulu", type?: "singleInstance" | "occurrence" | "exception" | "seriesMaster" } | { categories?: unknown[], body?: string, bodyPreview?: string, end?: string, hideAttendees?: boolean, importance?: "low" | "normal" | "high", isAllDay?: boolean, isCancelled?: boolean, isDraft?: boolean, isOnlineMeeting?: boolean, sensitivity?: "normal" | "personal" | "private" | "confidential", showAs?: "busy" | "free" | "oof" | "tentative" | "workingElsewhere", start?: string, timeZone?: string, subject?: string, type?: "singleInstance" | "occurrence" | "exception" | "seriesMaster" } | { attachments?: { attachments: Array<{ binaryPropertyName?: string }> }, bccRecipients?: string, ccRecipients?: string, internetMessageHeaders?: { headers: Array<{ name?: string, value?: string }> }, from?: string, importance?: "Low" | "Normal" | "High", bodyContentType?: "html" | "Text", isReadReceiptRequested?: boolean, toRecipients?: string, replyTo?: string, subject?: string } | { attachments?: { attachments: Array<{ binaryPropertyName?: string }> }, bccRecipients?: string, categories?: unknown[], ccRecipients?: string, internetMessageHeaders?: { headers: Array<{ name?: string, value?: string }> }, from?: string, importance?: "Low" | "Normal" | "High", bodyContentType?: "html" | "Text", isReadReceiptRequested?: boolean, replyTo?: string, saveToSentItems?: boolean };

    /** Default: {"mode":"list","value":""} */
    readonly calendarId?: {
	value: string,
	mode: "list" | "id",
};

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { custom?: string } | { custom?: string, emailAddress?: string } | { filter?: string };

    /** Default: {} */
    readonly updateFields?: { color?: "lightBlue" | "lightBrown" | "lightGray" | "lightGreen" | "lightOrange" | "lightPink" | "lightRed" | "lightTeal" | "lightYellow", isDefaultCalendar?: boolean, name?: string } | { bccRecipients?: string, categories?: unknown[], ccRecipients?: string, internetMessageHeaders?: { headers: Array<{ name?: string, value?: string }> }, from?: string, importance?: "Low" | "Normal" | "High", isRead?: boolean, bodyContent?: string, bodyContentType?: "html" | "Text", isReadReceiptRequested?: boolean, replyTo?: string, subject?: string, toRecipients?: string } | { bccRecipients?: string, categories?: unknown[], ccRecipients?: string, internetMessageHeaders?: { headers: Array<{ name?: string, value?: string }> }, folderId?: {
	value: string,
	mode: "list" | "url" | "id",
}, importance?: "Low" | "Normal" | "High", isRead?: boolean, bodyContent?: string, bodyContentType?: "html" | "Text", isReadReceiptRequested?: boolean, toRecipients?: string, replyTo?: string, subject?: string };

    readonly givenName?: string;

    readonly surname?: string;

    /** Default: {"mode":"list","value":""} */
    readonly contactId?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: "simple" */
    readonly output?: "simple" | "raw" | "fields";

    /**
     * The fields to add to the output
     * Default: []
     */
    readonly fields?: ("createdDateTime" | "lastModifiedDateTime" | "changeKey" | "categories" | "parentFolderId" | "birthday" | "fileAs" | "displayName" | "givenName" | "initials" | "middleName" | "nickName" | "surname" | "title" | "yomiGivenName" | "yomiSurname" | "yomiCompanyName" | "generation" | "imAddresses" | "jobTitle" | "companyName" | "department" | "officeLocation" | "profession" | "businessHomePage" | "assistantName" | "manager" | "homePhones" | "mobilePhone" | "businessPhones" | "spouseName" | "personalNotes" | "children" | "emailAddresses" | "homeAddress" | "businessAddress" | "otherAddress")[] | ("bccRecipients" | "body" | "bodyPreview" | "categories" | "ccRecipients" | "changeKey" | "conversationId" | "createdDateTime" | "flag" | "from" | "hasAttachments" | "importance" | "inferenceClassification" | "internetMessageId" | "isDeliveryReceiptRequested" | "isDraft" | "isRead" | "isReadReceiptRequested" | "lastModifiedDateTime" | "parentFolderId" | "receivedDateTime" | "replyTo" | "sender" | "sentDateTime" | "subject" | "toRecipients" | "webLink")[] | ("allowNewTimeProposals" | "attendees" | "body" | "bodyPreview" | "categories" | "changeKey" | "createdDateTime" | "end" | "hasAttachments" | "hideAttendees" | "iCalUId" | "importance" | "isAllDay" | "isCancelled" | "isDraft" | "isOnlineMeeting" | "isOrganizer" | "isReminderOn" | "lastModifiedDateTime" | "location" | "locations" | "onlineMeeting" | "onlineMeetingProvider" | "onlineMeetingUrl" | "organizer" | "originalEndTimeZone" | "originalStartTimeZone" | "recurrence" | "reminderMinutesBeforeStart" | "responseRequested" | "responseStatus" | "sensitivity" | "seriesMasterId" | "showAs" | "start" | "subject" | "transactionId" | "type" | "webLink")[];

    /** The subject of the message */
    readonly subject?: string;

    /**
     * Message body content
     * Type options: {"rows":2}
     */
    readonly bodyContent?: string;

    /** Default: {"mode":"list","value":""} */
    readonly draftId?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: {} */
    readonly options?: { attachmentsPrefix?: string, downloadAttachments?: boolean } | { folderId?: {
	value: string,
	mode: "list" | "url" | "id",
} } | { fields?: ("childFolderCount" | "displayName" | "isHidden" | "parentFolderId" | "totalItemCount" | "unreadItemCount")[] } | { fields?: ("childFolderCount" | "displayName" | "isHidden" | "parentFolderId" | "totalItemCount" | "unreadItemCount")[], includeChildFolders?: boolean, folderId?: {
	value: string,
	mode: "list" | "url" | "id",
} } | { attachmentsPrefix?: string, downloadAttachments?: boolean, getMimeContent?: { values: { binaryPropertyName?: string, outputFileName?: string } } } | { saveAsDraft?: boolean } | { limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean } | { messageButtonLabel?: string, responseFormTitle?: string, responseFormDescription?: string, responseFormButtonLabel?: string, responseFormCustomCss?: string, limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean } | { fileName?: string } | { fields?: ("contentType" | "isInline" | "lastModifiedDateTime" | "name" | "size")[] };

    /** Comma-separated list of email addresses of recipients */
    readonly to?: string;

    /** Default: "2025-12-02T09:08:27.377+00:00" */
    readonly startDateTime?: string;

    /** Default: "2025-12-02T09:38:27.377+00:00" */
    readonly endDateTime?: string;

    /**
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["calendarId.value"]}
     */
    readonly eventId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /** Default: true */
    readonly fromAllCalendars?: boolean;

    /** Name of the folder */
    readonly displayName?: string;

    /** Default: {"mode":"list","value":""} */
    readonly folderId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /** Default: {} */
    readonly filtersUI?: { values: { filterBy?: "filters" | "search", search?: string, filters?: { custom?: string, hasAttachments?: boolean, readStatus?: "both" | "unread" | "read", receivedAfter?: string, receivedBefore?: string, sender?: string } } } | { values: { filterBy?: "filters" | "search", search?: string, filters?: { custom?: string, hasAttachments?: boolean, foldersToExclude?: unknown[], foldersToInclude?: unknown[], readStatus?: "both" | "unread" | "read", receivedAfter?: string, receivedBefore?: string, sender?: string } } };

    /** Default: {"mode":"list","value":""} */
    readonly messageId?: {
	value: string,
	mode: "list" | "id",
};

    /** Whether to reply to the sender only or to the entire list of recipients */
    readonly replyToSenderOnly?: boolean;

    /**
     * Message body content
     * Type options: {"rows":2}
     */
    readonly message?: string;

    /** Comma-separated list of email addresses of recipients */
    readonly toRecipients?: string;

    /** Default: "approval" */
    readonly responseType?: "approval" | "freeText" | "customForm";

    /** Default: "fields" */
    readonly defineForm?: "fields" | "json";

    /**
     * Default: "[\n  {\n    \"fieldLabel\": \"Name\",\n    \"placeholder\": \"enter your name\",\n    \"requiredField\": true\n  },\n  {\n    \"fieldLabel\": \"Age\",\n    \"fieldType\": \"number\",\n    \"placeholder\": \"enter your age\"\n  },\n  {\n    \"fieldLabel\": \"Email\",\n    \"fieldType\": \"email\",\n    \"requiredField\": true\n  },\n  {\n    \"fieldLabel\": \"Textarea\",\n    \"fieldType\": \"textarea\"\n  },\n  {\n    \"fieldLabel\": \"Dropdown Options\",\n    \"fieldType\": \"dropdown\",\n    \"fieldOptions\": {\n      \"values\": [\n        {\n          \"option\": \"option 1\"\n        },\n        {\n          \"option\": \"option 2\"\n        }\n      ]\n    },\n    \"requiredField\": true\n  },\n  {\n    \"fieldLabel\": \"Checkboxes\",\n    \"fieldType\": \"checkbox\",\n    \"fieldOptions\": {\n      \"values\": [\n        {\n          \"option\": \"option 1\"\n        },\n        {\n          \"option\": \"option 2\"\n        }\n      ]\n    }\n  },\n  {\n    \"fieldLabel\": \"Radio\",\n    \"fieldType\": \"radio\",\n    \"fieldOptions\": {\n      \"values\": [\n        {\n          \"option\": \"option 1\"\n        },\n        {\n          \"option\": \"option 2\"\n        }\n      ]\n    }\n  },\n  {\n    \"fieldLabel\": \"Email\",\n    \"fieldType\": \"email\",\n    \"placeholder\": \"me@mail.con\"\n  },\n  {\n    \"fieldLabel\": \"File\",\n    \"fieldType\": \"file\",\n    \"multipleFiles\": true,\n    \"acceptFileTypes\": \".jpg, .png\"\n  },\n  {\n    \"fieldLabel\": \"Number\",\n    \"fieldType\": \"number\"\n  },\n  {\n    \"fieldLabel\": \"Password\",\n    \"fieldType\": \"password\"\n  }\n]\n"
     * Type options: {"rows":5}
     */
    readonly jsonOutput?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly formFields?: { values: Array<{ fieldLabel: string, fieldName?: string, fieldType: "checkbox" | "html" | "date" | "dropdown" | "email" | "file" | "hiddenField" | "number" | "password" | "radio" | "text" | "textarea", elementName?: string, placeholder?: string, defaultValue?: string, fieldValue?: string, fieldOptions: { values: Array<{ option?: string }> }, multiselectLegacyNotice?: string, multiselect?: boolean, limitSelection?: "exact" | "range" | "unlimited", numberOfSelections?: number, minSelections?: number, maxSelections?: number, html?: string, multipleFiles?: boolean, acceptFileTypes?: string, formatDate?: string, requiredField?: boolean }> };

    /** Default: {} */
    readonly approvalOptions?: { values: { approvalType?: "single" | "double", approveLabel?: string, buttonApprovalStyle?: "primary" | "secondary", disapproveLabel?: string, buttonDisapprovalStyle?: "primary" | "secondary" } };

    /** Default: "data" */
    readonly binaryPropertyName?: string;

    /**
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["messageId.value"]}
     */
    readonly attachmentId?: {
	value: string,
	mode: "list" | "id",
};

}
