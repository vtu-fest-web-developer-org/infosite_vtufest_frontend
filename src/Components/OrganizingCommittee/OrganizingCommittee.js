import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";

const OrganizingCommittee = (props) => {
  return (
    <>
      <NavBar curPage="/organisingcommittee" />
      <div className="container">
        <PageTitle title="Organising Committee" />
      </div>
    </>
  );
};

export default OrganizingCommittee;
