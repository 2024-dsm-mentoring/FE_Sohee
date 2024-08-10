import styled from "styled-components";
import "../styles/Text"
import { Body1, Body2 } from "../styles/Text";

const Post = () => {
  return(
    <Container>
      <Title>제목이 들어가요</Title>
      <Body2>22/08/16</Body2>
    </Container>
  )
}

const Title = styled(Body1)`
  font-size: 22px;
  color: black;
`
const Container = styled.div`
  width: 1200px;
  height: 70px;
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 10%);
  border-radius: 4px;
  margin-bottom: 16px;
`

export default Post;