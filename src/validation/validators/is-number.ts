import { NotNumberError } from '@/presentation/erros/not-number-error';
import { Validation } from '@/presentation/interfaces/validation'

export class NumberValidation implements Validation {
  constructor (
    private readonly fieldName: string
  ) {}

  validate (input: any): Error {
    // console.log(input[this.fieldName])
    const isValid = typeof input[this.fieldName] === 'number';
    if (!isValid) {
      return new NotNumberError(this.fieldName)
    }
  }
}
