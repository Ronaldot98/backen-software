const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class Dire_origenService{
  constructor(){}

  async create(data){
    const newDire_origen= await models.Direorigen.create(data);
    return newDire_origen;
  }

  async find(){
    const result = await models.Direorigen.findAll();
    return result;
  }

  async findOne(id){
    const Dire_origen = await models.Direorigen.findByPk(id);
    if(!Dire_origen){
      throw boom.notFound('id no encontrado');
    }
    return Dire_origen;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_direorigen= await this.findOne(id);
    const resul= await id_direorigen.update(data);
    return resul;
  }

  async delete(id){
    const id_direorigen = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_direorigen.destroy();
    return {id};
  }
}

module.exports = Dire_origenService;
