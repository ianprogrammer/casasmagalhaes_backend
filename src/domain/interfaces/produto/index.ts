import { ProdutoModel } from '../../models/produto'

export type ProdutoAddParams = {
  nome: string
  preco: number
  loja: string
}
export type ProdutoUpdateParams = Omit<ProdutoModel, 'loja'| 'createdAt' | 'updatedAt'>

export interface IProduto {
  add: (produtoParams: ProdutoAddParams) => Promise<ProdutoModel>
  get: (id: string) => Promise<ProdutoModel>
  getAll: () => Promise<ProdutoModel[]>
  remove: (idLoja: string) => Promise<string>
  update: (lojaParams: ProdutoUpdateParams) => Promise<ProdutoModel>
}
