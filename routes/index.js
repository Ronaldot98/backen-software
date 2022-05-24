//archivo para configurar las rutas
const express = require('express');

const ClientRouter= require('./clientes.router');

function routerApi(app){

const router= express.Router();
app.use('/metasports.com',router);
router.use('/cliente',ClientRouter);

}


module.exports = routerApi;
