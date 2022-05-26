import styled from "styled-components";
import NavButton from "./Button";

const MobileNavigation = (prop) => {
  const props = prop.props;
  return (
    <MobileNav>
      <NavButton href="/" name="Home" curPage={props.curPage} />
      <NavButton
        href="/eventschedule"
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
      <NavButton href="/contactus" name="Contact Us" curPage={props.curPage} />
      <NavButton
        href="https://app.vtufestbmsce.in"
        name="Login"
        curPage={props.curPage}
      />
    </MobileNav>
  );
};

const MobileNav = styled.nav`
  @media (min-width: 1281px) {
    display: none;
  }
  @media (max-width: 1281px) {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    margin-top: 90px;
    padding-top: 5vh;
    height: 100vh;
    width: 100vw;
    button {
      display: absolute;
      margin-bottom: 2%;
      width: 250px;
    }
  }
`;

export default MobileNavigation;
