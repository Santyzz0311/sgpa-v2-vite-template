import { useFormikContext } from 'formik'
import FormField from './FormField'

interface DynamicFieldProps<T> {
  name: string
  condition: (values: T) => boolean
  type?: string
  as?: 'input' | 'select'
  inputClassname?: string
  errorClassname?: string
}

const DynamicField = <T,>({ name, condition, type = 'text', as = 'input', inputClassname = '', errorClassname = '' }: DynamicFieldProps<T>) => {
  const { values } = useFormikContext<T>()

  return condition(values) ? <FormField name={name} type={type} as={as} inputClassname={inputClassname} errorClassname={errorClassname} /> : null
}

export default DynamicField
