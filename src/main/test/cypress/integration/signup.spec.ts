import * as Helper from '../support/form-helper'
import faker from 'faker'

describe('Signup', () => {
  beforeEach(() => {
    cy.visit('signup')
  })

  it('Should load with correct initial state', () => {
    cy.getByTestId('name').should('have.attr', 'readOnly')
    Helper.testInputStatus('name', 'Campo obrigatório')
    cy.getByTestId('email').should('have.attr', 'readOnly')
    Helper.testInputStatus('email', 'Campo obrigatório')
    cy.getByTestId('password').should('have.attr', 'readOnly')
    Helper.testInputStatus('password', 'Campo obrigatório')
    cy.getByTestId('passwordConfirmation').should('have.attr', 'readOnly')
    Helper.testInputStatus('passwordConfirmation', 'Campo obrigatório')
    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Should present error state if form is invalid', () => {
    cy.getByTestId('name').focus().type(faker.random.alphaNumeric(3))
    Helper.testInputStatus('name', 'Campo inválido')
    cy.getByTestId('email').focus().type(faker.random.words())
    Helper.testInputStatus('email', 'Campo inválido')
    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(3))
    Helper.testInputStatus('password', 'Campo inválido')
    cy.getByTestId('passwordConfirmation').focus().type(faker.random.alphaNumeric(3))
    Helper.testInputStatus('passwordConfirmation', 'Campo inválido')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })
})
