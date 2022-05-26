const express = require('express');
const DireccionService = require('./../service/direccion.service');


const router = express.Router();
const service = new DireccionService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const direccion = await service.find();
    res.json(direccion);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const direccion = await service.findOne(id);
      res.json(direccion);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newdireccion = await service.create(body);
      res.status(201).json(newdireccion);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const direccion = await service.update(id, body);
      res.json(direccion);
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
