const express = require('express');
const RepartidorService= require('./../service/repartidor.service');


const router = express.Router();
const service = new RepartidorService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const repartidor= await service.find();
    res.json(repartidor);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const repartidor = await service.findOne(id);
      res.json(repartidor);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRepartidor = await service.create(body);
      res.status(201).json(newRepartidor);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const repartidor = await service.update(id, body);
      res.json(repartidor);
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
