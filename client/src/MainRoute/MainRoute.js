import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../Screens/Login/Login";

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={"/Login"} />
      </Route>
      <Route exact path="/Login" component={() => <Login />} />
      <Route exact path="/EC2List" component={() => <div></div>} />
    </Switch>
  );
};
