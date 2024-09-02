import React from 'react';

import { FlexColumn } from '@styles/global/Flex.styles';
import * as SC from '@components/typography/Typography.styles';

const Typography = ({ type }) => {
  return (
    <FlexColumn align="flex-start" gap={'10px'}>
      <FlexColumn align="flex-start">
        <SC.Title56 type={type}>Typography</SC.Title56>
        <SC.Title48 type={type}>Typography</SC.Title48>
        <SC.Title40 type={type}>Typography</SC.Title40>
        <SC.Title32 type={type}>Typography</SC.Title32>
        <SC.Title24 type={type}>Typography</SC.Title24>
        <SC.Title20 type={type}>Typography</SC.Title20>
      </FlexColumn>

      <FlexColumn align="flex-start">
        <SC.BodyTitle17 type={type}>Typography</SC.BodyTitle17>
        <SC.BodyTitle15 type={type}>Typography</SC.BodyTitle15>
      </FlexColumn>

      <FlexColumn align="flex-start">
        <SC.Body14 type={type}>Typography</SC.Body14>
      </FlexColumn>

      <FlexColumn align="flex-start">
        <SC.Sub13 type={type}>Typography</SC.Sub13>
        <SC.Sub12 type={type}>Typography</SC.Sub12>
        <SC.Sub11 type={type}>Typography</SC.Sub11>
      </FlexColumn>
    </FlexColumn>
  );
};

export default Typography;
