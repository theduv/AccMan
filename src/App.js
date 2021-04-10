import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Platform from "./Components/Platform";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/platform/:platform" component={Platform} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
