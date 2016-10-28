/* jshint node: true */

var deployPath = process.env['DEPLOY_PATH'],
    deployUser = process.env['DEPLOY_USER'],
    deployHost = process.env['DEPLOY_HOST'],
    deployKey = process.env['DEPLOY_KEY'],
    sshAgent = process.env['SSH_AGENT'];

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    'revision-data': {
      type: 'git-commit'
    },
    'ssh-index': {
      remoteDir: deployPath,
      username: deployUser,
      host: deployHost,
      // privateKeyFile: deployKey,
      agent: sshAgent,
      allowOverwrite: true
    },
    rsync: {
      dest: deployPath,
      host: `${deployUser}@${deployHost}`, // nb different format from ssh-index plugin
      delete: false,
      args: ['--verbose']
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
