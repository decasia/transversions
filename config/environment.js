/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'transverse',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    apiNamespace: 'api',
    authTokenRoute: process.env['AUTH_TOKEN_ROUTE'],
    authChangeGroupRoute: process.env['AUTH_CHANGE_GROUP_ROUTE'],
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiNamespace = process.env['API_PATH'];
    ENV.baseURL = process.env['BASE_PATH'];
  }

  return ENV;
};
