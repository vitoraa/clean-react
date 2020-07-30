import { MinLengthFieldError } from '@/validation/errors'
import faker from 'faker'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (): MinLengthValidation => new MinLengthValidation(faker.database.column(), 5)

describe('Min Length Validation', () => {
  test('Should return error if length is invalid', () => {
    const sut = makeSut()
    const error = sut.validate('12')
    expect(error).toEqual(new MinLengthFieldError())
  })

  test('Should return falsy if length is valid', () => {
    const sut = makeSut()
    const error = sut.validate('123456')
    expect(error).toBeFalsy()
  })
})
