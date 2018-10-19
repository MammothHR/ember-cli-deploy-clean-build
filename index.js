'use strict';

const execSync = require('child_process').execSync;
const isWin = process.platform === "win32";
const BasePlugin = require('ember-cli-deploy-plugin');

const validateGitStatus = function() {
  const currentGitStatus = execSync('git status --porcelain').toString().trim();

  if (currentGitStatus) {
    this.log(currentGitStatus, { color: 'red' });

    throw new Error('Cannot deploy when there are local unstaged changes');
  } else {
    return true;
  }
}

const validateSymlinks = function() {
  const currentLinks = execSync('find ./node_modules -type l -maxdepth 1').toString().trim();

  if (currentLinks) {
    this.log(`Currently linked packages: ${ currentLinks }`, { color: 'red' });
    this.log(`Cannot deploy when there are linked packages`, { color: 'red' });

    throw new Error('Cannot deploy when there are linked packages');
  } else {
    return true;
  }
}

module.exports = {
  name: require('./package').name,

  createDeployPlugin(options) {
    const Plugin = BasePlugin.extend({
      name: options.name,

      // Perform at first stage of deploy
      willDeploy() {
        if (isWin) {
          this.log('WARNING: ember-cli-deploy-clean-build was included in deploy pipeline, but did not run because Windows is not yet supported', { color: 'orange' });
        }

        if (process.env.SAFETY_ASSURED) {
          return;
        }

        if (validateGitStatus.call(this) && validateSymlinks.call(this)) {
          return Promise.resolve();
        } else {
          return Promise.reject();
        }
      },
    });

    return new Plugin;
  }
};
