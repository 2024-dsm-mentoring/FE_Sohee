import styled from "styled-components";
import BarImg from "../images/Frame.png";
import "../styles/Text";
import { Body1, Body2, Title3 } from "../styles/Text";
import "../font/fonts.css";
import Post from "../components/Post";

const PostList = () => {
  return (
    <BigDiv>
      <Container>
        <Header>
          <Title>게시물 목록</Title>
          <ButtonDiv>
            <Setting>
              <img src={BarImg} />
              <StyledP>최신순</StyledP>
            </Setting>
            <Write>
              <StyledP2>게시글 작성하기</StyledP2>
            </Write>
          </ButtonDiv>
        </Header>
        <PostDiv>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </PostDiv>
      </Container>
    </BigDiv>
  );
};

const BigDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`
const PostDiv = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;
const StyledP2 = styled(Body2)`
  font-size: 15px;
  font-weight: 500;
  color: white;
`;
const Write = styled.div`
  width: 137px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3d8aff;
  border-radius: 5px;
`;
const ButtonDiv = styled.div`
  width: 1200px;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
`;
const StyledP = styled(Body1)`
  color: black;
`;
const Setting = styled.button`
  width: 140px;
  height: 54px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 25px 0 20px;
  justify-content: space-between;
  background-color: white;
`;
const Container = styled.div`
  width: 1200px;
  height: 839px;
  position: absolute;
  top: 67px;
`;
const Title = styled(Title3)`
  color: #555555;
`;
const Header = styled.div`
  width: 1200px;
  height: 127px;
  display: flex;
  flex-wrap: wrap;
`;

export default PostList;
