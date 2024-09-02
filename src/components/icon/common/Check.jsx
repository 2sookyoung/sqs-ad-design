import React from 'react'

export const CheckedIcon = ({ width = 16, height = 16, color = '#9D42FB', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={width} height={height} rx="4" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.4711 4.86121C12.5961 4.98623 12.6663 5.15576 12.6663 5.33254C12.6663 5.50932 12.5961 5.67885 12.4711 5.80387L7.13778 11.1372C7.01276 11.2622 6.84323 11.3324 6.66645 11.3324C6.48967 11.3324 6.32014 11.2622 6.19512 11.1372L3.52845 8.47054C3.40701 8.34481 3.33981 8.1764 3.34133 8.00161C3.34285 7.82681 3.41297 7.6596 3.53657 7.53599C3.66018 7.41239 3.82738 7.34228 4.00218 7.34076C4.17698 7.33924 4.34538 7.40643 4.47112 7.52787L6.66645 9.72321L11.5285 4.86121C11.6535 4.73623 11.823 4.66602 11.9998 4.66602C12.1766 4.66602 12.3461 4.73623 12.4711 4.86121Z"
        fill="white"
      />
    </svg>
  )
}

export const UnCheckedIcon = ({ width = 16, height = 16, color = '#fff', strokeColor = '#D5D5D7', ...props }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x="0.333333"
        y="0.333333"
        width="15.3333"
        height="15.3333"
        rx="3.66667"
        fill={color}
        stroke={strokeColor}
        strokeWidth="0.666667"
      />
    </svg>
  )
}
