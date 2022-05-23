import styled from "styled-components";
import NavButton from "./Button";

const MobileNavigation = (prop) => {
  const props = prop.props;
  return (
    <MobileNav>
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
      <NavButton
        href="/chiefpatrons"
        name="Chief Patrons"
        curPage={props.curPage}
      />
      <NavButton
        href="/organisingcommittee"
        name="Organizing Committee"
        curPage={props.curPage}
      />
      <NavButton href="/contactus" name="Contact Us" curPage={props.curPage} />
    </MobileNav>
  );
};

const MobileNav = styled.nav`
  @media (min-width: 992px) {
    display: none;
  }
  @media (max-width: 992px) {
    background-color: #ffffff;
    align-items: right;
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
      display: flex;
      margin-left: 15%;
    }
  }
`;

export default MobileNavigation;
