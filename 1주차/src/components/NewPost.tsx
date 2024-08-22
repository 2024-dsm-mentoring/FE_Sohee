import styled from "styled-components";
import { Body2 } from "../styles/Text";

const NewPost = () => {
  return (
    <>
      <Main>
        <StyledP2>게시글 작성하기</StyledP2>
      </Main>
    </>
  );
};

const Main = styled.button`
  width: 137px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3d8aff;
  border-radius: 5px;
`;
const StyledP2 = styled(Body2)`
  font-size: 15px;
  font-weight: 500;
  color: white;
`;

export default NewPost;
