import styled, {keyframes} from "styled-components";

const wiggle = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const HeaderContainer = styled.div`
      padding: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
`;

export const Button = styled.button`
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 20px;
      background: none;
      border: none;
      
      span {
            font-size: 22px;
            transition: 0.3s;
      }
`;

export const Refresh = styled(Button)`
  img {
    margin-left: 10px;
    height: 50px;

    &:hover {
      animation: ${wiggle} 1.3s ease forwards;
    }
  }
`;

export const ToggleSound = styled(Button)`
  width: 200px;
`;


export const Title = styled.h1`
  font-weight: normal;
  margin: 0;
  font-size: 40px;
`;