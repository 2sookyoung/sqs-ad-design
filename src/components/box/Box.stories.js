import React from "react";
import { FlexColumn } from "@styles/global/Flex.styles"; // 경로에 맞게 설정
import Box from "./Box";
import { fn } from "@storybook/test";

//* https://storybook.js.org/docs/api/arg-types 에서 argTypes 확인가능.
export default {
  title: "Common/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["default", "warning"] },
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
  const children2 = <p>휴대폰 결제는 사업자 신청 및 과세 처리만 가능합니다.</p>;

  return (
    <FlexColumn align={"flex-start"} gap={"20px"} style={{ width: "500px" }}>
      <Box>{children}</Box>
      <Box type={"warning"}>{children2}</Box>
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
    <FlexColumn align={"flex-start"} gap={"20px"} style={{ width: "500px" }}>
      <Box type={args.type} backgroundColor={args.backgroundColor}>
        {children}
      </Box>
      <Box type={args.type} backgroundColor={args.backgroundColor}>
        {children}
      </Box>
    </FlexColumn>
  );
};
