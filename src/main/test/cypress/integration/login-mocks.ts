import * as Helper from '../support/http-mocks'
import faker from 'faker'

export const mockInvalidCredentialsError = (): void => Helper.mockInvalidCredentialsError(/login/)
export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(/login/, 'POST')
export const mockOk = (): void => Helper.mockOk(/login/, 'POST', { accessToken: faker.random.words() })
export const mockInvalidData = (): void => Helper.mockOk(/login/, 'POST', { invalid: faker.random.words() })
