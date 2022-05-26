const express = require('express');
const Dire_origenService = require('./../service/direccion_origen.service');


const router = express.Router();
const service = new Dire_origenService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const dire_origen = await service.find();
    res.json(dire_origen);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const dire_origen = await service.findOne(id);
      res.json(dire_origen);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newdire_origen = await service.create(body);
      res.status(201).json(newdire_origen);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const dire_origen = await service.update(id, body);
      res.json(dire_origen);
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
