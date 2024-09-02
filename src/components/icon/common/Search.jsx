import React from 'react'

export const SearchIcon = ({ width = 24, height = 24, strokeColor = '#D5D5D7', strokeWidth = 2, ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11 17C14.866 17 18 13.866 18 10C18 6.13401 14.866 3 11 3C7.13401 3 4 6.13401 4 10C4 13.866 7.13401 17 11 17Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9999 20.0004L16.6499 15.6504"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
