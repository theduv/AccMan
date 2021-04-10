import Header from "./Header";
import "../Styles/PageNotFound.css";
import Footer from "./Footer";

const PageNotFound = () => {
  return (
    <div id="notFoundMainDiv">
      <Header />
      <div id="errorMessage">
        Error 404: page not found ! (how did you get there ?)
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
