import { useFormikContext } from "formik"

interface ButtonSubmitProps {
  text: string
  className?: string
}

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({ text, className }) => {
  const { isSubmitting } = useFormikContext()

  return (
    <button 
      disabled={isSubmitting}
      type="submit" 
      className={className}
    >
      {text}
    </button>
  )
}
export default ButtonSubmit