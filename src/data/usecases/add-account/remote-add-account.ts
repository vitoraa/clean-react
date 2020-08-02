import { AddAccount, AddAccountParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError, EmailInUseError } from '@/domain/errors'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AddAccountParams, AccountModel>
  ) { }

  async add (params: AddAccountParams): Promise<AccountModel> {
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
