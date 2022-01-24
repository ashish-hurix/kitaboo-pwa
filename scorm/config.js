var CONFIG = {
  // Common Configurations
  lang: 'en_US', // default en_US
  title: 'Reader',
  ClientId: 'cHJvZi1raXRhYm9v',
  cookiePolicy: 'https://kitaboo.com/privacy-policy/',
  logo: 'shell/images/kitaboo_logo.png', // set reader logo
  defaultUser: 'Normal',
  defaultMode: 'day-mode',
  defaultSinglePage: false,
  defaultNotePopup: false,
  chapterNavigation: true,
  versionNumber: '5.0',
  flatten: true, // true: show all chapter in toc including subchapter on slider, false: show only main chapter in toc on slider
  pageNavigationSlider: false,
  isScrollView: true,
  isFibEnable: true,
  fontSize:12,   // fib minimum font size
  isSettingsEnable: false,
  showSubmitButton: true,
  showCookieMessage: true,
  showmarkeupicon: true,
  showreaderLogo: true,
  resourcePageNumber: true,
  isTeacherReview: true,
  fitWidthHeight: true,
  isTextSelectionDisable: true,
  searchBackgroundColor: '#bba3d0',
  security: false,
  logout: true,
  troubleshootLink: 'https://support.kitaboo.com/',
  isHelpScreen: true,
  vimeoPath: 'player.vimeo.com/video/',
  isSplitview: false,
  isReflowRightview: false,
  isQuerypath: false,
  cdn: true,
  isMarkup: false,
  setMarkupPosition : true,
  hideCookieMessageLabelName: false,
  hideResetButton: false,
  openMarkupInSameWindow: false,
  showResourecesForCurrentChapter: false,
  videoWithOutModalView: false,
  encryption: false,
  highlightstyleBackgroundColor: '#94CDFF',
  highlightstyleColor: '#000000',
  isContextualNotePositionFixed : true,
  waterMarkText: '',
  showWaterMarkText: false,
  cdnCallBackTime: 30, // Number should be in minutes
  deepLink: false,
  isJSONBasedPackage: false,
  language: 'en',
  showBorder: true,
  showDownloadReport: false,
  isUrlEncrypted: false,
  audiosyncreflow: true,
  isTopNavigation: true,
  profilePic:true,
  showProfileEmailID: true,
  aboutUsLogo: 'shell/images/aboutUslogo.png',
  abousUsCenterIcon: 'shell/images/aboutUs.png',
  showAboutUsMiddleLogo:true,
  aboutUsispoweredBy:true,
  showHighlightSettingIcon: false,
  showNoteNotificationIcon: true,
  showColumnRule: false,
  enableCopy: false,
  showBoxShadowPage: false,
  maxZoom: 4,
  minZoom: 0.3,
  isNativePinchZoom: false,
  showGenerateReport: true,
  countWithoutZero: true,
  showVirtualPageCount: false,
  paginationLimit:50,
  isFurthestPageNavigation: false,
  audioSyncWithColorSelection:true, //true : will show new audio panel with color selection, false: will show old audio panel without colorselection
  isGroupSearch: true,
  groupSearchToggle:'first',
  showPrintWaterMark: false,
  partnerinstitutewitch: true,
  multipleInstitute: true,
  googleAnalytics:{
    apiKey: "AIzaSyACPwYYy7HpVizRHPncferB_Ek2Js30VBY",
    authDomain: "kitaboo-ebook-reader-fd2b9.firebaseapp.com",
    databaseURL: "https://kitaboo-ebook-reader-fd2b9.firebaseio.com",
    projectId: "kitaboo-ebook-reader-fd2b9",
    storageBucket: "kitaboo-ebook-reader-fd2b9.appspot.com",
    messagingSenderId: "898443957132",
    appId: "1:898443957132:web:a5b06864569d5244a3fca9",
    measurementId: "G-H75ERVB8TD"
  },
  analytics:{
    saveAnalyticsOnPagination : true, //Set True for Saving Analytics on Pagination
    saveAnalyticsOnInterval: true, //Set True for Saving Analytics on Automatic Interval
    analyticsIntervalTimeOut : 60 // Set Time in Seconds for Saving Analytics Data on Interval
  },
  multiLanguage: {
    'English': ['en', 'en_US'],
    'Spanish (Español)': ['es', 'spn_SPANISH'],
    'Norwegian (Norsk)': ['no', 'nor_norwain'],
    'عربى': ['ar', 'ar_ARABIC']
  },
  // Resources that are not to be displayed in the resources tab of TOC
  'resourcesNotToDisplay': ["web links", "toc", "glossary", "activityinjection", "answer_on_off", "audiosync", "audio_icon", "audio_icon_sp", "audio_non_sync", "brightcove", "comments", "copyright", "documents", "drag", "drop", "external_audio", "external_documents", "external_htmlwrap", "external_image", "external_imagezoom", "external_video", "glossary_pearson", "imagezoom", "image_enlarge", "instructor", "jumptobook", "kaltura_video", "kitaboowidget", "mailto", "mpo", "multilingglossary", "notebook", "pagestatus", "readingsequence", "slideshow", "srt", "standalone_instruction", "survey", "teacher_wrap", "tocpage", "vimeo_video", "vocabulary", "youtube_video","htmlwrap","dropdown"],

  'UserType': {
    Generic: 1,
    Normal: 0,
  },
  // Word Color(Color Code For Menu) : Sentence Colors (Color Code for Sentence Background)
  'audioSyncColorCodes': {
     '#D17D00': '#E8BD7F', 
     '#FC5454': '#FDA9A9',
     '#C061FF': '#DFAFFF',
     '#6F9C21': '#B6CD8F',
     '#009CC7': '#7FCDE3',
     'default': '#D17D00'
  },

  'singlePage': {
    0: true,
    1: false
  },

  'Mode': {
    dayMode: 1,
    sepiaMode: 2,
    nightMode: 3,
  },

  'scrollingMode': {
    0: false,
    1: true
  },

  'MarkupIcon': {
    audio: "icon-Audio",
    documents: "documents",
    weblinks: "web links",
    video: "video",
    image: "image",
    slideshow: "slideshow",
    htmlwrap: "htmlwrap",
    activityInjection: "activityInjection",
    survey: "survey",
  },

  'Generic': {
    backToBookshelf: false,
    profile: false,
    highlight: false,
    bookmark: false,
    note: false,
    stickyNote: false,
    pen: false,
    mydata: false,
    serviceEnable: false,
    chapterName: false,
    fullScreen: true,
    contents: true,
    resourece: true,
    fixedBookSetting: false,
    isTOC: true
  },

  'Normal': {
    backToBookshelf: true,
    profile: true,
    highlight: true,
    bookmark: true,
    note: true,
    stickyNote: true,
    pen: true,
    mydata: true,
    serviceEnable: true,
    chapterName: true,
    fullScreen: true,
    contents: true,
    resourece: true,
    fixedBookSetting: false,
    printFeature: true,
    isTOC: true
  },

  'TeacherPenColor': {
    Red: '#e60000',
    Green: '#25850a',
  },

  'FontStyle': {
    Default: 'Default',
    OpenSans: 'OpenSans',
    Georgia: 'Georgia',
    NotoSerif: 'NotoSerif'
  },
  'privacyPolicy': 'https://kitaboo.com/privacy-policy/',
  'termsCondition': 'https://kitaboo.com/terms-and-conditions/',
  'cookiePolicy': 'https://kitaboo.com/privacy-policy/',
  features: {
    textAlign: true,
    lineSpacing: true,
    fontSetting: true,
    margin: true,
    mode: true,
    scrollingMode: true,
    isAboutUs: true,
    isdividerAboutus: true,
    isdividerPrivacyPolicy: true,
    isPrivacyPolicy: true,
    isProfileView: true,
    isTermsCondition: true,
    multiLanguage: true,
    isLogo: true,
    isTakeHelp: true
  },

  align: {
    left: true,
    right: true,
    justify: true,
    center: true
  },

  lineSpacing: {
    narrow: true,
    normal: true,
    wide: true,
  },

  mode: {
    night: true,
    day: true,
    sepia: true,
  },

  margin: {
    narrow: true,
    normal: true,
    wide: true,
  },

  'readerFiles': {
    main: 'shell/views/main.html',
    toc: 'shell/js/features/toc/tocview.html',
    // search: "shell/js/features/search/searchview.html",
    //search: "shell/js/features/search/searchviewElastic.html",
    search: "shell/js/features/search/groupsearchview.html",
    mydata: 'shell/js/features/mydata/mydataview.html',
    pen: 'shell/js/features/pen/penview.html',
    contextualNote: 'shell/js/features/contextual-note/contextnote.html',
    stickyNote: 'shell/js/features/note/noteview.html',
    fontSetting: 'shell/js/features/fontSetting/fontSetting.html',
    leftNavigation: "shell/js/features/navigation/leftnavigationview.html",
    rightNavigation: "shell/js/features/navigation/rightnavigationview.html",
    settings: "shell/js/features/settings/settings.html",
    mobileHTML: "shell/views/mobile.html",
    pageNavigationSlider: "shell/js/features/pageNavigationSlider/pageNavigationSlider.html",
    journalToc: 'shell/js/features/journal-toc/journal-toc.html',
    journalIllustration: 'shell/js/features/journal_illustration/journal_illustration.html',
    instructionmarkup: 'shell/js/features/markup/instructionmarkup.html',
    htmlWrap: 'shell/js/features/markup/htmlWrap.html',
    cookiesMessage: 'shell/js/features/cookiesMessage/cookiesMessage.html',
    bottomSheet: 'shell/js/features/bottomSheet/bottomSheet.html',
    highlightNoteFilter: 'shell/js/features/highlightNoteFilter/highlightNoteFilter.html',
    equationEditor: "shell/js/features/equationEditor/equationEditor.html",
    audioView: "shell/js/features/markup/audioview.html",
    teacherReview: "shell/js/features/teacherReview/teacherReview.html",
    teacherFeedback: "shell/js/features/teacherFeedback/teacherFeedback.html",
    readAloud: "shell/js/features/readAloud/readAloud.html",
    glossary: "shell/js/features/markup/glossaryView.html",
    youtube_vimeo: "shell/js/features/markup/youtube_vimeo.html",
    videoView: "shell/js/features/markup/videoView.html",
    imageMarkup: "shell/js/features/markup/imageMarkup.html",
    imageSlideShow: "shell/js/features/markup/imageSlideShow.html",
    tableView: "shell/js/features/tablePopUp.html",
    helpScreen: 'shell/js/features/helpScreen/helpScreen.html',
    helpScreenMobile: 'shell/js/features/helpScreenMobile/helpScreenMobile.html',
    videoWithOutModalView: "shell/js/features/markup/aao/videoView.html",
    quizWrap: 'shell/js/features/markup/aao/htmlWrap.html',
    deepLink: 'shell/js/features/deepLink/deepLinkPopup.html',
    audiosyncView: 'shell/js/features/audiosync-Reflow/audiosync-reflow.html',
    profile: 'shell/js/features/profileView/profileView.html',
    aboutUs: 'shell/js/features/aboutUs/aboutUs.html',
    teacherReviewPopup: "shell/js/features/teacherReview/teacherReviewPopup.html",
    printPdf: "shell/js/features/printPdf/printPdf.html",
    manageDeviceStatus: 'shell/js/features/manageDeviceStatus/managedeviceStatusView.html',
    sessionLimit: 'shell/js/features/sessionLimit/sessionLimitView.html',
    classPopup: "shell/js/features/classPopup/classPopup.html",
    teacherReviewNew: "shell/js/features/teacherReviewNew/teacherReviewNew.html",
    partnerDetails: "shell/js/features/partnerDetails/partnerDetailsView.html"
  },
  
  'cssFiles':{
    sdk_css:'sdk/css/style.css',
    math_css:'/equationEditor/vendors/mathquill/mathquill.css',
    print_css : 'sdk/css/print.css',
    markup_custom_css : 'sdk/css/markupcss/markup_custom.css',
  //for OUP
  //  learner_css: 'sdk/css/markupcss/oup.css',
  //  teacher_css: 'sdk/css/markupcss/oup_teacher.css',
  //for gylndendal
  // sdk_css:'sdk/css/style_gyldendal.css',
  // markup_css:'sdk/css/markupcss/gyldendal-markup.css'
  },
  search: {
    isLiveSearch: false,
    paginationLimit: 50,
    minSearchLength: 1
  },
  socialDRM: {
    backgroundAlpha: 0.5,
    foregroundAlpha: 1,
    level: "H",
    size: 50,
    enable: false
  },
  enableBookLevelFIB: true,
  /*defaultTheme: {
    lineSpacingNormal: '1.6',
    dayMode: 'day-mode',
    fontStyle: 'OpenSans',
    fontSize: {value: 16, display: 'large'},
    colors: {
      color: '#000000',
      className: 'nightMode'
    }
  },*/
  userWatermark: false,
  isCDNMicroServiceURL: false,
  enableMultiSession: true,
  sessionCount: 4,
  manageDeviceStatusImage: './shell/images/Mange_Device_Graphic.svg',
  sessionLimitImage: './shell/images/session_limit.png',
  multipleInstituteIcon: './shell/images/multiple_institute.png',
  enableOldTeacherReview: false,
  browserPrint: true, //to disable browser print functionality, "Ctrl + P"
  maxPagesCacheLimitFixed: 10,
  maxPagesCacheLimitReflow: 6,
  printmyData: true,
  showTGIcon:true,
  tgPath:true,
  /* for build */
  // 'backToBookShelf': '../#!/bookshelf',
  // 'loginUrl': '../index.html',
  // 'TG':'/testgenerator/index.html',
  // 'externalModulesPath': '/reader/externalModules',
  // 'scormURL':'shell/scorm/index.html'

  /* for local */
   'loginUrl': 'http://localhost/Kitaboo_Bookshelf_5.0/app/#!/',
   'scormURL':'http://localhost/Kitaboo_5.0_Reader/app/shell/js/features/scorm/index.html'
};