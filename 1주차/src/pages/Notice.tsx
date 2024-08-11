import styled from "styled-components";
import "../styles/Text";
import Arrow from "../images/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48 3.png";
import { Body1, Body2, H2, Title3 } from "../styles/Text";

const Notice = () => {
  return (
    <BigDiv>
      <Container>
        <Header>
          <TitleText>게시글 목록</TitleText>
          <img src={Arrow} alt="다음" />
          <TitleText2>게시글 상세 확인</TitleText2>
        </Header>
        <Info>
          <BigTitle>게시글 제목이 나옵니다</BigTitle>
          <DateInfo>22/08/16</DateInfo>
        </Info>
        <Buttons>
          <ChangeButton>수정하기</ChangeButton>
          <DeleteButton>삭제하기</DeleteButton>
        </Buttons>
        <StyledHr />
        <TextBox>
          게시글 내용이 나옵니다 게시글 내용이 나옵니다게시글 내용이
          나옵니다게시글 내용이 나옵니다게시글 내용이 나옵니다게시글 내용이
          나옵니다게시글 내용이 나옵니다게시글 내용이 나옵니다게시글 내용이
          나옵니다게시글 내용이 나옵니다게시글 내용이 나옵니다게시글 내용이
          나옵니다게시글 내용이 나옵니다게시글 내용이 나옵니다게시글 내용이
          나옵니다게시글 내용이 나옵니다게시글 내용이 나옵니다게시글 내용이
          나옵니다
        </TextBox>
      </Container>
    </BigDiv>
  );
};

const TextBox = styled.div`
  width: 1200px;
  height: 100%;
  text-align: left;
`;
const StyledHr = styled.hr`
  border: 1px solid #eeeeee;
  width: 1200px;
  margin-bottom: 36px;
`;
const DeleteButton = styled.button`
  width: 92px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ff4646;
  border-radius: 5px;
  color: #ff4646;
  padding: 0;
  background-color: white;
  &:hover {
    background-color: #ff4646;
    color: white;
  }
`;
const ChangeButton = styled.button`
  width: 92px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #3d8aff;
  border-radius: 5px;
  color: #3d8aff;
  padding: 0;
  background-color: white;
  &:hover {
    background-color: #3d8aff;
    color: white;
  }
`;
const Buttons = styled.div`
  width: 204px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const DateInfo = styled(Body2)`
  color: #999999;
  margin-top: 15px;
  display: block;
  width: 1200px;
  display: flex;
  justify-self: flex-start;
`;
const Info = styled.div`
  width: 1200px;
  height: 83px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 22px;
`;
const BigTitle = styled(H2)`
  color: black;
  display: block;
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
  margin-bottom: 49px;
`;
const BigDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1200px;
  position: absolute;
  top: 67px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default Notice;
