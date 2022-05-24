const {Model, DataTypes,Sequelize} = require('sequelize');
const {DESTINO_TABLE} = require('./dire_destino.model')

const DESTINARIO_TABLE='destinarios';

const EsquemaTb_destinarios = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
    },

    nombre:{
      allowNull: false,
      type: DataTypes.STRING
    },
    apellido:{
      allowNull: false,
      type: DataTypes.STRING
    },
    telefono:{
      allowNull: false,
      type:DataTypes.INTEGER
    },
    correo:{
      allowNull: false,
      type: DataTypes.STRING,
      unique: true

    },
    destinarioId: {
      field:  'id_destino',
      allowNull: false,
      type: DataTypes.INTEGER,
      references:{
        model: DESTINO_TABLE,
        key: 'id'
      }
    }

}


class Destinario extends Model{
  static associate(models){

    this.hasMany(models.Envio,{
      as: 'envio',
     foreignKey: 'destinarioId'
    });
  }
  }

  static config(sequelize){
    return {
      sequelize,
    tableName: DESTINARIO_TABLE,
      modelName: 'Destinario'

    }
  }
}


module.exports = {Destinario,EsquemaTb_destinarios,DESTINARIO_TABLE};

