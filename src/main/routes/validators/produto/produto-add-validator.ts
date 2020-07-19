import { NumberValidation } from '@/validation/validators/is-number'
import { Validation } from '../../../../presentation/interfaces/validation'
import {  RequiredFieldValidation, ValidationComposite } from '../../../../validation/validators'

export const produtoAddValidator = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['nome', 'preco']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}

export const produtoUpdateValidator = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['nome', 'preco']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}


export const produtoGetValidator = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['id']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}


export const produtoRemoveValidator = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['idProduto']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
