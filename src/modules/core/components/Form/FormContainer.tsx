import { Formik, Form, FormikHelpers, FormikValues } from 'formik'
import * as Yup from 'yup'

interface FormContainerProps<T extends FormikValues> {
  initialValues: T
  validationSchema: Yup.ObjectSchema<T>
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void
  children: React.ReactNode
  className?: string
}

const FormContainer = <T extends FormikValues>({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  className
}: FormContainerProps<T>) => (
  <Formik 
    initialValues={initialValues} 
    validationSchema={validationSchema} 
    onSubmit={(values, formikHelpers) => onSubmit(values, formikHelpers)}
  >
    <Form
      className={className}
    >
      {children}
    </Form>
  </Formik>
)

export default FormContainer
