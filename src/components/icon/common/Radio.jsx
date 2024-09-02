import React from 'react'

export const RadioSelectedIcon = ({ width = 16, height = 16, color = '#9D42FB', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={width} height={height} rx="8" fill={color} />
      <rect x="4.66675" y="4.66663" width="6.66667" height="6.66667" rx="3.33333" fill="white" />
    </svg>
  )
}

export const RadioUnSelectedIcon = ({ width = 16, height = 16, color = '#fff', strokeColor = '#D5D5D7', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="0.333333"
        y="0.333333"
        width="15.3333"
        height="15.3333"
        rx="7.66667"
        fill={color}
        stroke={strokeColor}
        strokeWidth="0.666667"
      />
    </svg>
  )
}
