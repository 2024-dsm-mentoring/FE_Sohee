import styled from "styled-components";
import "../styles/Text";
import { Button } from "../styles/Text";

const ButtonComp = (props: any) => {
  return (
    <ButtonContainer>
      <Main>
        <Button>{props.text}</Button>
      </Main>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div``;
const Main = styled.div`
  width: 480px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 4px;
  background-color: #3d8aff;
  opacity: 50%;
  color: white;
  margin-top: 38px;
  cursor: pointer;
`;

export default ButtonComp;
