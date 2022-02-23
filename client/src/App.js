import * as Style from "./style";
import ciscoIcon from "./Pics/cisco-gif.gif";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoute from "./MainRoute/MainRoute";
import userSlicer from "./stores/userSlicer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import ec2ListSlicer from "./stores/ec2Slicer";

const rootReducer = combineReducers({
  user: userSlicer,
  ec2list: ec2ListSlicer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <Style.AppContainer>
        <Router>
          <Style.CiscoIcon src={ciscoIcon} />
          <MainRoute />
        </Router>
      </Style.AppContainer>
    </Provider>
  );
}

export default App;
