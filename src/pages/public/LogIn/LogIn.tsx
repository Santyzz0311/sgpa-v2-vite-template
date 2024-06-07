import SignInForm from '@auth/components/SignInForm/SignInForm'
import styles from './styles.module.css'

export default function LogIn() {
  return (
    <main
      className={styles.container}
    >
      <section className={styles.formContainer}>
        <h1 className={styles.title}>Inicio de sesion</h1>
        <SignInForm />
      </section>
    </main>
  )
}

