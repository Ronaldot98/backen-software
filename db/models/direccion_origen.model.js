const {Model,DataTypes,Sequelize} = require('sequelize');
const {DIRECCION_TABLE} = require('./direccion.model')


const DIREORIGEN_TABLE='dire_origen';

const EsquemaTb_direorigen={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  direcId:{
    field: 'id_direccion',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: DIRECCION_TABLE,
      key: 'id'
    }
  }
}

class Direorigen extends Model{
  static associate(models){

    this.hasMany(models.Remitente,{
      as: 'remitente',
     foreignKey: 'direorigenId'
    });

  }

  static config(sequelize){
    return {
      sequelize,
    tableName: DIREORIGEN_TABLE,
      modelName: 'Direorigen'

    }
  }
}


module.exports = {Direorigen,EsquemaTb_direorigen,DIREORIGEN_TABLE};
