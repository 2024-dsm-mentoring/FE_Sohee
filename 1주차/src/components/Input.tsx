import styled from "styled-components";
import "../styles/Text";
import { Body3 } from "../styles/Text";
import EyeImg from "../images/Vector.png";
import EyeHidden from "../images/Vector (1).png";
import { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label?: string
}

const Input = (props: InputProps) => {

  const isPass = props.type === "password"
  // props.type(type으로 받은 프롭) 과 password(문자열, 프롭으로 받는 값)가 일치하면 true 값 반환

  const [pwType, setPwType] = useState(false); // 비번 상태 기본은 false
  const handlePwType = () => { // 비번 상태를 관리할것임
    // setPwType(() => {
    //   if (!pwType.visible) { // 비번이 보이는 상태인가?
    //     return { type: "text", visible: true }; // 맞다면 
    //   } else {
    //     return { type: "password", visible: false }; // 아니라면
    //   }
    // });
    setPwType(!pwType) // 비번 상태를 반대로 바꾸기

  };

  return (
    <InputContainer>
      <Label>{props.label}</Label>
      {isPass ? ( // 프롭으로 받은 값이 패스워드니?
        <Main>
          <StyledInput type={pwType ? "text":"password"} placeholder={props.placeholder} /> 
          <StyledSpan onClick={handlePwType}>
            {pwType ? (
              <img src={EyeHidden} alt="숨김" />
            ) : (
              <img src={EyeImg} alt="보임" />
            )}
          </StyledSpan>
        </Main>
      ) : ( // 맞으면 비번인풋 아니면 그냥 인풋
        <Main>
          <StyledInput type={props.type} placeholder={props.placeholder} />
        </Main>
      )}
    </InputContainer>
  );
};


const StyledSpan = styled.span`
  display: flex;
  justify-self: flex-end;
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
