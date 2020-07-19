import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Desafio Casas Magalhães',
    description: 'Desafio feito utilizando Clean Architecture e seguindo os princípios do SOLID e Design Patterns.',
    version: '1.0.0',
    contact: {
      name: 'Ian Oliveira',
      email: 'ianprogrammer@gmail.com',
      url: 'https://ianprogrammer.github.io/'
    }
  },
  paths,
  schemas,
  components
}
