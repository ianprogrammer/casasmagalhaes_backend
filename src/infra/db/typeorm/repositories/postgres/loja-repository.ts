import { ILoja, LojaAddParams, LojaUpdateParams } from '@/domain/interfaces/loja';
import { LojaModel } from '@/domain/models';
import { getRepository } from "typeorm";
import { Loja } from '../../entities';

export class LojaPostgresRepository implements ILoja {
  getAll = async (): Promise<LojaModel[]> => {
    const lojas = await getRepository(Loja).find({ relations: ['produtos'] })
    return lojas
  }
  getByCNPJ = async (cnpj: string): Promise<LojaModel> => {
    const loja = await getRepository(Loja).findOne({ cnpj }, { relations: ['produtos'] })
    return loja
  }

  add = async (lojaParams: LojaAddParams): Promise<LojaModel> => {
    const lojaRepository = getRepository(Loja);
    const { cnpj, nome, nomeFantasia } = lojaParams
    const created = await lojaRepository.save({
      cnpj, nome, nomeFantasia
    });
    return created
  }

  get = async (id: string): Promise<Loja> => {
    const loja = await getRepository(Loja).findOne({ id: id }, { relations: ['produtos'] })
    return loja
  }
  remove = async (id: string): Promise<string> => {
    const loja = await getRepository(Loja).delete({ id })
    return loja.raw
  }
  update = async (lojaParams: LojaUpdateParams): Promise<LojaModel> => {
    const { id, cnpj, nomeFantasia, nome } = lojaParams
    const loja = await getRepository(Loja).findOne({ id })
    loja.cnpj = cnpj
    loja.nomeFantasia = nomeFantasia
    loja.nome = nome

    return await getRepository(Loja).save(loja)
  };

}