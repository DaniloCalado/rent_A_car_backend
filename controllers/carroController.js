const Carro = require('../models/carro');

const carroController = {
  async createCarro(req, res) {
    try {
      const carro = await Carro.create(req.body);
      res.status(201).json(carro);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  async getCarros(req, res) {
    try {
      const carros = await Carro.findAll();
      res.json(carros);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async getCarroById(req, res) {
    try {
      const carro = await Carro.findByPk(req.params.id);
      if (!carro) {
        return res.status(404).json({ message: 'Carro não encontrado' });
      }
      res.json(carro);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async updateCarro(req, res) {
    try {
      const carro = await Carro.findByPk(req.params.id);
      if (!carro) {
        return res.status(404).json({ message: 'Carro não encontrado' });
      }
      await carro.update(req.body);
      res.json({ message: 'Carro atualizado com sucesso' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  async deleteCarro(req, res) {
    try {
      const carro = await Carro.findByPk(req.params.id);
      if (!carro) {
        return res.status(404).json({ message: 'Carro não encontrado' });
      }
      await carro.destroy();
      res.json({ message: 'Carro excluído com sucesso' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = carroController;
