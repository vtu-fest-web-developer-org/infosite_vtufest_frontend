import { FaReact } from "react-icons/fa";
import styled from "styled-components";
const CommonFooter = () => {
  return (
    <div className="row">
      <div className="col-md-12 mt-5 mb-3">
        <Footer>
          <hr />
          <span>
            Made with ❤️ &nbsp; using{" "}
            <a
              href="https://reactjs.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <strong className="react-icon">
                <FaReact />
              </strong>
            </a>
            &nbsp; in Bangalore, India .
            <br /> &#169;&nbsp; {new Date().getFullYear()} &nbsp;&nbsp;
            <a href="http://bmsce.ac.in">B.M.S. College Of Engineering</a>.
          </span>
        </Footer>
      </div>
    </div>
  );
};
const Footer = styled.div`
  @media (min-width: 1024px) {
    margin-top: 7vh;
    position: relative;
    left: 0;
    right: 0;
    span {
      font-size: 16px;
      font-weight: 500;
      color: #121212;
      justify-content: center;
      text-align: center;
      align-items: center;
      a {
        font-size: 16px;
        color: #121212;
        text-decoration: none;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    position: relative;
    left: 0;
    right: 0;
    span {
      font-size: 16px;
      color: #121212;
      justify-content: center;
      text-align: center;
      align-items: center;
      a {
        font-size: 16px;
        color: #121212;
        text-decoration: none;
      }
    }
  }
  @media (max-width: 768px) {
    position: relative;
    left: 0;
    right: 0;
    margin-bottom: 20px;
    span {
      font-size: 16px;
      color: #121212;
      justify-content: center;
      text-align: center;
      align-items: center;
      a {
        font-size: 16px;
        color: #121212;
        text-decoration: none;
      }
    }
  }
`;
export default CommonFooter;
