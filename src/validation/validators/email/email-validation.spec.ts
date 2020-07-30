import { EmailValidation } from './email-validation'
import faker from 'faker'
import { InvalidFieldError } from '@/validation/errors'

const makeSut = (): EmailValidation => new EmailValidation(faker.database.column())

describe('Email Validation', () => {
  test('Should return error if email is invalid', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError())
  })
})
