import { LojaModel } from '.';

export type ProdutoModel = {
  id: string
  nome: string
  preco: number
  createdAt:Date
  updatedAt: Date
  loja: LojaModel
}
