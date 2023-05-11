const express = require('express');
const router = express.Router();

const authController = require('./userAuth');
const customerController = require('./customer');
const ownerController = require('./owner')
//router.use(express.json());
router.use('/user', authController);
router.use('/customer',customerController);
router.use('/owner',ownerController);
module.exports = [
    router
];