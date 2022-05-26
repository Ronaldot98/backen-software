const express = require('express');
const EstadoService= require('./../service/estado.service');


const router = express.Router();
const service = new EstadoService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const estado = await service.find();
    res.json(estado);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const estado = await service.findOne(id);
      res.json(estado);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newEstado = await service.create(body);
      res.status(201).json(newEstado);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const estado = await service.update(id, body);
      res.json(estado);
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
