import styled from '@emotion/styled';
import { color } from '@styles/values/color';
import { css } from '@emotion/react';
import { typo } from '@styles/values/typography';

//임시컬러
const getColor = (type) => {
  switch (type) {
    case 'success':
      return color.system.success.blue[300];
    case 'error':
      return color.system.error.red[300];
    case 'primary':
      return color.primary.purple[300];
    case 'sub':
      return color.text.sub;
    case 'light':
      return color.grayscale.gray[700];
    default:
      return color.text.default;
  }
};
export const commonText = css`
  padding: 0;
  margin: 0;
`;

export const Title56 = styled.p`
  ${commonText}
  ${typo.title[56]}
  color: ${({ type, customColor }) =>
    customColor ? customColor : getColor(type)};
`;
export const Title48 = styled.p`
  ${commonText}
  ${typo.title[48]}
  color: ${({ type, customColor }) =>
    customColor ? customColor : getColor(type)};
`;
export const Title40 = styled.p`
  ${commonText}
  ${typo.title[40]}
  color: ${({ type, customColor }) =>
    customColor ? customColor : getColor(type)};
`;
export const Title32 = styled.p`
  ${commonText}
  ${typo.title[32]}
  color: ${({ type, customColor }) =>
    customColor ? customColor : getColor(type)};
`;
export const Title24 = styled.p`
  ${commonText}
  ${typo.title[24]}
  color: ${({ type, customColor }) =>
    customColor ? customColor : getColor(type)};
`;
export const Title20 = styled.p`
  ${commonText}
  ${typo.title[20]}
  color: ${({ type, customColor }) =>
    customColor ? customColor : getColor(type)};
`;
export const BodyTitle17 = styled.p`
  ${commonText}
  ${typo.bodyTitle[17]}
  color: ${({ type, customColor }) =>
    customColor ? customColor : getColor(type)};
`;
export const BodyTitle15 = styled.p`
  ${commonText}
  ${typo.bodyTitle[15]}
  color: ${({ type, customColor }) =>
    customColor ? customColor : getColor(type)};
`;

export const Body14 = styled.p`
  ${commonText}
  ${typo.body[14]}
  color: ${({ type, customColor }) =>
    customColor ? customColor : getColor(type)};
`;
export const Sub13 = styled.p`
  ${commonText}
  ${typo.sub[13]}
  color: ${({ type, customColor }) =>
    customColor ? customColor : getColor(type)};
`;
export const Sub12 = styled.p`
  ${commonText}
  ${typo.sub[12]}
  color: ${({ type, customColor }) =>
    customColor ? customColor : getColor(type)};
`;
export const Sub11 = styled.p`
  font-weight: 500;
  ${commonText}
  ${typo.sub[11]}
  color: ${({ type, customColor }) =>
    customColor ? customColor : getColor(type)};
`;
