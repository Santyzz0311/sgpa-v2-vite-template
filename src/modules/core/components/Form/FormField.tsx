import { Field, ErrorMessage } from 'formik'

interface FormFieldProps {
  name: string
  type?: string
  as?: 'input' | 'select'
  children?: React.ReactNode
  errorClassname?: string
  inputClassname?: string
}

const FormField: React.FC<FormFieldProps> = ({ name, type = 'text', as = 'input', children, errorClassname, inputClassname }) => (
  <>
    <Field 
      name={name} 
      type={type} 
      as={as}
      className={inputClassname}
    >
      {as === 'select' ? children : null}
    </Field>
    <ErrorMessage name={name} component="div" className={errorClassname} />
  </>
)

export default FormField
