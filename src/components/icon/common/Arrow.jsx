import React from 'react'

export const ArrowUpIcon = ({ width = 16, height = 16, color = '#5D5D5F', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.5267 9.93914C11.7867 9.67914 11.7867 9.25914 11.5267 8.99914L8.46668 5.93914C8.20668 5.67914 7.78668 5.67914 7.52668 5.93914L4.46668 8.99914C4.20668 9.25914 4.20668 9.67914 4.46668 9.93914C4.72668 10.1991 5.14668 10.1991 5.40668 9.93914L8.00001 7.35247L10.5867 9.93914C10.8467 10.1925 11.2733 10.1925 11.5267 9.93914Z"
        fill={color}
      />
    </svg>
  )
}

export const ArrowDownIcon = ({ width = 16, height = 16, color = '#5D5D5F', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.46673 5.93977C4.20673 6.19977 4.20673 6.61977 4.46673 6.87977L7.52673 9.93977C7.78673 10.1998 8.20673 10.1998 8.46673 9.93977L11.5267 6.87977C11.7867 6.61977 11.7867 6.19977 11.5267 5.93977C11.2667 5.67977 10.8467 5.67977 10.5867 5.93977L7.99339 8.52643L5.40673 5.93977C5.14673 5.68643 4.72006 5.68643 4.46673 5.93977Z"
        fill={color}
      />
    </svg>
  )
}

export const ArrowDoubleIcon = ({ width = 24, height = 24, strokeColor = '#B2B2B2', strokeWidth = 2, ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16 13L12 17L8 13M16 7L12 11L8 7"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const ArrowDropdownIcon = ({ width = 8, height = 6, ...props }) => {
  return (
    <svg
      className="select-icon"
      width={width}
      height={height}
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3.26361 4.96163L0.54892 2.40798C0.218284 2.09696 0.144326 1.74092 0.327046 1.33986C0.509766 0.938808 0.836051 0.738281 1.3059 0.738281H6.68308C7.15293 0.738281 7.47922 0.938808 7.66194 1.33986C7.84466 1.74092 7.7707 2.09696 7.44006 2.40798L4.72537 4.96163C4.62096 5.05985 4.50785 5.13351 4.38603 5.18262C4.26422 5.23173 4.13371 5.25628 3.99449 5.25628C3.85528 5.25628 3.72476 5.23173 3.60295 5.18262C3.48114 5.13351 3.36802 5.05985 3.26361 4.96163Z" />
    </svg>
  )
}

export const ArrowLeftIcon = ({ width = 24, height = 24, color = '#B2B2B2', ...props }) => {
  //pagination 왼쪽화살표
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.71 15.8805L10.83 12.0005L14.71 8.12047C15.1 7.73047 15.1 7.10047 14.71 6.71047C14.32 6.32047 13.69 6.32047 13.3 6.71047L8.70998 11.3005C8.31998 11.6905 8.31998 12.3205 8.70998 12.7105L13.3 17.3005C13.69 17.6905 14.32 17.6905 14.71 17.3005C15.09 16.9105 15.1 16.2705 14.71 15.8805Z"
        fill={color}
      />
    </svg>
  )
}

export const ArrowRightIcon = ({ width = 24, height = 24, color = 'currentColor', ...props }) => {
  //pagination 오른쪽화살표
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.29002 8.11953L13.17 11.9995L9.29002 15.8795C8.90002 16.2695 8.90002 16.8995 9.29002 17.2895C9.68002 17.6795 10.31 17.6795 10.7 17.2895L15.29 12.6995C15.68 12.3095 15.68 11.6795 15.29 11.2895L10.7 6.69953C10.31 6.30953 9.68002 6.30953 9.29002 6.69953C8.91002 7.08953 8.90002 7.72953 9.29002 8.11953Z"
        fill={color}
      />
    </svg>
  )
}

export const ArrowGuideUpIcon = ({ width = 24, height = 24, color = '#D5D5D7', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.7364 10.0393L15.4511 12.593C15.7817 12.904 15.8557 13.2601 15.673 13.6611C15.4902 14.0622 15.1639 14.2627 14.6941 14.2627L9.31692 14.2627C8.84707 14.2627 8.52078 14.0622 8.33806 13.6611C8.15534 13.2601 8.2293 12.904 8.55994 12.593L11.2746 10.0393C11.379 9.94113 11.4922 9.86747 11.614 9.81836C11.7358 9.76925 11.8663 9.7447 12.0055 9.7447C12.1447 9.7447 12.2752 9.76925 12.3971 9.81836C12.5189 9.86747 12.632 9.94113 12.7364 10.0393Z"
        fill={color}
      />
    </svg>
  )
}

export const ArrowGuideDownIcon = ({ width = 24, height = 24, color = '#D5D5D7', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.2636 13.9607L8.54892 11.407C8.21828 11.096 8.14433 10.7399 8.32705 10.3389C8.50977 9.93783 8.83605 9.7373 9.3059 9.7373H14.6831C15.1529 9.7373 15.4792 9.93783 15.6619 10.3389C15.8447 10.7399 15.7707 11.096 15.4401 11.407L12.7254 13.9607C12.621 14.0589 12.5078 14.1325 12.386 14.1816C12.2642 14.2308 12.1337 14.2553 11.9945 14.2553C11.8553 14.2553 11.7248 14.2308 11.603 14.1816C11.4811 14.1325 11.368 14.0589 11.2636 13.9607Z"
        fill={color}
      />
    </svg>
  )
}

/** 각진 화살표 */
export const AngularArrowDownIcon = ({ width = 24, height = 24, color = '#D5D5D7', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_1083_9062)">
        <path d="M6.175 7.1582L10 10.9749L13.825 7.1582L15 8.3332L10 13.3332L5 8.3332L6.175 7.1582Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_1083_9062">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const AngularArrowUpIcon = ({ width, height, color, ...props }) => {
  return <AngularArrowDownIcon style={{ rotate: '180deg' }} {...props} />
}
