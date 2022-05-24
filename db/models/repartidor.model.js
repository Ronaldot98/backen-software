const {Model,DataTypes,Sequelize} = require('sequelize');



const REPARTIDOR_TABLE='repartidores';

const EsquemaTb_repartidores={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre:{
    allowNull: false,
    type: DataTypes.STRING,

  },
  apellido:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  correo:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  telefono:{
    allowNull: false,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  estado: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }


}

class Repartidor extends Model{
  static associate(models){

    this.hasMany(models.Repsector,{
      as: 'rep_sec',
     foreignKey: 'repartidorId'
    });

  }

  static config(sequelize){
    return {
      sequelize,
    tableName: REPARTIDOR_TABLE,
      modelName: 'Repartidor'

    }
  }
}


module.exports = {Repartidor,EsquemaTb_repartidores,REPARTIDOR_TABLE};
