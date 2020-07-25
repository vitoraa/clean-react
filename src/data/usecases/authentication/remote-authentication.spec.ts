import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/mock-http-client'

describe('RemoteAuthentication', () => {
  test('Shoul call HttpClient with correct URL ', async () => {
    const url = 'any_url'
    const httPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httPostClientSpy)
    await sut.auth()
    expect(httPostClientSpy.url).toBe(url)
  })
})
