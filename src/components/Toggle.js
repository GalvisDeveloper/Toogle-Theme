import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { ReactComponent as DarkIcon } from "../assets/icons/dark.svg";
import { ReactComponent as LightIcon } from "../assets/icons/light.svg";

const Toggle = ({ theme, toogleTheme }) => {
  const isLight = theme === "light";
  return (
    <>
      <ToogleContainer lightTheme={isLight} onClick={toogleTheme}>
        <LightIcon />
        <DarkIcon />
      </ToogleContainer>
    </>
  );
};

Toggle.propTypes = {
  theme: PropTypes.string.isRequired,
  toogleTheme: PropTypes.func.isRequired,
};

export default Toggle;

const ToogleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.borderToogle};
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;
