import { IProduto } from '@/domain/interfaces/produto'
import { badRequest, ok, serverError } from '@/presentation/helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/interfaces'
import { Validation } from '@/presentation/interfaces/validation'

export class ProdutoUpdateController implements Controller {
  constructor(
    private readonly validation: Validation, private readonly produto: IProduto
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error.message)
      }

      const { idProduto } = httpRequest.params
      if (!idProduto) {
        return badRequest("Bad Request, ID should be passed")
      }


      const { nome, preco } = httpRequest.body
      const product = await this.produto.update({ id: idProduto, nome, preco })

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
