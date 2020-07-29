import React, { useContext } from 'react'
import Styles from './form-status-styles.scss'
import Spinner from '../spinner/spinner'
import Context from '@/presentation/context/form/form-context'

type Props = React.HTMLAttributes<HTMLElement>

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {errorMessage && <span className={Styles.error}>{errorMessage}</span>}
    </div>
  )
}

export default FormStatus
