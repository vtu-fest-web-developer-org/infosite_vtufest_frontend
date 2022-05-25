import styled from "styled-components";
const PageTitle = (props) => {
  return (
    <Title>
      <p>{props.title}</p>
    </Title>
  );
};
const Title = styled.div`
  p {
    font-size: 32px;
    font-weight: 700;
    color: #3469ff;
  }
`;
export default PageTitle;
