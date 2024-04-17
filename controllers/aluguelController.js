const Cliente = require('../models/cliente');
const Carro = require('../models/carro');
const Aluguel = require('../models/aluguel');

const aluguelController = {
  async createAluguel(req, res) {
    try {
      const { cliente_id, carro_id } = req.body;
      
      const cliente = await Cliente.findByPk(cliente_id);
      if (!cliente) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
      }

      const carro = await Carro.findByPk(carro_id);
      if (!carro) {
        return res.status(404).json({ message: 'Carro não encontrado' });
      }


      const aluguelExistente = await Aluguel.findOne({ where: { carro_id } });
      if (aluguelExistente) {
        return res.status(400).json({ message: 'Este carro já está alugado' });
      }

      const aluguel = await Aluguel.create({ cliente_id, carro_id });
      
      res.status(201).json(aluguel);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};

module.exports = aluguelController;
