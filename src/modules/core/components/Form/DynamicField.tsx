import FormField from './FormField'

interface DynamicFieldProps {
  name: string
  condition: boolean
  type?: string
  as?: 'input' | 'select'
  inputClassname?: string
  errorClassname?: string
}

const DynamicField = ({ name, condition, type = 'text', as = 'input', inputClassname = '', errorClassname = '' }: DynamicFieldProps) => {

  return condition ? <FormField name={name} type={type} as={as} inputClassname={inputClassname} errorClassname={errorClassname} /> : null
}

export default DynamicField
