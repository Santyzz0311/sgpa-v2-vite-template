import { useFormikContext, FormikValues } from 'formik'
import FormField from './FormField'

interface DynamicFieldProps<T extends FormikValues> {
  name: keyof T
  condition: (values: T) => boolean
  type?: string
  as?: 'input' | 'select'
  inputClassname?: string
  errorClassname?: string
}

const DynamicField = <T extends FormikValues>({
  name,
  condition,
  type = 'text',
  as = 'input',
  inputClassname = '',
  errorClassname = ''
}: DynamicFieldProps<T>) => {
  const { values } = useFormikContext<T>()

  return condition(values) ? (
    <FormField
      name={name as string}
      type={type}
      as={as}
      inputClassname={inputClassname}
      errorClassname={errorClassname}
    />
  ) : null
}

export default DynamicField
