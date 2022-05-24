const {Model,DataTypes,Sequelize} = require('sequelize');
const {REPARTIDOR_TABLE} = require('./repartidor.model')
const {DIRECCION_TABLE} = require('./direccion.model')




const REPSECTOR_TABLE='rep_sectores';

const EsquemaTb_repsector = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  repartidorId: {
    field:  'id_repartidor',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: REPARTIDOR_TABLE,
      key: 'id'
    }
  },
  direccionId:{
    field: 'id_direccion',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: DIRECCION_TABLE,
      key: 'id'
    }
  }


}

class Repsector extends Model{
  static associate(models){

  }

  static config(sequelize){
    return {
      sequelize,
    tableName: REPSECTOR_TABLE,
      modelName: 'Repsector'

    }
  }
}


module.exports = {Repsector,EsquemaTb_repsector,REPSECTOR_TABLE};
