const express = require('express');
const router = express.Router();
const controllers = require('../controllers');
//app.use(express.json());
router.use('/',...controllers);

module.exports = router;