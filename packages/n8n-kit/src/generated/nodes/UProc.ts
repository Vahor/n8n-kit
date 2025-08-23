// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/UProc/UProc.node.ts' node

export const description = "Consume uProc API" as const;
export const type = "n8n-nodes-base.uproc" as const;
export const version = 1 as const;
export const credentials = [{"name":"uprocApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface UProcNodeParameters {
    /**
     * Default: "communication"
     */
    readonly group?: "audio" | "communication" | "company" | "finance" | "geographic" | "image" | "internet" | "personal" | "product" | "security" | "text";

    /**
     * The Operation to consume
     * Default: "getAudioAdvancedSpeechByText"
     */
    readonly tool?: "getAudioAdvancedSpeechByText" | "getAudioSpeechByText" | "checkSocialDomainExist" | "checkDomainCatchall" | "checkDomainFree" | "checkDomainDisposable" | "checkEmailExistsExtended" | "checkEmailExists" | "checkEmailSmtp" | "checkSocialEmailExist" | "checkEmailFormat" | "checkEmailCatchall" | "checkEmailDisposable" | "checkEmailFree" | "checkRobinsonEmailExist" | "checkEmailRole" | "checkEmailSpamtrap" | "checkMobileImei" | "checkLinkedinProfileIsContact" | "checkMobileExist" | "checkSocialMobileExist" | "checkMobileFormat" | "checkMobileFormatEs" | "checkMobileValidPrefix" | "checkMobileValidPrefixEs" | "checkMobileAlive" | "checkMobileSms" | "checkRobinsonPhoneExist" | "checkPhoneOrMobileValid" | "checkPhoneFormatEs" | "checkPhoneFormat" | "checkPhoneValidPrefix" | "getPhoneNormalized" | "getMobileCountryCode" | "getEmailDomain" | "getEmailRecipientByCompanyFirstnameAndLastname" | "getEmailRecipientByCompanyAndFullname" | "getEmailRecipientByDomainAndFullname" | "getEmailRecipient" | "getEmailRecipientByProfile" | "getEmailType" | "getEmailListByDomain" | "getEmailListByEmail" | "getEmailFirstReferences" | "getEmailFix" | "getPhoneFixed" | "getMobileFormatted" | "getEmailGdprListByDomain" | "getMobileHlrLookup" | "getMobileOrPhoneMnpEs" | "getLinkedinProfilesByCompany" | "getLinkedinGroupMembers" | "getLinkedinConnections" | "getLinkedinInvitations" | "getLinkedinPostComments" | "getLinkedinPostLikes" | "getLinkedinProfile" | "getLinkedinProfiles" | "getLinkedinProfilesByContent" | "getMobileLookup" | "getMobileMnpLookup" | "getMobileOrPhoneLookupEs" | "getEmailNormalized" | "getMobileNormalized" | "getPhoneParsed" | "getEmailPersonalRecipientByProfile" | "getMobileCountryPrefix" | "getLinkedinPublicProfileBySalesProfile" | "getLinkedinSearchContactsUrl" | "getSocialUriParsed" | "getSocialDomainParsed" | "getSocialDomainLookup" | "getSocialEmailLookup" | "getSocialMobileLookup" | "getEmailReferences" | "sendLinkedinInvitation" | "sendEmailCustom" | "sendMobileSms" | "sendLinkedinInvitationOrMessage" | "sendLinkedinVisit" | "sendLinkedinMessage" | "checkCifValid" | "checkCompanyDebtorByTaxid" | "checkNumberIsin" | "checkNumberSsEs" | "getRoleClassified" | "getCompanyByCif" | "getCompanyByDuns" | "getCompanyByDomain" | "getCompanyByEmail" | "getCompanyByIp" | "getCompanyByName" | "getCompanyByPhone" | "getCompanyByProfile" | "getCompanyNameByDomain" | "getPersonDecisionMaker" | "getPersonDecisionMakerBySearch" | "getPersonEmailsByDomainAndArea" | "getPersonMultipleDecisionMakerBySearch" | "getCompanyDomainByName" | "getPersonListByParams" | "getProfileFacebookByCompany" | "getProfileFacebookByCompanyDomain" | "getCompanyGeocodedByIp" | "getProfileGithubByCompanyDomain" | "getProfileInstagramByCompanyDomain" | "getProfileLinkedinByCompany" | "getProfileLinkedinByCompanyDomain" | "getCifNormalized" | "getCompanyPhoneByDomain" | "getCompanyPhoneByName" | "getProfilePinterestByCompanyDomain" | "getCompanyFinancialByDuns" | "getCompanyFinancialByDomain" | "getCompanyFinancialByName" | "getCompanyFinancialByTaxid" | "getProfileTwitterByCompany" | "getProfileTwitterByCompanyDomain" | "getProfileYoutubeByCompanyDomain" | "checkBankBicValid" | "checkBankAccountValidEs" | "checkCreditcardChecksum" | "checkCryptoWalletAddressValid" | "checkBankIbanValid" | "checkCurrencyValidIso" | "checkVatExist" | "getCurrencyConvertedBetweenIsocodeDate" | "getCreditcardType" | "getCurrencyListByCountry" | "getCurrencyListByIp" | "getCurrencyListByIsocode" | "getCurrencyByIp" | "getCurrencyByIsocode" | "getCurrencyByCountryIsocode" | "getCurrencyByCountry" | "getVatByNumber" | "getBankIbanByAccount" | "getBankIbanLookup" | "getSwiftLookup" | "getVatByAddress" | "getVatByCoordinates" | "getVatByIp" | "getVatByIsocode" | "getVatByPhone" | "getVatByZipcode" | "checkCountryValidIso" | "checkDistanceEq" | "checkDistanceGt" | "checkDistanceGe" | "checkDistanceLt" | "checkDistanceLe" | "checkAddressExist" | "checkAddressNumberExist" | "checkCoordinateValid" | "checkZipcodeExist" | "checkZipcodeFormat" | "getCoordinateCartesian" | "getCityListByPhone" | "getCityListByName" | "getCityListByZipcode" | "getCityByIp" | "getCityByName" | "getCityByPhone" | "getCityByZipcode" | "getCommunityByZipcode" | "getCoordinateByIp" | "getCoordinateBySearch" | "getCountryListByCurrencyCode" | "getCountryListByCode" | "getCountryListByName" | "getCountryByCurrencyCode" | "getCountryByIp" | "getCountryByCode" | "getCountryByName" | "getCountryByPhone" | "getCountryCodeByName" | "getCoordinateDecimal" | "getDistanceByAddresses" | "getDistanceByCoordinates" | "getDistanceByIps" | "getDistanceByPhones" | "getDistanceByZipcodes" | "getAddressBySearch" | "getLocationExtendedByIp" | "getLocationGeocodedByIp" | "getAddressSplittedBest" | "getLocaleByIp" | "getLocationByCoordinates" | "getLocationByIp" | "getLocationByPhone" | "getLocationByName" | "getLocationByParams" | "getLocationByZipcode" | "getLocationListByName" | "getLocationListByParams" | "getNameListByPrefix" | "getNetByIp" | "getAddressNormalized" | "getCityNormalized" | "getCountryNormalized" | "getProvinceNormalized" | "getZipcodeNormalized" | "getAddressSplitted" | "getProvinceByIp" | "getProvinceByName" | "getProvinceByPhone" | "getProvinceByZipcode" | "getProvinceListByName" | "getProvinceListByPhone" | "getProvinceListByZipcode" | "getReputationByIp" | "getRouteByAddresses" | "getRouteByCoordinates" | "getRouteByIps" | "getRouteByPhones" | "getRouteByZipcodes" | "getTimeByCoordinates" | "getTimeByIp" | "getTimeByAddress" | "getCoordinateUsng" | "getCoordinateUtm" | "getZipcodeByIp" | "getZipcodeByPrefix" | "getZipcodeListByPrefix" | "getQrDecoded" | "getImageExif" | "getBarcodeEncoded" | "getQrEncoded" | "getImageWithText" | "getDomainLogo" | "getImageOcr" | "getUrlScreenshot" | "checkDomainExist" | "checkDomainRecord" | "checkDomainReverse" | "checkDomainMx" | "checkDomainCertificate" | "checkDomainFormat" | "checkNetHostAlive" | "checkNetServiceUp" | "checkUrlContains" | "checkUrlExist" | "checkUrlValid" | "getDomainCertificate" | "getUrlContents" | "getUrlDecode" | "getUrlByDomain" | "getDeviceByUa" | "getDomainByIp" | "getDomainRecords" | "getDomainRecord" | "getUrlEncode" | "getFeedEntriesByDomain" | "getFileCopiedBetweenUrls" | "getNetFixip" | "getDomainReverseIp" | "getNetNtoa" | "getDomainIsp" | "getFeedLastEntryByDomain" | "getUrlUnshortened" | "getNetAton" | "getNetScan" | "getUrlListContentsParsed" | "getUrlContentsParsed" | "getUrlParsed" | "getUrlPdf" | "getDomainByUrl" | "getUrlShareableLinks" | "getUrlTables" | "getDomainTechnologies" | "getUrlTechnologies" | "getUrlAnalysis" | "getDomainVisits" | "getDomainWhois" | "getIpWhois" | "checkAgeBetw" | "checkAgeIsTwenties" | "checkAgeIsForties" | "checkAgeGt" | "checkAgeGe" | "checkAgeIsRetired" | "checkAgeIsAdult" | "checkAgeLt" | "checkAgeLe" | "checkAgeEq" | "checkDateBetw" | "checkDateGt" | "checkDateGe" | "checkDateLeap" | "checkDateLt" | "checkDateLe" | "checkDateValid" | "checkDateEq" | "checkGenderValid" | "checkNieValid" | "checkNifValid" | "checkNameExist" | "checkNameValid" | "checkRobinsonNifExist" | "checkSurnameValid" | "checkSurnameExist" | "checkDniValid" | "getAgeByDate" | "getAgeRange" | "getDateDifference" | "getGenderByEmail" | "getGenderByPersonalName" | "getProfileLinkedinByEmail" | "getProfileByEmployeeData" | "getProfileLinkedinByPhone" | "getNifByDni" | "getNameByPrefix" | "getDniNormalized" | "getDateNormalized" | "getNieNormalized" | "getNifNormalized" | "getNameNormalized" | "getSurnameNormalized" | "getDateParsed" | "getFullnameParsed" | "getPersonExtendedByEmail" | "getPersonExtendedByEmailAndCompany" | "getPersonExtendedByProfile" | "getPersonByEmail" | "getPersonByFirstnameLastnameCompanyLocation" | "getPersonByMobile" | "getPersonByProfile" | "getPersonFakedData" | "getSurnameByPrefix" | "getSurnameListByPrefix" | "getProfileXingByEmployeeData" | "sendPersonEmailToList" | "sendPersonProfileToList" | "checkAsinExist" | "checkAsinValid" | "checkEanExist" | "checkEanValid" | "checkEan13Valid" | "checkEan14Valid" | "checkEan18Valid" | "checkEan8Valid" | "checkGtinValid" | "checkGtin13Valid" | "checkGtin14Valid" | "checkGtin8Valid" | "checkBookIsbnExist" | "checkBookIsbn" | "checkBookIsbn10" | "checkBookIsbn13" | "checkUpcExist" | "checkUpcFormat" | "checkVinFormat" | "getAsinByEan" | "getBookAuthorLookup" | "getBookCategoryLookup" | "getBookPublisherLookup" | "getBookIsbnLookup" | "getBookTitleLookup" | "getBookListAuthorLookup" | "getBookListCategoryLookup" | "getBookListPublisherLookup" | "getBookListTitleLookup" | "getVinLookup" | "getEanByAsin" | "getBookIsbn13ToIsbn10" | "getBookIsbn10ToIsbn13" | "getUpcLookup" | "checkNumberLuhn" | "checkPasswordStrong" | "checkNumberUuid" | "getDomainBlacklists" | "getIpBlacklists" | "checkStringAlpha" | "checkStringAlphanumeric" | "checkStringBoolean" | "checkNumberDecimal" | "checkNumberEven" | "checkListMax" | "checkStringIp" | "checkStringIp4" | "checkStringIp6" | "checkListLengthBetw" | "checkListLengthEq" | "checkListLengthGt" | "checkListLengthGe" | "checkListLengthLt" | "checkListLengthLe" | "checkListContains" | "checkListEnds" | "checkListSorted" | "checkListStarts" | "checkListMin" | "checkNumberMod" | "checkNumberNatural" | "checkNumberBetw" | "checkNumberEq" | "checkNumberGt" | "checkNumberGe" | "checkNumberLt" | "checkNumberLe" | "checkStringNumeric" | "checkNumberOdd" | "checkNumberPrime" | "checkStringContains" | "checkStringEnds" | "checkStringBlank" | "checkStringRandom" | "checkStringRegex" | "checkStringLengthBetw" | "checkStringLengthEq" | "checkStringLengthGt" | "checkStringLengthGe" | "checkStringLengthLt" | "checkStringLengthLe" | "checkStringStarts" | "checkStringLowercase" | "checkStringUppercase" | "checkListUnique" | "checkListValid" | "checkWordCountBetw" | "checkWordCountEq" | "checkWordCountGt" | "checkWordCountGe" | "checkWordCountLt" | "checkWordCountLe" | "getStringBase64" | "getWordBanned" | "getStringFieldName" | "getStringByFormat" | "getStringByRegex" | "getListMax" | "getStringHtmlByMarkdown" | "getListMin" | "getStringLowercase" | "getStringMd5" | "getStringMarkdownByHtml" | "getStringJoin" | "getStringNormalized" | "getStringParsed" | "getStringSha" | "getSentimentByText" | "getListSort" | "getStringSpin" | "getStringSplitAndJoin" | "getStringSplit" | "getStringLength" | "getStringVlookup" | "getWordCleanAbuse" | "getStringReplaceFirst" | "getStringWithoutHtml" | "getStringReplaceAll" | "getStringTranslated" | "getListUnique" | "getStringUppercase" | "getWordCount";

    /**
     * The "Credit card" value to use as a parameter for this Operation
     */
    readonly credit_card?: string;

    /**
     * The "Address" value to use as a parameter for this Operation
     */
    readonly address?: string;

    /**
     * The "Country" value to use as a parameter for this Operation
     */
    readonly country?: string;

    /**
     * The "Coordinates" value to use as a parameter for this Operation
     */
    readonly coordinates?: string;

    /**
     * The "Date" value to use as a parameter for this Operation
     */
    readonly date?: string;

    /**
     * The "Years1" value to use as a parameter for this Operation
     */
    readonly years1?: number;

    /**
     * The "Years2" value to use as a parameter for this Operation
     */
    readonly years2?: number;

    /**
     * The "Years" value to use as a parameter for this Operation
     */
    readonly years?: number;

    /**
     * The "Ean" value to use as a parameter for this Operation
     */
    readonly ean?: string;

    /**
     * The "Asin" value to use as a parameter for this Operation
     */
    readonly asin?: string;

    /**
     * The "Text" value to use as a parameter for this Operation
     */
    readonly text?: string;

    /**
     * The "Gender" value to use as a parameter for this Operation
     */
    readonly gender?: "female" | "male";

    /**
     * The "Language" value to use as a parameter for this Operation
     */
    readonly language?: "american" | "arabic" | "bengali" | "british" | "czech" | "danish" | "dutch" | "filipino" | "finnish" | "french" | "german" | "greek" | "gujurati" | "hindi" | "hungarian" | "indonesian" | "italian" | "japanese" | "kannada" | "korean" | "malayalam" | "mandarin" | "norwegian" | "polish" | "portuguese" | "russian" | "slovak" | "spanish" | "tamil" | "telugu" | "thai" | "turkish" | "ukranian" | "vietnamese";

    /**
     * The "Account" value to use as a parameter for this Operation
     */
    readonly account?: string;

    /**
     * The "Bic" value to use as a parameter for this Operation
     */
    readonly bic?: string;

    /**
     * The "Isocode" value to use as a parameter for this Operation
     */
    readonly isocode?: string;

    /**
     * The "Iban" value to use as a parameter for this Operation
     */
    readonly iban?: string;

    /**
     * The "Swift" value to use as a parameter for this Operation
     */
    readonly swift?: string;

    /**
     * The "Bcid" value to use as a parameter for this Operation
     */
    readonly bcid?: "auspost" | "azteccode" | "azteccodecompact" | "aztecrune" | "bc412" | "channelcode" | "codablockf" | "code11" | "code128" | "code16k" | "code2of5" | "code32" | "code39" | "code39ext" | "code49" | "code93" | "code93ext" | "codeone" | "coop2of5" | "daft" | "databarexpanded" | "databarexpandedcomposite" | "databarexpandedstacked" | "databarexpandedstackedcomposite" | "databarlimited" | "databarlimitedcomposite" | "databaromni" | "databaromnicomposite" | "databarstacked" | "databarstackedcomposite" | "databarstackedomni" | "databarstackedomnicomposite" | "databartruncated" | "databartruncatedcomposite" | "datalogic2of5" | "datamatrix" | "datamatrixrectangular" | "dotcode" | "ean13" | "ean13composite" | "ean14" | "ean2" | "ean5" | "ean8" | "ean8composite" | "flattermarken" | "gs1-128" | "gs1-128composite" | "gs1-cc" | "gs1datamatrix" | "gs1datamatrixrectangular" | "gs1northamericancoupon" | "hanxin" | "hibcazteccode" | "hibccodablockf" | "hibccode128" | "hibccode39" | "hibcdatamatrix" | "hibcdatamatrixrectangular" | "hibcmicropdf417" | "hibcpdf417" | "iata2of5" | "identcode" | "industrial2of5" | "interleaved2of5" | "isbn" | "ismn" | "issn" | "itf14" | "japanpost" | "kix" | "leitcode" | "matrix2of5" | "maxicode" | "micropdf417" | "msi" | "onecode" | "pdf417" | "pdf417compact" | "pharmacode" | "pharmacode2" | "planet" | "plessey" | "posicode" | "postnet" | "pzn" | "rationalizedCodabar" | "raw" | "royalmail" | "sscc18" | "symbol" | "telepen" | "telepennumeric" | "ultracode" | "upca" | "upcacomposite" | "upce" | "upcecomposite";

    /**
     * The "Author" value to use as a parameter for this Operation
     */
    readonly author?: string;

    /**
     * The "Category" value to use as a parameter for this Operation
     */
    readonly category?: string;

    /**
     * The "Isbn" value to use as a parameter for this Operation
     */
    readonly isbn?: string;

    /**
     * The "Publisher" value to use as a parameter for this Operation
     */
    readonly publisher?: string;

    /**
     * The "Title" value to use as a parameter for this Operation
     */
    readonly title?: string;

    /**
     * The "Dni" value to use as a parameter for this Operation
     */
    readonly dni?: string;

    /**
     * The "Cif" value to use as a parameter for this Operation
     */
    readonly cif?: string;

    /**
     * The "Nie" value to use as a parameter for this Operation
     */
    readonly nie?: string;

    /**
     * The "Nif" value to use as a parameter for this Operation
     */
    readonly nif?: string;

    /**
     * The "Ip" value to use as a parameter for this Operation
     */
    readonly ip?: string;

    /**
     * The "City" value to use as a parameter for this Operation
     */
    readonly city?: string;

    /**
     * The "Phone" value to use as a parameter for this Operation
     */
    readonly phone?: string;

    /**
     * The "Zipcode" value to use as a parameter for this Operation
     */
    readonly zipcode?: string;

    /**
     * The "Upc" value to use as a parameter for this Operation
     */
    readonly upc?: string;

    /**
     * The "Isin" value to use as a parameter for this Operation
     */
    readonly isin?: string;

    /**
     * The "Number" value to use as a parameter for this Operation
     */
    readonly number?: string;

    /**
     * The "Uuid" value to use as a parameter for this Operation
     */
    readonly uuid?: string;

    /**
     * The "Domain" value to use as a parameter for this Operation
     */
    readonly domain?: string;

    /**
     * The "Duns" value to use as a parameter for this Operation
     */
    readonly duns?: string;

    /**
     * The "Email" value to use as a parameter for this Operation
     */
    readonly email?: string;

    /**
     * The "Name" value to use as a parameter for this Operation
     */
    readonly name?: string;

    /**
     * The "Url" value to use as a parameter for this Operation
     */
    readonly url?: string;

    /**
     * The "Profile" value to use as a parameter for this Operation
     */
    readonly profile?: string;

    /**
     * The "Role" value to use as a parameter for this Operation
     */
    readonly role?: string;

    /**
     * The "Taxid" value to use as a parameter for this Operation
     */
    readonly taxid?: string;

    /**
     * The "Company" value to use as a parameter for this Operation
     */
    readonly company?: string;

    /**
     * The "Area" value to use as a parameter for this Operation
     */
    readonly area?: "Communications" | "Consulting" | "Customer service" | "Education" | "Engineering" | "Finance" | "Health professional" | "Human resources" | "Information technology" | "Legal" | "Marketing" | "Operations" | "Owner" | "President" | "Product" | "Public relations" | "Real estate" | "Recruiting" | "Research" | "Sales";

    /**
     * The "Clevel" value to use as a parameter for this Operation
     */
    readonly clevel?: "No" | "Yes";

    /**
     * The "Location" value to use as a parameter for this Operation
     */
    readonly location?: string;

    /**
     * The "Keyword" value to use as a parameter for this Operation
     */
    readonly keyword?: string;

    /**
     * The "Message" value to use as a parameter for this Operation
     */
    readonly message?: string;

    /**
     * The "Message1" value to use as a parameter for this Operation
     */
    readonly message1?: string;

    /**
     * The "Message2" value to use as a parameter for this Operation
     */
    readonly message2?: string;

    /**
     * The "Seniority" value to use as a parameter for this Operation
     */
    readonly seniority?: "Apprentice" | "Director" | "Executive" | "Intermediate" | "Manager";

    /**
     * The "Address1" value to use as a parameter for this Operation
     */
    readonly address1?: string;

    /**
     * The "Address2" value to use as a parameter for this Operation
     */
    readonly address2?: string;

    /**
     * The "Fuel consumption" value to use as a parameter for this Operation
     */
    readonly fuel_consumption?: string;

    /**
     * The "Price liter" value to use as a parameter for this Operation
     */
    readonly price_liter?: string;

    /**
     * The "Coordinates1" value to use as a parameter for this Operation
     */
    readonly coordinates1?: string;

    /**
     * The "Coordinates2" value to use as a parameter for this Operation
     */
    readonly coordinates2?: string;

    /**
     * The "Ip1" value to use as a parameter for this Operation
     */
    readonly ip1?: string;

    /**
     * The "Ip2" value to use as a parameter for this Operation
     */
    readonly ip2?: string;

    /**
     * The "Phone1" value to use as a parameter for this Operation
     */
    readonly phone1?: string;

    /**
     * The "Phone2" value to use as a parameter for this Operation
     */
    readonly phone2?: string;

    /**
     * The "Zipcode1" value to use as a parameter for this Operation
     */
    readonly zipcode1?: string;

    /**
     * The "Zipcode2" value to use as a parameter for this Operation
     */
    readonly zipcode2?: string;

    /**
     * The "Distance" value to use as a parameter for this Operation
     */
    readonly distance?: string;

    /**
     * The "Coin" value to use as a parameter for this Operation
     */
    readonly coin?: "0x" | "Aave Coin" | "Algorand" | "Aragon" | "Augur" | "AugurV2" | "AuroraCoin" | "BTU Protocol" | "Bancor" | "Bankex" | "Basic Attention Token" | "BeaverCoin" | "BioCoin" | "Bitcoin" | "Bitcoin SV" | "BitcoinCash" | "BitcoinGold" | "BitcoinPrivate" | "BitcoinZ" | "BlockTrade" | "CUSD" | "Callisto" | "Cardano" | "Chainlink" | "Civic" | "Compound" | "Cred" | "Crypto.com Coin" | "Dash" | "Decentraland" | "Decred" | "DigiByte" | "District0x" | "DogeCoin" | "EOS" | "Enjin Coin" | "EtherZero" | "Ethereum" | "EthereumClassic" | "Expanse" | "FirmaChain" | "FreiCoin" | "GameCredits" | "GarliCoin" | "Gnosis" | "Golem" | "Golem (GNT)" | "HedgeTrade" | "Hush" | "HyperSpace" | "Komodo" | "LBRY Credits" | "Lisk" | "LiteCoin" | "Loom Network" | "Maker" | "Matchpool" | "Matic" | "MegaCoin" | "Melon" | "Metal" | "MonaCoin" | "Monero" | "Multi-collateral DAI" | "NameCoin" | "Nano" | "Nem" | "Neo" | "NeoGas" | "Numeraire" | "Ocean Protocol" | "Odyssey" | "OmiseGO" | "PIVX" | "Paxos" | "PeerCoin" | "Polkadot" | "Polymath" | "PrimeCoin" | "ProtoShares" | "Qtum" | "Quant" | "Quantum Resistant Ledger" | "RaiBlocks" | "Ripio Credit Network" | "Ripple" | "SOLVE" | "Salt" | "Serve" | "Siacoin" | "SnowGem" | "SolarCoin" | "Spendcoin" | "Status" | "Stellar" | "Storj" | "Storm" | "StormX" | "Swarm City" | "Synthetix Network" | "TEMCO" | "Tap" | "TenX" | "Tether" | "Tezos" | "Tron" | "TrueUSD" | "USD Coin" | "Uniswap Coin" | "VeChain" | "VertCoin" | "Viberate" | "VoteCoin" | "Waves" | "Wings" | "ZCash" | "ZClassic" | "ZenCash" | "iExec RLC" | "loki";

    /**
     * The "Country code" value to use as a parameter for this Operation
     */
    readonly country_code?: string;

    /**
     * The "Amount" value to use as a parameter for this Operation
     */
    readonly amount?: string;

    /**
     * The "Isocode1" value to use as a parameter for this Operation
     */
    readonly isocode1?: "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CNY" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "ISK" | "JPY" | "KRW" | "MXN" | "MYR" | "NOK" | "NZD" | "PHP" | "PLN" | "RON" | "RUB" | "SEK" | "SGD" | "THB" | "TRY" | "USD" | "ZAR";

    /**
     * The "Isocode2" value to use as a parameter for this Operation
     */
    readonly isocode2?: "AUD" | "BGN" | "BRL" | "CAD" | "CHF" | "CNY" | "CZK" | "DKK" | "EUR" | "GBP" | "HKD" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "ISK" | "JPY" | "KRW" | "MXN" | "MYR" | "NOK" | "NZD" | "PHP" | "PLN" | "RON" | "RUB" | "SEK" | "SGD" | "THB" | "TRY" | "USD" | "ZAR";

    /**
     * The "Date1" value to use as a parameter for this Operation
     */
    readonly date1?: string;

    /**
     * The "Date2" value to use as a parameter for this Operation
     */
    readonly date2?: string;

    /**
     * The "Date3" value to use as a parameter for this Operation
     */
    readonly date3?: string;

    /**
     * The "Period" value to use as a parameter for this Operation
     */
    readonly period?: "days" | "hours" | "minutes" | "seconds";

    /**
     * The "Useragent" value to use as a parameter for this Operation
     */
    readonly useragent?: string;

    /**
     * The "Type" value to use as a parameter for this Operation
     */
    readonly type?: "A" | "AAAA" | "CNAME" | "MX" | "NS" | "TXT";

    /**
     * The "Width" value to use as a parameter for this Operation
     */
    readonly width?: "1024" | "160" | "320" | "640" | "800";

    /**
     * The "Fullpage" value to use as a parameter for this Operation
     */
    readonly fullpage?: "no" | "yes";

    /**
     * The "Selector" value to use as a parameter for this Operation
     */
    readonly selector?: string;

    /**
     * The "Delay" value to use as a parameter for this Operation
     */
    readonly delay?: string;

    /**
     * The "Viewport" value to use as a parameter for this Operation
     */
    readonly viewport?: string;

    /**
     * The "Email from" value to use as a parameter for this Operation
     */
    readonly email_from?: string;

    /**
     * The "Email to" value to use as a parameter for this Operation
     */
    readonly email_to?: string;

    /**
     * The "Subject" value to use as a parameter for this Operation
     */
    readonly subject?: string;

    /**
     * The "Body" value to use as a parameter for this Operation
     */
    readonly body?: string;

    /**
     * The "Page" value to use as a parameter for this Operation
     */
    readonly page?: number;

    /**
     * The "Firstname" value to use as a parameter for this Operation
     */
    readonly firstname?: string;

    /**
     * The "Lastname" value to use as a parameter for this Operation
     */
    readonly lastname?: string;

    /**
     * The "Mode" value to use as a parameter for this Operation
     */
    readonly mode?: "guess" | "only_verify" | "verify";

    /**
     * The "Fullname" value to use as a parameter for this Operation
     */
    readonly fullname?: string;

    /**
     * The "Mobile" value to use as a parameter for this Operation
     */
    readonly mobile?: string;

    /**
     * The "Url dlr" value to use as a parameter for this Operation
     */
    readonly url_dlr?: string;

    /**
     * The "Source" value to use as a parameter for this Operation
     */
    readonly source?: string;

    /**
     * The "Destination" value to use as a parameter for this Operation
     */
    readonly destination?: string;

    /**
     * The "Size" value to use as a parameter for this Operation
     */
    readonly size?: string;

    /**
     * The "List" value to use as a parameter for this Operation
     */
    readonly list?: string;

    /**
     * The "Keywords" value to use as a parameter for this Operation
     */
    readonly keywords?: string;

    /**
     * The "Current company" value to use as a parameter for this Operation
     */
    readonly current_company?: string;

    /**
     * The "Current title" value to use as a parameter for this Operation
     */
    readonly current_title?: string;

    /**
     * The "Included companies" value to use as a parameter for this Operation
     */
    readonly included_companies?: string;

    /**
     * The "Excluded companies" value to use as a parameter for this Operation
     */
    readonly excluded_companies?: string;

    /**
     * The "Included titles" value to use as a parameter for this Operation
     */
    readonly included_titles?: string;

    /**
     * The "Excluded titles" value to use as a parameter for this Operation
     */
    readonly excluded_titles?: string;

    /**
     * The "Included keywords" value to use as a parameter for this Operation
     */
    readonly included_keywords?: string;

    /**
     * The "Excluded keywords" value to use as a parameter for this Operation
     */
    readonly excluded_keywords?: string;

    /**
     * The "Length1" value to use as a parameter for this Operation
     */
    readonly length1?: number;

    /**
     * The "Length2" value to use as a parameter for this Operation
     */
    readonly length2?: number;

    /**
     * The "Length" value to use as a parameter for this Operation
     */
    readonly length?: number;

    /**
     * The "Separator" value to use as a parameter for this Operation
     */
    readonly separator?: string;

    /**
     * The "Latitude" value to use as a parameter for this Operation
     */
    readonly latitude?: string;

    /**
     * The "Longitude" value to use as a parameter for this Operation
     */
    readonly longitude?: string;

    /**
     * The "Radius" value to use as a parameter for this Operation
     */
    readonly radius?: string;

    /**
     * The "Imei" value to use as a parameter for this Operation
     */
    readonly imei?: string;

    /**
     * The "Regex" value to use as a parameter for this Operation
     */
    readonly regex?: string;

    /**
     * The "Host" value to use as a parameter for this Operation
     */
    readonly host?: string;

    /**
     * The "Port" value to use as a parameter for this Operation
     */
    readonly port?: string;

    /**
     * The "Table" value to use as a parameter for this Operation
     */
    readonly table?: string;

    /**
     * The "Number1" value to use as a parameter for this Operation
     */
    readonly number1?: string;

    /**
     * The "Number2" value to use as a parameter for this Operation
     */
    readonly number2?: string;

    /**
     * The "Number3" value to use as a parameter for this Operation
     */
    readonly number3?: string;

    /**
     * The "Luhn" value to use as a parameter for this Operation
     */
    readonly luhn?: string;

    /**
     * The "Mod" value to use as a parameter for this Operation
     */
    readonly mod?: string;

    /**
     * The "Rest" value to use as a parameter for this Operation
     */
    readonly rest?: string;

    /**
     * The "Password" value to use as a parameter for this Operation
     */
    readonly password?: string;

    /**
     * The "Locality" value to use as a parameter for this Operation
     */
    readonly locality?: "Australia (English)" | "Australia Ocker (English)" | "Azerbaijani" | "Bork (English)" | "Canada (English)" | "Canada (French)" | "Chinese" | "Chinese (Taiwan)" | "Czech" | "Dutch" | "English" | "Farsi" | "French" | "Georgian" | "German" | "German (Austria)" | "German (Switzerland)" | "Great Britain (English)" | "India (English)" | "Indonesia" | "Ireland (English)" | "Italian" | "Japanese" | "Korean" | "Nepalese" | "Norwegian" | "Polish" | "Portuguese (Brazil)" | "Russian" | "Slovakian" | "Spanish" | "Spanish Mexico" | "Swedish" | "Turkish" | "Ukrainian" | "United States (English)" | "Vietnamese";

    /**
     * The "Surname" value to use as a parameter for this Operation
     */
    readonly surname?: string;

    /**
     * The "Province" value to use as a parameter for this Operation
     */
    readonly province?: string;

    /**
     * The "Format" value to use as a parameter for this Operation
     */
    readonly format?: string;

    /**
     * The "Text1" value to use as a parameter for this Operation
     */
    readonly text1?: string;

    /**
     * The "Text2" value to use as a parameter for this Operation
     */
    readonly text2?: string;

    /**
     * The "Glue" value to use as a parameter for this Operation
     */
    readonly glue?: string;

    /**
     * The "Field" value to use as a parameter for this Operation
     */
    readonly field?: "alphabetic" | "alphanumeric" | "cif" | "city" | "country" | "date" | "decimal" | "dni" | "domain" | "email" | "gender" | "integer" | "ip" | "mobile" | "name" | "nie" | "nif" | "phone" | "province" | "zipcode";

    /**
     * The "Find" value to use as a parameter for this Operation
     */
    readonly find?: string;

    /**
     * The "Replace" value to use as a parameter for this Operation
     */
    readonly replace?: string;

    /**
     * The "Texts" value to use as a parameter for this Operation
     */
    readonly texts?: string;

    /**
     * The "Html" value to use as a parameter for this Operation
     */
    readonly html?: string;

    /**
     * The "Tin" value to use as a parameter for this Operation
     */
    readonly tin?: string;

    /**
     * The "Vin" value to use as a parameter for this Operation
     */
    readonly vin?: string;

    /**
     * The "Count1" value to use as a parameter for this Operation
     */
    readonly count1?: string;

    /**
     * The "Count2" value to use as a parameter for this Operation
     */
    readonly count2?: string;

    /**
     * The "Count" value to use as a parameter for this Operation
     */
    readonly count?: string;

    /**
     * Default: {}
     */
    readonly additionalOptions?: { "dataWebhook"?: string };

}
