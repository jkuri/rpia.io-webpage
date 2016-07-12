'use strict';

exports.index = {
  handler: (request, reply) => {
    return reply.view('index', {
      pageTitle: `rpia.io - A modern CSS framework for building web interfaces`,
      dir: 'index'
    });
  }
};

exports.docs = {
  handler: (request, reply) => {
    const uri = request.url.path.substr(1);
    const uriParts = uri.split('/');
    return reply.view(uri, { 
      uri: uri,
      dir: uriParts[1],
      file: uriParts[2],
      pageTitle: `rpia.io - A modern CSS framework for building web interfaces`
    });
  }
};
