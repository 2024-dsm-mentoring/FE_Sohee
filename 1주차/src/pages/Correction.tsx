import styled from "styled-components";
import "../styles/Text";
import Arrow from "../images/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48 3.png";
import { Body1, Body3, Title3 } from "../styles/Text";
import "../font/fonts.css"

const Correction = () => {
  return (
    <BigDiv>
      <Container>
        <Header>
          <TitleText>게시글 목록</TitleText>
          <img src={Arrow} alt="다음" />
          <TitleText2>게시글 상세 확인</TitleText2>
        </Header>
        <Main>
          <Label>제목</Label>
          <TitleInput>제목제목</TitleInput>
          <Label>내용</Label>
          <Content>내용내용</Content>
          <Confirm>수정완료</Confirm>
        </Main>
      </Container>
    </BigDiv>
  );
};

const Confirm = styled.button`
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
const Content = styled.div`
  width: 1189px;
  height: 500px;
  padding: 12px 14px 0 14px;
  border-radius: 4px;
  margin-bottom: 64px;
  background-color: #eeeeee;
  display: flex;
  justify-content: flex-start;
  font-size: 18px;
  font-family: "reg";
`;
const TitleInput = styled.div`
  width: 1189px;
  height: 50px;
  border-radius: 4px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  padding: 0 14px 0 14px;
  margin-bottom: 14px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  font-size: 18px;
  font-family: "reg";
`;
const Label = styled(Body3)`
  color: #555555;
  margin-bottom: 4px;
`;
const Main = styled.div`
  width: 1189px;
  height: 728px;
  margin-left: 11px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const TitleText2 = styled(Title3)`
  color: black;
  display: inline;
`;
const TitleText = styled(Body1)`
  color: #999999;
`;
const Header = styled.div`
  width: 274px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 72px;
`;
const BigDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  position: absolute;
  top: 67px;
  width: 1200px;
  height: 824px;
`;

export default Correction;
