import { IProduto } from '@/domain/interfaces/produto'
import {  ok, serverError } from '@/presentation/helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/interfaces'
import { Validation } from '@/presentation/interfaces/validation'

export class ProdutoGetAllController implements Controller {
  constructor(
     private readonly produto: IProduto
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {

      const product = await this.produto.getAll()

      if (!product) {
        return serverError()
      }
      return ok(product)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
