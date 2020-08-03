import { MinLengthFieldError } from '@/validation/errors'
import faker from 'faker'
import { MinLengthValidation } from './min-length-validation'

const makeSut = (input: string): MinLengthValidation => new MinLengthValidation(input, 5)

describe('Min Length Validation', () => {
  test('Should return error if length is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.random.alphaNumeric(4) })
    expect(error).toEqual(new MinLengthFieldError())
  })

  test('Should return falsy if length is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [field]: faker.random.alphaNumeric(5) })
    expect(error).toBeFalsy()
  })

  test('Should return falsy if field does not exists in schema', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const error = sut.validate({ [faker.random.word()]: faker.random.alphaNumeric(5) })
    expect(error).toBeFalsy()
  })
})
