var express = require('express'),
    router = express.Router(),
    render = require('./render'),
    config = require('./config'),
    url = require('url'),
    utils = require('./utils')({}),
    vow = require('vow'),

    cache = require('./cache')();

router.all('*', function (req, res) {
    render(req, res);
});

module.exports = router;