import React from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import Input from './input'
import Context from '@/presentation/context/form/form-context'

const makeSut = (): RenderResult => {
  return render(
    <Context.Provider value={{ state: {} }}>
      <Input name='field' />
    </Context.Provider >
  )
}

describe('Input Component', () => {
  test('Should call axios with correct values', () => {
    const { getByTestId } = makeSut()
    const input = getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  test('Should remove readOnly on focus', () => {
    const { getByTestId } = makeSut()
    const input = getByTestId('field') as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })

  test('Should focus input on label click', () => {
    const { getByTestId } = makeSut()
    const input = getByTestId('field')
    const label = getByTestId('field-label')
    fireEvent.click(label)
    expect(document.activeElement).toBe(input)
  })
})
