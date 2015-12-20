"use strict";

var Router = function (exampleController) {
    this.exampleController = exampleController;
};

Router.prototype.setup = function (app) {
    
    var exampleController = this.exampleController;
    
    app.get('/test/:name', function (req, res) {
        exampleController.greet(req.params, function (results) {
            res.json(results);
        });

    });

};

Router.$inject = ['controller.example'];
module.exports = Router;
