"use strict";

// dependency injection
var intravenous = require('intravenous');

// unit-test
var request = require('supertest'),
    sinon = require('sinon'),
    chai = require('chai'),
    should = chai.should();

var path = require('path'),
    log4js = require('log4js');

// remove console log
log4js.configure({});

var server = require('../src/server'),
    router = require('../src/router'),
    exampleController = require('../src/controller/example');

var appRootDir = path.join(__dirname, '..');

var container = intravenous.create();

container.register('server', server);
container.register('router', router);
container.register('logger', log4js.getLogger());
container.register('controller.example', exampleController);

var testServer = container.get('server');

describe('server', function () {

    var app;

    beforeEach(function () {
        app = testServer.start(null, null, path.join(appRootDir, '/wwwroot'));
    });

    afterEach(function (done) {
        testServer.stop();
        done();
    });

    describe('GET /', function () {

        it('should return 200 OK status code', function (done) {
            request(app)
                .get('/')
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                });
        });

    });

    describe('GET /test', function () {

        it('should return 404 NOT FOUND status code', function (done) {
            request(app)
                .get('/test')
                .expect(404)
                .end(function(err,res) {
                   if (err) return done(err);
                   done(); 
                });
        });

    });

    describe('GET /test/:name', function () {

        it('should greet the person', function (done) {
            request(app)
                .get('/test/Danny')
                .set('Accept', 'application/json')
                .expect(200, {
                    "message": "Hello, Danny"
                })
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                });
        });

    });

});
