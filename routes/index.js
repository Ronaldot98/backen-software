//archivo para configurar las rutas
const express = require('express');

const ClientRouter= require('./clientes.router');
const BitacoraRouter= require('./bitacoras.router');
const DestinarioRouter= require('./destinario.router');
const Dire_destinoRouter= require('./dire_destino.router');
const DireccionRouter= require('./direccion.router');
const Dire_origenRouter= require('./direccion_origen.router');
const Envio_repartidordestinoRouter= require('./envio_repartidor.router');
const EnvioRouter= require('./envio.router');
const EstadoRouter= require('./estado.router');
const PagosRouter= require('./pagos.router');
const PaqueteRouter= require('./paquete.router');
const RemitenteRouter= require('./remitentes.router');
const Repartidor_sectorRouter= require('./repartidor_sector.router');
const RepartidorRouter= require('./repartidor.router');



function routerApi(app){

const router= express.Router();
app.use('/salamaExpress.com',router);
router.use('/cliente',ClientRouter);
router.use('/bitacora',BitacoraRouter);
router.use('/destinario',DestinarioRouter);
router.use('/dire_destino',Dire_destinoRouter);
router.use('/direccion',DireccionRouter);
router.use('/envio_repartidor',Envio_repartidordestinoRouter);
router.use('/envio',EnvioRouter);
router.use('/estdo',EstadoRouter);
router.use('/pagos',PagosRouter);
router.use('/remitente',RemitenteRouter);
router.use('/repartidor_sector',Repartidor_sectorRouter);
router.use('/repartidor',RepartidorRouter);
router.use('/dire_origen',Dire_origenRouter);
router.use('/paquete',PaqueteRouter);


}


module.exports = routerApi;
