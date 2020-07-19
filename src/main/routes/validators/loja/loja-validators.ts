import { Validation } from '../../../../presentation/interfaces/validation'
import { CNPJValidation, RequiredFieldValidation, ValidationComposite } from '../../../../validation/validators'

export const lojaAddValidator = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['cnpj', 'nome', 'nomeFantasia']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CNPJValidation('cnpj'))
  return new ValidationComposite(validations)
}


export const lojaGetValidator = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['id']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}


export const lojaRemoveValidator = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['id']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}


export const lojaUpdateValidator = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of [ 'nome', 'nomeFantasia']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
