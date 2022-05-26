const boom = require('@hapi/boom');
const {models}=require('./../libs/sequelize');


class Repartidor_sectorService{
  constructor(){}

  async create(data){
    const newRepSector = await models.Repsector.create(data);
    return newRepSector;
  }

  async find(){
    const result = await models.Repsector.findAll();
    return result;
  }

  async findOne(id){
    const RepSector = await models.Repsector.findByPk(id);
    if(!RepSector){
      throw boom.notFound('id no encontrado');
    }
    return RepSector;
  }

  async update(id, data){

    //invocar metodo que se habia creado para validar si el ID existe
    const id_repsector= await this.findOne(id);
    const resul= await id_repsector.update(data);
    return resul;
  }

  async delete(id){
    const id_repsector = await this.findOne(id);
    //obtener id y eliminar el campo
    await id_repsector.destroy();
    return {id};
  }
}

module.exports = Repartidor_sectorService;
