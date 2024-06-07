import { FormikValues, useFormikContext } from 'formik'
import FormField from './FormField'

interface DynamicFieldProps<T extends FormikValues> {
  name: string
  condition: (values: T) => boolean
  label: string
  type?: string
  as?: 'input' | 'select'
}

const DynamicField: React.FC<DynamicFieldProps<Pick<FormikValues, 'initialValues'>>> = ({ name, condition, label, type = 'text', as = 'input' }) => {
  const { values } = useFormikContext<Pick<FormikValues, 'initialValues'>>()

  return condition(values) ? <FormField name={name} label={label} type={type} as={as} /> : null
}

export default DynamicField
