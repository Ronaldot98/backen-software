const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class RepartidorService{
  constructor(){}

  async create(data){
    const newRepartidor= await models.Repartidor.create(data);
    return newRepartidor;
  }

  async find(){
    const result = await models.Repartidor.findAll();
    return result;
  }

  async findOne(id){
    const Repartidor = await models.Repartidor.findByPk(id);
    if(!Repartidor){
      throw boom.notFound('id no encontrado');
    }
    return Repartidor;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_repartidor= await this.findOne(id);
    const resul= await id_repartidor.update(data);
    return resul;
  }

  async delete(id){
    const id_repartidor = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_repartidor.destroy();
    return {id};
  }
}

module.exports = RepartidorService;
