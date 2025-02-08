class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService
  }

  async getAll(req, res){
    try{
      const listaRegistro = await this.entidadeService.getAll()
      return res.status(200).json(listaRegistro)
    } catch(erro) {
      return res.status(500).json({ message: 'Não foi possível encontrar registros' })
    }
  }

  async update(req, res){
    const { id } = req.params
    const dadosAtualizados = req.body
    try {
      const isUpdate = await this.entidadeService.update(dadosAtualizados, Number(id))
      if(!isUpdate){
        return res.status(400).json({ message: `id ${id} não atualizado` })
      }
      return res.status(200).json({ message: `id ${id} atualizado com sucesso` })
    } catch (error) {
      return res.status(500).json({ message: 'Não foi possível deletar registro' })
    }  
  }

  async delete(req, res){
    const { id } = req.params
    try {
      await this.entidadeService.delete(id)
      return res.status(200).json({ message: `id ${id} deletado com sucesso` })
    } catch (error) {
      return res.status(500).json({ message: 'Não foi possível deletar registro' })
    }
  }  
}

module.exports = Controller