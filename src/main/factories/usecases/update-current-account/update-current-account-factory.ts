import { makeLocalStorageAdapter } from '@/main/factories/cache/local-storage-adapter-factory'
import { UpdateCurrentAccount } from '@/domain/usecases'
import { LocalUpdateCurrentAccount } from '@/data/usecases/update-current-account/local-update-current-account'

export const makeLocalUpdateCurrentAccount = (): UpdateCurrentAccount => {
  return new LocalUpdateCurrentAccount(makeLocalStorageAdapter())
}
