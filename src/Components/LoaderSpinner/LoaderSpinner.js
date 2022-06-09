import logo from "../../bg_copy.png";
const LoaderSpinner = () => {
  return (
    <div className="Logo-header mt-5">
      <br />
      <br />
      <br />
      <img src={logo} className="Loader-logo" alt="logo" />
      <p className="loading">Loading...</p>
    </div>
  );
};
export default LoaderSpinner;
