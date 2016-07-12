'use strict';

const server = require('./server');
const config = require('./config/dev.json');

const serverOptions = {
  routes: { cors: true },
  port: config.port
};

module.exports = (options) => {
  return server(serverOptions);
};
