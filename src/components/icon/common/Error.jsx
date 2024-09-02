import React from 'react'

export const ErrorIcon = ({ width = 20, height = 20, color = '#FF3366', ...props }) => {
  // * 기존 팁모달에서 쓰이는 에러아이콘
  return (
    <svg width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10.5" cy="10" r="7" stroke={color} stroke-width="1.2" />
      <line x1="10.5008" y1="6.5" x2="10.5008" y2="10.5" stroke={color} stroke-width="1.4" />
      <line x1="10.5008" y1="11.5" x2="10.5008" y2="13.5" stroke={color} stroke-width="1.4" />
    </svg>
  )
}

export const ErrorSolidIcon = ({ width = 20, height = 20, color = '#FF3366', ...props }) => {
  // * 기존 팁모달에서 쓰이는 에러아이콘
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="10" cy="10" r="7" fill={color} />
      <line x1="10.0008" y1="6.5" x2="10.0008" y2="10.5" stroke="white" stroke-width="1.4" />
      <line x1="10.0008" y1="11.5" x2="10.0008" y2="13.5" stroke="white" stroke-width="1.4" />
    </svg>
  )
}
