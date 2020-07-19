import { ILoja } from '@/domain/interfaces/loja'
import { badRequest, ok, serverError } from '@/presentation/helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/interfaces'
import { Validation } from '@/presentation/interfaces/validation'

export class LojaGetController implements Controller {
  constructor(
    private readonly validation: Validation,private readonly loja: ILoja
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      
      const error = this.validation.validate(httpRequest.params)
      if (error) {
        return badRequest(error.message)
      }
      const { id } = httpRequest.params
      const lojas = await this.loja.get(id)

      if (!lojas) {
        return serverError()
      }
      return ok(lojas)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
