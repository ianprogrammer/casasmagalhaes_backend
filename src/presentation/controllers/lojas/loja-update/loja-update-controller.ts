import { ILoja } from '@/domain/interfaces/loja'
import { badRequest, ok, serverError } from '@/presentation/helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/interfaces'
import { Validation } from '@/presentation/interfaces/validation'

export class LojaUpdateController implements Controller {
  constructor(
    private readonly validation: Validation, private readonly loja: ILoja
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error.message)
      }
      const { id } = httpRequest.params

      if(!id){
        return badRequest("Bad Request, ID should be passed")
      }
      const { cnpj, nome, nomeFantasia } = httpRequest.body

      const lojaAtualizada = await this.loja.update({
        cnpj, id, nome, nomeFantasia
      })

      if (!lojaAtualizada) {
        return serverError()
      }
      return ok(lojaAtualizada)
    } catch (error) {
      return serverError(error)
    }
  }
}
