import React from 'react';
import { FlexBox, FlexColumn } from '@styles/global/Flex.styles'; // 경로에 맞게 설정
import Box from './Box';
import { ErrorSolidIcon } from '@components/icon/common/Error';
import * as TextSC from '@components/typography/Typography.styles';
import { fn } from '@storybook/test';

//* https://storybook.js.org/docs/api/arg-types 에서 argTypes 확인가능.
export default {
  title: 'Common/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['default', 'warning'] },
    //backgroundColor: { control: "color" },
  },
  //args: { onClick: fn() },
};

export const box = () => {
  const children = (
    <p>
      가입 신청을 완료하려면 <strong>'신청하기'</strong> 버튼을 눌러주세요.
      버튼을 누르면 결제 페이지로 이동합니다.
    </p>
  );
  const children2 = (
    <FlexColumn align={'flex-start'} gap={'8px'}>
      <FlexBox justify={'flex-start'} gap={'4px'}>
        <ErrorSolidIcon />
        <TextSC.Body14>결제 전 확인해주세요!</TextSC.Body14>
      </FlexBox>
      <TextSC.Sub12>
        • 발신 전화번호를 등록 하셔야 메시지 충전 및 사용이 가능합니다.
      </TextSC.Sub12>
      <TextSC.Sub12>
        • 충전하신 메시지는 결제 완료 후 환불이 불가능합니다.
      </TextSC.Sub12>
    </FlexColumn>
  );

  return (
    <FlexColumn align={'flex-start'} gap={'20px'} style={{ width: '500px' }}>
      <Box>{children}</Box>
      <Box type={'warning'}>{children2}</Box>
    </FlexColumn>
  );
};

export const customBox = (args) => {
  const children = (
    <p>
      가입 신청을 완료하려면 <strong>'신청하기'</strong> 버튼을 눌러주세요.
      버튼을 누르면 결제 페이지로 이동합니다.
    </p>
  );

  return (
    <FlexColumn align={'flex-start'} gap={'20px'} style={{ width: '500px' }}>
      <Box type={args.type} backgroundColor={args.backgroundColor}>
        {children}
      </Box>
      <Box type={args.type} backgroundColor={args.backgroundColor}>
        {children}
      </Box>
    </FlexColumn>
  );
};
