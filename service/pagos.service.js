const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class PagosService{
  constructor(){}

  async create(data){
    const newPagos= await models.Pagos.create(data);
    return newPagos;
  }

  async find(){
    const result = await models.Pagos.findAll();
    return result;
  }

  async findOne(id){
    const Pagos = await models.Pagos.findByPk(id);
    if(!Pagos){
      throw boom.notFound('id no encontrado');
    }
    return Pagos;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_pagos= await this.findOne(id);
    const resul= await id_pagos.update(data);
    return resul;
  }

  async delete(id){
    const id_pagos = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_pagos.destroy();
    return {id};
  }
}

module.exports = PagosService;
