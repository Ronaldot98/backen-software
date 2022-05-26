const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class EstadoService{
  constructor(){}

  async create(data){
    const newEstado= await models.Estado.create(data);
    return newEstado;
  }

  async find(){
    const result = await models.Estado.findAll();
    return result;
  }

  async findOne(id){
    const Estado = await models.Estado.findByPk(id);
    if(!Estado){
      throw boom.notFound('id no encontrado');
    }
    return Estado;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_estado= await this.findOne(id);
    const resul= await id_estado.update(data);
    return resul;
  }

  async delete(id){
    const id_estado = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_estado.destroy();
    return {id};
  }
}

module.exports = EstadoService;
