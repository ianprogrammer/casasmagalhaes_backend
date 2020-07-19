export const LojaAddPath = {
  post: {
    tags: ['Loja'],
    summary: 'Endpoint para cadastrar uma nova loja',
    description: '',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/lojaParams'
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
              $ref: '#/schemas/loja'
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


export const LojaUpdatePath = {
  put: {
    tags: ['Loja'],
    summary: 'Endpoint para atualizar uma loja',
    description: '',
    parameters: [{
      in: 'path',
      name: 'lojaIdUpdate',
      description: 'ID da loja que deseja atualizar',
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
            $ref: '#/schemas/lojaParams'
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
              $ref: '#/schemas/loja'
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



export const LojaDeletePath = {
  delete: {
    tags: ['Loja'],
    summary: 'Endpoint para deletar uma loja',
    description: '',
    parameters: [{
      in: 'path',
      name: 'lojaIdDelete',
      description: 'ID da loja que deseja deletar',
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
              $ref: '#/schemas/lojaDelete'
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



export const LojaGetPath = {
  get: {
    tags: ['Loja'],
    summary: 'Endpoint listar uma loja',
    description: '',
    parameters: [{
      in: 'path',
      name: 'lojaId',
      description: 'ID da loja que deseja listar',
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
              $ref: '#/schemas/lojaGet'
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


export const LojaGetAllPath = {
  get: {
    tags: ['Loja'],
    summary: 'Endpoint para listar lojas cadastradas',
    description: '',
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/lojaGetAll'
            }
          }
        }
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}