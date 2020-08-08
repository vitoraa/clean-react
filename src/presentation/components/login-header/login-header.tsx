import React, { memo } from 'react'
import Styles from './login-header-styles.scss'
import Logo from '../logo/logo'

type Props = React.HTMLAttributes<HTMLElement>

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.headerWrap}>
      <Logo />
      <h1>4Dev - Enquete para Programadores</h1>
    </header>)
}

export default memo(LoginHeader)
