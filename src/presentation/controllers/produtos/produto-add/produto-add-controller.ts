import { IProduto } from '@/domain/interfaces/produto'
import { badRequest, ok, serverError } from '@/presentation/helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/interfaces'
import { Validation } from '@/presentation/interfaces/validation'

export class ProdutoAddController implements Controller {
  constructor(
    private readonly validation: Validation, private readonly produto: IProduto
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error.message)
      }

      const { id } = httpRequest.params
      const { nome, preco } = httpRequest.body


      const product = await this.produto.add({ nome, preco, loja: id })

      if (!product) {
        return serverError()
      }
      delete product.loja
      return ok(product)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
