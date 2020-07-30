import { ValidationComposite } from './validation-composite'
import { FieldValidation } from '@/validation/protocols/field-validation'
import { FieldValidationSpy } from '../test/mock-field-validation'

const makeSut = (validators: FieldValidation[]): ValidationComposite => new ValidationComposite(validators)

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const validationSpy = new FieldValidationSpy('any_field')
    const validationSpy2 = new FieldValidationSpy('any_field')
    validationSpy.error = new Error('first_error_message')
    validationSpy2.error = new Error('second_error_message')
    const sut = makeSut([validationSpy, validationSpy2])
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('first_error_message')
  })
})
