import { useState } from 'react'
import { FormContainer, FormSection, FormField, ButtonSubmit } from '@core/components/Form'
import { userCredentialsSchema } from '@auth/utils/validationSchema'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined'
import styles from './styles.module.css'
import useAuth from '@auth/hooks/useAuth'
import { UserCredentials } from '@utils/types'
import { initialUserCredentials } from '@auth/utils/constants'
import Loading from '@core/components/Loading'
import { FormikHelpers } from 'formik'
import { useNavigate } from 'react-router-dom'
import { PRIVATE_ROUTES } from '@utils/enums'

const SignInForm = () => {
  const { logIn } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (values: UserCredentials, formikHelpers: FormikHelpers<UserCredentials>) => {
    setLoading(true)
    try {
      setTimeout(() => {
        logIn(values)
        setLoading(false)
        formikHelpers.setSubmitting(false)
        navigate(PRIVATE_ROUTES.PRIVATE, { replace: true })
      }, 2000)
      
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message)
      } else {
        console.error('An unexpected error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  return loading
    ? <Loading />
    : (
      <FormContainer
        initialValues={initialUserCredentials}
        validationSchema={userCredentialsSchema}
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <FormSection
          className={styles.formSection}
        >
          <AccountCircleOutlinedIcon />
          <FormField 
            name="email" 
            type="email" 
            inputClassname={styles.input}
            errorClassname={styles.error}
          />
        </FormSection>
        <FormSection
          className={styles.formSection}
        >
          <KeyOutlinedIcon />
          <FormField 
            name="password" 
            type="password" 
            inputClassname={styles.input}
            errorClassname={styles.error}
          />
        </FormSection>
        <ButtonSubmit text='Iniciar sesion' className={styles.buttonSubmit} />
      </FormContainer>
    )  
}
export default SignInForm