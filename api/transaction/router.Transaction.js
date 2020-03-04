const {
    controllerCekBarang,
    controllerPesanBarang
} = require('./controller.Transaction');
const {checkToken} = require("../../.Auth/token.validation")
const router = require('express').Router();

router.get('/', checkToken, controllerCekBarang)
router.post('/', checkToken, controllerPesanBarang)

module.exports = router