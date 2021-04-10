import Header from "./Header";
import "../Styles/PageNotFound.css";

const PageNotFound = () => {
  return (
    <div id="notFoundMainDiv">
      <Header />
      <div id="errorMessage">
        Error 404: page not found ! (how did you get there ?)
      </div>
    </div>
  );
};

export default PageNotFound;
