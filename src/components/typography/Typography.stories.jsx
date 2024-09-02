import { withKnobs, text, select } from '@storybook/addon-knobs';
import Typography from './Typography';
import { FlexColumn } from '@styles/global/Flex.styles';
import * as SC from '@components/typography/Typography.styles';

export default {
  title: 'Common/Typography',
  component: Typography,
  tags: ['docsPage'],

  decorators: [withKnobs],
};

export const typography = () => {
  return (
    <div>
      <Typography />
    </div>
  );
};

export const customTypography = () => {
  const value = text('value', 'typography');
  const type = select('type', [
    'success',
    'error',
    'primary',
    'sub',
    'light',
    'default',
  ]);
  return (
    <FlexColumn align="flex-start" gap={'10px'}>
      <FlexColumn align="flex-start">
        <SC.Title56 type={type}>{value}</SC.Title56>
        <SC.Title48 type={type}>{value}</SC.Title48>
        <SC.Title40 type={type}>{value}</SC.Title40>
        <SC.Title32 type={type}>{value}</SC.Title32>
        <SC.Title24 type={type}>{value}</SC.Title24>
        <SC.Title20 type={type}>{value}</SC.Title20>
      </FlexColumn>

      <FlexColumn align="flex-start">
        <SC.BodyTitle17 type={type}>{value}</SC.BodyTitle17>
        <SC.BodyTitle15 type={type}>{value}</SC.BodyTitle15>
      </FlexColumn>

      <FlexColumn align="flex-start">
        <SC.Body14 type={type}>{value}</SC.Body14>
      </FlexColumn>

      <FlexColumn align="flex-start">
        <SC.Sub13 type={type}>{value}</SC.Sub13>
        <SC.Sub12 type={type}>{value}</SC.Sub12>
        <SC.Sub11 type={type}>{value}</SC.Sub11>
      </FlexColumn>
    </FlexColumn>
  );
};

typography.story = {
  name: 'typography',
};
