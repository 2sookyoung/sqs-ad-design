import React from 'react'

export const CloseIcon = ({ width = 32, height = 32, color = '#959595', ...props }) => {
  //*기존 clear.svg
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_153_5128)">
        <path
          d="M24.4 7.61427C23.88 7.09427 23.04 7.09427 22.52 7.61427L16 14.1209L9.47996 7.60094C8.95996 7.08094 8.11996 7.08094 7.59996 7.60094C7.07996 8.12094 7.07996 8.96094 7.59996 9.48094L14.12 16.0009L7.59996 22.5209C7.07996 23.0409 7.07996 23.8809 7.59996 24.4009C8.11996 24.9209 8.95996 24.9209 9.47996 24.4009L16 17.8809L22.52 24.4009C23.04 24.9209 23.88 24.9209 24.4 24.4009C24.92 23.8809 24.92 23.0409 24.4 22.5209L17.88 16.0009L24.4 9.48094C24.9066 8.97427 24.9066 8.12094 24.4 7.61427Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_153_5128">
          <rect width={32} height={32} fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
export const CloseCircleIcon = ({ width = 20, height = 20, ...props }) => {
  //이미지에서 사용중
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="10" cy="10" r="8" fill="black" fill-opacity="0.6" />
      <line x1="7.18804" y1="7.15376" x2="12.8449" y2="12.8106" stroke="white" stroke-width="1.25" />
      <line x1="7.15571" y1="12.81" x2="12.8126" y2="7.15316" stroke="white" stroke-width="1.25" />
    </svg>
  )
}

export const CloseSquareIcon = ({ width = 32, height = 32, color = '#232323', ...props }) => {
  //* 기존 popupBannerClose.svg 아이콘
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.26703 24L8 22.733L14.733 16L8 9.26703L9.26703 8L16 14.733L22.733 8L24 9.26703L17.267 16L24 22.733L22.733 24L16 17.267L9.26703 24Z"
        fill={color}
      />
    </svg>
  )
}

export const CloseTagIcon = ({ width = 10, height = 10, color = '#5D5D5F', ...props }) => {
  // * 기존 xicon.svg
  return (
    <svg width={width} height={height} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.20001 0.806678C8.94001 0.546678 8.52001 0.546678 8.26001 0.806678L5.00001 4.06001L1.74001 0.800011C1.48001 0.540011 1.06001 0.540011 0.800011 0.800011C0.540011 1.06001 0.540011 1.48001 0.800011 1.74001L4.06001 5.00001L0.800011 8.26001C0.540011 8.52001 0.540011 8.94001 0.800011 9.20001C1.06001 9.46001 1.48001 9.46001 1.74001 9.20001L5.00001 5.94001L8.26001 9.20001C8.52001 9.46001 8.94001 9.46001 9.20001 9.20001C9.46001 8.94001 9.46001 8.52001 9.20001 8.26001L5.94001 5.00001L9.20001 1.74001C9.45334 1.48668 9.45334 1.06001 9.20001 0.806678Z"
        fill={color}
      />
    </svg>
  )
}
