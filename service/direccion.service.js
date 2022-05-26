const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class DireccionService{
  constructor(){}

  async create(data){
    const newDireccion= await models.Direccion.create(data);
    return newDireccion;
  }

  async find(){
    const result = await models.Direccion.findAll();
    return result;
  }

  async findOne(id){
    const Direccion = await models.Direccion.findByPk(id);
    if(!Direccion){
      throw boom.notFound('id no encontrado');
    }
    return Direccion;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_direccion= await this.findOne(id);
    const resul= await id_direccion.update(data);
    return resul;
  }

  async delete(id){
    const id_direccion = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_direccion.destroy();
    return {id};
  }
}

module.exports = DireccionService;
