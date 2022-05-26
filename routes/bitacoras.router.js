const express = require('express');
const BitacoraService = require('./../service/bitacoras.service');


const router = express.Router();
const service = new BitacoraService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const bitacora = await service.find();
    res.json(bitacora);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const bitacora = await service.findOne(id);
      res.json(bitacora);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newbitacora = await service.create(body);
      res.status(201).json(newbitacora);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const bitacora = await service.update(id, body);
      res.json(bitacora);
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
