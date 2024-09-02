import * as SC from './Label.styles'
import PropTypes from 'prop-types'

const Label = ({ type = 'basic', color = 'gray', text, width, ...props }) => {
  return (
    <SC.LabelContainer type={type} color={color} width={width} {...props}>
      <span>{text}</span>
    </SC.LabelContainer>
  )
}

Label.propTypes = {
  /**
   * 라벨에 보여질 텍스트 전달
   */
  text: PropTypes.string,
  /**
   * basic,point,plan 총 세가지의 타입 전달
   */
  type: PropTypes.string,
  /**
   * *plan* 일 경우 gray, primary(default) 가지의 타입 전달가능.
   * *basic,point* 일 경우 gray(default), primary, blue, red 가지의 타입 전달가능
   */
  color: PropTypes.string,
  /**
   * 라벨의 width 를 직접 px로 설정
   */
  width: PropTypes.string,
}

Label.defaultProps = {
  type: 'basic',
  text: '기본',
  color: 'gray',
}

export default Label
