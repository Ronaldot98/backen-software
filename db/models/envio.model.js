const {Model,DataTypes,Sequelize} = require('sequelize');
const {PAQUETE_TABLE} = require('./paquete.model')
const {REMITENTE_TABLE} = require('./remitentes.model')
const {DESTINARIO_TABLE} = require('./destinario.model')



const ENVIO_TABLE='envio';

const EsquemaTb_envio={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  numero_guia:{
    allowNull: false,
    type: DataTypes.STRING,

  },
  hora_fecha:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  total:{
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  paqueteId: {
    field:  'id_paquete',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: PAQUETE_TABLE,
      key: 'id'
    }
  },
  remitenteId: {
    field:  'id_remitente',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: REMITENTE_TABLE,
      key: 'id'
    }
  },
  destinarioId: {
    field:  'id_destinario',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: DESTINARIO_TABLE,
      key: 'id'
    }
  }


}

class Envio extends Model{
  static associate(models){

    this.hasMany(models.Bitacora,{
      as: 'bitacora',
     foreignKey: 'envioId'
    });

  }

  static config(sequelize){
    return {
      sequelize,
    tableName: ENVIO_TABLE,
      modelName: 'Envio'

    }
  }
}


module.exports = {Envio,EsquemaTb_envio,ENVIO_TABLE};
