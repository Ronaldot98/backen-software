//conectar nuestro ORM con el modelo creado
//enviar la conexion a otros modelos
//va a estra toda la conexion de sequelize con nuestro modelo

const { Cliente, EsquemaTb_clientes } = require('./cliente.model');
const { Repartidor, EsquemaTb_repartidores } = require('./repartidor.model');
const { Paquete, EsquemaTb_paquetes } = require('./paquete.model');
const { Direccion, EsquemaTb_direcciones } = require('./direccion.model');
const { Destinario, EsquemaTb_destinarios } = require('./destinario.model');
const { Destino, EsquemaTb_destinos } = require('./dire_destino.model');




//recibe la conexion
function setupModels(sequelize) {
  //ir al modelo y ese modelo tiene que tener un esquema
  Cliente.init(EsquemaTb_clientes, Cliente.config(sequelize));
  Repartidor.init(EsquemaTb_repartidores, Repartidor.config(sequelize));
  Paquete.init(EsquemaTb_paquetes, Paquete.config(sequelize));
  Direccion.init(EsquemaTb_direcciones, Direccion.config(sequelize));
  Destinario.init(EsquemaTb_destinarios, Destinario.config(sequelize));
  Destino.init(EsquemaTb_destinos, Destino.config(sequelize));



  //si los modelos tiene una asociación ejecutar el metodo

  Direccion.associate(sequelize.models);
  Destino.associate(sequelize.models);
}

module.exports = setupModels;
