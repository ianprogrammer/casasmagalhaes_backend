import { LojaModel } from '../../models/loja'

export interface RemoveLoja {
  remove: (idLoja: string) => Promise<LojaModel>
}
