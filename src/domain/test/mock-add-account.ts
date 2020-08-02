import { AddAccountParams } from '@/domain/usecases'
import faker from 'faker'

export const mockAddAccount = (): AddAccountParams => {
  const password = faker.internet.password()
  return {
    email: faker.internet.email(),
    password: password,
    passwordConfirmation: password,
    name: faker.name.firstName()
  }
}
