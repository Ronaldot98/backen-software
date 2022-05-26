'use strict';
const {EsquemaTb_repartidores,REPARTIDOR_TABLE}= require('./../models/repartidor.model');
const {EsquemaTb_clientes,CLIENTE_TABLE}= require('./../models/cliente.model');
const {EsquemaTb_direcciones,DIRECCION_TABLE}= require('./../models/direccion.model');
const {EsquemaTb_destinos,DESTINO_TABLE}= require('./../models/dire_destino.model');
const {EsquemaTb_destinarios,DESTINARIO_TABLE}= require('./../models/destinario.model');
const {EsquemaTb_estado,ESTADO_TABLE}= require('./../models/estado.model');
const {EsquemaTb_direorigen,DIREORIGEN_TABLE}= require('./../models/direccion_origen.model');
const {EsquemaTb_remitente,REMITENTE_TABLE}= require('./../models/remitentes.model');
const {EsquemaTb_paquetes,PAQUETE_TABLE}= require('./../models/paquete.model');
const {EsquemaTb_envio,ENVIO_TABLE}= require('./../models/envio.model');
const {EsquemaTb_bitacora,BITACORA_TABLE}= require('./../models/bitacoras.model');
const {EsquemaTb_pagos,PAGOS_TABLE}= require('./../models/pagos.model');
const {EsquemaTb_enviorepartidores,ENVIOREPARTIDOR_TABLE}= require('./../models/envio_repartidor.model');
const {EsquemaTb_repsector,REPSECTOR_TABLE}= require('./../models/repartidor_sector.model');

module.exports = {
  async up (queryInterface) {
   //creacion de toda las tablas se envia como parametro el nombre de la tabla y sus atributos para
   await queryInterface.createTable(REPARTIDOR_TABLE,EsquemaTb_repartidores);
   await queryInterface.createTable(CLIENTE_TABLE,EsquemaTb_clientes);
   await queryInterface.createTable(DIRECCION_TABLE,EsquemaTb_direcciones);
   await queryInterface.createTable(DESTINO_TABLE,EsquemaTb_destinos);
   await queryInterface.createTable(DESTINARIO_TABLE,EsquemaTb_destinarios);
   await queryInterface.createTable(ESTADO_TABLE,EsquemaTb_estado);
   await queryInterface.createTable(DIREORIGEN_TABLE,EsquemaTb_direorigen);
   await queryInterface.createTable(REMITENTE_TABLE,EsquemaTb_remitente);
   await queryInterface.createTable(PAQUETE_TABLE,EsquemaTb_paquetes);
   await queryInterface.createTable(ENVIO_TABLE,EsquemaTb_envio);
   await queryInterface.createTable(BITACORA_TABLE,EsquemaTb_bitacora);
   await queryInterface.createTable(PAGOS_TABLE,EsquemaTb_pagos);
   await queryInterface.createTable(ENVIOREPARTIDOR_TABLE,EsquemaTb_enviorepartidores);
   await queryInterface.createTable(REPSECTOR_TABLE,EsquemaTb_repsector);



  },

  async down (queryInterface, Sequelize) {
   //Se utiliza para reenvertir cambios
  }
};
