import * as S from "./style";

export default ({ location }) => {
  return (
    <>
      {location.country && (
        <S.TimeZoneWrapper>
          <S.TimeZoneH5>{`latitude ${location.lat} longitude ${location.lon}`}</S.TimeZoneH5>
          <S.TimeZoneH5>{`accurate to ${location.localtime}`}</S.TimeZoneH5>
        </S.TimeZoneWrapper>
      )}
    </>
  );
};
