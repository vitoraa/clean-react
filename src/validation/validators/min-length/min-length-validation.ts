import { FieldValidation } from '@/validation/protocols/field-validation'
import { MinLengthFieldError } from '@/validation/errors'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) { }
  validate (input: object): Error {
    return input[this.field]?.length < this.minLength ? new MinLengthFieldError() : null
  }
}
