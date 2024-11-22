import "./App.css";
import { Route, Switch, Link, useParams } from "react-router-dom";

const SportComponent = () => {
  const { sportName } = useParams();
  return <p className="text-3xl">That is {sportName}</p>;
};

function App() {
  return (
    <div>
      <div>
        <h1 className="text-xl">Minimal sportsbet</h1>
        <div className="space-x-2">
          <Link to="/">Home</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/sports/soccer">Soccer</Link>
        </div>
      </div>
      <Switch>
        <Route
          exact
          path="/:lng?/sports"
          component={() => <p>This is sports</p>}
        />
        <Route exact path="/:lng?" component={() => <p>Welcome home</p>} />
        <Route
          exact
          path="/:lng?/sports/:sportName"
          component={SportComponent}
        />
      </Switch>
    </div>
  );
}

export default App;
