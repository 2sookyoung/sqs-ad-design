import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { FlexColumn } from '@styles/global/Flex.styles'

import { color } from '@styles/values/color'
import { typo } from '@styles/values/typography'

export const showModalBg = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`
export const showModalBox = keyframes`
  from { 
    margin-top: -20px;
  }
  to { margin-top: 0 }
`

export const Dialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  font-family: 'Pretendard';
  box-sizing: border-box;
  animation: ${showModalBg} 0.3s;
`

export const DialogBackground = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`

export const DialogContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 98;

  width: ${({ size }) => (size === 'sm' ? '420px' : '720px')};
  min-height: ${({ size }) => (size === 'sm' ? '200px' : '300px')};
  max-height: 90vh;

  background: white;
  border-radius: 20px;
  animation: ${showModalBox} 0.3s;
`

export const DialogHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  min-height: 60px;
  padding: 18px 20px;
  box-sizing: border-box;
`

export const DialogTopButtonHeader = styled(DialogHeader)``

export const DialogTitle = styled.h5`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;

  ${typo.title[20]}
  color: ${color.grayscale.gray[800]};
`

export const DialogTopButtonTitle = styled(DialogTitle)`
  width: auto;
  flex-grow: 1;
`

export const DialogClose = styled.div`
  position: absolute;
  right: 20px;
  cursor: pointer;
`

export const DialogBodyView = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  overflow-y: auto;
`
export const DialogBody = styled.main`
  padding: 20px;
  white-space: pre-wrap;
  box-sizing: border-box;
`

export const DialogFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
  gap: 12px;
  width: 100%;
  padding: 16px 20px 20px;
  border-radius: 0 0 20px 20px;
  box-sizing: border-box;
`

export const DialogFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const DialogFormRow = styled.div`
  display: flex;
  // form row body 가 두 줄 이상일때는 flex-start 로
  align-items: ${({ align }) => align ?? 'center'};

  ${({ direction, gap }) =>
    direction === 'column' &&
    `
    flex-direction: ${direction};
    align-items: stretch;
    gap: ${gap ?? '2px'};

    h6 {
      width: 100%;
    }
  `};
`

export const DialogFormRowTitle = styled.h6`
  width: ${({ size }) => (size === 'sm' ? '84px' : size === 'md' ? '160px' : '200px')};
  height: 22px;
  line-height: 22px;
  color: ${color.grayscale.gray[800]};
  ${typo.body[14]}
`

export const DialogFormRowTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const DialogFormRowBody = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
`

export const DialogLoading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`

/**리뉴얼 모달 폼디자인 */
export const DialogFormCol = styled(FlexColumn)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;

  .MuiFormGroup-root,
  div {
    gap: 12px;
  }
`

export const DialogFormLabel = styled.p`
  ${typo.body[14]}
  line-height: 18px;
  font-size: 13px;
  color: #27364b;
`
