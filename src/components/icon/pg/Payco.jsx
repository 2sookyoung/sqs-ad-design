import React from 'react'

export const PaycoIcon = ({ width = 32, height = 32, color = '#E7322D', ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <circle cx="16" cy="16" r="16" fill={color} />
      <rect x="11.5" y="8.35303" width="12" height="15.5294" fill="url(#pattern0_5909_1727)" />
      <defs>
        <pattern id="pattern0_5909_1727" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_5909_1727" transform="scale(0.0294118 0.0227273)" />
        </pattern>
        <image
          id="image0_5909_1727"
          width="34"
          height="44"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAsCAYAAAAATWqyAAAACXBIWXMAAAsSAAALEgHS3X78AAABmElEQVRYhe2Y3W3CMBCAP6K+lw3KBs0GMRswQroBI3QENoARGCGZoGGDsEGY4PrgGEUuEOfn8EP5JEuWcOJP9t0ReyEidFgCKdNogGrwUyLi2k7mpWrfaTpz3G2uc5xZwqcWkbxPxChLdKlEJL0lkgCbiTExhE/gB8j9HxKmB+cY9ngySQQJx57OIsQUATi6TmyRD9otWohIAWQ9D5yAbc8YA6ywwf8+QOYMrBCRIiDtilsp96BtRaQZkNap1tbssCt0CRy/0YyRCisUgtEO1lAR9axpgDJgXBY7fa/8K5G+GgVQaovkgeMaTZGU8KyptEQMUBBe6o9vM06eti0nLC4cZ6AKFckA6R01jm+In74n4ABxRS50siqWyAX73XI9iM0ZrEMkDN5p8NkrUmIz68+R9FkiJbDGrkR9a4Dm1pTYona4N/kYkXP7wke4W4BRtwGhIjVt4dEidkG78hLxeYn4vER8EmwBik6CLcN9qMsuRGSJrZyPPnTXhAmPxm2N4f4Vwpe2BNgVcf0V9lbIXbDV2D86dQmAX5brOwGXMVOZAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  )
}
