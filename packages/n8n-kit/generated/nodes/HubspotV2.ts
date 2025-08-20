// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Hubspot/V2/HubspotV2.node.ts' node

export const name = "undefined" as const;
export const description = "undefined" as const;
export const version = 2.1 as const;
export const defaults = {"name":"HubSpot"} as const;
export const credentials = [{"name":"hubspotApi","required":true,"testedBy":"hubspotApiTest","displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"hubspotAppToken","required":true,"testedBy":"hubspotApiTest","displayOptions":{"show":{"authentication":["appToken"]}}},{"name":"hubspotOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * undefined
 */
export interface HubspotV2NodeParameters {

    /**
     * Default: "apiKey"
     */
    readonly authentication?: "apiKey" | "appToken" | "oAuth2";

    /**
     * Default: "contact"
     */
    readonly resource?: "company" | "contact" | "contactList" | "deal" | "engagement" | "ticket";

    /**
     * Default: "upsert"
     */
    readonly operation?: "upsert" | "delete" | "get" | "getAll" | "getRecentlyCreatedUpdated" | "search" | "add" | "remove" | "create" | "update";

    /**
     */
    readonly email?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "annualRevenue"?: number, "associatedCompanyId"?: string, "buyingRole"?: ("BLOCKER" | "BUDGET_HOLDER" | "CHAMPION" | "DECISION_MAKER" | "END_USER" | "EXECUTIVE_SPONSOR" | "INFLUENCER" | "LEGAL_AND_COMPLIANCE" | "OTHER")[], "city"?: string, "clickedFacebookAd"?: string, "closeDate"?: string, "companyName"?: string, "companySize"?: string, "contactOwner"?: string, "properties"?: string[], "country"?: string, "countryRegionCode"?: string, "customPropertiesUi"?: { "customPropertiesValues": any }, "dateOfBirth"?: string, "degree"?: string, "emailCustomerQuarantinedReason"?: "SUSPENSION_REMEDIATION" | "BLOCKLIST_REMEDIATION" | "TRUST_SAFETY_REMEDIATION", "employmentRole"?: "accounting" | "administrative" | "business_development" | "communications" | "consulting" | "customer_service" | "design" | "education" | "engineering" | "entrepreneurship" | "finance" | "health_professional" | "human_resources" | "information_technology" | "legal" | "marketing" | "operations" | "product" | "project_management" | "public_relations" | "quality_assurance" | "real_estate" | "recruiting" | "research" | "retired" | "sales" | "support", "employmentSeniority"?: "director" | "employee" | "entry" | "executive" | "manager" | "owner" | "partner" | "senior" | "vp", "employmentSubRole"?: "account_executive" | "account_manager" | "accountant" | "accounting_manager" | "administrative_assistant" | "appraisal" | "architect_it" | "assistant" | "attorney" | "auditor" | "brand_marketing" | "business_analyst" | "business_consultant" | "business_manager" | "chief_compliance_officer" | "chief_data_officer" | "chief_executive_officer" | "chief_experience_officer" | "chief_financial_officer" | "chief_human_resources_officer" | "chief_information_officer" | "chief_innovation_officer" | "chief_legal_officer" | "chief_marketing_officer" | "chief_operating_officer" | "chief_product_officer" | "chief_revenue_officer" | "chief_risk_officer" | "chief_security_officer" | "chief_sustainability_officer" | "chief_technology_officer" | "communications_manager" | "community" | "content_marketing" | "contracts" | "creative" | "customer_service_specialist" | "customer_success" | "data_it" | "data_science_engineer" | "database_administrator" | "design_engineer" | "development_specialist" | "devops_engineer" | "digital_marketing" | "director_of_development" | "editorial" | "electrical_engineer" | "engineering_manager" | "events" | "executive_assistant" | "facilities" | "fashion_design" | "field_marketing" | "financial_analyst" | "financial_controller" | "fitness" | "founder" | "general_counsel" | "general_manager" | "general_partner" | "graphic_design" | "human_resources_specialist" | "information_technology_specialist" | "investment" | "investment_banker" | "journalist" | "key_account_manager" | "law_enforcement" | "lawyer" | "logistics_manager" | "management" | "marketing_specialist" | "mechanical_engineer" | "medical_doctor" | "network_engineer" | "nurse" | "office_management" | "office_manager" | "operational_specialist" | "owner" | "paralegal" | "principal" | "product_design" | "product_manager" | "product_marketing" | "production_manager" | "professor" | "program_coordinator" | "program_manager" | "project_engineer" | "project_manager" | "property_manager" | "qa_engineer" | "qa_it" | "quality_assurance_manager" | "quality_assurance_specialist" | "realtor" | "recruiter" | "relationship_manager" | "research_analyst" | "retail" | "retired" | "risk_compliance" | "sales_executive" | "sales_operations" | "sales_specialist" | "salesperson" | "secretary" | "social_marketing" | "software_engineer" | "strategy" | "student" | "support" | "support_specialist" | "system_administrator" | "system_analyst" | "systems_engineer" | "talent" | "tax_audit" | "teacher" | "technical_manager" | "technical_support_specialist" | "therapist" | "training" | "video" | "web_developer" | "writer", "enrichedEmailBounceDetected"?: boolean, "facebookClickId"?: number, "faxNumber"?: string, "fieldOfStudy"?: string, "firstName"?: string, "gender"?: string, "googleAdClickId"?: number, "graduationDate"?: string, "industry"?: string, "inferredLanguageCodes"?: "ab" | "aa" | "af" | "ak" | "sq" | "am" | "ar" | "an" | "hy" | "as" | "av" | "ae" | "ay" | "az" | "bm" | "ba" | "eu" | "be" | "bn" | "bi" | "nb" | "bs" | "br" | "bg" | "my" | "ca" | "km" | "ch" | "ce" | "ny" | "zh" | "cu" | "cv" | "kw" | "co" | "cr" | "hr" | "cs" | "da" | "dv" | "nl" | "dz" | "en" | "eo" | "et" | "ee" | "fo" | "fj" | "fi" | "fr" | "ff" | "gd" | "gl" | "lg" | "ka" | "de" | "el" | "gn" | "gu" | "ht" | "ha" | "he" | "hz" | "hi" | "ho" | "hu" | "is" | "io" | "ig" | "id" | "ia" | "ie" | "iu" | "ik" | "ga" | "it" | "ja" | "jv" | "kl" | "kn" | "kr" | "ks" | "kk" | "ki" | "rw" | "ky" | "kv" | "kg" | "ko" | "kj" | "ku" | "lo" | "la" | "lv" | "li" | "ln" | "lt" | "lu" | "lb" | "mk" | "mg" | "ms" | "ml" | "mt" | "gv" | "mi" | "mr" | "mh" | "mn" | "na" | "nv" | "nd" | "nr" | "ng" | "ne" | "se" | "no" | "nn" | "oc" | "oj" | "or" | "om" | "os" | "pi" | "pa" | "fa" | "pl" | "pt" | "ps" | "qu" | "ro" | "rm" | "rn" | "ru" | "sm" | "sg" | "sa" | "sc" | "sr" | "sn" | "ii" | "sd" | "si" | "sk" | "sl" | "so" | "st" | "es" | "su" | "sw" | "ss" | "sv" | "tl" | "ty" | "tg" | "ta" | "tt" | "te" | "th" | "bo" | "ti" | "to" | "ts" | "tn" | "tr" | "tk" | "tw" | "ug" | "uk" | "ur" | "uz" | "ve" | "vi" | "vo" | "wa" | "cy" | "fy" | "wo" | "xh" | "yi" | "yo" | "za" | "zu", "jobFunction"?: string, "jobTitle"?: string, "lastName"?: string, "latestTrafficSource"?: "DIRECT_TRAFFIC" | "EMAIL_MARKETING" | "OFFLINE" | "ORGANIC_SEARCH" | "SOCIAL_MEDIA" | "OTHER_CAMPAIGNS" | "PAID_SEARCH" | "PAID_SOCIAL" | "REFERRALS", "latestTrafficSourceDate"?: string, "leadStatus"?: string, "processingContactData"?: string, "lifeCycleStage"?: string, "linkedinUrl"?: string, "maritalStatus"?: string, "memberEmail"?: string, "membershipNote"?: string, "message"?: string, "militaryStatus"?: string, "mobilePhoneNumber"?: string, "numberOfEmployees"?: string, "originalSource"?: string, "persona"?: string, "phoneNumber"?: string, "postalCode"?: string, "prefferedLanguage"?: string, "prospectingAgentLastEnrolled"?: string, "prospectingAgentTotalEnrolledCount"?: number, "relationshipStatus"?: string, "salutation"?: string, "school"?: string, "seniority"?: string, "startDate"?: string, "stateRegion"?: string, "stateRegionCode"?: string, "status"?: string, "streetAddress"?: string, "timeZone"?: "atlantic_slash_cape_verde" | "america_slash_godthab" | "america_slash_miquelon" | "america_slash_noronha" | "atlantic_slash_south_georgia" | "brazil_slash_denoronha" | "america_slash_st_johns" | "canada_slash_newfoundland" | "america_slash_araguaina" | "america_slash_argentina_slash_buenos_aires" | "america_slash_argentina_slash_catamarca" | "america_slash_argentina_slash_comodrivadavia" | "america_slash_argentina_slash_cordoba" | "america_slash_argentina_slash_jujuy" | "america_slash_argentina_slash_la_rioja" | "america_slash_argentina_slash_mendoza" | "america_slash_argentina_slash_rio_gallegos" | "america_slash_argentina_slash_salta" | "america_slash_argentina_slash_san_juan" | "america_slash_argentina_slash_san_luis" | "america_slash_argentina_slash_tucuman" | "america_slash_argentina_slash_ushuaia" | "america_slash_bahia" | "america_slash_belem" | "america_slash_buenos_aires" | "america_slash_catamarca" | "america_slash_cayenne" | "america_slash_cordoba" | "america_slash_fortaleza" | "america_slash_glace_bay" | "america_slash_goose_bay" | "america_slash_halifax" | "america_slash_jujuy" | "america_slash_maceio" | "america_slash_mendoza" | "america_slash_moncton" | "america_slash_montevideo" | "america_slash_paramaribo" | "america_slash_punta_arenas" | "america_slash_recife" | "america_slash_rosario" | "america_slash_santarem" | "america_slash_sao_paulo" | "america_slash_thule" | "antarctica_slash_palmer" | "antarctica_slash_rothera" | "atlantic_slash_bermuda" | "atlantic_slash_stanley" | "brazil_slash_east" | "canada_slash_atlantic" | "america_slash_anguilla" | "america_slash_antigua" | "america_slash_aruba" | "america_slash_asuncion" | "america_slash_barbados" | "america_slash_blanc_hyphen_sablon" | "america_slash_boa_vista" | "america_slash_campo_grande" | "america_slash_caracas" | "cuba" | "america_slash_cuiaba" | "america_slash_curacao" | "america_slash_detroit" | "america_slash_dominica" | "america_slash_fort_wayne" | "america_slash_grand_turk" | "america_slash_grenada" | "america_slash_guadeloupe" | "america_slash_guyana" | "america_slash_havana" | "america_slash_indiana_slash_indianapolis" | "america_slash_indiana_slash_marengo" | "america_slash_indiana_slash_petersburg" | "america_slash_indiana_slash_vevay" | "america_slash_indiana_slash_vincennes" | "america_slash_indiana_slash_winamac" | "america_slash_indianapolis" | "america_slash_iqaluit" | "america_slash_kentucky_slash_louisville" | "america_slash_kentucky_slash_monticello" | "america_slash_kralendijk" | "america_slash_la_paz" | "america_slash_louisville" | "america_slash_lower_princes" | "america_slash_manaus" | "america_slash_marigot" | "america_slash_martinique" | "america_slash_montreal" | "america_slash_montserrat" | "america_slash_nassau" | "america_slash_new_york" | "america_slash_nipigon" | "america_slash_pangnirtung" | "america_slash_port_of_spain" | "america_slash_port_hyphen_au_hyphen_prince" | "america_slash_porto_velho" | "america_slash_puerto_rico" | "america_slash_santiago" | "america_slash_santo_domingo" | "america_slash_st_barthelemy" | "america_slash_st_kitts" | "america_slash_st_lucia" | "america_slash_st_thomas" | "america_slash_st_vincent" | "america_slash_thunder_bay" | "america_slash_toronto" | "america_slash_tortola" | "america_slash_virgin" | "brazil_slash_west" | "canada_slash_eastern" | "chile_slash_continental" | "us_slash_east_hyphen_indiana" | "us_slash_eastern" | "us_slash_michigan" | "america_slash_atikokan" | "america_slash_bahia_banderas" | "america_slash_bogota" | "america_slash_cancun" | "america_slash_cayman" | "america_slash_chicago" | "america_slash_coral_harbour" | "america_slash_eirunepe" | "america_slash_guayaquil" | "america_slash_indiana_slash_knox" | "america_slash_indiana_slash_tell_city" | "america_slash_jamaica" | "america_slash_knox_in" | "america_slash_lima" | "america_slash_matamoros" | "america_slash_menominee" | "america_slash_merida" | "america_slash_mexico_city" | "america_slash_monterrey" | "america_slash_north_dakota_slash_beulah" | "america_slash_north_dakota_slash_center" | "america_slash_north_dakota_slash_new_salem" | "america_slash_panama" | "america_slash_porto_acre" | "america_slash_rainy_river" | "america_slash_rankin_inlet" | "america_slash_resolute" | "america_slash_rio_branco" | "america_slash_winnipeg" | "brazil_slash_acre" | "canada_slash_central" | "mexico_slash_general" | "us_slash_central" | "us_slash_indiana_hyphen_starke" | "america_slash_belize" | "america_slash_boise" | "america_slash_cambridge_bay" | "america_slash_chihuahua" | "america_slash_costa_rica" | "america_slash_denver" | "america_slash_edmonton" | "america_slash_el_salvador" | "america_slash_guatemala" | "america_slash_inuvik" | "america_slash_managua" | "america_slash_mazatlan" | "navajo" | "america_slash_ojinaga" | "america_slash_regina" | "america_slash_shiprock" | "america_slash_swift_current" | "america_slash_tegucigalpa" | "america_slash_yellowknife" | "canada_slash_mountain" | "canada_slash_saskatchewan" | "chile_slash_easterisland" | "mexico_slash_bajasur" | "pacific_slash_easter" | "pacific_slash_galapagos" | "us_slash_mountain" | "america_slash_creston" | "america_slash_dawson" | "america_slash_dawson_creek" | "america_slash_ensenada" | "america_slash_fort_nelson" | "america_slash_hermosillo" | "america_slash_los_angeles" | "america_slash_phoenix" | "america_slash_santa_isabel" | "america_slash_tijuana" | "america_slash_vancouver" | "america_slash_whitehorse" | "canada_slash_pacific" | "canada_slash_yukon" | "mexico_slash_bajanorte" | "us_slash_arizona" | "us_slash_pacific" | "us_slash_pacific_hyphen_new" | "america_slash_anchorage" | "america_slash_juneau" | "america_slash_metlakatla" | "america_slash_nome" | "america_slash_sitka" | "america_slash_yakutat" | "pacific_slash_pitcairn" | "us_slash_alaska" | "america_slash_adak" | "america_slash_atka" | "pacific_slash_gambier" | "us_slash_aleutian" | "pacific_slash_marquesas" | "pacific_slash_honolulu" | "pacific_slash_johnston" | "pacific_slash_rarotonga" | "pacific_slash_tahiti" | "us_slash_hawaii" | "pacific_slash_midway" | "pacific_slash_niue" | "pacific_slash_pago_pago" | "pacific_slash_samoa" | "us_slash_samoa" | "africa_slash_abidjan" | "africa_slash_accra" | "africa_slash_bamako" | "africa_slash_banjul" | "africa_slash_bissau" | "africa_slash_conakry" | "africa_slash_dakar" | "africa_slash_freetown" | "africa_slash_lome" | "africa_slash_monrovia" | "africa_slash_nouakchott" | "africa_slash_ouagadougou" | "africa_slash_timbuktu" | "america_slash_danmarkshavn" | "america_slash_scoresbysund" | "atlantic_slash_azores" | "atlantic_slash_reykjavik" | "atlantic_slash_st_helena" | "iceland" | "africa_slash_algiers" | "africa_slash_bangui" | "africa_slash_brazzaville" | "africa_slash_casablanca" | "africa_slash_douala" | "africa_slash_el_aaiun" | "africa_slash_kinshasa" | "africa_slash_lagos" | "africa_slash_libreville" | "africa_slash_luanda" | "africa_slash_malabo" | "africa_slash_ndjamena" | "africa_slash_niamey" | "africa_slash_porto_hyphen_novo" | "africa_slash_sao_tome" | "africa_slash_tunis" | "atlantic_slash_canary" | "atlantic_slash_faeroe" | "atlantic_slash_faroe" | "atlantic_slash_madeira" | "europe_slash_belfast" | "europe_slash_dublin" | "eire" | "europe_slash_guernsey" | "europe_slash_isle_of_man" | "europe_slash_jersey" | "europe_slash_lisbon" | "europe_slash_london" | "portugal" | "africa_slash_blantyre" | "africa_slash_bujumbura" | "africa_slash_cairo" | "africa_slash_ceuta" | "egypt" | "africa_slash_gaborone" | "africa_slash_harare" | "africa_slash_johannesburg" | "africa_slash_khartoum" | "africa_slash_kigali" | "libya" | "africa_slash_lubumbashi" | "africa_slash_lusaka" | "africa_slash_maputo" | "africa_slash_maseru" | "africa_slash_mbabane" | "africa_slash_tripoli" | "africa_slash_windhoek" | "antarctica_slash_troll" | "arctic_slash_longyearbyen" | "atlantic_slash_jan_mayen" | "europe_slash_amsterdam" | "europe_slash_andorra" | "europe_slash_belgrade" | "europe_slash_berlin" | "europe_slash_bratislava" | "europe_slash_brussels" | "europe_slash_budapest" | "europe_slash_busingen" | "europe_slash_copenhagen" | "europe_slash_gibraltar" | "europe_slash_kaliningrad" | "europe_slash_ljubljana" | "europe_slash_luxembourg" | "europe_slash_madrid" | "europe_slash_malta" | "europe_slash_monaco" | "europe_slash_oslo" | "europe_slash_paris" | "europe_slash_podgorica" | "poland" | "europe_slash_prague" | "europe_slash_rome" | "europe_slash_san_marino" | "europe_slash_sarajevo" | "europe_slash_skopje" | "europe_slash_stockholm" | "europe_slash_tirane" | "europe_slash_vaduz" | "europe_slash_vatican" | "europe_slash_vienna" | "europe_slash_warsaw" | "europe_slash_zagreb" | "europe_slash_zurich" | "africa_slash_addis_ababa" | "africa_slash_asmara" | "africa_slash_asmera" | "africa_slash_dar_es_salaam" | "africa_slash_djibouti" | "africa_slash_juba" | "africa_slash_kampala" | "africa_slash_mogadishu" | "africa_slash_nairobi" | "antarctica_slash_syowa" | "asia_slash_aden" | "asia_slash_amman" | "asia_slash_baghdad" | "asia_slash_bahrain" | "asia_slash_beirut" | "asia_slash_damascus" | "asia_slash_famagusta" | "asia_slash_gaza" | "asia_slash_hebron" | "israel" | "asia_slash_istanbul" | "asia_slash_jerusalem" | "asia_slash_kuwait" | "asia_slash_nicosia" | "asia_slash_qatar" | "asia_slash_riyadh" | "asia_slash_tel_aviv" | "turkey" | "europe_slash_athens" | "europe_slash_bucharest" | "europe_slash_chisinau" | "europe_slash_helsinki" | "europe_slash_istanbul" | "europe_slash_kirov" | "europe_slash_kiev" | "europe_slash_mariehamn" | "europe_slash_minsk" | "europe_slash_moscow" | "europe_slash_nicosia" | "europe_slash_riga" | "europe_slash_simferopol" | "europe_slash_sofia" | "europe_slash_tallinn" | "europe_slash_tiraspol" | "europe_slash_uzhgorod" | "europe_slash_vilnius" | "europe_slash_zaporozhye" | "indian_slash_antananarivo" | "indian_slash_comoro" | "indian_slash_mayotte" | "asia_slash_baku" | "asia_slash_dubai" | "asia_slash_muscat" | "asia_slash_tbilisi" | "asia_slash_yerevan" | "europe_slash_astrakhan" | "europe_slash_samara" | "europe_slash_saratov" | "europe_slash_ulyanovsk" | "europe_slash_volgograd" | "indian_slash_mahe" | "indian_slash_mauritius" | "indian_slash_reunion" | "iran" | "asia_slash_kabul" | "asia_slash_tehran" | "antarctica_slash_mawson" | "asia_slash_aqtau" | "asia_slash_aqtobe" | "asia_slash_ashgabat" | "asia_slash_ashkhabad" | "asia_slash_atyrau" | "asia_slash_dushanbe" | "asia_slash_karachi" | "asia_slash_oral" | "asia_slash_samarkand" | "asia_slash_tashkent" | "asia_slash_yekaterinburg" | "indian_slash_kerguelen" | "indian_slash_maldives" | "asia_slash_calcutta" | "asia_slash_colombo" | "asia_slash_kolkata" | "asia_slash_kathmandu" | "asia_slash_katmandu" | "antarctica_slash_vostok" | "asia_slash_almaty" | "asia_slash_bishkek" | "asia_slash_dacca" | "asia_slash_dhaka" | "asia_slash_kashgar" | "asia_slash_omsk" | "asia_slash_qyzylorda" | "asia_slash_thimbu" | "asia_slash_thimphu" | "asia_slash_urumqi" | "indian_slash_chagos" | "asia_slash_rangoon" | "asia_slash_yangon" | "indian_slash_cocos" | "antarctica_slash_davis" | "asia_slash_bangkok" | "asia_slash_barnaul" | "asia_slash_ho_chi_minh" | "asia_slash_hovd" | "asia_slash_jakarta" | "asia_slash_krasnoyarsk" | "asia_slash_novokuznetsk" | "asia_slash_novosibirsk" | "asia_slash_phnom_penh" | "asia_slash_pontianak" | "asia_slash_saigon" | "asia_slash_tomsk" | "asia_slash_vientiane" | "indian_slash_christmas" | "antarctica_slash_casey" | "asia_slash_brunei" | "asia_slash_choibalsan" | "asia_slash_chongqing" | "asia_slash_chungking" | "asia_slash_harbin" | "asia_slash_hong_kong" | "asia_slash_irkutsk" | "asia_slash_kuala_lumpur" | "asia_slash_kuching" | "asia_slash_macao" | "asia_slash_macau" | "asia_slash_makassar" | "asia_slash_manila" | "asia_slash_shanghai" | "asia_slash_singapore" | "asia_slash_taipei" | "asia_slash_ujung_pandang" | "asia_slash_ulaanbaatar" | "asia_slash_ulan_bator" | "australia_slash_perth" | "australia_slash_west" | "australia_slash_eucla" | "asia_slash_chita" | "asia_slash_dili" | "japan" | "asia_slash_jayapura" | "asia_slash_khandyga" | "asia_slash_pyongyang" | "asia_slash_seoul" | "asia_slash_tokyo" | "asia_slash_yakutsk" | "pacific_slash_palau" | "australia_slash_adelaide" | "australia_slash_broken_hill" | "australia_slash_darwin" | "australia_slash_north" | "australia_slash_south" | "australia_slash_yancowinna" | "antarctica_slash_dumontdurville" | "asia_slash_ust_hyphen_nera" | "asia_slash_vladivostok" | "australia_slash_act" | "australia_slash_brisbane" | "australia_slash_canberra" | "australia_slash_currie" | "australia_slash_hobart" | "australia_slash_lindeman" | "australia_slash_melbourne" | "australia_slash_nsw" | "australia_slash_queensland" | "australia_slash_sydney" | "australia_slash_tasmania" | "australia_slash_victoria" | "pacific_slash_chuuk" | "pacific_slash_guam" | "pacific_slash_port_moresby" | "pacific_slash_saipan" | "pacific_slash_truk" | "pacific_slash_yap" | "australia_slash_lhi" | "australia_slash_lord_howe" | "antarctica_slash_macquarie" | "asia_slash_magadan" | "asia_slash_sakhalin" | "asia_slash_srednekolymsk" | "pacific_slash_bougainville" | "pacific_slash_efate" | "pacific_slash_guadalcanal" | "pacific_slash_kosrae" | "pacific_slash_norfolk" | "pacific_slash_noumea" | "pacific_slash_pohnpei" | "pacific_slash_ponape" | "antarctica_slash_mcmurdo" | "antarctica_slash_south_pole" | "asia_slash_anadyr" | "asia_slash_kamchatka" | "pacific_slash_auckland" | "pacific_slash_fiji" | "pacific_slash_funafuti" | "kwajalein" | "pacific_slash_majuro" | "pacific_slash_nauru" | "pacific_slash_tarawa" | "pacific_slash_wake" | "pacific_slash_wallis" | "pacific_slash_chatham" | "pacific_slash_apia" | "pacific_slash_enderbury" | "pacific_slash_fakaofo" | "pacific_slash_tongatapu" | "pacific_slash_kiritimati", "twitterUsername"?: string, "websiteUrl"?: string, "whatsappPhoneNumber"?: string, "workEmail"?: string, "formSubmissionMode"?: "all" | "none" | "newest" | "oldest", "listMemberships"?: boolean, "propertiesCollection"?: { "propertiesValues": any }, "direction"?: "ASCENDING" | "DESCENDING", "query"?: string, "sortBy"?: string, "aboutUs"?: string, "companyDomainName"?: string, "companyOwner"?: string, "countryRegion"?: string, "description"?: string, "facebookFans"?: number, "googlePlusPage"?: string, "isPublic"?: boolean, "lifecycleStatus"?: string, "linkedinBio"?: string, "linkedInCompanyPage"?: string, "originalSourceType"?: string, "streetAddress2"?: string, "targetAccount"?: string, "timezone"?: string, "totalMoneyRaised"?: number, "twitterBio"?: string, "twitterFollowers"?: number, "twitterHandle"?: string, "type"?: string, "webTechnologies"?: string, "yearFounded"?: string, "includeMergeAudits"?: boolean, "since"?: string, "amount"?: string, "associatedCompany"?: string[], "associatedVids"?: string[], "dealName"?: string, "dealOwner"?: any, "dealType"?: string, "pipeline"?: string, "associations"?: { "companyIds"?: string, "contactIds"?: string, "dealIds"?: string, "ownerIds"?: string, "ticketIds"?: string }, "associatedCompanyIds"?: string[], "associatedContactIds"?: string[], "category"?: string, "createDate"?: string, "priority"?: string, "resolution"?: string, "source"?: string, "ticketOwnerId"?: string, "includeDeleted"?: boolean, "propertiesWithHistory"?: string };

    /**
     * Default: {}
     */
    readonly options?: { "resolveData"?: boolean, "includeMergeAudits"?: boolean, "propertiesCollection"?: { "propertiesValues": any }, "properties"?: string[] };

    /**
     * This is not a contact's email but a number like 1485
     * Default: {"mode":"list","value":""}
     */
    readonly contactId?: any;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":250}
     */
    readonly limit?: number;

    /**
     * When multiple filters are provided within a Filter Group, they will be combined using a logical AND operator. When multiple Filter Groups are provided, they will be combined using a logical OR operator. The system supports a maximum of three Filter Groups with up to three filters each. More info <a href="https://developers.hubspot.com/docs/api/crm/search">here</a>
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly filterGroupsUi?: { "filterGroupsValues": any };

    /**
     * Default: "email"
     */
    readonly by?: "id" | "email";

    /**
     */
    readonly id?: number;

    /**
     */
    readonly listId?: number;

    /**
     */
    readonly name?: string;

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly companyId?: any;

    /**
     * Default: {}
     */
    readonly updateFields?: { "aboutUs"?: string, "annualRevenue"?: number, "city"?: string, "closeDate"?: string, "companyDomainName"?: string, "companyOwner"?: string, "countryRegion"?: string, "customPropertiesUi"?: { "customPropertiesValues": any }, "description"?: string, "facebookFans"?: number, "googlePlusPage"?: string, "industry"?: string, "isPublic"?: boolean, "leadStatus"?: string, "lifecycleStatus"?: string, "linkedinBio"?: string, "linkedInCompanyPage"?: string, "name"?: string, "numberOfEmployees"?: number, "originalSourceType"?: string, "phoneNumber"?: string, "postalCode"?: string, "stateRegion"?: string, "streetAddress"?: string, "streetAddress2"?: string, "targetAccount"?: string, "timezone"?: string, "totalMoneyRaised"?: number, "twitterBio"?: string, "twitterFollowers"?: number, "twitterHandle"?: string, "type"?: string, "webTechnologies"?: string, "websiteUrl"?: string, "yearFounded"?: string, "amount"?: string, "dealName"?: string, "dealOwner"?: any, "stage"?: string, "dealType"?: string, "pipeline"?: string, "associatedCompanyIds"?: string[], "associatedContactIds"?: string[], "category"?: string, "createDate"?: string, "pipelineId"?: string, "priority"?: string, "resolution"?: string, "source"?: string, "stageId"?: string, "ticketName"?: string, "ticketOwnerId"?: string };

    /**
     * The company's website domain to search for, like n8n.io
     */
    readonly domain?: string;

    /**
     * The deal stage is required when creating a deal. See the CRM Pipelines API for details on managing pipelines and stages. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getDealStages"}
     */
    readonly stage?: string;

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly dealId?: any;

    /**
     * Default: {}
     */
    readonly filters?: { "includePropertyVersions"?: boolean, "propertiesCollection"?: { "propertiesValues": any }, "includeAssociations"?: boolean, "properties"?: string[], "propertiesWithHistory"?: string[], "since"?: string };

    /**
     */
    readonly type?: "call" | "email" | "meeting" | "task";

    /**
     * Default: {}
     */
    readonly metadata?: { "body"?: string, "forObjectType"?: "COMPANY" | "CONTACT", "status"?: "COMPLETED" | "DEFERRED" | "IN_PROGRESS" | "NOT_STARTED" | "WAITING", "subject"?: string, "bcc"?: string, "cc"?: string, "fromEmail"?: string, "firstName"?: string, "lastName"?: string, "html"?: string, "toEmail"?: string, "endTime"?: string, "internalMeetingNotes"?: string, "startTime"?: string, "title"?: string, "durationMilliseconds"?: number, "fromNumber"?: string, "recordingUrl"?: string, "toNumber"?: string };

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly engagementId?: any;

    /**
     * The ID of the pipeline the ticket is in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTicketPipelines"}
     */
    readonly pipelineId?: string;

    /**
     * The stage ID of the pipeline the ticket is in; depends on Pipeline ID. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTicketStages","loadOptionsDependsOn":["pipelineId"]}
     */
    readonly stageId?: string;

    /**
     */
    readonly ticketName?: string;

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly ticketId?: any;


}

