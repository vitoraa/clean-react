import { makeApiURL } from '@/main/factories/http/api-url-factory'
import { LoadSurveyResult } from '@/domain/usecases'
import { makeAuthorizeHttpGetClientDecorator } from '../../decorators'
import { RemoteLoadSurveyResult } from '@/data/usecases'

export const makeRemoteLoadSurveyResult = (id: string): LoadSurveyResult => {
  return new RemoteLoadSurveyResult(makeApiURL(`/surveys/${id}/results`), makeAuthorizeHttpGetClientDecorator())
}
