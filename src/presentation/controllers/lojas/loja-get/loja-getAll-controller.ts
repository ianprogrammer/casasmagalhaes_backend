import { ILoja } from '@/domain/interfaces/loja'
import { badRequest, ok, serverError } from '@/presentation/helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/interfaces'

export class LojaGetAllController implements Controller {
  constructor(
    private readonly loja: ILoja
  ) { }

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const lojas = await this.loja.getAll()

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
