import {
  lojaSchema,
  lojaParamsSchema,
  lojaGetAllSchema,
  lojaGetSchema,
  lojaDeleteSchema,
  errorSchema, produtoParamsSchema, produtoSchema, produtoGetSchema, produtoGetAllSchema, produtoDeleteSchema
} from './schemas/index'

export default {
  loja: lojaSchema,
  lojaParams: lojaParamsSchema,
  lojaGetAll: lojaGetAllSchema,
  lojaGet: lojaGetSchema,
  lojaDelete: lojaDeleteSchema,
  produtoParams: produtoParamsSchema,
  produto: produtoSchema,
  produtoGet: produtoGetSchema,
  produtoGetAll: produtoGetAllSchema,
  produtoDelete: produtoDeleteSchema,
  

  error: errorSchema,

}
