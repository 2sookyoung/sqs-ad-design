import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { color } from '@styles/values/color'
import { FlexBox } from '@styles/global/Flex.styles'

const getColorByType = (type, pickColor) => {
  switch (type) {
    case 'plan':
      if (pickColor === 'gray') {
        return css`
          background-color: ${color.grayscale.gray['000']};
          color: ${color.grayscale.gray[700]};
        `
      }
      return css`
        //starter, growth (유료)플랜에 적용되는 컬러
        background-color: ${color.primary.purple['000']};
        color: ${color.primary.purple[500]};
      `

    case 'basic':
    case 'point':
      if (pickColor === 'primary') {
        return css`
          background-color: ${color.primary.purple['000']};
          color: ${color.primary.purple[500]};
        `
      }
      if (pickColor === 'blue') {
        return css`
          background-color: ${color.system.success.blue[100]};
          color: ${color.system.success.blue[400]};
        `
      }
      if (pickColor === 'red') {
        return css`
          background-color: ${color.system.error.red[100]};
          color: ${color.system.error.red[500]};
        `
      }
      return css`
        //gray
        background-color: ${color.grayscale.gray['000']};
        color: ${color.grayscale.gray[500]};
      `
  }
}

const getLabelByType = type => {
  switch (type) {
    case 'plan':
      return css`
        height: 24px;
        font-size: 11px;
        padding: 4px 8px;
        border-radius: 999px;
        line-height: 16px;
      `
    case 'point':
      return css`
        height: 22px;
        font-size: 12px;
        padding: 2px 6px;
        border-radius: 2px;
        line-height: 18px;
      `
    default:
      return css`
        height: 20px;
        font-size: 11px;
        padding: 2px 4px;
        border-radius: 2px;
        line-height: 16px;
      `
  }
}

export const LabelContainer = styled(FlexBox)`
  width: ${({ width }) => width ?? 'fit-content'};
  height: ${({ type }) => getLabelByType(type)};
  font-weight: 500;
  font-size: ${({ type }) => getLabelByType(type)};
  padding: ${({ type }) => getLabelByType(type)};
  border-radius: ${({ type }) => getLabelByType(type)};
  ${({ type, color }) => getColorByType(type, color)};
`
