import * as Style from "./style";
import ciscoIcon from "./Pics/cisco-gif.gif";
import { HashRouter as Router } from "react-router-dom";
import MainRoute from "./MainRoute/MainRoute";

function App() {
  return (
    <Style.AppContainer>
      <Router>
        <Style.CiscoIcon src={ciscoIcon} />
        <MainRoute />
      </Router>
    </Style.AppContainer>
  );
}

export default App;
