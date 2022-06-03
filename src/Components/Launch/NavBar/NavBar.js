import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  const closeIcon = (
    <IoClose size="40px" color="#3469ff" onClick={() => setOpen(!open)} />
  );
  const openIcon = (
    <CgMenu size="40px" color="#3469ff" onClick={() => setOpen(!open)} />
  );

  return (
    <>
      <LogoNav>
        <VTULogo className="text-align-text align-items-center justify-content-center">
          <a href="/">
            <img src="/assets/logos/VTULogo.png" alt="BMSCE" />
          </a>
        </VTULogo>
        <Pratibhotsav className="text-align-text align-items-center justify-content-center">
          <a href="/">
            <img src="/assets/logos/pratibhotsav_logo_no-bg.png" alt="BMSCE" />
          </a>
        </Pratibhotsav>
        <BMSLogo className="text-align-text align-items-center justify-content-center">
          <a href="/">
            <img src="/assets/logos/BMSCELogo.png" alt="BMSCE" />
          </a>
        </BMSLogo>
      </LogoNav>
    </>
  );
};

const LogoNav = styled.nav`
  overflow: hidden !important;
  @media (min-width: 1280px) {
    padding: 0 3% 0;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
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
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
  }
`;
const Nav = styled.nav`
  overflow: hidden !important;

  @media (min-width: 1280px) {
    padding: 0 3% 0;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
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
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
  }
`;
const VTULogo = styled.div`
  @media (min-width: 1280px) {
    padding: 0;
    margin-top: 30px;
    margin-bottom: 4px;
    max-height: 130px;
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    img {
      display: flex;
      height: 100%;
    }
  }
  @media (max-width: 1280px) {
    padding: 0;
    margin-top: 4px;
    margin-bottom: 4px;
    max-height: 100px;
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    img {
      display: flex;
      height: 65px;
    }
  }
`;
const Pratibhotsav = styled.div`
  @media (min-width: 1280px) {
    padding: 0;
    margin-top: 30px;
    margin-bottom: 4px;
    max-height: 130px;
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    img {
      display: flex;
      height: 100%;
    }
  }
  @media (max-width: 1280px) {
    padding: 0;
    width: 200px;
    margin-top: 4px;
    margin-bottom: 4px;
    max-height: 100px;
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    img {
      display: flex;
      height: 65px;
    }
  }
`;
const BMSLogo = styled.div`
  @media (min-width: 1280px) {
    padding: 0;
    margin-top: 30px;
    margin-bottom: 4px;
    max-height: 130px;
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    img {
      display: flex;
      width: 150px;
    }
  }
  @media (max-width: 1280px) {
    padding: 0;
    margin-top: 4px;
    margin-bottom: 4px;
    max-height: 100px;
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    img {
      display: flex;
      height: 65px;
    }
  }
`;

const NavMenu = styled.div`
  background-color: transparent;
  @media (min-width: 1280px) {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: center;
    margin: 0px;
    padding: 0px;
    position: relative;
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