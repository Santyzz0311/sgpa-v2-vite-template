import { UserCredentials } from '@utils/types'
import * as Yup from 'yup'

export const userCredentialsSchema: Yup.ObjectSchema<UserCredentials> = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})