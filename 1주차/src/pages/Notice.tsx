import styled from "styled-components";
import "../styles/Text";
import Arrow from "../images/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48 3.png"
import { Body1, H2, Title3 } from "../styles/Text";

const Notice = () => {
  return (
    <BigDiv>
      <Container>
        <Header>
          <TitleText>게시글 목록</TitleText>
          <img src={Arrow} alt="다음" />
          <TitleText2>게시글 상세 확인</TitleText2>
        </Header>
        <BigTitle></BigTitle>
      </Container>
    </BigDiv>
  );
};

const BigTitle = styled(H2)`
  color: black;
  
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
  margin-bottom: 49px;
`
const BigDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1200px;
  margin-top: 67px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export default Notice;
