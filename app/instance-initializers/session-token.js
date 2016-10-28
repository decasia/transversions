export function initialize(appInstance) {
  let jwt = window.sessionStorage.getItem('jwt');
  if (jwt) {
    let auth = appInstance.lookup('service:auth');
    auth.setHeader(jwt);
  }
}

export default {
  name: 'session-token',
  initialize: initialize
};
