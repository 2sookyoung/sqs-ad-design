import React, { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import * as SC from './Dialog.styles'
import { CloseIcon } from '@components/icon/common/X'
import Button from '@components/button/Button'

const Dialog = ({
  title = '',
  children,
  size = 'lg', //'sm' | 'lg'
  confirmBtnText = '확인',
  closeBtnText = '취소',
  confirmDisabled,
  onConfirm = () => {},
  onClose = () => {},
  onClickCloseBtn,
  useHeader = true,
  useFooter = true,
  useCloseBtn = true,
  customStyle,
  headerCustomStyle,
  bodyCustomStyle,
  footerCustomStyle,
  isLoading = false,
  isDirty,
  hasCancelBtn = false,
  closeMsg = `창을 닫으면 작성한 내용이 삭제됩니다.\n계속 하시겠습니까?`,
  footerText = '',
}) => {
  const [mounted, setMounted] = useState(false)
  const ref = useRef()

  const handleClose = () => {
    if (isDirty) {
      if (confirm(closeMsg)) {
        onClose(false)
      }
    } else {
      onClose(false)
    }
  }

  useEffect(() => {
    setMounted(true)
    if (document) {
      const dom = document.getElementById('dialog-root')
      ref.current = dom
    }
  }, [])

  if (ref.current && mounted) {
    return createPortal(
      <SC.Dialog>
        <SC.DialogBackground onClick={handleClose} />
        <SC.DialogContainer style={customStyle && customStyle} size={size}>
          {useHeader && (
            <SC.DialogHeader style={headerCustomStyle && headerCustomStyle} size={size}>
              <SC.DialogTitle>{title}</SC.DialogTitle>
              {useCloseBtn && (
                <SC.DialogClose onClick={handleClose} size={size}>
                  <CloseIcon />
                </SC.DialogClose>
              )}
            </SC.DialogHeader>
          )}
          <SC.DialogBodyView>
            <SC.DialogBody style={bodyCustomStyle && bodyCustomStyle} size={size}>
              {children}
            </SC.DialogBody>
          </SC.DialogBodyView>
          {useFooter && (
            <SC.DialogFooter style={footerCustomStyle && footerCustomStyle} size={size}>
              {footerText && (
                <TextSC.BodyL color={color.grayscale.gray[600]} style={{ flexGrow: 1 }}>
                  {footerText}
                </TextSC.BodyL>
              )}
              {hasCancelBtn && (
                <Button size={'lg'} role="gray" onClick={onClickCloseBtn || handleClose}>
                  {closeBtnText}
                </Button>
              )}
              <Button size={'lg'} onClick={() => onConfirm()} disabled={confirmDisabled}>
                {confirmBtnText}
              </Button>
            </SC.DialogFooter>
          )}

          {isLoading && (
            <SC.DialogLoading>
              <CircularProgress />
            </SC.DialogLoading>
          )}
        </SC.DialogContainer>
      </SC.Dialog>,
      ref.current,
    )
  }

  return null
}

export default Dialog
