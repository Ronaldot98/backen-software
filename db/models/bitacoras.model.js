const {Model,DataTypes,Sequelize} = require('sequelize');
const {ESTADO_TABLE} = require('./estado.model')
const {ENVIO_TABLE} = require('./envio.model')



const BITACORA_TABLE='bitacora';

const EsquemaTb_bitacora={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  fecha_actualizacion:{
    allowNull: false,
    type: DataTypes.STRING,

  },
  observaciones:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  estadoId: {
    field:  'id_estado',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: ESTADO_TABLE,
      key: 'id'
    }
  },
  envioId: {
    field:  'id_envio',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: ENVIO_TABLE,
      key: 'id'
    }
  }



}

class Bitacora extends Model{
  static associate(models){



  }

  static config(sequelize){
    return {
      sequelize,
    tableName: BITACORA_TABLE,
      modelName: 'Bitacora'

    }
  }
}


module.exports = {Bitacora,BITACORA_TABLE,EsquemaTb_bitacora};
