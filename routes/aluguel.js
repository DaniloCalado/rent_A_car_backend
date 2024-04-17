const express = require('express');
const router = express.Router();
const aluguelController = require('../controllers/aluguelController');

router.post('/', aluguelController.createAluguel);

module.exports = router;
