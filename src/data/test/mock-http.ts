import { HttpResponse, HttpStatusCode, HttpRequest, HttpClient } from '@/data/protocols/http'
import faker from 'faker'

export class HttpClientSpy<R = any> implements HttpClient<R> {
  url?: string
  method?: string
  body?: any
  headers?: any
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async request (params: HttpRequest): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    this.method = params.method
    this.headers = params.headers
    return this.response
  }
}

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
  body: faker.random.objectElement(),
  headers: faker.random.objectElement()
})
