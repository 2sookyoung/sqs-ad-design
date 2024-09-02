import React from 'react'

export const SubIndicatorIcon = ({ width = 14, height = 14, strokeColor = '#D5D5D7', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 4V9H9" stroke={strokeColor} />
    </svg>
  )
}
