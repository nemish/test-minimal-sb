import "./App.css";
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <h1>Minimal sportsbet</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/sports/soccer">Soccer</Link>
        </div>
      </div>
      <Switch>
        <Route
          exact
          path="/:lng?/sports"
          component={() => <p>Hello sports</p>}
        />
        <Route exact path="/:lng?" component={() => <p>Hello home</p>} />
        <Route
          exact
          path="/:lng?/sports/:sportName"
          component={() => <p>Hello in sport specific sport</p>}
        />
      </Switch>
    </div>
  );
}

export default App;
