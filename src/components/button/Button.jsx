import * as SC from './Button.styles'
import * as SpinnerSC from '@components/loading/Loading.styles'

const Button = ({
  type = 'button',
  role = 'primary',
  size = 'md',
  children,
  active,
  disabled = false,
  isLoading,
  ...props
}) => {
  return (
    <>
      <SC.BasicButton size={size} role={role} type={type} disabled={disabled || isLoading} {...props}>
        {isLoading ? <SpinnerSC.Spinner /> : <>{children}</>}
      </SC.BasicButton>
    </>
  )
}

export default Button
