const express = require('express');
const PagosService= require('./../service/pagos.service');


const router = express.Router();
const service = new PagosService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const pagos = await service.find();
    res.json(pagos);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const pagos = await service.findOne(id);
      res.json(pagos);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPagos = await service.create(body);
      res.status(201).json(newPagos);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const pagos = await service.update(id, body);
      res.json(pagos);
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
