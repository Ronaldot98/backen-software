const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class Dire_destinoService{
  constructor(){}

  async create(data){
    const newDire_destino= await models.Destino.create(data);
    return newDire_destino;
  }

  async find(){
    const result = await models.Destino.findAll();
    return result;
  }

  async findOne(id){
    const Dire_destino = await models.Destino.findByPk(id);
    if(!Dire_destino){
      throw boom.notFound('id no encontrado');
    }
    return Dire_destino;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_diredestino= await this.findOne(id);
    const resul= await id_diredestino.update(data);
    return resul;
  }

  async delete(id){
    const id_diredestino = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_diredestino.destroy();
    return {id};
  }
}

module.exports = Dire_destinoService;
