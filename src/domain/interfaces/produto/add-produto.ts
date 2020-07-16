import { ProdutoModel } from '../../models/produto'

export type ProdutoAddParams = Omit<ProdutoModel, 'id'>

export interface AddProduto {
  add: (produtoParams: ProdutoAddParams) => Promise<ProdutoModel>
}
