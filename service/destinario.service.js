const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class DestinarioService{
  constructor(){}

  async create(data){
    const newDestinario= await models.Destinario.create(data);
    return newDestinario;
  }

  async find(){
    const result = await models.Destinario.findAll();
    return result;
  }

  async findOne(id){
    const Destinario = await models.Destinario.findByPk(id);
    if(!Destinario){
      throw boom.notFound('id no encontrado');
    }
    return Destinario;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_destinario= await this.findOne(id);
    const resul= await id_destinario.update(data);
    return resul;
  }

  async delete(id){
    const id_destinario = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_destinario.destroy();
    return {id};
  }
}

module.exports = DestinarioService;
