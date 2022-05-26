const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class PaqueteService{
  constructor(){}

  async create(data){
    const newPaquete= await models.Paquete.create(data);
    return newPaquete;
  }

  async find(){
    const result = await models.Paquete.findAll();
    return result;
  }

  async findOne(id){
    const Paquete = await models.Paquete.findByPk(id);
    if(!Paquete){
      throw boom.notFound('id no encontrado');
    }
    return Paquete;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_paquete= await this.findOne(id);
    const resul= await id_paquete.update(data);
    return resul;
  }

  async delete(id){
    const id_paquete = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_paquete.destroy();
    return {id};
  }
}

module.exports = PaqueteService;
