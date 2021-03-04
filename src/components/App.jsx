import "../scss/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import Homepage from "./Homepage";
import TodoInfo from "./TodoInfo";

// Set up Context.js
// Fetch todos and show them in the dashboard page
// An individual todo page for each todo todos/25
//       - Delete a todo
//       - Update a todo
// Form for creating todos

const App = (props) => {
  return (
    <div className="app">
      <Router>
        <Nav></Nav>
        <div className="main">
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/todos/:id" component={TodoInfo} />
            <Route exact path="" component={Homepage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
