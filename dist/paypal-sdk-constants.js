!function(E,N){"object"==typeof exports&&"object"==typeof module?module.exports=N():"function"==typeof define&&define.amd?define("ppsdkconstants",[],N):"object"==typeof exports?exports.ppsdkconstants=N():E.ppsdkconstants=N()}("undefined"!=typeof self?self:this,(function(){return function(E){var N={};function S(R){if(N[R])return N[R].exports;var t=N[R]={i:R,l:!1,exports:{}};return E[R].call(t.exports,t,t.exports,S),t.l=!0,t.exports}return S.m=E,S.c=N,S.d=function(E,N,R){S.o(E,N)||Object.defineProperty(E,N,{enumerable:!0,get:R})},S.r=function(E){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(E,"__esModule",{value:!0})},S.t=function(E,N){if(1&N&&(E=S(E)),8&N)return E;if(4&N&&"object"==typeof E&&E&&E.__esModule)return E;var R=Object.create(null);if(S.r(R),Object.defineProperty(R,"default",{enumerable:!0,value:E}),2&N&&"string"!=typeof E)for(var t in E)S.d(R,t,function(N){return E[N]}.bind(null,t));return R},S.n=function(E){var N=E&&E.__esModule?function(){return E.default}:function(){return E};return S.d(N,"a",N),N},S.o=function(E,N){return{}.hasOwnProperty.call(E,N)},S.p="",S(S.s=0)}([function(E,N,S){"use strict";S.r(N),S.d(N,"APM_LIST",(function(){return A})),S.d(N,"DEFAULT_COUNTRY",(function(){return c})),S.d(N,"DEFAULT_CURRENCY",(function(){return U})),S.d(N,"DEFAULT_INTENT",(function(){return B})),S.d(N,"DEFAULT_COMMIT",(function(){return G})),S.d(N,"DEFAULT_SALE_COMMIT",(function(){return K})),S.d(N,"DEFAULT_NONSALE_COMMIT",(function(){return p})),S.d(N,"DEFAULT_VAULT",(function(){return f})),S.d(N,"DEFAULT_COMPONENTS",(function(){return l})),S.d(N,"DEFAULT_DEBUG",(function(){return Y})),S.d(N,"ENV",(function(){return m})),S.d(N,"MOBILE_ENV",(function(){return V})),S.d(N,"ERROR_CODE",(function(){return b})),S.d(N,"FPTI_KEY",(function(){return y})),S.d(N,"FPTI_USER_ACTION",(function(){return W})),S.d(N,"FPTI_DATA_SOURCE",(function(){return g})),S.d(N,"FPTI_FEED",(function(){return J})),S.d(N,"FPTI_SDK_NAME",(function(){return h})),S.d(N,"FUNDING",(function(){return R})),S.d(N,"FUNDING_BRAND_LABEL",(function(){return t})),S.d(N,"CARD",(function(){return e})),S.d(N,"WALLET_INSTRUMENT",(function(){return T})),S.d(N,"FUNDING_PRODUCTS",(function(){return n})),S.d(N,"COUNTRY",(function(){return _})),S.d(N,"LANG",(function(){return r})),S.d(N,"COUNTRY_LANGS",(function(){return o})),S.d(N,"BASE_SDK_METRIC_NAMESPACE",(function(){return k})),S.d(N,"payPalWebV5Dimensions",(function(){return v})),S.d(N,"INTENT",(function(){return I})),S.d(N,"COMMIT",(function(){return D})),S.d(N,"VAULT",(function(){return F})),S.d(N,"CURRENCY",(function(){return O})),S.d(N,"SDK_PATH",(function(){return i})),S.d(N,"SDK_SETTINGS",(function(){return H})),S.d(N,"SDK_QUERY_KEYS",(function(){return M})),S.d(N,"COMPONENTS",(function(){return a})),S.d(N,"DEBUG",(function(){return C})),S.d(N,"QUERY_BOOL",(function(){return u})),S.d(N,"UNKNOWN",(function(){return d})),S.d(N,"PROTOCOL",(function(){return P})),S.d(N,"PAGE_TYPES",(function(){return L})),S.d(N,"MERCHANT_ID_MAX",(function(){return Z})),S.d(N,"DISPLAY_ONLY_VALUES",(function(){return s})),S.d(N,"PLATFORM",(function(){return x})),S.d(N,"TYPES",(function(){return X}));var R={PAYPAL:"paypal",VENMO:"venmo",APPLEPAY:"applepay",ITAU:"itau",CREDIT:"credit",PAYLATER:"paylater",CARD:"card",IDEAL:"ideal",SEPA:"sepa",BANCONTACT:"bancontact",GIROPAY:"giropay",SOFORT:"sofort",EPS:"eps",MYBANK:"mybank",P24:"p24",PAYU:"payu",BLIK:"blik",TRUSTLY:"trustly",OXXO:"oxxo",BOLETO:"boleto",BOLETOBANCARIO:"boletobancario",WECHATPAY:"wechatpay",MERCADOPAGO:"mercadopago",MULTIBANCO:"multibanco",SATISPAY:"satispay",PAIDY:"paidy",ZIMPLER:"zimpler",MAXIMA:"maxima"},t={PAYPAL:"PayPal",CREDIT:"PayPal Credit"},e={VISA:"visa",MASTERCARD:"mastercard",AMEX:"amex",DISCOVER:"discover",HIPER:"hiper",ELO:"elo",JCB:"jcb",CUP:"cup",DINERS:"diners",MAESTRO:"maestro",EFTPOS:"eftpos"},T={BALANCE:"balance",CARD:"card",BANK:"bank",CREDIT:"credit"},n={PAY_IN_3:"payIn3",PAY_IN_4:"payIn4",PAYLATER:"paylater",CREDIT:"credit"},A=[R.IDEAL,R.BANCONTACT,R.GIROPAY,R.SOFORT,R.EPS,R.MYBANK,R.P24,R.PAYU,R.BLIK,R.TRUSTLY,R.OXXO,R.BOLETO,R.BOLETOBANCARIO,R.WECHATPAY,R.MERCADOPAGO,R.MULTIBANCO,R.SATISPAY,R.PAIDY,R.MAXIMA,R.ZIMPLER],_={AD:"AD",AE:"AE",AG:"AG",AI:"AI",AL:"AL",AM:"AM",AN:"AN",AO:"AO",AR:"AR",AT:"AT",AU:"AU",AW:"AW",AZ:"AZ",BA:"BA",BB:"BB",BE:"BE",BF:"BF",BG:"BG",BH:"BH",BI:"BI",BJ:"BJ",BM:"BM",BN:"BN",BO:"BO",BR:"BR",BS:"BS",BT:"BT",BW:"BW",BY:"BY",BZ:"BZ",CA:"CA",CD:"CD",CG:"CG",CH:"CH",CI:"CI",CK:"CK",CL:"CL",CM:"CM",CN:"CN",CO:"CO",CR:"CR",CV:"CV",CY:"CY",CZ:"CZ",DE:"DE",DJ:"DJ",DK:"DK",DM:"DM",DO:"DO",DZ:"DZ",EC:"EC",EE:"EE",EG:"EG",ER:"ER",ES:"ES",ET:"ET",FI:"FI",FJ:"FJ",FK:"FK",FM:"FM",FO:"FO",FR:"FR",GA:"GA",GB:"GB",GD:"GD",GE:"GE",GF:"GF",GI:"GI",GL:"GL",GM:"GM",GN:"GN",GP:"GP",GR:"GR",GT:"GT",GW:"GW",GY:"GY",HK:"HK",HN:"HN",HR:"HR",HU:"HU",ID:"ID",IE:"IE",IL:"IL",IN:"IN",IS:"IS",IT:"IT",JM:"JM",JO:"JO",JP:"JP",KE:"KE",KG:"KG",KH:"KH",KI:"KI",KM:"KM",KN:"KN",KR:"KR",KW:"KW",KY:"KY",KZ:"KZ",LA:"LA",LC:"LC",LI:"LI",LK:"LK",LS:"LS",LT:"LT",LU:"LU",LV:"LV",MA:"MA",MC:"MC",MD:"MD",ME:"ME",MG:"MG",MH:"MH",MK:"MK",ML:"ML",MN:"MN",MQ:"MQ",MR:"MR",MS:"MS",MT:"MT",MU:"MU",MV:"MV",MW:"MW",MX:"MX",MY:"MY",MZ:"MZ",NA:"NA",NC:"NC",NE:"NE",NF:"NF",NG:"NG",NI:"NI",NL:"NL",NO:"NO",NP:"NP",NR:"NR",NU:"NU",NZ:"NZ",OM:"OM",PA:"PA",PE:"PE",PF:"PF",PG:"PG",PH:"PH",PL:"PL",PM:"PM",PN:"PN",PT:"PT",PW:"PW",PY:"PY",QA:"QA",RE:"RE",RO:"RO",RS:"RS",RU:"RU",RW:"RW",SA:"SA",SB:"SB",SC:"SC",SE:"SE",SG:"SG",SH:"SH",SI:"SI",SJ:"SJ",SK:"SK",SL:"SL",SM:"SM",SN:"SN",SO:"SO",SR:"SR",ST:"ST",SV:"SV",SZ:"SZ",TC:"TC",TD:"TD",TG:"TG",TH:"TH",TJ:"TJ",TM:"TM",TN:"TN",TO:"TO",TR:"TR",TT:"TT",TV:"TV",TW:"TW",TZ:"TZ",UA:"UA",UG:"UG",US:"US",UY:"UY",VA:"VA",VC:"VC",VE:"VE",VG:"VG",VN:"VN",VU:"VU",WF:"WF",WS:"WS",YE:"YE",YT:"YT",ZA:"ZA",ZM:"ZM",ZW:"ZW"},r={AR:"ar",BG:"bg",CS:"cs",DA:"da",DE:"de",EL:"el",EN:"en",ES:"es",ET:"et",FI:"fi",FR:"fr",HE:"he",HU:"hu",ID:"id",IT:"it",JA:"ja",KO:"ko",LT:"lt",LV:"lv",MS:"ms",NL:"nl",NO:"no",PL:"pl",PT:"pt",RO:"ro",RU:"ru",SI:"si",SK:"sk",SL:"sl",SQ:"sq",SV:"sv",TH:"th",TL:"tl",TR:"tr",VI:"vi",ZH:"zh",ZH_HANT:"zh_Hant"},o={AD:[r.EN,r.FR,r.ES,r.ZH],AE:[r.EN,r.FR,r.ES,r.ZH,r.AR],AG:[r.EN,r.FR,r.ES,r.ZH],AI:[r.EN,r.FR,r.ES,r.ZH],AL:[r.SQ,r.EN],AM:[r.EN,r.FR,r.ES,r.ZH],AN:[r.EN,r.FR,r.ES,r.ZH],AO:[r.EN,r.FR,r.ES,r.ZH],AR:[r.ES,r.EN],AT:[r.DE,r.EN],AU:[r.EN],AW:[r.EN,r.FR,r.ES,r.ZH],AZ:[r.EN,r.FR,r.ES,r.ZH],BA:[r.EN],BB:[r.EN,r.FR,r.ES,r.ZH],BE:[r.EN,r.NL,r.FR],BF:[r.FR,r.EN,r.ES,r.ZH],BG:[r.BG,r.EN],BH:[r.AR,r.EN,r.FR,r.ES,r.ZH],BI:[r.FR,r.EN,r.ES,r.ZH],BJ:[r.FR,r.EN,r.ES,r.ZH],BM:[r.EN,r.FR,r.ES,r.ZH],BN:[r.MS,r.EN],BO:[r.ES,r.EN,r.FR,r.ZH],BR:[r.PT,r.EN],BS:[r.EN,r.FR,r.ES,r.ZH],BT:[r.EN],BW:[r.EN,r.FR,r.ES,r.ZH],BY:[r.EN],BZ:[r.EN,r.ES,r.FR,r.ZH],CA:[r.EN,r.FR],CD:[r.FR,r.EN,r.ES,r.ZH],CG:[r.EN,r.FR,r.ES,r.ZH],CH:[r.DE,r.FR,r.EN],CI:[r.FR,r.EN],CK:[r.EN,r.FR,r.ES,r.ZH],CL:[r.ES,r.EN,r.FR,r.ZH],CM:[r.FR,r.EN],CN:[r.ZH],CO:[r.ES,r.EN,r.FR,r.ZH],CR:[r.ES,r.EN,r.FR,r.ZH],CV:[r.EN,r.FR,r.ES,r.ZH],CY:[r.EN],CZ:[r.CS,r.EN],DE:[r.DE,r.EN],DJ:[r.FR,r.EN,r.ES,r.ZH],DK:[r.DA,r.EN],DM:[r.EN,r.FR,r.ES,r.ZH],DO:[r.ES,r.EN,r.FR,r.ZH],DZ:[r.AR,r.EN,r.FR,r.ES,r.ZH],EC:[r.ES,r.EN,r.FR,r.ZH],EE:[r.ET,r.EN,r.RU],EG:[r.AR,r.EN,r.FR,r.ES,r.ZH],ER:[r.EN,r.FR,r.ES,r.ZH],ES:[r.ES,r.EN],ET:[r.EN,r.FR,r.ES,r.ZH],FI:[r.FI,r.EN],FJ:[r.EN,r.FR,r.ES,r.ZH],FK:[r.EN,r.FR,r.ES,r.ZH],FM:[r.EN],FO:[r.DA,r.EN,r.FR,r.ES,r.ZH],FR:[r.FR,r.EN],GA:[r.FR,r.EN,r.ES,r.ZH],GB:[r.EN],GD:[r.EN,r.FR,r.ES,r.ZH],GE:[r.EN,r.FR,r.ES,r.ZH],GF:[r.EN,r.FR,r.ES,r.ZH],GI:[r.EN,r.FR,r.ES,r.ZH],GL:[r.DA,r.EN,r.FR,r.ES,r.ZH],GM:[r.EN,r.FR,r.ES,r.ZH],GN:[r.FR,r.EN,r.ES,r.ZH],GP:[r.EN,r.FR,r.ES,r.ZH],GR:[r.EL,r.EN],GT:[r.ES,r.EN,r.FR,r.ZH],GW:[r.EN,r.FR,r.ES,r.ZH],GY:[r.EN,r.FR,r.ES,r.ZH],HK:[r.EN,r.ZH_HANT,r.ZH],HN:[r.ES,r.EN,r.FR,r.ZH],HR:[r.EN],HU:[r.HU,r.EN],ID:[r.ID,r.EN],IE:[r.EN,r.FR,r.ES,r.ZH],IL:[r.HE,r.EN],IN:[r.EN],IS:[r.EN],IT:[r.IT,r.EN],JM:[r.EN,r.ES,r.FR,r.ZH],JO:[r.AR,r.EN,r.FR,r.ES,r.ZH],JP:[r.JA,r.EN],KE:[r.EN,r.FR,r.ES,r.ZH],KG:[r.EN,r.FR,r.ES,r.ZH],KH:[r.EN],KI:[r.EN,r.FR,r.ES,r.ZH],KM:[r.FR,r.EN,r.ES,r.ZH],KN:[r.EN,r.FR,r.ES,r.ZH],KR:[r.KO,r.EN],KW:[r.AR,r.EN,r.FR,r.ES,r.ZH],KY:[r.EN,r.FR,r.ES,r.ZH],KZ:[r.EN,r.FR,r.ES,r.ZH],LA:[r.EN],LC:[r.EN,r.FR,r.ES,r.ZH],LI:[r.EN,r.FR,r.ES,r.ZH],LK:[r.SI,r.EN],LS:[r.EN,r.FR,r.ES,r.ZH],LT:[r.LT,r.EN,r.RU,r.ZH],LU:[r.EN,r.DE,r.FR,r.ES,r.ZH],LV:[r.LV,r.EN,r.RU],MA:[r.AR,r.EN,r.FR,r.ES,r.ZH],MC:[r.FR,r.EN],MD:[r.EN],ME:[r.EN],MG:[r.EN,r.FR,r.ES,r.ZH],MH:[r.EN,r.FR,r.ES,r.ZH],MK:[r.EN],ML:[r.FR,r.EN,r.ES,r.ZH],MN:[r.EN],MQ:[r.EN,r.FR,r.ES,r.ZH],MR:[r.EN,r.FR,r.ES,r.ZH],MS:[r.EN,r.FR,r.ES,r.ZH],MT:[r.EN],MU:[r.EN,r.FR,r.ES,r.ZH],MV:[r.EN],MW:[r.EN,r.FR,r.ES,r.ZH],MX:[r.ES,r.EN],MY:[r.MS,r.EN],MZ:[r.EN,r.FR,r.ES,r.ZH],NA:[r.EN,r.FR,r.ES,r.ZH],NC:[r.EN,r.FR,r.ES,r.ZH],NE:[r.FR,r.EN,r.ES,r.ZH],NF:[r.EN,r.FR,r.ES,r.ZH],NG:[r.EN],NI:[r.ES,r.EN,r.FR,r.ZH],NL:[r.NL,r.EN],NO:[r.NO,r.EN],NP:[r.EN],NR:[r.EN,r.FR,r.ES,r.ZH],NU:[r.EN,r.FR,r.ES,r.ZH],NZ:[r.EN,r.FR,r.ES,r.ZH],OM:[r.AR,r.EN,r.FR,r.ES,r.ZH],PA:[r.ES,r.EN,r.FR,r.ZH],PE:[r.ES,r.EN,r.FR,r.ZH],PF:[r.EN,r.FR,r.ES,r.ZH],PG:[r.EN,r.FR,r.ES,r.ZH],PH:[r.TL,r.EN],PL:[r.PL,r.EN],PM:[r.EN,r.FR,r.ES,r.ZH],PN:[r.EN,r.FR,r.ES,r.ZH],PT:[r.PT,r.EN],PW:[r.EN,r.FR,r.ES,r.ZH],PY:[r.ES,r.EN],QA:[r.EN,r.FR,r.ES,r.ZH,r.AR],RE:[r.EN,r.FR,r.ES,r.ZH],RO:[r.RO,r.EN],RS:[r.EN,r.FR,r.ES,r.ZH],RU:[r.RU,r.EN],RW:[r.FR,r.EN,r.ES,r.ZH],SA:[r.AR,r.EN,r.FR,r.ES,r.ZH],SB:[r.EN,r.FR,r.ES,r.ZH],SC:[r.FR,r.EN,r.ES,r.ZH],SE:[r.SV,r.EN],SG:[r.EN],SH:[r.EN,r.FR,r.ES,r.ZH],SI:[r.SL,r.EN],SJ:[r.EN,r.FR,r.ES,r.ZH],SK:[r.SK,r.EN],SL:[r.EN,r.FR,r.ES,r.ZH],SM:[r.EN,r.FR,r.ES,r.ZH],SN:[r.FR,r.EN,r.ES,r.ZH],SO:[r.EN,r.FR,r.ES,r.ZH],SR:[r.EN,r.FR,r.ES,r.ZH],ST:[r.EN,r.FR,r.ES,r.ZH],SV:[r.ES,r.EN,r.FR,r.ZH],SZ:[r.EN,r.FR,r.ES,r.ZH],TC:[r.EN,r.FR,r.ES,r.ZH],TD:[r.FR,r.EN,r.ES,r.ZH],TG:[r.FR,r.EN,r.ES,r.ZH],TH:[r.TH,r.EN],TJ:[r.EN,r.FR,r.ES,r.ZH],TM:[r.EN,r.FR,r.ES,r.ZH],TN:[r.AR,r.EN,r.FR,r.ES,r.ZH],TO:[r.EN],TR:[r.TR,r.EN],TT:[r.EN,r.FR,r.ES,r.ZH],TV:[r.EN,r.FR,r.ES,r.ZH],TW:[r.ZH_HANT,r.ZH,r.EN],TZ:[r.EN,r.FR,r.ES,r.ZH],UA:[r.EN,r.RU,r.FR,r.ES,r.ZH],UG:[r.EN,r.FR,r.ES,r.ZH],US:[r.EN,r.FR,r.ES,r.ZH],UY:[r.ES,r.EN,r.FR,r.ZH],VA:[r.EN,r.FR,r.ES,r.ZH],VC:[r.EN,r.FR,r.ES,r.ZH],VE:[r.ES,r.EN,r.FR,r.ZH],VG:[r.EN,r.FR,r.ES,r.ZH],VN:[r.VI,r.EN],VU:[r.EN,r.FR,r.ES,r.ZH],WF:[r.EN,r.FR,r.ES,r.ZH],WS:[r.EN],YE:[r.AR,r.EN,r.FR,r.ES,r.ZH],YT:[r.EN,r.FR,r.ES,r.ZH],ZA:[r.EN,r.FR,r.ES,r.ZH],ZM:[r.EN,r.FR,r.ES,r.ZH],ZW:[r.EN]},I={CAPTURE:"capture",AUTHORIZE:"authorize",ORDER:"order",TOKENIZE:"tokenize",SUBSCRIPTION:"subscription"},D={TRUE:!0,FALSE:!1},F={TRUE:!0,FALSE:!1},O={AED:"AED",ALL:"ALL",ANG:"ANG",AOA:"AOA",AUD:"AUD",AWG:"AWG",BAM:"BAM",BBD:"BBD",BGN:"BGN",BIF:"BIF",BMD:"BMD",BND:"BND",BOB:"BOB",BRL:"BRL",BSD:"BSD",BTN:"BTN",CAD:"CAD",CDF:"CDF",CHF:"CHF",CLP:"CLP",COP:"COP",CRC:"CRC",CVE:"CVE",CZK:"CZK",DJF:"DJF",DKK:"DKK",DOP:"DOP",DZD:"DZD",EGP:"EGP",ETB:"ETB",EUR:"EUR",FJD:"FJD",FKP:"FKP",GBP:"GBP",GIP:"GIP",GMD:"GMD",GNF:"GNF",GTQ:"GTQ",GYD:"GYD",HKD:"HKD",HNL:"HNL",HRK:"HRK",HUF:"HUF",IDR:"IDR",ILS:"ILS",INR:"INR",ISK:"ISK",JMD:"JMD",JPY:"JPY",KES:"KES",KMF:"KMF",KRW:"KRW",KYD:"KYD",LAK:"LAK",LKR:"LKR",MDL:"MDL",MGA:"MGA",MKD:"MKD",MNT:"MNT",MRO:"MRO",MUR:"MUR",MVR:"MVR",MXN:"MXN",MYR:"MYR",NAD:"NAD",NIO:"NIO",NOK:"NOK",NPR:"NPR",NZD:"NZD",PEN:"PEN",PGK:"PGK",PHP:"PHP",PLN:"PLN",PYG:"PYG",QAR:"QAR",RON:"RON",RSD:"RSD",RUB:"RUB",SAR:"SAR",SBD:"SBD",SCR:"SCR",SEK:"SEK",SGD:"SGD",SHP:"SHP",SLL:"SLL",SOS:"SOS",SRD:"SRD",SZL:"SZL",THB:"THB",TJS:"TJS",TOP:"TOP",TTD:"TTD",TWD:"TWD",TZS:"TZS",USD:"USD",UYU:"UYU",VND:"VND",VUV:"VUV",WST:"WST",XAF:"XAF",XCD:"XCD",YER:"YER"},i="/sdk/js",H={AMOUNT:"data-amount",API_STAGE_HOST:"data-api-stage-host",CLIENT_METADATA_ID:"data-client-metadata-id",CLIENT_TOKEN:"data-client-token",CSP_NONCE:"data-csp-nonce",ENABLE_3DS:"data-enable-3ds",JS_SDK_LIBRARY:"data-js-sdk-library",MERCHANT_ID:"data-merchant-id",NAMESPACE:"data-namespace",PAGE_TYPE:"data-page-type",PARTNER_ATTRIBUTION_ID:"data-partner-attribution-id",POPUPS_DISABLED:"data-popups-disabled",SDK_INTEGRATION_SOURCE:"data-sdk-integration-source",SDK_TOKEN:"data-sdk-client-token",STAGE_HOST:"data-stage-host",USER_EXPERIENCE_FLOW:"data-user-experience-flow",USER_ID_TOKEN:"data-user-id-token"},M={COMPONENTS:"components",ENV:"env",DEBUG:"debug",CACHEBUST:"cachebust",CLIENT_ID:"client-id",MERCHANT_ID:"merchant-id",LOCALE:"locale",CURRENCY:"currency",INTENT:"intent",COMMIT:"commit",VAULT:"vault",BUYER_COUNTRY:"buyer-country",ENABLE_FUNDING:"enable-funding",DISABLE_FUNDING:"disable-funding",DISABLE_CARD:"disable-card",INTEGRATION_DATE:"integration-date",STAGE_HOST:"stage-host",STAGE_ALIAS:"stage-alias",CDN_REGISTRY:"cdn-registry",VERSION:"version"},a={BUTTONS:"buttons",CARD_FIELDS:"card-fields",HOSTED_BUTTONS:"hosted-buttons",HOSTED_FIELDS:"hosted-fields"},C={TRUE:!0,FALSE:!1},u={TRUE:"true",FALSE:"false"},d="unknown",P={HTTP:"http",HTTPS:"https"},L={HOME:"home",PRODUCT:"product",CART:"cart",CHECKOUT:"checkout",PRODUCT_LISTING:"product-listing",SEARCH_RESULTS:"search-results",PRODUCT_DETAILS:"product-details",MINI_CART:"mini-cart"},Z=10,s={VAULTABLE:"vaultable"},c=_.US,U=O.USD,B=I.CAPTURE,G=D.TRUE,K=D.TRUE,p=D.TRUE,f=F.FALSE,l=a.BUTTONS,Y=C.FALSE,m={LOCAL:"local",STAGE:"stage",SANDBOX:"sandbox",PRODUCTION:"production",TEST:"test"},V={ANDROID:"android",IOS:"iOS"},b={VALIDATION_ERROR:"validation_error"},y={BUTTON_LAYOUT:"button_layout",BUTTON_MESSAGE_AMOUNT:"button_message_amount",BUTTON_MESSAGE_CREDIT_PRODUCT_IDENTIFIER:"button_message_credit_product_identifier",BUTTON_MESSAGE_COLOR:"button_message_color",BUTTON_MESSAGE_CURRENCY:"button_message_currency",BUTTON_MESSAGE_ALIGN:"button_message_align",BUTTON_MESSAGE_POSITION:"button_message_position",BUTTON_MESSAGE_OFFER_COUNTRY:"button_message_offer_country",BUTTON_MESSAGE_OFFER_TYPE:"button_message_offer_type",BUTTON_MESSAGE_TYPE:"button_message_type",BUTTON_SESSION_UID:"button_session_id",BUTTON_SOURCE:"button_source",BUTTON_TYPE:"button_type",BUTTON_VERSION:"button_version",BUYER_COUNTRY:"buyer_cntry",CHOSEN_FI_TYPE:"chosen_fi_type",CHOSEN_FUNDING:"selected_payment_method",CLIENT_ID:"client_id",CONTEXT_CORRID:"context_correlation_id",CONTEXT_ID:"context_id",CONTEXT_TYPE:"context_type",CPL_CHUNK_METRICS:"cpl_chunk_metrics",CPL_COMP_METRICS:"cpl_comp_metrics",CPL_QUERY_METRICS:"cpl_query_metrics",DATA_SOURCE:"serverside_data_source",DISABLE_CARD:"disable_card",DISABLE_FUNDING:"disable_funding",ERROR_CODE:"ext_error_code",ERROR_DESC:"ext_error_desc",EVENT_NAME:"event_name",EXPERIMENT_EXPERIENCE:"experimentation_experience",EXPERIMENT_NAME:"pxp_exp_id",EXPERIMENT_TREATMENT:"experimentation_treatment",FEED:"feed_name",FI_ID:"fi_id",FI_LIST:"fi_list",FIELDS_COMPONENT_SESSION_ID:"fields_component_session_id",FUNDING_COUNT:"eligible_payment_count",FUNDING_LIST:"eligible_payment_methods",HOSTED_BUTTON_ID:"hosted_button_id",INTEGRATION_IDENTIFIER:"integration_identifier",IS_VAULT:"is_vault",JS_SDK_LIBRARY:"js_sdk_library",LOCALE:"locale",MERCHANT_DOMAIN:"merchant_domain",MOBILE_APP_VERSION:"mobile_app_version",MOBILE_BUNDLE_IDENTIFIER:"mapv",OPTION_SELECTED:"optsel",PAGE:"page_name",PAGE_LOAD_TIME:"page_load_time",PAGE_TYPE:"pp_placement",PARTNER_ATTRIBUTION_ID:"bn_code",PAY_ID:"pay_id",PAY_NOW:"pay_now",PAYMENT_FLOW:"payment_flow",POTENTIAL_PAYMENT_METHODS:"potential_payment_methods",PRODUCT:"product",RECOMMENDED_PAYMENT:"recommended_payment",REFERER:"referer_url",REFERRER_DOMAIN:"referrer_domain",RESPONSE_DURATION:"response_duration",SDK_CACHE:"sdk_cache",SDK_ENVIRONMENT:"sdk_environment",SDK_INTEGRATION_SOURCE:"sdk_integration_source",SDK_LOAD_TIME:"sdk_load_time",SDK_NAME:"sdk_name",SDK_VERSION:"sdk_version",SELECTED_FI:"merchant_selected_funding_source",SELLER_ID:"seller_id",SESSION_UID:"page_session_id",STATE:"state_name",STICKINESS_ID:"stickiness_id",TIMESTAMP:"t",TOKEN:"token",TRANSITION:"transition_name",TRANSITION_TIME:"transition_time",TREATMENT_NAME:"pxp_trtmnt_id",USER_ACTION:"user_action",USER_AGENT:"user_agent",USER_IDENTITY_METHOD:"user_identity_method",VERSION:"checkoutjs_version"},W={COMMIT:"commit",CONTINUE:"continue"},g={PAYMENTS_SDK:"checkout"},J={PAYMENTS_SDK:"payments_sdk"},h={PAYMENTS_SDK:"payments_sdk"},k="pp.sdks.ppcp",v={sdk_platform:"web",major_version:"5"},x={DESKTOP:"desktop",MOBILE:"mobile"},X=!0}])}));
//# sourceMappingURL=paypal-sdk-constants.js.map