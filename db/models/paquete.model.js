const {Model,DataTypes,Sequelize} = require('sequelize');



const PAQUETE_TABLE='paquetes';

const EsquemaTb_paquetes={
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
  descripcion:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  peso:{
    allowNull: false,
    type: DataTypes.DECIMAL

  },
  cantidad:{
    allowNull: false,
    type: DataTypes.INTEGER
  }

}

class Paquete extends Model{
  static associate(models){

  }

  static config(sequelize){
    return {
      sequelize,
    tableName: PAQUETE_TABLE,
      modelName: 'Paquete'

    }
  }
}


module.exports = {Paquete,EsquemaTb_paquetes,PAQUETE_TABLE};
