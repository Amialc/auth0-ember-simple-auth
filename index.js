/* jshint node: true */
'use strict';

module.exports = {
  name: 'auth0-ember-simple-auth',

  included: function(app) {
    app.import('bower_components/auth0-lock/build/auth0-lock.js');
    app.import('bower_components/jsrsasign/jsrsasign-latest-all-min.js');
  }
};
