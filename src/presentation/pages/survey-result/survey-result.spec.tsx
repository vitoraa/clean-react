import { SurveyResult } from '@/presentation/pages'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { ApiContext } from '@/presentation/context'
import { mockAccountModel } from '@/domain/test'

describe('Survey Result Component', () => {
  test('Should present correct initial state', () => {
    render(<ApiContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: () => mockAccountModel() }}>
      < SurveyResult />
    </ApiContext.Provider>)
    const surveyResult = screen.getByTestId('survey-result')
    expect(surveyResult.childElementCount).toBe(0)
    expect(screen.queryByTestId('error')).not.toBeInTheDocument()
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
  })
})
