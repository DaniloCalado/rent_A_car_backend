const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/', clienteController.createCliente);
router.get('/', clienteController.getClientes);
router.get('/:id', clienteController.getClienteById);
router.delete('/:id', clienteController.deleteCliente);
router.patch('/:id', clienteController.updateCliente);


module.exports = router;
