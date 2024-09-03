import { useState } from 'react'
import Dialog from './Dialog'

import { withKnobs, select, color, boolean, text } from '@storybook/addon-knobs'
import ButtonMui from '../button/ButtonMui'
import { FlexColumn } from '../../styles/global/Flex.styles'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Common/Dialog',
  component: Dialog,
  tags: ['docsPage'],

  decorators: [withKnobs],
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const dialogButton = () => {
  const useHeader = boolean('useHeader', false)
  const useFooter = boolean('useFooter', false)
  const useCloseBtn = boolean('useCloseBtn', false)
  const isSmallType = boolean('isSmallType', false) // 스몰,라지 두가지로

  const title = text('title', '타이틀')
  const confirmBtnText = text('confirmBtnText', 'submit')
  const closeBtnText = text('closeBtnText', 'cancel')

  const [isDialogOpen, setDialogOpen] = useState(false)
  const [isCustomDialogOpen, setIsCustomDialogOpen] = useState(false)

  return (
    <FlexColumn align="flex-start" gap={'20px'}>
      <div id="dialog-root" />
      <section>
        <ButtonMui label={'dialog '} onClick={() => setDialogOpen(!isDialogOpen)}>
          Open Dialog
        </ButtonMui>
        {isDialogOpen && (
          <Dialog onClose={() => setDialogOpen(!isDialogOpen)}>
            <h3>큐샵화이팅</h3>
            <div>랄랄랄</div>
          </Dialog>
        )}
      </section>
      <section>
        <ButtonMui onClick={() => setIsCustomDialogOpen(!isCustomDialogOpen)}>test Me with options below</ButtonMui>
        {isCustomDialogOpen && (
          <Dialog
            size="sm"
            title={title}
            confirmBtnText={confirmBtnText}
            closeBtnText={closeBtnText}
            useCloseBtn={useCloseBtn}
            useHeader={useHeader}
            useFooter={useFooter}
            onClose={() => setIsCustomDialogOpen(!isCustomDialogOpen)}
          >
            <h3>큐샵화이팅</h3>
            <div>랄랄랄</div>
          </Dialog>
        )}
      </section>
    </FlexColumn>
  )
}

Dialog.story = {
  name: 'Dialog',
}
