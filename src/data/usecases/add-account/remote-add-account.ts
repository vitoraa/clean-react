import { AddAccount } from '@/domain/usecases'
import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError, EmailInUseError } from '@/domain/errors'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<RemoteAddAccount.Model>
  ) { }

  async add (params: AddAccount.Params): Promise<AddAccount.Model> {
    const httpResponde = await this.httpPostClient.post({
      url: this.url, body: params
    })

    switch (httpResponde.statusCode) {
      case HttpStatusCode.ok: return httpResponde.body
      case HttpStatusCode.forbiden: throw new EmailInUseError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteAddAccount {
  export type Model = AddAccount.Model
}
