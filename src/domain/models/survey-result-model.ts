export type SurveyResultModel = {
  question: string
  date: Date
  answers: Answer[]
}

export type Answer = {
  image?: string
  answer: string
  count: number
  percent: number
  isCurrentAccountAnswer: boolean
}
