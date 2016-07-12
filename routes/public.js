'use strict';

const Pages   = require('../controllers/pages');
const Assets  = require('../controllers/assets');

module.exports = [
  { method: 'GET', path: '/', config: Pages.index },
  { method: 'GET', path: '/docs/{dir}/{file}', config: Pages.docs },
  { method: 'GET', path: '/assets/styles/{path*}', config: Assets.styles },
  { method: 'GET', path: '/assets/images/{path*}', config: Assets.images },
  { method: 'GET', path: '/assets/fonts/{path*}', config: Assets.fonts },
  { method: 'GET', path: '/assets/scripts/{path*}', config: Assets.scripts },
];
