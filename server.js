'use strict';

const Hapi        = require('hapi');
const Inert       = require('inert');
const Vision      = require('vision');
const Config      = require('./config/prod.json');

const initServer = (options) => {
  const server = new Hapi.Server();

  server.connection(options);

  server.register(Inert, (err) => {
    if (err) {
      throw err;
    }
  });

  server.register(Vision, (err) => {
    if (err) {
      throw err;
    }

    server.views({
      engines: { pug: require('pug') },
      path: __dirname + '/templates',
      compileOptions: {
        pretty: true
      }
    });
  });

  server.route(require('./routes/public'));

  return server;
};

module.exports = (options) => {
  return initServer(options);
};
