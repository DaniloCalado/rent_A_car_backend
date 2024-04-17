const Cliente = require('../models/cliente');

const clienteController = {
  async createCliente(req, res) {
    try {
      const cliente = await Cliente.create(req.body);
      res.status(201).json(cliente);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  async getClientes(req, res) {
    try {
      const clientes = await Cliente.findAll();
      res.json(clientes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async getClienteById(req, res) {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
      }
      res.json(cliente);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async updateCliente(req, res) {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
      }
      await cliente.update(req.body);
      res.json({ message: 'Cliente atualizado com sucesso' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async deleteCliente(req, res) {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
      }
      await cliente.destroy();
      res.json({ message: 'Cliente excluído com sucesso' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = clienteController;
