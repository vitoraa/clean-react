import { SurveyResult } from '@/presentation/pages'
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { ApiContext } from '@/presentation/context'
import { mockAccountModel, LoadSurveyResultSpy } from '@/domain/test'

type SutTypes = {
  loadSurveyResultSpy: LoadSurveyResultSpy
}

const makeSut = (loadSurveyResultSpy = new LoadSurveyResultSpy()): SutTypes => {
  render(<ApiContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: () => mockAccountModel() }}>
    < SurveyResult loadSurveyResult={loadSurveyResultSpy} />
  </ApiContext.Provider>)
  return { loadSurveyResultSpy }
}

describe('Survey Result Component', () => {
  test('Should present correct initial state', async () => {
    makeSut()
    const surveyResult = screen.getByTestId('survey-result')
    expect(surveyResult.childElementCount).toBe(0)
    expect(screen.queryByTestId('error')).not.toBeInTheDocument()
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
    await waitFor(() => surveyResult)
  })

  test('Should call LoadSurveyList', async () => {
    const { loadSurveyResultSpy } = makeSut()
    await waitFor(() => screen.getByTestId('survey-result'))
    expect(loadSurveyResultSpy.callsCount).toBe(1)
  })
})
