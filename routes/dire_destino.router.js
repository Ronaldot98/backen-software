const express = require('express');
const Dire_destinoService = require('./../service/dire_destino.service');


const router = express.Router();
const service = new Dire_destinoService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const dire_destino = await service.find();
    res.json(dire_destino);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const dire_destino = await service.findOne(id);
      res.json(dire_destino);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newdire_destino = await service.create(body);
      res.status(201).json(newdire_destino);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const dire_destino = await service.update(id, body);
      res.json(dire_destino);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
)

module.exports = router;
