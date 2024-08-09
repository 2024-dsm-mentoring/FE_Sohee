import Input from "../components/Input";
import styled from "styled-components";
import "../styles/Text";
import { Body2, H2 } from "../styles/Text";
import ButtonComp from "../components/ButtonComp";

const Login = () => {
  return (
    <BigDiv>
      <Main>
        <StyledP>로그인</StyledP>
        <StyledHr />
        <Input
          label="아이디"
          type="text"
          placeholder="아이디를 입력해주세요."
        />
        <Input
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
        <CheckDiv>
          <CheckBox type="checkbox" />
          <IdSave>아이디 저장</IdSave>
        </CheckDiv>
        <ButtonComp text="로그인" />
        <DoSignIn>
          <Body2>
            계정이 없으신가요? <StyledBody>회원가입</StyledBody>
          </Body2>
        </DoSignIn>
      </Main>
    </BigDiv>
  );
};

const DoSignIn = styled.div`
  margin-top: 17px;
`;
const StyledBody = styled(Body2)`
  color: #3d8aff;
  display: inline;
`;
const IdSave = styled(Body2)`
  color: #555555;
`;
const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  border: 2px solid #999999;
  border-radius: 2px;
  outline: none;
  &:hover {
    border-color: #999999;
  }
`;
const CheckDiv = styled.div`
  width: 116px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledHr = styled.hr`
  width: 480px;
  border: 2px solid #3d8aff;
  margin-bottom: 56px;
`;
const StyledP = styled(H2)`
  color: black;
  margin-bottom: 23px;
  float: left;
`;
const BigDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  width: 483px;
  height: 526px;
`;

export default Login;
