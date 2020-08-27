import faker from 'faker'
import { HttpClientSpy, mockRemoteSurveyResultModel } from '@/data/test'
import { HttpStatusCode } from '@/data/protocols/http'
import { RemoteSaveSurveyResult } from '@/data/usecases'
import { mockSaveSurveyResultParams } from '@/domain/test'

type SutTypes = {
  sut: RemoteSaveSurveyResult
  httpClientSpy: HttpClientSpy
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteSaveSurveyResult(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteLoadSurveyResult', () => {
  test('Should call HttpClient with correct URL, body and Method', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockRemoteSurveyResultModel()
    }
    const answer = mockSaveSurveyResultParams()
    await sut.save(answer)
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('put')
    expect(httpClientSpy.body).toBe(answer)
  })
})
