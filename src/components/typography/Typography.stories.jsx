import { withKnobs, text, select } from '@storybook/addon-knobs'
import Typography from './Typography'
import { FlexColumn } from '@styles/global/Flex.styles'
import * as SC from '@components/typography/Typography.styles'

export default {
  title: 'Common/Typography',
  component: Typography,
  tags: ['docsPage'],

  argTypes: {
    value: { control: 'text', description: 'typography 텍스트' },
    type: { control: 'select', options: ['success', 'error', 'primary', 'sub', 'light', 'default'] },
  },
}

export const typography = () => {
  return (
    <div>
      <Typography />
    </div>
  )
}

export const customTypography = arg => {
  return (
    <FlexColumn align="flex-start" gap={'10px'}>
      <FlexColumn align="flex-start">
        <SC.Title56 type={arg.type}>{arg.value}</SC.Title56>
        <SC.Title48 type={arg.type}>{arg.value}</SC.Title48>
        <SC.Title40 type={arg.type}>{arg.value}</SC.Title40>
        <SC.Title32 type={arg.type}>{arg.value}</SC.Title32>
        <SC.Title24 type={arg.type}>{arg.value}</SC.Title24>
        <SC.Title20 type={arg.type}>{arg.value}</SC.Title20>
      </FlexColumn>

      <FlexColumn align="flex-start">
        <SC.BodyTitle17 type={arg.type}>{arg.value}</SC.BodyTitle17>
        <SC.BodyTitle15 type={arg.type}>{arg.value}</SC.BodyTitle15>
      </FlexColumn>

      <FlexColumn align="flex-start">
        <SC.Body14 type={arg.type}>{arg.value}</SC.Body14>
      </FlexColumn>

      <FlexColumn align="flex-start">
        <SC.Sub13 type={arg.type}>{arg.value}</SC.Sub13>
        <SC.Sub12 type={arg.type}>{arg.value}</SC.Sub12>
        <SC.Sub11 type={arg.type}>{arg.value}</SC.Sub11>
      </FlexColumn>
    </FlexColumn>
  )
}

typography.story = {
  name: 'typography',
}
