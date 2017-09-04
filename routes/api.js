var express = require('express');
var router = express.Router();

var add = require('../api/adding');
router.post('/add', add.addn);

var sub = require('../api/subtract');
router.post('/sub', sub.subn);

var mul = require('../api/multi');
router.post('/mul', mul.multipn);

var div = require('../api/div');
router.post('/div', div.divn);

module.exports = router;
