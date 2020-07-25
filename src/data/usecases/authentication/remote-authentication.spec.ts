import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Shoul call HttpClient with correct URL ', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post (url: string): Promise<void> {
        this.url = url
        await Promise.resolve()
      }
    }
    const url = 'any_url'
    const httPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httPostClientSpy)
    await sut.auth()
    expect(httPostClientSpy.url).toBe(url)
  })
})
