import { FormikHelpers } from 'formik'
import { ButtonSubmit, DynamicField, FormContainer, FormField, FormSection } from '@core/components/Form'
import { randomFormInitialValues } from '@pecc/utils/constants/initialValues'
import { RandomFormValues } from '@utils/types'
import { randomFormSchema } from '@pecc/utils/validationSchema'
import styles from './styles.module.css'

const RandomForm: React.FC = () => {
  const handleSubmit = (values: RandomFormValues, formikHelpers: FormikHelpers<RandomFormValues>) => {
    console.log(values)
    formikHelpers.setSubmitting(false)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dynamic Form</h1>
      <FormContainer 
        initialValues={randomFormInitialValues} 
        validationSchema={randomFormSchema} 
        onSubmit={handleSubmit}
        className={styles.formSection}
      >
        <FormSection>
          <FormField name="tipoServicio" as="select" inputClassname={styles.selectInput}>
            <option value="">Select an option</option>
            <option value="otroSi">Otro si</option>
            <option value="otroNo">Otro no</option>
          </FormField>
        </FormSection>
        <FormSection>
          <DynamicField inputClassname={styles.input} name="motivoProceso" condition={(values: RandomFormValues) => values.tipoServicio === 'otroSi'} />
          <DynamicField inputClassname={styles.input} name="desmotivoProceso" condition={(values: RandomFormValues) => values.tipoServicio === 'otroNo'} />
        </FormSection>
      
        <FormSection>
          <FormField name="tipoProceso" inputClassname={styles.selectInput} as="select">
            <option value="">Selecciona una opcion</option>
            <option value="proceso1">proceso1</option>
            <option value="proceso2">proceso2</option>
          </FormField>
        </FormSection>
        <FormSection>
          <DynamicField inputClassname={styles.input} name="motproc1" condition={(values: RandomFormValues) => values.tipoProceso === 'proceso1'} />
          <DynamicField inputClassname={styles.input} name="motproc2" condition={(values: RandomFormValues) => values.tipoProceso === 'proceso2'} />
        </FormSection>

        <ButtonSubmit 
          text='Enviar'
          className={styles.button} 
        />
      </FormContainer>
    </div>
  )
}

export default RandomForm
