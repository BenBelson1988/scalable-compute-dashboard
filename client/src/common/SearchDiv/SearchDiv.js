import CitySearch from "../Input/CitySearch";
import TimeZone from "../TimeZone/TimeZone";

import * as S from "./style";

export default ({ state, searchCity }) => {
  return (
    <S.DivWrapper>
      <S.SvgIcon />
      <S.MainH2>
        Use our weather app to see the weather around the world
      </S.MainH2>
      <CitySearch searchCity={searchCity} />
      <TimeZone location={state.location} />
    </S.DivWrapper>
  );
};
