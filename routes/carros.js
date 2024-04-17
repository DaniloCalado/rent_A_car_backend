const express = require('express');
const router = express.Router();
const carroController = require('../controllers/carroController');

router.post('/', carroController.createCarro);
router.get('/', carroController.getCarros);
router.get('/:id', carroController.getCarroById);
router.delete('/:id', carroController.deleteCarro);
router.patch('/:id', carroController.updateCarro);

module.exports = router;
