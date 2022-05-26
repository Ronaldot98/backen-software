const express = require('express');
const PaqueteService= require('./../service/paquete.service');


const router = express.Router();
const service = new PaqueteService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const paquete = await service.find();
    res.json(paquete);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const paquete = await service.findOne(id);
      res.json(paquete);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPaquete = await service.create(body);
      res.status(201).json(newPaquete);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const paquete = await service.update(id, body);
      res.json(paquete);
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
