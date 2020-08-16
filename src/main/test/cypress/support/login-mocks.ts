import * as Helper from './http-mocks'
import faker from 'faker'

export const mockInvalidCredentialsError = (): void => Helper.mockUnauthorizedError(/login/)
export const mockUnexpectedError = (): void => Helper.mockServerError(/login/, 'POST')
export const mockOk = (): void => Helper.mockOk(/login/, 'POST', { accessToken: faker.random.words(), name: faker.name.findName() })
