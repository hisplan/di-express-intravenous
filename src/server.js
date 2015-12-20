"use strict";

var express = require('express'),
    compression = require('compression');

var Server = function (router, config, logger) {
    this.router = router;
    this.config = config;
    this.appLogger = logger;
};

Server.prototype.start = function (logProvider, httpLogger, staticRootDir) {

    var app = express();

    app.use('/', express.static(staticRootDir));

    // set up gzip compression
    app.use(compression());

    // express server to log
    if (logProvider && httpLogger) {
        app.use(logProvider.connectLogger(httpLogger, {
            level: 'auto'
        }));
    }

    this.router.setup(app);

    var port = this.config.get('http:port');
    
    this.server = app.listen(port);
    
    this.appLogger.info('Listening on port %d', port);

    return app;
};

Server.prototype.stop = function () {
    this.server.close();
};

Server.$inject = ['router', 'config', 'logger'];
module.exports = Server;