var SERVICEURL = {

  /* for qc */
  // 'contextURL': 'https://qc.kitaboo.com/DistributionServices',
  // 'authURL': 'https://qcread.kitaboo.com/ContentServer/mvc/authenticatesp?packageId=',
  // 'readerServiceUrl': 'https://qc.kitaboo.com',
  // 'cdnURL': 'https://qc.kitaboo.com'

  /* for staging */
  'contextURL': 'https://qacloud.kitaboo.com/DistributionServices',
  'authURL': 'https://qareadinfobase.kitaboo.com/ContentServer/mvc/authenticatesp?packageId=',
  'readerServiceUrl': 'https://qacloud.kitaboo.com',
  'microReaderServiceUrl': 'https://stagacademicservices.kitaboo.com/DistributionServices/services/api/reader/distribution/123/pc/',  // For fetch book class info Acadamic approach
  'cdnURL': 'https://qareadinfobase.kitaboo.com',
  'immersiveurl': 'https://zanichelliimmersive.azurewebsites.net/GetTokenAndSubdomain',
  'microServiceURL': 'https://stagmicro.kitaboo.com/v1/backend-micro-bookshelf-read',
  'highlightSpeech': '6fa8aba2710f72246c245142140e29e6',
  'hostUrltts':'//service.webappella.com',
  'cdnMicroServiceURL':'https://stag-dev.kitaboo.com/v1/sprint/micro-lti',
  'AzureTranslator':'https://api.cognitive.microsofttranslator.com',
  'partnerdetails': 'https://stag-dev.kitaboo.com/v1/sprint/partner/auth/partner/details',
  'switchinstitute': 'https://stag-dev.kitaboo.com/v1/sprint/userManagment/auth/user/partner/switch',
  
  'gc_shareUrl': 'https://testmy.zanichelli.it/share/kitaboo/', // to share the resources on google classroom on staging

  /** Staging Gibbs test generator backend point */
  'tgMicroServiceURL': 'https://stagmicro.kitaboo.com/v1/backend-testgenerator',
  

  /* for Production */
  // 'contextURL': 'https://cloud-us.kitaboo.com/DistributionServices',
  // 'authURL': 'https://worldbook.kitaboo.com/ContentServer/mvc/authenticatesp?packageId=',
  // 'readerServiceUrl': 'https://cloud-us.kitaboo.com',
  // 'cdnURL': 'https://worldbook.kitaboo.com',
  // 'immersiveurl': 'https://immersive-reader-zanichelli.azurewebsites.net/GetTokenAndSubdomain',
  // 'microServiceURL':'https://microservices.kitaboo.com/v1/backend-micro-bookshelf-read'
  //'cdnMicroServiceURL':'https://microservices.kitaboo.com/v2/micro-lti'
  
  /* Infobase production pointing */
  // 'loginUrl': 'https://read.kitaboo.com/reader/Infobase/#!',
  // 'contextURL': 'https://cloud.kitaboo.com/DistributionServices',
  // 'authURL': 'https://reader.infobase.com/ContentServer/mvc/authenticatesp?packageId=',
  // 'readerServiceUrl': 'https://cloud.kitaboo.com'


  /** Production Gibbs test generator backend point */
  // 'tgMicroServiceURL': 'https://stagmicro.kitaboo.com/v1/backend-testgenerator',
};