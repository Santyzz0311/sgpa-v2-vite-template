interface FormSectionProps {
  children: React.ReactNode
  className?: string
}

const FormSection: React.FC<FormSectionProps> = ({ children, className }) => (
  <div
    className={className}
  >
    {children}
  </div>
)

export default FormSection
