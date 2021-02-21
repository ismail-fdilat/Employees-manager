import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListEmployee from "./components/ListEmployee";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateEmployee from "./components/CreateEmployee";
import ViewEmployee from "./components/ViewEmployee";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />

          <div className="App">
            <Switch>
              <Route path="/" exact component={ListEmployee}></Route>
              <Route path="/Employees" component={ListEmployee}></Route>
              <Route path="/add-Employee" component={CreateEmployee}></Route>
              <Route path="/view-Employee/:id" component={ViewEmployee}></Route>
              <Route
                path="/update-Employee/:id"
                exact
                component={CreateEmployee}
              ></Route>
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
