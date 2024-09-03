import React from 'react'
import * as SC from './Loading.styles'

const Spinner = ({ size }) => {
  return (
    <SC.SpinItem xmlns="http://www.w3.org/2000/svg" fill="none" className="spin-item" viewBox="0 0 24 24" size={size}>
      <circle cx={'12'} cy={'12'} r={'10'} stroke={'#ffffff'} strokeWidth={4} />
      <path
        fill="#ffffff"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </SC.SpinItem>
  )
}

export default Spinner
