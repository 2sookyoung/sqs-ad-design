import React from 'react'

export const CalendarIcon = ({ width = 18, height = 18, strokeColor = '#B2B2B2', strokeWidth = 1.5, ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M3 6H15M12 1.5V3M6 1.5V3M5.40015 3H12.6001C13.4402 3 13.86 3 14.1808 3.16349C14.4631 3.3073 14.6929 3.53679 14.8367 3.81903C15.0002 4.1399 15 4.55988 15 5.39996V12.6C15 13.44 15.0002 13.8602 14.8367 14.181C14.6929 14.4633 14.4631 14.6927 14.1808 14.8365C13.86 15 13.4402 15 12.6001 15H5.40015C4.56007 15 4.13972 15 3.81885 14.8365C3.5366 14.6927 3.3073 14.4633 3.16349 14.181C3 13.8602 3 13.44 3 12.6V5.39996C3 4.55988 3 4.1399 3.16349 3.81903C3.3073 3.53679 3.5366 3.3073 3.81885 3.16349C4.13972 3 4.56007 3 5.40015 3Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ClockIcon = ({ width = 18, height = 18, strokeColor = '#B2B2B2', strokeWidth = 1.5, ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9 5.25V9H12.75M9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9C15.75 12.7279 12.7279 15.75 9 15.75Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
