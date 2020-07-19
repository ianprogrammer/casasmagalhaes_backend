export const lojaSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    cnpj: {
      type: 'string'
    },
    nome: {
      type: 'string'
    },
    nomeFantasia: {
      type: 'string'
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
  required: ['id', 'cnpj', 'nomeFantasia', 'name']
}

export const lojaUpdateSchema = {
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
    createdAt: {
      type: 'string',
      format: 'date'
    },
    updatedAt: {
      type: 'string',
      format: 'date'
    },
  },
  required: ['cnpj', 'nomeFantasia', 'name']
}





export const lojaDeleteSchema = {
  type: 'string'

}

export const lojaGetSchema = {
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
    createdAt: {
      type: 'string',
      format: 'date'
    },
    updatedAt: {
      type: 'string',
      format: 'date'
    },
    produtos: {
      type: 'array',
      items: {
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
          }
        }
      }
    }
  },
}


export const lojaGetAllSchema = {
  type: 'array',
  items: {
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
      createdAt: {
        type: 'string',
        format: 'date'
      },
      updatedAt: {
        type: 'string',
        format: 'date'
      },
      produtos: {
        type: 'array',
        items: {
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
            }
          }
        }
      }
    }
  }
}

