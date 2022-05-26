const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class Envio_repartidorService{
  constructor(){}

  async create(data){
    const newEnvio_repartidor= await models.Enviorepartidor.create(data);
    return newEnvio_repartidor;
  }

  async find(){
    const result = await models.Enviorepartidor.findAll();
    return result;
  }

  async findOne(id){
    const Envio_repartidor = await models.Enviorepartidor.findByPk(id);
    if(!Envio_repartidor){
      throw boom.notFound('id no encontrado');
    }
    return Envio_repartidor;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_enviorepartidor= await this.findOne(id);
    const resul= await id_enviorepartidor.update(data);
    return resul;
  }

  async delete(id){
    const id_enviorepartidor = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_enviorepartidor.destroy();
    return {id};
  }
}

module.exports = Envio_repartidorService;
