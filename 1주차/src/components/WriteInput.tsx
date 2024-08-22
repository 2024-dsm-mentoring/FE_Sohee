import styled from "styled-components";
import { Body3 } from "../styles/Text";

const WriteInput = () => {
  return (
    <>
      <Label>제목</Label>
      <TitleInput>
        <StyledInput type="text" placeholder="제목을 입력해주세요." />
      </TitleInput>
    </>
  );
};

const Label = styled(Body3)`
  color: #555555;
  margin-bottom: 4px;
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
`;
const StyledInput = styled.input`
  color: black;
  font-size: 18px;
  &::placeholder {
    color: black;
    opacity: 50%;
  }
  outline: none;
  border: none;
  background-color: #eeeeee;
  width: 100%;
  font-family: "reg";
`;

export default WriteInput;
