const express = require('express');
const EnvioServicio= require('./../service/envio.service');


const router = express.Router();
const service = new EnvioServicio();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const envio = await service.find();
    res.json(envio);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const envio = await service.findOne(id);
      res.json(envio);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newEnvio = await service.create(body);
      res.status(201).json(newEnvio);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const envio = await service.update(id, body);
      res.json(envio);
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
