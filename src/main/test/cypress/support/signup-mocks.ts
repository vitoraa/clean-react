import * as Helper from './http-mocks'
import faker from 'faker'

export const mockEmailInUseError = (): void => Helper.mockForbiddenError(/signup/, 'POST')
export const mockOk = (): void => Helper.mockOk(/signup/, 'POST', { accessToken: faker.random.words(), name: faker.name.findName() })
