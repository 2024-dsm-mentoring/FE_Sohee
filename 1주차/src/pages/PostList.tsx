import styled from "styled-components";
import "../styles/Text";
import { Body1, Body2, Title3 } from "../styles/Text";
import "../font/fonts.css";
import Post from "../components/Post";
import Setting from "../components/Setting";
import NewPost from "../components/NewPost";

const PostList = () => {
  return (
    <BigDiv>
      <Container>
        <Header>
          <Title>게시물 목록</Title>
          <ButtonDiv>
            <Setting />
            <NewPost />
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
`;
const PostDiv = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;
const ButtonDiv = styled.div`
  width: 1200px;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
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
