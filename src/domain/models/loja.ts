import { ProdutoModel } from '.';

export type LojaModel = {
  id: string
  nome: string
  nomeFantasia: string
  produtos: ProdutoModel[]
}


