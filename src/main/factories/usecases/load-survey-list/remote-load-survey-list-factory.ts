import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'
import { makeApiURL } from '@/main/factories/http/api-url-factory'
import { LoadSurveyList } from '@/domain/usecases'
import { RemoteLoadSurveyList } from '@/data/usecases/load-survey-list/remote-load-survey-list'

export const makeRemoteLoadSurveyList = (): LoadSurveyList => {
  return new RemoteLoadSurveyList(makeApiURL('/surveys'), makeAxiosHttpClient())
}
