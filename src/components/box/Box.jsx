import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";
import { color } from "@styles/values/color";
import { typography } from "@styles/values/typography";

const Box = ({ children, type = "default", backgroundColor, ...props }) => {
  return (
    <BoxContainer
      type={type}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {children}
    </BoxContainer>
  );
};

Box.propTypes = {
  /**
   * 어떤 안내를 제공하는지에 따라 결정되는 타입
   */
  type: PropTypes.string,
};

Box.defaultProps = {
  type: "default",
};

export default Box;

export const BoxContainer = styled.div`
  width: 100%;
  max-width: -webkit-fill-available;
  background-color: ${({ type }) =>
    type === "warning"
      ? color.system.error.red["000"]
      : color.grayscale.gray[100]};
  padding: ${({ type }) => (type === "warning" ? "12px 20px" : "12px")};
  border-radius: 6px;

  p {
    ${typography.sub[12]}
    color:${({ type }) =>
      type === "warning"
        ? color.system.error.red[300]
        : color.grayscale.gray[700]};
  }
`;
