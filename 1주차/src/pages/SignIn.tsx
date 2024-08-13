import Input from "../components/Input";
import styled from "styled-components";
import "../styles/Text";
import ButtonComp from "../components/ButtonComp";
import { H2 } from "../styles/Text";

const SignIn = () => {
  return (
    <BigDiv>
      <Main>
        <StyledP>회원가입</StyledP>
        <StyledHr />
        <Input
          label="아이디"
          type="text"
          placeholder="아이디를 입력해주세요."
        />
        <Input
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요."
        />
        <Input
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
        />
        <ButtonComp text="회원가입" />
      </Main>
    </BigDiv>
  );
};

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
const Main = styled.div`
  width: 483px;
  height: 572px;
`;
const BigDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SignIn;
