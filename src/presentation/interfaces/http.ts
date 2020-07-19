export type HttpResponse = {
  statusCode: number
  body: any
}

export type HttpRequest = {
  body?: any
  query?: any
  headers?: any
  params?: any
}
