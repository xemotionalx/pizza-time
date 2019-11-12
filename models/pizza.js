var orm = require("../config/orm.js");

var pizza = {
    all: function(cb) {
        orm.all("pizzas", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("pizzas", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("pizzas", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("pizzas", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = pizza;