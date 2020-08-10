import * as Helper from './http-mocks'
import faker from 'faker'

export const mockEmailInUseError = (): void => Helper.mockEmailInUseError(/signup/)
export const mockInvalidData = (): void => Helper.mockOk(/signup/, 'POST', { invalid: faker.random.words() })
export const mockOk = (): void => Helper.mockOk(/signup/, 'POST', { accessToken: faker.random.words(), name: faker.name.findName() })
