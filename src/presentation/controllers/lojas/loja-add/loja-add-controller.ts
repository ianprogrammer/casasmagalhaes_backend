import { ILoja } from '@/domain/interfaces/loja'
import { badRequest,  ok, serverError } from '@/presentation/helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/interfaces'
import { Validation } from '@/presentation/interfaces/validation'

export class LojaAddController implements Controller {
  constructor(
    private readonly validation: Validation, private readonly loja: ILoja
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error.message)
      }
      const { cnpj, nome, nomeFantasia } = httpRequest.body

      const cnpjExiste = await this.loja.getByCNPJ(cnpj)
      if(cnpjExiste){
        return badRequest('O CNPJ já está em uso')
      }

      const loja = await this.loja.add({ cnpj, nome, nomeFantasia })
      delete loja.produtos
      if (!loja) {
        return serverError()
      }
      return ok(loja)
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}
