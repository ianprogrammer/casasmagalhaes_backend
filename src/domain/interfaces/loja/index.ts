import { LojaModel } from '../../models/loja'

export type LojaAddParams = Omit<LojaModel, 'id' | 'createdAt' | 'updatedAt'>
export type LojaUpdateParams = Omit<LojaModel, 'createdAt' | 'updatedAt'>


export interface ILoja {
  add: (lojaParams: LojaAddParams) => Promise<LojaModel>
  get: (id: string) => Promise<LojaModel>
  getAll: () => Promise<LojaModel[]>
  getByCNPJ: (cnpj: string) => Promise<LojaModel>
  remove: (id: string) => Promise<string>
  update: (lojaParams: LojaUpdateParams) => Promise<LojaModel>
}

