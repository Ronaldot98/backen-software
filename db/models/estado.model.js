const {Model,DataTypes,Sequelize} = require('sequelize');



const ESTADO_TABLE='estado';

const EsquemaTb_estado={
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER

  },
  estado:{
    allowNull: false,
    type: DataTypes.STRING,
  },
  detalles:{
  allowNull: false,
  type: DataTypes.STRING,
},


}

class Estado extends Model{
  static associate(models){

    this.hasMany(models.Bitacora,{
      as: 'bitacora',
     foreignKey: 'estadoId'
    });


  }

  static config(sequelize){
    return {
      sequelize,
    tableName: ESTADO_TABLE,
      modelName: 'Estado'

    }
  }
}


module.exports = {Estado,EsquemaTb_estado,ESTADO_TABLE};
