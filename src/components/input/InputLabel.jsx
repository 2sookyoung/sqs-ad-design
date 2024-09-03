import React from 'react'
import PropTypes from 'prop-types'
import * as SC from './Input.styles'

const InputLabel = ({ required, label, description }) => {
  return (
    <>
      <SC.LabelTitle>
        <span>{label}</span> {required && <SC.InputRequired>*</SC.InputRequired>}
      </SC.LabelTitle>
      {description && <SC.LabelDesc>{description}</SC.LabelDesc>}
    </>
  )
}

InputLabel.propTypes = {
  /**
   * 필수입력 표시여부
   */
  required: PropTypes.boolean,
  /**
   * 인풋 라벨에 들어갈 텍스트
   */
  label: PropTypes.string,
}

InputLabel.defaultProps = {
  required: false,
  label: '사업자 등록번호',
}

export default InputLabel
