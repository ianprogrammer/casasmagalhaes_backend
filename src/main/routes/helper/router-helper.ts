import { HttpRequest, Controller } from "@/presentation/interfaces"
import { Response } from 'express'
export const RouterHelper = async (req: any, res: Response, controller: Controller): Promise<any> => {

  const httpRequest: HttpRequest = {
    params: req.params,
    body: req.body,
    query: req.query,
    headers: req.headers
  }
  
  const httpResponse = await controller.handle(httpRequest)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}

