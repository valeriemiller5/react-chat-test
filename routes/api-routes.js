const db = require("../models");

module.exports = function(app) {

    app.get("/api/chats", function(req, res) {
        db.Chat.find({})
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json(err);
            })
    })

    app.post("/api/chats", function(req, res) {
        db.Chat.create(req.body)
            .then(function(data) {
                console.log("Hello?  Did I make it this far?");
                res.json(data);
            })
            .catch(function(err) {
                res.json(err)
            })
    })

    app.get("/api/users", function(req, res) {
        db.User.find({})
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json(err);
            })
    })

    app.get("/api/users/:id", function(req, res) {
        db.User.findOne({_id: req.params.id})
            .then(function(data) {
                res.json(data);
            })
            .catch(function(err) {
                res.json(err);
            })
    })

    app.post("/api/users", function(req, res) {
        db.User.create(req.body)
            .then(function(data) {
                console.log("Hello?  Did I make it this far?");
                res.json(data);
            })
            .catch(function(err) {
                res.json(err)
            })
    })

};