export const produtoSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    nome: {
      type: 'string'
    },
    preco: {
      type: 'number'
    },
    createdAt: {
      type: 'string',
      format: 'date'
    },
    updatedAt: {
      type: 'string',
      format: 'date'
    },
  },
  required: ['id', 'nome', 'preco']
}



export const produtoGetSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    nome: {
      type: 'string'
    },
    preco: {
      type: 'number'
    },
    createdAt: {
      type: 'string',
      format: 'date'
    },
    updatedAt: {
      type: 'string',
      format: 'date'
    },
  },
  required: ['id', 'nome', 'preco']
}



export const produtoDeleteSchema = {
  type: 'string'
}

export const produtoGetAllSchema = {
  type: 'array',
  items: {
    properties: {
      id: {
        type: 'string'
      },
      nome: {
        type: 'string'
      },
      preco: {
        type: 'number'
      },
      createdAt: {
        type: 'string',
        format: 'date'
      },
      updatedAt: {
        type: 'string',
        format: 'date'
      },
    },
  },
}




