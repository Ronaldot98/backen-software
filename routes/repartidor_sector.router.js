const express = require('express');
const Repartidor_sectorService= require('./../service/repartidor_sector.service');


const router = express.Router();
const service = new Repartidor_sectorService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const repartidor_sector = await service.find();
    res.json(repartidor_sector);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const repartidor_sector = await service.findOne(id);
      res.json(repartidor_sector);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRepartidor_sector = await service.create(body);
      res.status(201).json(newRepartidor_sector);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const repartidor_sector = await service.update(id, body);
      res.json(repartidor_sector);
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
