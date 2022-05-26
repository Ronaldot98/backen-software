const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class BitacoraService{
  constructor(){}

  async create(data){
    const newBitacora= await models.Bitacora.create(data);
    return newBitacora;
  }

  async find(){
    const result = await models.Bitacora.findAll();
    return result;
  }

  async findOne(id){
    const Bitacora = await models.Bitacora.findByPk(id);
    if(!Bitacora){
      throw boom.notFound('id no encontrado');
    }
    return Bitacora;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_bitacora= await this.findOne(id);
    const resul= await id_bitacora.update(data);
    return resul;
  }

  async delete(id){
    const id_bitacora = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_bitacora.destroy();
    return {id};
  }
}

module.exports = BitacoraService;
