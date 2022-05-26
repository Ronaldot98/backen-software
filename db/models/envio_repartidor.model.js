const {Model,DataTypes,Sequelize} = require('sequelize');
const {ENVIO_TABLE} = require('./envio.model')
const {REPARTIDOR_TABLE} = require('./repartidor.model')

const ENVIOREPARTIDOR_TABLE='enviorepartidor';

const EsquemaTb_enviorepartidores={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  enviosId: {
    field:  'id_envio',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: ENVIO_TABLE,
      key: 'id'
    }
  },
  repartId: {
    field:  'id_repartidor',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: REPARTIDOR_TABLE,
      key: 'id'
    }
  }

}

class Enviorepartidor extends Model{
  static associate(models){



  }

  static config(sequelize){
    return {
      sequelize,
    tableName: ENVIOREPARTIDOR_TABLE,
      modelName: 'Enviorepartidor'

    }
  }
}


module.exports = {Enviorepartidor,EsquemaTb_enviorepartidores,ENVIOREPARTIDOR_TABLE};
