import { IProduto } from '@/domain/interfaces/produto'
import { badRequest, ok, serverError } from '@/presentation/helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/interfaces'
import { Validation } from '@/presentation/interfaces/validation'

export class ProdutoRemoveController implements Controller {
  constructor(
    private readonly validation: Validation, private readonly produto: IProduto
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error) {
        return badRequest(error.message)
      }

      const { idProduto } = httpRequest.params
      const product = await this.produto.remove(idProduto)
      if (!product) {
        return serverError()
      }
      return ok("Produto Removido")
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
