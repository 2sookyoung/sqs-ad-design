import Spinner from '@components/loading/Spinner'
import * as SC from './ButtonMui.styles'

const ButtonMui = ({ role = 'primary', size = 'sm', children, isLoading = false, ...props }) => {
  return (
    <>
      {role === 'primary' && (
        <SC.Primary size={size} {...props}>
          {isLoading ? <Spinner size={size} /> : children}
        </SC.Primary>
      )}
      {role === 'secondary' && (
        <SC.Secondary size={size} {...props}>
          {isLoading ? <Spinner size={size} /> : children}
        </SC.Secondary>
      )}
      {role === 'outline' && (
        <SC.Outline size={size} {...props}>
          {isLoading ? <Spinner size={size} /> : children}
        </SC.Outline>
      )}
      {role === 'text' && (
        <SC.TextButton size={size} {...props}>
          {isLoading ? <Spinner size={size} /> : children}
        </SC.TextButton>
      )}
    </>
  )
}

export default ButtonMui
