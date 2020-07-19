import {
  LojaAddPath,
  LojaGetAllPath,
  LojaGetPath,
  LojaUpdatePath,
  ProdutoAddPath,
  ProdutoGetAllPath,
  ProdutoGetPath,
  ProdutoDeletePath,
  ProdutoUpdatePath
} from './paths/index'
import { LojaDeletePath } from './paths/loja-path'


export default {
  '/loja': LojaAddPath,
  '/lojas': LojaGetAllPath,
  '/loja/{lojaId}': LojaGetPath,
  '/loja/{lojaIdDelete}': LojaDeletePath,
  '/loja/{lojaIdUpdate}' : LojaUpdatePath,
  '/loja/{lojaId}/produto' : ProdutoAddPath,
  '/produtos' : ProdutoGetAllPath,
  '/produto/{produtoId}': ProdutoGetPath,
  '/produto/{produtoIdUpdate}': ProdutoUpdatePath,
  '/produto/{produtoIdDelete}': ProdutoDeletePath

}
