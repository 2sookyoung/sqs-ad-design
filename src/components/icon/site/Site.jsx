export const SitePreviewIcon = ({ width = 280, height = 115, ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 280 115" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0.5 28.5H279.5V111C279.5 112.933 277.933 114.5 276 114.5H3.99999C2.067 114.5 0.5 112.933 0.5 111V28.5Z"
        fill="white"
        stroke="#F9FAFC"
      />
      <rect y="28" width="280" height="40" fill="#F9FAFC" />
      <rect opacity="0.5" x="8" y="76" width="264" height="31" rx="3" fill="#F4F4F6" />
      <g clipPath="url(#clip0_23_12)">
        <rect x="8" y="36" width="264" height="24" rx="12" fill="white" />
      </g>
      <path d="M0 4C0 1.79086 1.79086 0 4 0H276C278.209 0 280 1.79086 280 4V28H0V4Z" fill="#E7E7E7" />
      <rect y="14" width="256" height="14" fill="#F9FAFC" />
      <path d="M0 8C0 3.58172 3.58172 0 8 0V0V24C8 26.2091 6.20914 28 4 28H0V8Z" fill="#E7E7E7" />
      <path d="M8 4C8 1.79086 9.79086 0 12 0H244C246.209 0 248 1.79086 248 4V28H8V4Z" fill="#F9FAFC" />
      <rect x="44" y="8" width="176" height="12" fill="#F9FAFC" />
      <path d="M234.25 11.75L229.75 16.25" stroke="#6D6E70" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M234.25 16.25L229.75 11.75" stroke="#6D6E70" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M248 0H256V28H252C249.791 28 248 26.2091 248 24V0Z" fill="#E7E7E7" />
      <path d="M265.25 14H270.75" stroke="#6D6E70" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M268 11.25V16.75" stroke="#6D6E70" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <clipPath id="clip0_23_12">
          <rect x="8" y="36" width="264" height="24" rx="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const EarthIcon = ({ width = 16, height = 16, color = '#6D6E70', subColor = '#BABABC', ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.857 4.90323C10.3892 2.02258 9.28574 0 8.00161 0C6.71748 0 5.61404 2.02258 5.1462 4.90323H10.857Z"
        fill={color}
      />
      <path
        d="M4.90421 8C4.90421 8.71613 4.94293 9.40323 5.01069 10.0645H10.9893C11.0571 9.40323 11.0958 8.71613 11.0958 8C11.0958 7.28387 11.0571 6.59677 10.9893 5.93548H5.01069C4.94293 6.59677 4.90421 7.28387 4.90421 8Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2827 0.335484C12.5896 1.01935 14.4578 2.7129 15.3805 4.90323H11.8959C11.612 3.06774 11.07 1.42581 10.2827 0.335484ZM0.622706 4.90323C1.54225 2.7129 3.41359 1.01935 5.71728 0.335484C4.93003 1.42581 4.38798 3.06774 4.10728 4.90323H0.622706ZM12.025 5.93548H15.7258C15.9 6.59677 16 7.28387 16 8C16 8.71613 15.9 9.40323 15.7225 10.0645H12.025C12.0928 9.3871 12.1315 8.69355 12.1315 8C12.1315 7.30645 12.0928 6.6129 12.025 5.93548ZM3.97822 5.93548C3.91047 6.6129 3.87175 7.30645 3.87175 8C3.87175 8.69355 3.91047 9.3871 3.97499 10.0645H0.277475C0.103247 9.40323 0 8.71613 0 8C0 7.28387 0.103247 6.59677 0.277475 5.93548H3.97822ZM15.3837 11.0968C14.461 13.2871 12.5896 14.9806 10.2859 15.6645C11.0732 14.5742 11.6152 12.9323 11.8992 11.0968H15.3837ZM5.72051 15.6645C3.41359 14.9806 1.54547 13.2871 0.622706 11.0968H4.10728C4.39121 12.9323 4.93325 14.5742 5.72051 15.6645Z"
        fill={subColor}
      />
      <path
        d="M5.1462 11.0968C5.61404 13.9774 6.71748 16 8.00161 16C9.28574 16 10.3892 13.9774 10.857 11.0968H5.1462Z"
        fill={color}
      />
    </svg>
  )
}
