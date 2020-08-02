import React, { useState } from 'react'
import Styles from './signup-styles.scss'
import { Header, Footer, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/context/form/form-context'

const SignUp: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    emailError: 'Campo obrigatório',
    nameError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''
  })
  return (
    <div className={Styles.signup}>
      <Header />
      <Context.Provider value={{ state }}>
        <form className={Styles.form}>
          <h2>Criar Conta</h2>
          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />
          <button data-testid="submit" disabled type="submit" className={Styles.submit}> Entrar </button>
          <span className={Styles.link}>Voltar Para o Login</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div >
  )
}

export default SignUp
