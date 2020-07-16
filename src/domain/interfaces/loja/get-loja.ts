import { LojaModel } from '../../models/loja'

export interface GetLoja {
  get: (id?: string) => Promise<LojaModel[]>
}
