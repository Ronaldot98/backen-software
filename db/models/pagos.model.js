const {Model,DataTypes,Sequelize} = require('sequelize');
const {ENVIO_TABLE} = require('./envio.model')



const PAGOS_TABLE='pagos';

const EsquemaTb_pagos={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  tipo:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  enviId: {
    field:  'id_envio',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: ENVIO_TABLE,
      key: 'id'
    }
  }

}

class Pagos extends Model{
  static associate(models){

  }

  static config(sequelize){
    return {
      sequelize,
    tableName: PAGOS_TABLE,
      modelName: 'Pagos'
    }
  }
}


module.exports = {Pagos,EsquemaTb_pagos,PAGOS_TABLE};
