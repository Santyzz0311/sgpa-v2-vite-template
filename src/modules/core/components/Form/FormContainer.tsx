import { Formik, Form, FormikValues } from 'formik'

const FormContainer: React.FC<FormikValues> = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  className
}) => (
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

/*
  import { Formik, Form, FormikHelpers, FormikProps, FormikValues } from 'formik'
import * as Yup from 'yup'

interface FormContainerProps<T extends FormikValues> {
  initialValues: T
  validationSchema: Yup.ObjectSchema<T> | Yup.Schema<T>
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void
  children: ((formik: FormikProps<T>) => JSX.Element | JSX.Element[]) | JSX.Element | JSX.Element[]
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
    {(formik) => (
      <Form className={className}>
        {typeof children === 'function' ? children(formik) : children}
      </Form>
    )}
  </Formik>
)

export default FormContainer

*/
