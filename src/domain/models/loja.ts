import { ProdutoModel } from '.';

export type LojaModel = {
  id: string
  nome: string
  cnpj: string
  nomeFantasia: string
  createdAt:Date
  updatedAt: Date
  produtos?:ProdutoModel[]
}


