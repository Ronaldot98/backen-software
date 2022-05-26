const {Model,DataTypes,Sequelize} = require('sequelize');
const {CLIENTE_TABLE} = require('./cliente.model')
const {DIREORIGEN_TABLE} = require('./direccion_origen.model')




const REMITENTE_TABLE='remitente';

const EsquemaTb_remitente= {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  clienteId: {
    field:  'id_cliente',
    allowNull: false,
    type: DataTypes.INTEGER,
    references:{
      model: CLIENTE_TABLE,
      key: 'id'
    }
  },
  direorigenId:{
    field: 'id_direorigen',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: DIREORIGEN_TABLE,
      key: 'id'
    }
  }


}

class Remitente extends Model{

  static associate(models){

    this.hasMany(models.Envio,{
      as: 'envio',
     foreignKey: 'remitenteId'
    });
  }



  static config(sequelize){
    return {
      sequelize,
    tableName: REMITENTE_TABLE,
      modelName: 'Remitente'

    }
  }
}


module.exports = {Remitente,EsquemaTb_remitente,REMITENTE_TABLE};
