import styled from "styled-components";
import { Body3 } from "../styles/Text";
import "../font/fonts.css";
import "../styles/Text";

const WriteArea = () => {
  return (
    <>
      <Label>내용</Label>
      <Content>
        <StyledTextarea placeholder="내용을 입력해주세요." />
      </Content>
    </>
  );
};

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
  &::placeholder {
    color: black;
    opacity: 50%;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Content = styled.div`
  width: 1189px;
  height: 500px;
  padding: 12px 14px 0 14px;
  border-radius: 4px;
  margin-bottom: 64px;
  background-color: #eeeeee;
`;
const Label = styled(Body3)`
  color: #555555;
  margin-bottom: 4px;
`;

export default WriteArea;
