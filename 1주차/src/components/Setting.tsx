import BarImg from "../images/Frame.png";
import styled from "styled-components";
import "../styles/Text";
import "../font/fonts.css";
import { Body1 } from "../styles/Text";

const Setting = () => {
  return (
    <>
      <Main>
        <img src={BarImg} />
        <StyledP>최신순</StyledP>
      </Main>
    </>
  );
};

const Main = styled.button`
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
const StyledP = styled(Body1)`
  color: black;
`;

export default Setting;
