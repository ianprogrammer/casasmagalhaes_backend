import { LojaModel } from '../../models/loja'

export type LojaAddParams = Exclude<LojaModel, 'id'| 'produtos'>

export interface AddLoja {
  add: (lojaParams: LojaAddParams) => Promise<LojaModel>
}
