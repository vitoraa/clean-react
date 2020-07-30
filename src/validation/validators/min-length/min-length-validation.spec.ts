import { MinLengthFieldError } from '@/validation/errors'
import faker from 'faker'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (): MinLengthValidation => new MinLengthValidation(faker.database.column(), 5)

describe('Min Length Validation', () => {
  test('Should return error if length is invalid', () => {
    const sut = makeSut()
    const error = sut.validate('faker.random.word()')
    expect(error).toEqual(new MinLengthFieldError())
  })
})
