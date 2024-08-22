import React from "react";
import styled from "styled-components";

interface ConfirmProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const ConfirmButton = (props: ConfirmProps) => {
  return (
    <>
      <Main>{props.text}</Main>
    </>
  );
};

const Main = styled.button`
  width: 1189px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 5px;
  background-color: #3d8aff;
  &:active {
    border: none !important;
    outline: none !important;
  }
`;

export default ConfirmButton;
