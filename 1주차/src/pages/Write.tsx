import styled from "styled-components";
//import React from "react";
import "../styles/Text";
import { Body1, Body3, Title3 } from "../styles/Text";
import Arrow from "../images/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48 3.png";
import "../font/fonts.css";
import WriteInput from "../components/WriteInput";
import WriteArea from "../components/WriteArea";
import ConfirmButton from "../components/ConfirmButton";

const Write = () => {
  return (
    <BigDiv>
      <Container>
        <Header>
          <TitleText>게시글 목록</TitleText>
          <img src={Arrow} alt="다음" />
          <TitleText2>게시글 상세 확인</TitleText2>
        </Header>
        <Main>
          <WriteInput />
          <WriteArea />
          <ConfirmButton text="올리기" />
        </Main>
      </Container>
    </BigDiv>
  );
};

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
  width: 1200px;
  height: 828px;
  position: absolute;
  top: 67px;
`;

export default Write;
