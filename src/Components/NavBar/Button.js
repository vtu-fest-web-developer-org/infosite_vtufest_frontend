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
  padding: 0 3px;
  border: none;
  background-color: #eff2fb;
  border-radius: 10px;
  span {
    color: #1c2c9b;
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
  padding: 0 3px;
  border: none;
  background-color: #ffffff;
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
    background-color: #eff2fb;
    span {
      color: #1c2c9b;
    }
  }
`;
export default NavButton;
