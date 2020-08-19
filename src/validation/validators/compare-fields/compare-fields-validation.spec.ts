import { InvalidFieldError } from '@/validation/errors'
import faker from 'faker'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (field: string, fieldToCompare: string): CompareFieldsValidation => new CompareFieldsValidation(field, fieldToCompare)

describe('Compare Fields Validation', () => {
  test('Should return error if compare is invalid', () => {
    const field = 'any_field'
    const fieldToCompare = 'another_field'
    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({ [field]: 'any_value', [fieldToCompare]: 'other_value' })
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if compare is valid', () => {
    const field = 'any_field'
    const fieldToCompare = 'another_field'
    const valueToCompare = faker.random.word()
    const sut = makeSut(field, fieldToCompare)
    const error = sut.validate({ [field]: valueToCompare, [fieldToCompare]: valueToCompare })
    expect(error).toBeFalsy()
  })
})
