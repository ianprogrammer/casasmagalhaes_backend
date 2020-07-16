import { LojaModel } from '../../models/loja'

export type LojaUpdateParams = Omit<LojaModel, 'produtos'>

export interface UpdateLoja {
  update: (lojaParams: LojaUpdateParams) => Promise<LojaModel>
}
