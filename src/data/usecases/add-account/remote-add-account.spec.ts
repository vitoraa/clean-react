import faker from 'faker'
import { RemoteAddAccount } from './remote-add-account'
import { AddAccountParams } from '@/domain/usecases'
import { HttpPostClientSpy } from '@/data/test'
import { AccountModel } from '@/domain/models'
import { HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { mockAddAccount } from '@/domain/test/mock-add-account'

type SutTypes = {
  sut: RemoteAddAccount
  httpPostClientSpy: HttpPostClientSpy<AddAccountParams, AccountModel>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AddAccountParams, AccountModel>()
  const sut = new RemoteAddAccount(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL ', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.add(mockAddAccount())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call HttpClient with correct body ', async () => {
    const addAccountParams = mockAddAccount()
    const { sut, httpPostClientSpy } = makeSut()
    await sut.add(addAccountParams)
    expect(httpPostClientSpy.body).toEqual(addAccountParams)
  })

  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.add(mockAddAccount())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
