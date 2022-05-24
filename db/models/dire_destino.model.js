const {Model,DataTypes,Sequelize} = require('sequelize');
const {DIRECCION_TABLE} = require('./direccion.model')


const DESTINO_TABLE='dire_destino';

const EsquemaTb_destinos={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  direId:{
    field: 'id_direccion',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: DIRECCION_TABLE,
      key: 'id'
    }
  }
}

class Destino extends Model{
  static associate(models){
    this.hasMany(models.Destinario,{
      as: 'destinario',
      foreignKey: 'destinarioId'
    })
  }

  static config(sequelize){
    return {
      sequelize,
    tableName: DESTINO_TABLE,
      modelName: 'Destino'

    }
  }
}


module.exports = {Destino,EsquemaTb_destinos,DESTINO_TABLE};
