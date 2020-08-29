import { makeApiURL } from '@/main/factories/http/api-url-factory'
import { SaveSurveyResult } from '@/domain/usecases'
import { makeAuthorizeHttpClientDecorator } from '../../decorators'
import { RemoteSaveSurveyResult } from '@/data/usecases'

export const makeRemoteSaveSurveyResult = (id: string): SaveSurveyResult => {
  return new RemoteSaveSurveyResult(makeApiURL(`/surveys/${id}/results`), makeAuthorizeHttpClientDecorator())
}
