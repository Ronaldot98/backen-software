const express = require('express');
const RemitenteService= require('./../service/remitentes.service');


const router = express.Router();
const service = new RemitenteService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const remitente = await service.find();
    res.json(remitente);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const remitente = await service.findOne(id);
      res.json(remitente);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRemitente = await service.create(body);
      res.status(201).json(newRemitente);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const remitente = await service.update(id, body);
      res.json(remitente);
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
