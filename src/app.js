"use strict";

var intravenous = require('intravenous');

var path = require('path'),
    log4js = require('log4js'),
    nconf = require('nconf');

var server = require('./server'),
    router = require('./router'),
    exampleController = require('./controller/example');

var appRootDir = path.join(__dirname, '..');

// reload config every 5 minute.
log4js.configure(path.join(appRootDir, '/conf/log4j-config.json'), {
    reloadSecs: 300,
    cwd: 'logs'
});

// load app config.
nconf.file({
  file: 'conf/app-config.json'
});

var appLogger = log4js.getLogger('app');
var httpLogger = log4js.getLogger('http');

var container = intravenous.create();

container.register('server', server);
container.register('router', router);
container.register('logger', appLogger);
container.register('config', nconf);
container.register('controller.example', exampleController);

var myServer = container.get('server');

var expressApp = myServer.start(log4js, httpLogger, path.join(appRootDir, '/wwwroot'));
