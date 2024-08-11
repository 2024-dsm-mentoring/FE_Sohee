import styled from "styled-components";
//import React from "react";
import "../styles/Text";
import { Body1, Body3, Title3 } from "../styles/Text";
import Arrow from "../images/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48 3.png"
import "../font/fonts.css"

const Write = () => {
  return (
    <BigDiv>
      <Container>
        <Header>
          <TitleText>게시글 목록</TitleText>
          <img src={Arrow} alt="다음"/>
          <TitleText2>게시글 상세 확인</TitleText2>
        </Header>
        <Main>
          <Label>제목</Label>
          <TitleInput>
            <StyledInput type="text" placeholder="제목을 입력해주세요."/>
          </TitleInput>
          <Label>내용</Label>
          <Content>
            <StyledTextarea placeholder="내용을 입력해주세요."/>
          </Content>
          <Confirm>올리기</Confirm>
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
  &:active{
    border: none !important;
    outline: none !important; 
  }
`
const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  resize: none;
  background-color: #eeeeee;
  color: black;
  font-size: 18px;
  font-family: "reg";
  &::placeholder{
    color: black;
    opacity: 50%;
  }
  &::-webkit-scrollbar{
    display: none;
  }
`
const Content = styled.div`
  width: 1189px;
  height: 500px;
  padding: 12px 14px 0 14px;
  border-radius: 4px;
  margin-bottom: 64px;
  background-color: #eeeeee;
`
const StyledInput = styled.input`
  color: black;
  font-size: 18px;
  &::placeholder{
    color: black;
    opacity: 50%;
  }
  outline: none;
  border: none;
  background-color: #eeeeee;
  width: 100%;
  font-family: "reg";
`
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
  &::-webkit-scrollbar{
    display: none ;
  }
`
const Label = styled(Body3)`
  color: #555555;
  margin-bottom: 4px;
`
const Main = styled.div`
  width: 1189px;
  height: 728px;
  margin-left: 11px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`
const TitleText2 = styled(Title3)`
  color: black;
  display: inline;
`
const TitleText = styled(Body1)`
  color: #999999;
`
const Header = styled.div`
  width: 274px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 72px;
`
const BigDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1200px;
  height: 828px;
  margin-top: 67px;
`;

export default Write;
