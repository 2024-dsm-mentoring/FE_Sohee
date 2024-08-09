import styled from "styled-components";
import "../styles/Text";
import { Body3 } from "../styles/Text";
import EyeImg from "../images/Vector.png";
import EyeHidden from "../images/Vector (1).png";
import { useState } from "react";

const Input = (props: any) => {
  const isPass = () => {
    if (props.type === "password") {
      return true;
    } else {
      return false;
    }
  };

  const [pwType, setPwType] = useState({
    type: "password",
    visible: false,
  });
  const handlePwType = () => {
    setPwType(() => {
      if (!pwType.visible) {
        return { type: "text", visible: true };
      } else {
        return { type: "password", visible: false };
      }
    });
  };

  return (
    <InputContainer>
      <Label>{props.label}</Label>
      {isPass() ? (
        <Main>
          <StyledInput type={pwType.type} placeholder={props.placeholder} />
          <StyledSpan onClick={handlePwType}>
            {pwType.visible ? (
              <img src={EyeImg} alt="보임" />
            ) : (
              <img src={EyeHidden} alt="숨김" />
            )}
          </StyledSpan>
        </Main>
      ) : (
        <Main>
          <StyledInput type={props.type} placeholder={props.placeholder} />
        </Main>
      )}
    </InputContainer>
  );
};


const StyledSpan = styled.span`
  float: right;
  margin-right: 12px;
  margin-top: 2px;
`;
const StyledInput = styled.input`
  border: none;
  outline: none;
  &::placeholder {
    color: #999999;
    font-size: 16px;
  }
  float: left;
  width: 100%;
  height: 100%;
  font-size: 16px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;
const Main = styled.div`
  width: 480px;
  height: 46px;
  border: 1px solid #999999;
  padding: 9px 0 11px 16px;
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Label = styled(Body3)`
  color: #555555;
  margin: 0 0 6px 6px;
`;

export default Input;
