'use strict';

const server = require('./server');
const config = require('./config/prod.json');

const options = {
  routes: { cors: true },
  port: config.port
};

server(options).start(() => {
  console.log(`Production Server running at port ${config.port}`);
});
