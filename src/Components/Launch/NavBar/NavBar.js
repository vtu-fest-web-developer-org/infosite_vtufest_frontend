import styled from "styled-components";

const NavBar = (props) => {
  return (
    <>
      <LogoNav>
        <VTULogo className="text-align-text align-items-center justify-content-center">
          <a href="/">
            <img src="/assets/logos/VTULogo.webp" alt="BMSCE" />
          </a>
        </VTULogo>
        <Pratibhotsav className="text-align-text align-items-center justify-content-center">
          <a href="/">
            <img src="/assets/logos/pratibhotsav_logo_no-bg.webp" alt="BMSCE" />
          </a>
        </Pratibhotsav>
        <BMSLogo className="text-align-text align-items-center justify-content-center">
          <a href="/">
            <img src="/assets/logos/BMSCELogo.webp" alt="BMSCE" />
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

export default NavBar;
