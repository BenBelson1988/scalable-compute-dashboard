import * as Style from "./style";
import SearchDiv from "./common/SearchDiv/SearchDiv";
import ForcastDiv from "./common/ForcastDiv/FocastDiv";
import { useWeatherFetch } from "./customHooks/weatherFetch/useWeatherFetch";
import { Loader } from "./common/Loader/Loader";

function App() {
  const { state, searchCity } = useWeatherFetch();
  return (
    <Style.AppContainer>
      {state.isLoading && <Loader />}
      <SearchDiv state={state} searchCity={searchCity} />
      <ForcastDiv state={state} />
    </Style.AppContainer>
  );
}

export default App;
