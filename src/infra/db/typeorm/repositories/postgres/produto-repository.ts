import { IProduto, ProdutoAddParams, ProdutoUpdateParams } from '@/domain/interfaces/produto';
import { ProdutoModel } from '@/domain/models';
import { Produto } from '@/infra/db/typeorm/entities';
import { LojaPostgresRepository } from './loja-repository';
import { getRepository } from "typeorm";

export class ProdutoPostgresRepository implements IProduto {

  constructor(private readonly lojaRespository: LojaPostgresRepository) {

  }

  add = async (produtoParams: ProdutoAddParams): Promise<ProdutoModel> => {
    const produtoRepository = getRepository(Produto);
    const { loja, preco, nome } = produtoParams
    const findedLoja = await this.lojaRespository.get(loja)
    const created = await produtoRepository.save({
      loja: findedLoja, nome, preco
    }, {});
    return created
  }
  get = async (id: string): Promise<ProdutoModel> => {
    const produto = await getRepository(Produto).findOne({ id })
    return produto
  }
  getAll = async (): Promise<ProdutoModel[]> => {
    return await getRepository(Produto).find()
  }
  remove = async (id: string): Promise<string> => {
    const loja = await getRepository(Produto).delete({ id })
    return loja.raw
  }
  update = async (produtoParams: ProdutoUpdateParams): Promise<ProdutoModel> => {
    const { id, nome, preco } = produtoParams
    const produto = await getRepository(Produto).findOne({ id })
    produto.nome = nome
    produto.preco = preco

    return await getRepository(Produto).save(produto)
  }

}