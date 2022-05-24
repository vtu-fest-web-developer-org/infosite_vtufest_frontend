import styled from "styled-components";
import { MdMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import MobileNavigation from "./MobileNav";
import NavButton from "./Button";
import { useState } from "react";

const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  const closeIcon = (
    <IoClose size="40px" color="#3469ff" onClick={() => setOpen(!open)} />
  );
  const openIcon = (
    <MdMenuOpen size="40px" color="#3469ff" onClick={() => setOpen(!open)} />
  );

  return (
    <>
      <Nav>
        <Logo className="text-align-text align-items-center justify-content-center">
          <a href="/">
            <img src="/assets/logos/bmsce_logo.jpeg" alt="BMSCE" />
          </a>
        </Logo>
        <NavMenu>
          <NavButton href="/" name="Home" curPage={props.curPage} />
          <NavButton
            href="/eventschedlue"
            name="Event Schedule"
            curPage={props.curPage}
          />
          <NavButton
            href="/eventsguidelines"
            name="Event Guidelines"
            curPage={props.curPage}
          />
          <NavButton
            href="/rulesregulations"
            name="Rules & Regulations"
            curPage={props.curPage}
          />
          {/*<NavButton
            href="/chiefpatrons"
            name="Chief Patrons"
            curPage={props.curPage}
  />*/}
          <NavButton
            href="/organisingcommittee"
            name="Organizing Committee"
            curPage={props.curPage}
          />
          <NavButton
            href="/contactus"
            name="Contact Us"
            curPage={props.curPage}
          />
          <NavButton href="/login" name="Login" curPage={props.curPage} />
        </NavMenu>
        <MobiNav>
          {open ? closeIcon : openIcon}
          {open && <MobileNavigation props={props} />}
        </MobiNav>
      </Nav>
      <hr />
    </>
  );
};
const MobiNav = styled.div`
  @media (min-width: 1281px) {
    display: none;
  }
`;
const Nav = styled.nav`
  @media (min-width: 1280px) {
    padding: 0 3% 0;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height: 150px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
  }
  @media (max-width: 1280px) {
    padding: 0 5% 0;
    position: relative;
    flex-flow: row nowrap;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
  }
`;

const Logo = styled.div`
  @media (min-width: 1280px) {
    padding: 0;
    width: 350px;
    margin-top: 4px;
    margin-bottom: 4px;
    max-height: 100px;
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    img {
      display: flex;
      width: 320px;
    }
  }
  @media (max-width: 1280px) {
    padding: 0;
    width: 250px;
    margin-top: 4px;
    margin-bottom: 4px;
    max-height: 100px;
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    img {
      display: flex;
      width: 100%;
    }
  }
`;

const NavMenu = styled.div`
  @media (min-width: 1280px) {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: 0px;
    margin-left: 25px;
    a {
      display: flex;
      text-decoration: none;
      align-items: center;
      padding: 0 12px;
      span {
        color: #121212;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0.5px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
        transition: 0.3s;
      }
      &:hover {
        span {
          background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }
      }
    }
  }
  @media (max-width: 1280px) {
    display: none;
  }
`;

export default NavBar;
