import { useState } from "react";
import * as S from "./style";

export default ({ searchCity }) => {
  const [cityState, setCityState] = useState({
    name: "",
    error: false,
  });

  const onCheckHandler = () => {
    if (cityState.name === "") {
      setCityState({ ...cityState, error: true });
    } else searchCity(cityState.name);
  };

  return (
    <S.SearchWrapper>
      <S.CityNameText>City Name</S.CityNameText>
      <S.InputWrapper>
        <S.Input
          placeholder="Enter city name"
          onBlur={(e) => {
            setCityState({ ...cityState, name: e.target.value });
          }}
          onChange={() => {
            setCityState({ ...cityState, error: false });
          }}
        />
        <S.SearchButton
          onClick={() => {
            onCheckHandler();
          }}
        >
          Check
        </S.SearchButton>
      </S.InputWrapper>
      {cityState.error && <p>Please fill in city name.</p>}
    </S.SearchWrapper>
  );
};
