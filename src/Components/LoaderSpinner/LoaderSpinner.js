import logo from "../../bg_copy.png";
const LoaderSpinner = () => {
  return (
    <header className="App-header">
      <img src={logo} className="Loader-logo" alt="logo" />
      <p className="loading">Loading...</p>
    </header>
  );
};
export default LoaderSpinner;
