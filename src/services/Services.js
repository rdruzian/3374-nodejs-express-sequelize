const dataSource = require('../models')

class Services {
  constructor(nomeModel) {
    this.model = nomeModel
  }

  async getAll(){
    return dataSource[this.model].findAll()
  }

  async getById(id) {
    return dataSource[this.model].findByPk(id)
  }

  async create(dadosRegistro){
    return dataSource[this.model].create(dadosRegistro)
  }

  async delete(id) {
    return dataSource[this.model].destroy({ where: { id: id}})
  }

  async update(dadosAtualizados, id) {
    const listaRegistroAtualizado = dataSource[this.model].update(dadosAtualizados, { where: { id: id } })
    if(listaRegistroAtualizado[0] === 0){
      return false
    }

    return true
  }
}

module.exports = Services