const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class EnvioService{
  constructor(){}

  async create(data){
    const newEnvio= await models.Envio.create(data);
    return newEnvio;
  }

  async find(){
    const result = await models.Envio.findAll();
    return result;
  }

  async findOne(id){
    const Envio = await models.Envio.findByPk(id);
    if(!Envio){
      throw boom.notFound('id no encontrado');
    }
    return Envio;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_envio= await this.findOne(id);
    const resul= await id_envio.update(data);
    return resul;
  }

  async delete(id){
    const id_envio = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_envio.destroy();
    return {id};
  }
}

module.exports = EnvioService;
