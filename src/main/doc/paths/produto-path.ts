export const ProdutoAddPath = {
  post: {
    tags: ['Produtos'],
    summary: 'Endpoint para cadastrar um novo produto',
    description: '',
    parameters: [{
      in: 'path',
      name: 'lojaId',
      description: 'ID da loja que deseja inserir o produto',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/produtoParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/produto'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}



export const ProdutoGetPath = {
  get: {
    tags: ['Produtos'],
    summary: 'Endpoint para cadastrar um novo produto',
    description: '',
    parameters: [{
      in: 'path',
      name: 'produtoId',
      description: 'ID do produto que deseja listar',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/produtoGet'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}



export const ProdutoGetAllPath = {
  get: {
    tags: ['Produtos'],
    summary: 'Endpoint para cadastrar um novo produto',
    description: '',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/produtoGetAll'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}

export const ProdutoUpdatePath = {
  put: {
    tags: ['Produtos'],
    summary: 'Endpoint para cadastrar um novo produto',
    description: '',
    parameters: [{
      in: 'path',
      name: 'produtoIdUpdate',
      description: 'ID do produto que deseja atualizar',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/produtoParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/produto'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}




export const ProdutoDeletePath = {
  delete: {
    tags: ['Produtos'],
    summary: 'Endpoint para cadastrar um novo produto',
    description: '',
    parameters: [{
      in: 'path',
      name: 'produtoIdDelete',
      description: 'ID do produto que deseja deletar',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/produtoDelete'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}