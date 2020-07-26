import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { AuthenticationParams } from '@/domain/usecases/authentication'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) { }

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponde = await this.httpPostClient.post({
      url: this.url, body: params
    })

    switch (httpResponde.statusCode) {
      case HttpStatusCode.unathorized: throw new InvalidCredentialsError()
    }
  }
}
