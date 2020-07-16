import { ProdutoModel } from '../../models/produto'

export interface RemoveProduto {
  remove: (idLoja: string) => Promise<ProdutoModel>
}
