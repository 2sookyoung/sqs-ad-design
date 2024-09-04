import styled from '@emotion/styled'
import { color } from '@styles/values/color'

import { typo } from '@styles/values/typography'
import { FlexBox, FlexColumn } from '@styles/global/Flex.styles'

/**! 리뉴얼 카드:: 페이지에서 사용하는 카드폼 레이아웃 */
export const CardFormRowContainer = styled(props => <FlexBox {...props} />)`
  width: 100%;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: flex-start;
  ${({ direction }) => direction === 'column' && `align-items: flex-start;`}

  h3:not(.ck-editor h3) {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: 200px;
    ${typo.body[14]}
    color: ${color.grayscale.gray[600]};
    word-break: keep-all;
    line-height: 22px;
  }
  .label {
    color: ${color.grayscale.gray[800]} !important;
    width: fit-content !important;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ disabled, isInDialog }) => (disabled || isInDialog ? 'none' : '#fff')};
  border-radius: 10px;
  box-shadow: ${({ disabled, isInDialog }) =>
    disabled || isInDialog ? 'none' : `rgba(0, 0, 0, 0.03) 0px 2px 15px 0px`};
`

export const CardBottom = styled(FlexColumn)`
  gap: ${({ gap }) => gap || '20px'}; // 기본 gap 20px
  padding: 20px;
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
  pointer-events: ${({ disabled }) => disabled && 'none'};
`

export const CardForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const CardFormRow = styled(FlexBox)`
  width: 100%;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: flex-start;
  gap: ${({ gap }) => gap ?? 0};
  ${({ direction }) => direction === 'column' && `align-items: flex-start;`}

  .label {
    color: ${color.grayscale.gray[800]} !important;
    width: fit-content !important;
  }
`

export const CardFormRowBody = styled.div`
  /* flex-grow: 1; */
`
export const CardFormRowTitle = styled.span`
  width: 180px;
  font-weight: 700;
  ${typo.body[14]}
  color: ${color.grayscale.gray[800]};
  white-space: pre-line;
`
export const CardFormRowSubTitle = styled(CardFormRowTitle)`
  color: ${color.grayscale.gray[600]};
`

export const CardTop = styled(FlexBox)`
  justify-content: ${({ justify }) => justify ?? 'flex-start'};
  padding: 0 20px;
  height: 56px;
  border-bottom: 1px solid ${color.border.default};

  h2.left,
  h2 {
    position: relative;
    ${typo.body[14]}
    color: ${color.grayscale.gray[800]};
  }

  .select-placeholder {
    font-size: 12px;
  }
`
