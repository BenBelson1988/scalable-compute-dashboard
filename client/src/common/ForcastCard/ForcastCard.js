import * as S from "./style";

export default ({ state }) => {
  var index;
  if (state.cityName) {
    const hour = state.location.localtime.substring(
      state.location.localtime.length - 5,
      state.location.localtime.length - 3
    );
    index = state.tempByHours.findIndex(
      (time) =>
        time.time.substring(time.time.length - 5, time.time.length - 3) === hour
    );
  }

  const filteredFiveHours = state.tempByHours.slice(index, index + 5);

  return (
    <S.ForcastCard>
      {state.error && <S.CityName>{state.error}</S.CityName>}
      {state.cityName && (
        <>
          <S.CityName>{state.cityName}</S.CityName>
          <S.CountryName>{state.countryName}</S.CountryName>
          <S.ClosestHour>{state.location.localtime}</S.ClosestHour>
          <S.FlexRowDiv>
            <S.Degrees>{state.nowTemp}</S.Degrees>
            <S.Degrees symbol={true}>°</S.Degrees>
          </S.FlexRowDiv>
          <S.Condition>{state.condition}</S.Condition>
          <S.Space height={5} />
          <S.SpaceRowDiv>
            <S.FlexColumnDiv>
              <S.HeadLines>precipitation</S.HeadLines>
              <S.HeadLines description={true}>
                {state.precipitation}
              </S.HeadLines>
            </S.FlexColumnDiv>
            <S.FlexColumnDiv>
              <S.HeadLines>humidity</S.HeadLines>
              <S.HeadLines description={true}>{state.humidity}</S.HeadLines>
            </S.FlexColumnDiv>
            <S.FlexColumnDiv>
              <S.HeadLines>wind</S.HeadLines>
              <S.HeadLines description={true}>{state.wind}</S.HeadLines>
            </S.FlexColumnDiv>
          </S.SpaceRowDiv>
          <S.Space height={3} />
          <S.SpaceRowDiv>
            {filteredFiveHours.map((hourTime, i) => {
              return (
                <S.FlexColumnDiv key={i}>
                  <S.HoursTemp>
                    {hourTime.time.substring(
                      hourTime.time.length - 5,
                      hourTime.time.length
                    )}
                  </S.HoursTemp>
                  <S.HoursTemp
                    description={true}
                  >{`${hourTime.temp_c}°`}</S.HoursTemp>
                </S.FlexColumnDiv>
              );
            })}
          </S.SpaceRowDiv>
        </>
      )}
    </S.ForcastCard>
  );
};
