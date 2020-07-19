export const lojaParamsSchema = {
  type: 'object',
  properties: {
    cnpj: {
      type: 'string'
    },
    nome: {
      type: 'string'
    },
    nomeFantasia: {
      type: 'string'
    },
  },
  required: ['cnpj','nomeFantasia', 'nome']
}


