import { ProdutoModel } from '../../models/produto'

export type ProdutoUpdateParams = ProdutoModel

export interface UpdateProduto {
  update: (id: string, lojaParams: ProdutoUpdateParams) => Promise<ProdutoModel>
}
