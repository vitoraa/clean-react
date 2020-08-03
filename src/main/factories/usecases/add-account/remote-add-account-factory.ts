import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'
import { makeApiURL } from '@/main/factories/http/api-url-factory'
import { RemoteAddAccount } from '@/data/usecases/add-account/remote-add-account'

export const makeRemoteAddAccount = (): RemoteAddAccount => {
  return new RemoteAddAccount(makeApiURL('/signup'), makeAxiosHttpClient())
}
