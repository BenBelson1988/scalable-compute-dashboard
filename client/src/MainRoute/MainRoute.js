import { useSelector } from "react-redux";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Ec2ListScreen from "../Screens/EC2List/Ec2ListScreen.js";
import Login from "../Screens/Login/Login";

export default () => {
  const history = useHistory();
  const { user, token, error, loadingUser } = useSelector(({ user }) => user);

  user ? history.push("/EC2list") : history.push("/login"); //route guard

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={"/login"} />
      </Route>
      <Route exact path="/login" component={() => <Login error={error} />} />
      <Route
        exact
        path="/EC2List"
        component={() => <Ec2ListScreen user={user} token={token} />}
      />
    </Switch>
  );
};
