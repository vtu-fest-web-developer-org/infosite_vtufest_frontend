import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";

const ContactUs = (props) => {
  return (
    <>
      <NavBar curPage="/contactus" />
      <div className="container">
        <PageTitle title="Contact Us" />
      </div>
    </>
  );
};

export default ContactUs;
