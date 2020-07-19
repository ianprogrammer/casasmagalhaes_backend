import { HttpResponse } from '../interfaces'
import { ServerError, UnauthorizedError } from '../erros'

export const badRequest = (errorMessage: string): HttpResponse => {
  return ({
    statusCode: 400,
    body: { message: errorMessage }
  })
}

export const forbidden = (errorMessage: string): HttpResponse => ({
  statusCode: 403,
  body: errorMessage
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const serverError = (error: Error = new Error("Erro interno do servidor, tente novamente mais tarde.")): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})


