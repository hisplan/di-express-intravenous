"use strict";

var Example = function (logger) {
    this.logger = logger;
};

Example.prototype.greet = function (params, callback) {

    this.logger.info('name: %s', params.name);

    callback({
        "message": "Hello, " + params.name
    });
};

Example.$inject = ['logger'];
module.exports = Example;
