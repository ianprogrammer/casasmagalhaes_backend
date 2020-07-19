import { InvalidParamError } from '@/presentation/erros'
import { Validation } from '@/presentation/interfaces/validation'

export class CNPJValidation implements Validation {
  constructor (
    private readonly fieldName: string
  ) {}

  validate (input: any): Error {
    const isValid = input[this.fieldName].match(/^\d{14}$/)
    if (!isValid) {
      return new InvalidParamError(this.fieldName)
    }
  }
}
