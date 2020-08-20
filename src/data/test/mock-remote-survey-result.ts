import faker from 'faker'
import { RemoteLoadSurveyResult } from '@/data/usecases'

export const mockRemoteSurveyResultModel = (): RemoteLoadSurveyResult.Model => ({
  question: faker.random.words(10),
  date: faker.date.recent().toISOString(),
  answers: [{
    image: faker.internet.url(),
    answer: faker.random.words(4),
    count: faker.random.number(100),
    percent: faker.random.number(),
    isCurrentAccountAnswer: true
  },
  {
    answer: faker.random.words(4),
    count: faker.random.number(100),
    percent: faker.random.number(),
    isCurrentAccountAnswer: false
  }]
})
