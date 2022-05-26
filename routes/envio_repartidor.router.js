const express = require('express');
const Envio_repartidorService = require('./../service/envio_repartidor.service');


const router = express.Router();
const service = new Envio_repartidorService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const envio_repartidor = await service.find();
    res.json(envio_repartidor);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const envio_repartidor = await service.findOne(id);
      res.json(envio_repartidor);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newEnvio_repartidor = await service.create(body);
      res.status(201).json(newEnvio_repartidor);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const envio_repartidor = await service.update(id, body);
      res.json(envio_repartidor);
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
