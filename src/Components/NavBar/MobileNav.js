import styled from "styled-components";
import NavButton from "./Button";

const MobileNavigation = (props) => {
  return (
    <MobileNav>
      <NavButton href="/home" name="Home" />
      <NavButton href="/eventschedlue" name="Event Schedule" />
      <NavButton href="/eventsguidelines" name="Event Guidelines" />
      <NavButton href="/rulesregulations" name="Rules & Regulations" />
      <NavButton href="/chiefpatrons" name="Chief Patrons" />
      <NavButton href="/organisingcommittee" name="Organizing Committee" />
      <NavButton href="/contactus" name="Contact Us" />
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
