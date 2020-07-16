import { ProdutoModel } from '../../models/produto'

export interface GetProduto {
  get: (id?: string) => Promise<ProdutoModel[]>
}
