const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class RemitenteService{
  constructor(){}

  async create(data){
    const newRemitente= await models.Remitente.create(data);
    return newRemitente;
  }

  async find(){
    const result = await models.Remitente.findAll();
    return result;
  }

  async findOne(id){
    const Remitente = await models.Remitente.findByPk(id);
    if(!Remitente){
      throw boom.notFound('id no encontrado');
    }
    return Remitente;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_remitente= await this.findOne(id);
    const resul= await id_remitente.update(data);
    return resul;
  }

  async delete(id){
    const id_remitente = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_remitente.destroy();
    return {id};
  }
}

module.exports = RemitenteService;
