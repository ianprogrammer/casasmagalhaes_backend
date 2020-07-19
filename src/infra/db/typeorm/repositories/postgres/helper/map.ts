import { LojaModel } from '@/domain/models'
import { Loja } from '../../../entities'

export const mapLoja =  (data: Loja): LojaModel => {
   const { cnpj,id, createdAt, nomeFantasia,nome,updatedAt , produtos } = data

  return {
    cnpj,id, createdAt, nomeFantasia,nome,updatedAt, produtos : produtos
  }
  
}