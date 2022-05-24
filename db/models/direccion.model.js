const {Model,DataTypes,Sequelize} = require('sequelize');



const DIRECCION_TABLE='direcciones';

const EsquemaTb_direcciones={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

  },
  departamento:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  municipio:{
  allowNull: false,
  type: DataTypes.STRING,
},
coordenadas:{
  allowNull: false,
  type: DataTypes.STRING,
},
detalles:{
  allowNull: false,
  type: DataTypes.STRING,
},


}

class Direccion extends Model{
  static associate(models){
    this.hasMany(models.Destino,{
      as: 'destino',
      foreignKey: 'direId'
    })
  }

  static config(sequelize){
    return {
      sequelize,
    tableName: DIRECCION_TABLE,
      modelName: 'Direccion'

    }
  }
}


module.exports = {Direccion,EsquemaTb_direcciones,DIRECCION_TABLE};
