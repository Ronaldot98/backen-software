const express = require('express');
const DestinarioService = require('./../service/destinario.service');


const router = express.Router();
const service = new DestinarioService();


//PETICIONES
router.get('/',
 async (req, res, next) => {
  try {
    const destinario = await service.find();
    res.json(destinario);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const destinario = await service.findOne(id);
      res.json(destinario);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newDestinario = await service.create(body);
      res.status(201).json(newDestinario);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id',

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const destinario = await service.update(id, body);
      res.json(destinario);
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
