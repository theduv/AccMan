import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Platform from "./Components/Platform";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact={true} component={Home} />
        <Route path="/platform/:platform" component={Platform} />
        <Route component={PageNotFound} />
      </Router>
    </div>
  );
}

export default App;
