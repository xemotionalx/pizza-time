var express = require("express");

var router = express.Router();

var pizza = require("../models/pizza.js");

router.get("/", function(req, res) {
    pizza.all(function(data) {
        var hbsObject = {
            pizzas: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/pizzas", function(req, res) {
    pizza.create([
        "flavor", "eaten"
    ], [
        req.body.flavor, req.body.eaten
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/pizzas/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    pizza.update({
        eaten: req.body.eaten
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/pizzas/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    pizza.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;