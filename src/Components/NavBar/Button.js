import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavButton = (props) => {
  const navigate = useNavigate();
  const changePage = (location) => {
    navigate(location);
  };
  const newTab = (location) => {
    window.open(location, "_blank");
  };

  return (
    <>
      {props.href === "https://app.vtufestbmsce.in" ? (
        <LoginButton onClick={(e) => newTab(props.href)}>
          <span>{props.name}</span>
        </LoginButton>
      ) : props.curPage === props.href ? (
        <HighlightedButton onClick={(e) => changePage(props.href)}>
          <span>{props.name}</span>
        </HighlightedButton>
      ) : (
        <NormalButton onClick={(e) => changePage(props.href)}>
          <span>{props.name}</span>
        </NormalButton>
      )}
    </>
  );
};
const LoginButton = styled.button`
  display: flex;
  text-decoration: none;
  align-items: center;
  margin: 0 3px;
  padding: 0 8px;
  border: none;
  background-color: #ff0075;
  border-radius: 10px;
  span {
    color: #ffffff;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0.1px;
    line-height: 1.08;
    padding: 10px 5px;
    white-space: nowrap;
    position: relative;
  }
  &:hover {
    background-color: #f8d7da;
    span {
      color: #ff0075;
    }
  }
`;
const HighlightedButton = styled.button`
  display: flex;
  text-decoration: none;
  align-items: center;
  margin: 0 3px;
  padding: 0 6px;
  border: none;
  background: rgba(52, 105, 255, 0.9);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  span {
    color: #ffffff;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0.1px;
    line-height: 1.08;
    padding: 10px 5px;
    white-space: nowrap;
    position: relative;
  }
`;
const NormalButton = styled.button`
  display: flex;
  text-decoration: none;
  align-items: center;
  margin: 0 3px;
  padding: 0 6px;
  border: none;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  span {
    color: #3469ff;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0.1px;
    line-height: 1.08;
    padding: 10px 5px;
    white-space: nowrap;
    position: relative;
  }
  &:hover {
    background: rgba(52, 105, 255, 0.8);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
    span {
      color: #ffffff;
    }
  }
`;
export default NavButton;
